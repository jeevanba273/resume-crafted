
import { useState, useRef, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Upload, FileText, Check, AlertTriangle, Upload as UploadIcon, FileUp } from "lucide-react";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { ResumeScoreCard } from "./ResumeScoreCard";
import { ThemeContext } from "@/App";

interface ResumeUploaderProps {
  onOptimizationComplete?: (data: any) => void;
}

interface OptimizationResult {
  optimizationScore: number;
  missingKeywords: string[];
  improvementSuggestions: string[];
  summaryOfChanges: string;
  metrics?: {
    keywordMatch: number;
    formatCompliance: number;
    experienceMatch: number;
    skillsRelevance: number;
  };
}

export function ResumeUploader({ onOptimizationComplete }: ResumeUploaderProps) {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [optimizationResult, setOptimizationResult] = useState<OptimizationResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { isDarkMode } = useContext(ThemeContext);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Check if file is PDF or Word document
      if (
        file.type === "application/pdf" ||
        file.type === "application/msword" ||
        file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        setResumeFile(file);
        setErrorMessage(null);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or Word document",
          variant: "destructive",
        });
      }
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    
    if (!resumeFile) {
      toast({
        title: "No file selected",
        description: "Please select a resume file to upload",
        variant: "destructive",
      });
      return;
    }
    
    if (!jobDescription.trim()) {
      toast({
        title: "Missing job description",
        description: "Please enter the job description",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Get current user
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      
      if (userError) {
        throw new Error(`Authentication error: ${userError.message}`);
      }
      
      if (!user) {
        throw new Error("User not authenticated");
      }

      // Create a unique filename
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const fileExt = resumeFile.name.split('.').pop();
      const filePath = `${user.id}/original-${timestamp}.${fileExt}`;

      console.log("Uploading resume to storage:", filePath);
      
      // Upload the file to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(filePath, resumeFile);

      if (uploadError) {
        throw new Error(`Error uploading file: ${uploadError.message}`);
      }

      console.log("Resume uploaded successfully, calling optimize-resume function");
      
      // Call the optimize-resume function with improved error handling
      try {
        const { data: optimizationData, error: functionError } = await supabase.functions
          .invoke('optimize-resume', {
            body: {
              originalResumeUrl: filePath,
              jobDescription,
              userId: user.id,
              fileType: resumeFile.type
            },
          });

        if (functionError) {
          console.error("Function error:", functionError);
          throw new Error(`Error calling optimize-resume function: ${functionError.message}`);
        }

        if (!optimizationData || !optimizationData.success) {
          const errorMsg = optimizationData?.error || "Unknown error occurred during optimization";
          console.error("Optimization failed:", errorMsg);
          throw new Error(`Resume optimization failed: ${errorMsg}`);
        }

        console.log("Resume optimization completed successfully:", optimizationData);
        setOptimizationResult(optimizationData);
        
        const scoreVariant = optimizationData.optimizationScore >= 80 ? "success" : 
                            optimizationData.optimizationScore >= 60 ? "default" : "destructive";
        
        toast({
          title: "Resume analysis complete",
          description: `ATS score: ${optimizationData.optimizationScore}%`,
          variant: scoreVariant === "success" ? "success" : "default", 
        });
        
        if (onOptimizationComplete) {
          onOptimizationComplete(optimizationData);
        }
      } catch (functionsError: any) {
        console.error("Error calling edge function:", functionsError);
        // Check if this is a CORS or network error
        if (functionsError.message && functionsError.message.includes("Failed to send")) {
          throw new Error(`Network error: Failed to connect to the optimization service. Please try again later.`);
        } else {
          throw functionsError;
        }
      }
    } catch (error: any) {
      console.error("Error in resume upload process:", error);
      setErrorMessage(error.message);
      toast({
        title: "Error analyzing resume",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600 dark:text-green-400";
    if (score >= 60) return "text-amber-600 dark:text-amber-400"; 
    return "text-red-600 dark:text-red-400";
  };

  return (
    <Card className={`max-w-4xl mx-auto overflow-hidden transition-all
      ${isDarkMode ? 
        'bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-sm border-gray-700/60' : 
        'bg-white/80 backdrop-blur-md border-2 border-gray-100/40 shadow-xl'}`}>
      <CardHeader className={`rounded-t-xl space-y-2 pb-6 border-b 
        ${isDarkMode ? 
          'bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border-gray-700/50' : 
          'bg-gradient-to-r from-blue-50 to-indigo-50 border-gray-200/50'}`}>
        <CardTitle className={`text-2xl font-bold bg-clip-text 
          ${isDarkMode ? 
            'text-transparent bg-gradient-to-r from-blue-300 to-indigo-300' : 
            'text-transparent bg-gradient-to-r from-blue-600 to-indigo-600'}`}>
          Analyze Your Resume
        </CardTitle>
        <CardDescription className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl`}>
          Upload your resume and paste the job description to get tailored suggestions for improving your ATS score
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-6 space-y-8">
        {errorMessage && (
          <Alert variant="destructive" className="mb-4 animate-fade-in border-2 shadow-md 
            border-red-300 dark:border-red-700/70 bg-red-50/90 dark:bg-red-950/50">
            <AlertTitle className="font-semibold flex items-center gap-2">
              <div className="p-1 rounded-full bg-red-200 dark:bg-red-800/70">
                <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-300" />
              </div>
              Error analyzing resume
            </AlertTitle>
            <AlertDescription className="ml-7">{errorMessage}</AlertDescription>
          </Alert>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Upload Resume (PDF or Word)
            </label>
            
            <div className="flex flex-col space-y-4">
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={handleFileChange}
                className="hidden"
              />
              
              <Button 
                type="button"
                onClick={triggerFileInput}
                variant="outline"
                className={`w-full flex flex-col items-center justify-center gap-3 h-32 border-2 border-dashed rounded-xl
                ${isDarkMode ? 
                  'bg-gray-800/40 border-gray-600 hover:border-blue-500 hover:bg-blue-900/20' : 
                  'bg-gray-50/70 border-gray-300 hover:border-blue-500 hover:bg-blue-50'} 
                transition-all duration-300 group`}
              >
                <div className={`p-3 rounded-full ${isDarkMode ? 
                  'bg-blue-900/40 group-hover:bg-blue-800/60' : 
                  'bg-blue-100 group-hover:bg-blue-200'} transition-colors`}>
                  <FileUp className={`h-7 w-7 ${isDarkMode ? 
                    'text-blue-400' : 
                    'text-blue-500'} transition-transform group-hover:scale-110`} />
                </div>
                <div className="text-center">
                  <p className="font-medium">Click to browse files</p>
                  <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Supports PDF or Word documents
                  </p>
                </div>
              </Button>

              {resumeFile && (
                <div className={`flex items-center gap-3 p-4 rounded-lg border animate-fade-in
                ${isDarkMode ? 
                  'bg-blue-900/20 border-blue-700/50' : 
                  'bg-blue-50 border-blue-200'}`}>
                  <div className={`p-2 rounded-full ${isDarkMode ? 'bg-blue-900/50' : 'bg-blue-200'}`}>
                    <FileText className={`h-5 w-5 ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium truncate ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                      {resumeFile.name}
                    </p>
                    <p className={`text-xs ${isDarkMode ? 'text-blue-400/70' : 'text-blue-500'}`}>
                      {(resumeFile.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="sm"
                    className={`rounded-full p-1 h-8 w-8 ${isDarkMode ? 
                      'hover:bg-red-900/30 text-red-400' : 
                      'hover:bg-red-100 text-red-500'}`}
                    onClick={() => setResumeFile(null)}
                  >
                    <span className="sr-only">Remove</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="jobDescription" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Job Description
            </label>
            <Textarea
              id="jobDescription"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here to get tailored recommendations..."
              className={`min-h-[180px] resize-y ${isDarkMode ? 
                'bg-gray-800/80 border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500/20' : 
                'bg-white/80 border-gray-300 focus:border-blue-400 focus:ring focus:ring-blue-100'}`}
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading || !resumeFile || !jobDescription.trim()}
            className={`w-full py-6 font-medium rounded-lg transition-all shadow-lg 
            ${!isLoading ? 'animate-pulse-soft' : ''} 
            ${isDarkMode ? 
              'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-indigo-900/30' : 
              'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-indigo-600/20'}`}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Analyzing Your Resume...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-5 w-5" />
                Analyze Resume
              </>
            )}
          </Button>
        </form>

        {optimizationResult && (
          <div className="mt-10 space-y-8 animate-fade-in divide-y divide-gray-200 dark:divide-gray-700/50">
            <div className="flex items-center justify-between pb-4">
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Resume ATS Analysis Results
              </h3>
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                optimizationResult.optimizationScore >= 80 
                  ? (isDarkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-700') 
                  : optimizationResult.optimizationScore >= 60
                    ? (isDarkMode ? 'bg-amber-900/30 text-amber-300' : 'bg-amber-100 text-amber-700')
                    : (isDarkMode ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-700')
              }`}>
                <span className="text-sm font-medium">ATS Score:</span>
                <span className="text-xl font-bold">{optimizationResult.optimizationScore}%</span>
              </div>
            </div>
            
            <div className="space-y-6 pt-6">
              <div>
                <h4 className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-3 flex items-center gap-2`}>
                  <span className={`p-1 rounded-full ${isDarkMode ? 'bg-amber-900/30' : 'bg-amber-100'}`}>
                    <AlertTriangle className={`h-3.5 w-3.5 ${isDarkMode ? 'text-amber-300' : 'text-amber-600'}`} />
                  </span>
                  Missing Keywords
                </h4>
                <div className="flex flex-wrap gap-2">
                  {optimizationResult.missingKeywords.length > 0 ? (
                    optimizationResult.missingKeywords.map((keyword, idx) => (
                      <Badge 
                        key={idx} 
                        variant={isDarkMode ? "outline" : "secondary"} 
                        className={isDarkMode ? 
                          "bg-amber-900/30 text-amber-300 hover:bg-amber-900/50 border-amber-800/50" : 
                          "bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-200"}
                      >
                        {keyword}
                      </Badge>
                    ))
                  ) : (
                    <p className={`text-sm italic ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Great job! No critical keywords missing.
                    </p>
                  )}
                </div>
              </div>
              
              <div className={`p-5 rounded-xl border ${isDarkMode ? 
                'bg-gray-800/50 border-gray-700/70' : 
                'bg-gray-50/80 border-gray-200'}`}
              >
                <h4 className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-3 flex items-center gap-2`}>
                  <span className={`p-1 rounded-full ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                      className={`h-3.5 w-3.5 ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Suggested Improvements
                </h4>
                <ul className="space-y-3">
                  {optimizationResult.improvementSuggestions.map((suggestion, idx) => (
                    <li key={idx} className={`flex items-start gap-3 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <div className={`mt-1 p-1 rounded-full ${isDarkMode ? 'bg-amber-900/30' : 'bg-amber-100'} flex-shrink-0`}>
                        <AlertTriangle className={`h-3 w-3 ${isDarkMode ? 'text-amber-300' : 'text-amber-600'}`} />
                      </div>
                      <span>{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={`p-5 rounded-xl border ${isDarkMode ? 
                'bg-blue-900/20 border-blue-900/50' : 
                'bg-blue-50/80 border-blue-200'}`}
              >
                <h4 className={`text-sm font-medium ${isDarkMode ? 'text-blue-300' : 'text-blue-700'} mb-3 flex items-center gap-2`}>
                  <span className={`p-1 rounded-full ${isDarkMode ? 'bg-blue-900/50' : 'bg-blue-200'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                      className={`h-3.5 w-3.5 ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                    </svg>
                  </span>
                  Summary of Changes
                </h4>
                <p className={`text-sm ${isDarkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                  {optimizationResult.summaryOfChanges}
                </p>
              </div>

              {/* Resume Score Card */}
              <ResumeScoreCard 
                score={optimizationResult.optimizationScore}
                metrics={optimizationResult.metrics || {
                  keywordMatch: Math.min(optimizationResult.optimizationScore + 10, 100),
                  formatCompliance: Math.min(optimizationResult.optimizationScore + 5, 100),
                  experienceMatch: Math.max(optimizationResult.optimizationScore - 5, 0),
                  skillsRelevance: optimizationResult.optimizationScore
                }}
                improvementSuggestions={optimizationResult.improvementSuggestions}
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
