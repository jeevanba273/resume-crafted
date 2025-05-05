import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.1";

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
    
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      console.error("Missing OPENAI_API_KEY environment variable");
      throw new Error("Server configuration error: Missing OpenAI API key");
    }
    
    const supabaseUrl = 'https://apaiwmvjugoauwdnemvv.supabase.co';
    const supabaseServiceKey = Deno.env.get('SERVICE_ROLE_KEY') || '';
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
    
    // Extract text from the resume
    let resumeText = "";
    
    try {
      // Simplified extraction approach using text conversion
      if (fileType === 'application/pdf' || 
          fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || 
          fileType === 'application/msword') {
        
        // Try to extract text from the file
        try {
          // Convert file to text as best as possible
          resumeText = await fileData.text();
        } catch (textError) {
          console.error("Error extracting text directly:", textError);
          // Fall back to binary to string conversion
          const buffer = await fileData.arrayBuffer();
          const bytes = new Uint8Array(buffer);
          resumeText = new TextDecoder().decode(bytes);
        }
        
        // Clean up the extracted text
        resumeText = resumeText
          .replace(/[\x00-\x1F\x7F-\x9F]/g, ' ')  // Remove control characters
          .replace(/[^\x20-\x7E\u00A0-\u00FF]/g, ' ')  // Keep only basic Latin and Latin-1 Supplement chars
          .replace(/\s+/g, ' ');  // Normalize whitespace
        
        if (resumeText.trim().length < 100) {
          console.log("Extracted text is very short, may be incomplete");
          throw new Error("Limited text could be extracted from this document format. For better results, please upload a plain text version.");
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
    console.log("Calling OpenAI API to analyze the resume");
    
    // Call OpenAI API to analyze the resume against the job description
    let openAiResponse;
    try {
      console.log("Preparing request to OpenAI API");
      
      const openAiBody = JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: `You are an ATS (Applicant Tracking System) expert that helps job seekers improve their existing resumes. 
            Analyze the resume against the job description and provide:
            1. An overall ATS compatibility score (0-100)
            2. A breakdown of metrics including:
               - keywordMatch (0-100): How well keywords from the job listing match the resume
               - formatCompliance (0-100): How well the resume follows standard formats expected by ATS
               - experienceMatch (0-100): How relevant the candidate's experience is to the job
               - skillsRelevance (0-100): How well the candidate's skills align with what's needed
            3. A list of missing keywords from the job description that should be added to the resume
            4. Specific suggestions for improvements (what to add, change, or remove)
            5. A short summary of recommended changes
            
            Format your response as JSON with the following structure:
            {
              "atsScore": number,
              "metrics": {
                "keywordMatch": number,
                "formatCompliance": number,
                "experienceMatch": number,
                "skillsRelevance": number
              },
              "missingKeywords": ["keyword1", "keyword2", ...],
              "improvementSuggestions": ["suggestion1", "suggestion2", ...],
              "summaryOfChanges": "concise paragraph with recommendations"
            }`
          },
          {
            role: 'user', 
            content: `Here is my resume:\n\n${resumeText}\n\nHere is the job description I'm applying for:\n\n${jobDescription}\n\nProvide analysis and specific improvements.`
          }
        ],
        temperature: 0.3,
        max_tokens: 2000,
        response_format: { type: "json_object" }
      });
      
      console.log("Sending request to OpenAI API");
      openAiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openAIApiKey}`,
          'Content-Type': 'application/json',
        },
        body: openAiBody,
      });
      
      console.log("OpenAI API response status:", openAiResponse.status);
    } catch (e) {
      console.error("Error calling OpenAI API:", e);
      throw new Error(`Failed to call OpenAI API: ${e.message}`);
    }

    if (!openAiResponse.ok) {
      const errorText = await openAiResponse.text();
      console.error(`OpenAI API returned an error: ${openAiResponse.status}`, errorText);
      
      // Try to parse the error response as JSON to get more details
      let errorDetails = errorText;
      try {
        const errorJson = JSON.parse(errorText);
        errorDetails = errorJson.error?.message || errorText;
      } catch (e) {
        // Keep errorDetails as the raw text if parsing fails
      }
      
      throw new Error(`OpenAI API error (${openAiResponse.status}): ${errorDetails}`);
    }

    // Parse the OpenAI response
    let openAiData;
    try {
      openAiData = await openAiResponse.json();
      console.log("Received response from OpenAI");
    } catch (e) {
      console.error("Error parsing OpenAI response JSON:", e);
      throw new Error("Invalid JSON in OpenAI response");
    }
    
    if (!openAiData.choices || !openAiData.choices[0]) {
      console.error("Unexpected OpenAI response format:", openAiData);
      throw new Error("Failed to get analysis from OpenAI: missing choices in response");
    }
    
    let analysisResult;
    try {
      analysisResult = JSON.parse(openAiData.choices[0].message.content);
      console.log("Analysis received from OpenAI:", analysisResult);
    } catch (e) {
      console.error("Error parsing analysis from OpenAI response:", e);
      console.error("Raw content:", openAiData.choices[0].message.content);
      throw new Error("Invalid analysis format from OpenAI");
    }
    
    // Generate a filename for the analysis
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const analysisFileName = `${userId}/analysis-${timestamp}.json`;
    
    console.log("Saving analysis to storage:", analysisFileName);
    
    // Save the analysis
    const { error: uploadError } = await supabase
      .storage
      .from('resumes')
      .upload(analysisFileName, new Blob([JSON.stringify(analysisResult)], { type: 'application/json' }));
    
    if (uploadError) {
      console.error("Error uploading analysis:", uploadError);
      throw new Error(`Error uploading analysis: ${uploadError.message}`);
    }
    
    // Get the URL for the analysis file
    const { data: { publicUrl: analysisUrl } } = supabase
      .storage
      .from('resumes')
      .getPublicUrl(analysisFileName);
    
    console.log("Analysis saved, URL:", analysisUrl);
    
    // Create an entry in the resume_optimizations table
    console.log("Saving optimization record to database");
    const { error: dbError } = await supabase
      .from('resume_optimizations')
      .insert({
        user_id: userId,
        original_resume_path: originalResumeUrl,
        optimized_resume_path: analysisFileName,
        job_description: jobDescription,
        optimization_score: analysisResult.atsScore
      });
    
    if (dbError) {
      console.error("Error saving to database:", dbError);
      throw new Error(`Error saving to database: ${dbError.message}`);
    }

    console.log("Resume analysis complete, returning results");
    
    // Return the optimization results
    return new Response(
      JSON.stringify({
        success: true,
        optimizationScore: analysisResult.atsScore,
        analysisUrl,
        metrics: analysisResult.metrics,
        missingKeywords: analysisResult.missingKeywords,
        improvementSuggestions: analysisResult.improvementSuggestions,
        summaryOfChanges: analysisResult.summaryOfChanges
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
