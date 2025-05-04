
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.1";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
const supabaseUrl = 'https://apaiwmvjugoauwdnemvv.supabase.co';
const supabaseServiceKey = Deno.env.get('SERVICE_ROLE_KEY') || '';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests - important for browser requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { 
      headers: corsHeaders,
      status: 204 // Proper status code for successful preflight
    });
  }

  try {
    console.log("Edge function called: optimize-resume");
    
    if (!openAIApiKey) {
      console.error("Missing OPENAI_API_KEY environment variable");
      throw new Error("Server configuration error: Missing OpenAI API key");
    }
    
    if (!supabaseServiceKey) {
      console.error("Missing SERVICE_ROLE_KEY environment variable");
      throw new Error("Server configuration error: Missing Supabase service key");
    }

    // Parse the request body
    let requestData;
    try {
      requestData = await req.json();
      console.log("Request received:", JSON.stringify(requestData));
    } catch (e) {
      console.error("Error parsing request JSON:", e);
      throw new Error("Invalid JSON in request body");
    }

    const { originalResumeUrl, jobDescription, userId, fileType } = requestData;
    
    if (!originalResumeUrl || !jobDescription || !userId || !fileType) {
      console.error("Missing required fields:", { originalResumeUrl, jobDescription, userId, fileType });
      throw new Error("Missing required fields: originalResumeUrl, jobDescription, userId, or fileType");
    }
    
    console.log("Processing resume for user:", userId);
    console.log("Original resume URL:", originalResumeUrl);
    
    // Create a Supabase client with service role key (bypasses RLS)
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Download the original resume file
    console.log("Attempting to download file from storage");
    const { data: fileData, error: downloadError } = await supabase
      .storage
      .from('resumes')
      .download(originalResumeUrl);
    
    if (downloadError || !fileData) {
      console.error("Error downloading resume:", downloadError);
      throw new Error(`Error downloading resume: ${downloadError?.message || 'File not found'}`);
    }
    
    console.log("File downloaded successfully, extracting text");
    
    // Extract text from the resume (simplified approach)
    let resumeText = "";
    
    try {
      // Simplified extraction approach using text conversion
      if (fileType === 'application/pdf' || 
          fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || 
          fileType === 'application/msword') {
        
        // Try to extract text from the file
        let extractedText = "";
        
        try {
          // Convert file to text as best as possible
          extractedText = await fileData.text();
        } catch (textError) {
          console.error("Error extracting text directly:", textError);
          // Fall back to binary to string conversion
          const buffer = await fileData.arrayBuffer();
          const bytes = new Uint8Array(buffer);
          extractedText = new TextDecoder().decode(bytes);
        }
        
        // Clean up the extracted text
        resumeText = extractedText
          .replace(/[\x00-\x1F\x7F-\x9F]/g, ' ')  // Remove control characters
          .replace(/[^\x20-\x7E\u00A0-\u00FF]/g, ' ')  // Keep only basic Latin and Latin-1 Supplement chars
          .replace(/\s+/g, ' ');  // Normalize whitespace
        
        if (resumeText.trim().length < 100) {
          console.log("Extracted text is very short, may be incomplete");
          resumeText = "Note: Limited text could be extracted from this document format. " +
                       "For better results, please upload a plain text version. " +
                       "Here's what we could extract:\n\n" + resumeText;
        }
      } else {
        console.error("Unsupported file type:", fileType);
        throw new Error("Unsupported file type");
      }
    } catch (e) {
      console.error("Error processing file:", e);
      throw new Error(`Failed to process document: ${e.message}`);
    }

    if (!resumeText || resumeText.trim().length === 0) {
      console.error("Failed to extract text from document");
      throw new Error("Could not extract any text from the uploaded document");
    }

    console.log("Extracted resume text length:", resumeText.length);
    console.log("Calling OpenAI API to optimize the resume");
    
    // Call OpenAI API to optimize the resume
    let openAiResponse;
    try {
      openAiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
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
    } catch (e) {
      console.error("Error calling OpenAI API:", e);
      throw new Error(`Failed to call OpenAI API: ${e.message}`);
    }

    if (!openAiResponse.ok) {
      const errorData = await openAiResponse.text();
      console.error("OpenAI API returned an error:", openAiResponse.status, errorData);
      throw new Error(`OpenAI API error: ${openAiResponse.status} ${errorData}`);
    }

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
    console.log("Calculated optimization score:", optimizationScore);
    
    // Generate a filename for the optimized resume
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const optimizedResumeFileName = `${userId}/optimized-${timestamp}.txt`;
    
    console.log("Saving optimized resume to storage:", optimizedResumeFileName);
    
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
    
    console.log("Optimized resume saved, URL:", optimizedResumeUrl);
    
    // Create an entry in the resume_optimizations table
    console.log("Saving optimization record to database");
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

    console.log("Resume optimization complete, returning results");
    
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
