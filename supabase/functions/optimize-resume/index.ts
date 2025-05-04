
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.1";
import { extract } from "https://deno.land/x/pdf@v0.1.1/mod.ts";
import { Mamoth } from "https://deno.land/x/mamoth@v0.0.7/mod.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
const supabaseUrl = 'https://apaiwmvjugoauwdnemvv.supabase.co';
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { originalResumeUrl, jobDescription, userId, fileType } = await req.json();
    console.log("Processing resume for user:", userId);
    console.log("Original resume URL:", originalResumeUrl);
    
    // Create a Supabase client with service role key (bypasses RLS)
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Download the original resume file
    const { data: fileData, error: downloadError } = await supabase
      .storage
      .from('resumes')
      .download(originalResumeUrl);
    
    if (downloadError || !fileData) {
      console.error("Error downloading resume:", downloadError);
      throw new Error(`Error downloading resume: ${downloadError?.message || 'File not found'}`);
    }
    
    // Extract text from the resume depending on file type
    let resumeText = "";
    if (fileType === 'application/pdf') {
      const pdfData = await fileData.arrayBuffer();
      const pdfText = await extract(new Uint8Array(pdfData));
      resumeText = pdfText.text;
    } else if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || 
               fileType === 'application/msword') {
      const docData = await fileData.arrayBuffer();
      const result = await Mamoth.extractRawText({ arrayBuffer: docData });
      resumeText = result.value;
    } else {
      throw new Error("Unsupported file type");
    }

    console.log("Extracted resume text length:", resumeText.length);
    
    // Call OpenAI API to optimize the resume
    const openAiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are a professional resume optimizer that helps job seekers tailor their resumes to specific job descriptions. Your task is to analyze the resume and job description, then provide an optimized version of the resume that better aligns with the job requirements. Maintain the same format but improve content.'
          },
          {
            role: 'user', 
            content: `Here is my resume:\n\n${resumeText}\n\nHere is the job description I'm applying for:\n\n${jobDescription}\n\nPlease optimize my resume for this job.`
          }
        ],
        temperature: 0.3,
        max_tokens: 4000,
      }),
    });

    const openAiData = await openAiResponse.json();
    
    if (!openAiData.choices || !openAiData.choices[0]) {
      console.error("Unexpected OpenAI response:", openAiData);
      throw new Error("Failed to get optimization from OpenAI");
    }
    
    const optimizedText = openAiData.choices[0].message.content;
    console.log("Optimized resume received from OpenAI");
    
    // Calculate a simple optimization score based on keyword matching
    const keywords = jobDescription
      .toLowerCase()
      .split(/\W+/)
      .filter(word => word.length > 3)
      .filter(word => !['and', 'the', 'that', 'this', 'with', 'from', 'have'].includes(word));
    
    const uniqueKeywords = [...new Set(keywords)];
    let keywordMatches = 0;
    
    uniqueKeywords.forEach(keyword => {
      if (optimizedText.toLowerCase().includes(keyword)) {
        keywordMatches++;
      }
    });
    
    const optimizationScore = Math.min(100, Math.round((keywordMatches / uniqueKeywords.length) * 100));
    
    // Generate a filename for the optimized resume
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const optimizedResumeFileName = `${userId}/optimized-${timestamp}.txt`;
    
    // Save the optimized resume
    const { error: uploadError } = await supabase
      .storage
      .from('resumes')
      .upload(optimizedResumeFileName, new Blob([optimizedText], { type: 'text/plain' }));
    
    if (uploadError) {
      console.error("Error uploading optimized resume:", uploadError);
      throw new Error(`Error uploading optimized resume: ${uploadError.message}`);
    }
    
    // Get the URL for the optimized resume
    const { data: { publicUrl: optimizedResumeUrl } } = supabase
      .storage
      .from('resumes')
      .getPublicUrl(optimizedResumeFileName);
    
    // Create an entry in the resume_optimizations table
    const { error: dbError } = await supabase
      .from('resume_optimizations')
      .insert({
        user_id: userId,
        original_resume_path: originalResumeUrl,
        optimized_resume_path: optimizedResumeFileName,
        job_description: jobDescription,
        optimization_score: optimizationScore
      });
    
    if (dbError) {
      console.error("Error saving to database:", dbError);
      throw new Error(`Error saving to database: ${dbError.message}`);
    }

    // Return the optimization results
    return new Response(
      JSON.stringify({
        success: true,
        optimizationScore,
        optimizedResumeUrl,
        optimizedText
      }), 
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in optimize-resume function:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
