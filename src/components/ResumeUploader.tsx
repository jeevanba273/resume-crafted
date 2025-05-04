
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Upload, FileText, Check, AlertTriangle } from "lucide-react";
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
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-amber-600"; 
    return "text-red-600";
  };

  // Generate random job ID for demo
  const getRandomJobId = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg border-2 border-gray-100">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
        <CardTitle className="text-2xl font-bold text-gray-800">Analyze Your Resume</CardTitle>
        <CardDescription className="text-gray-600">
          Upload your resume and job description to get ATS optimization feedback
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {errorMessage && (
          <Alert variant="destructive" className="mb-4">
            <AlertTitle>Error analyzing resume</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
              Upload Resume (PDF or Word)
            </label>
            
            <div className="flex flex-col space-y-3">
              <input
                ref={fileInputRef}
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={(e) => {
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
                }}
                className="hidden"
              />
              
              <Button 
                type="button"
                onClick={() => fileInputRef.current?.click()}
                variant="outline" 
                className="w-full flex items-center justify-center gap-2 h-20 border-2 border-dashed border-gray-300 hover:border-primary hover:bg-blue-50 transition-colors"
              >
                <Upload className="h-5 w-5" />
                <span>Click to browse files</span>
              </Button>

              {resumeFile && (
                <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-md border border-blue-100">
                  <FileText className="h-5 w-5 text-blue-500" />
                  <span className="text-sm text-blue-700 font-medium truncate">
                    {resumeFile.name}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700">
              Job Description
            </label>
            <Textarea
              id="jobDescription"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here..."
              className="min-h-[180px] border-gray-300 focus:border-blue-400 focus:ring focus:ring-blue-100"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading || !resumeFile || !jobDescription.trim()}
            className="w-full font-medium py-2 transition-all bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Analyzing Resume...
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
          <div className="mt-8 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-800">Resume ATS Analysis</h3>
              <div className="flex items-center">
                <span className="text-sm mr-2">ATS Score:</span>
                <span className={`text-xl font-bold ${getScoreColor(optimizationResult.optimizationScore)}`}>
                  {optimizationResult.optimizationScore}%
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Missing Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {optimizationResult.missingKeywords.map((keyword, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Suggested Improvements</h4>
                <ul className="space-y-2">
                  {optimizationResult.improvementSuggestions.map((suggestion, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-md border border-gray-100">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Summary of Changes</h4>
                <p className="text-sm text-gray-600">{optimizationResult.summaryOfChanges}</p>
              </div>

              {/* New Resume Score Card */}
              <ResumeScoreCard 
                score={optimizationResult.optimizationScore}
                metrics={optimizationResult.metrics || {
                  keywordMatch: Math.min(optimizationResult.optimizationScore + 10, 100),
                  formatCompliance: Math.min(optimizationResult.optimizationScore + 5, 100),
                  experienceMatch: Math.max(optimizationResult.optimizationScore - 5, 0),
                  skillsRelevance: optimizationResult.optimizationScore
                }}
                jobId={getRandomJobId()} // Generate random job ID for demo
                improvementSuggestions={optimizationResult.improvementSuggestions}
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
