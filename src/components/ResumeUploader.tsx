
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";

interface ResumeUploaderProps {
  onOptimizationComplete?: (data: any) => void;
}

export function ResumeUploader({ onOptimizationComplete }: ResumeUploaderProps) {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [optimizationResult, setOptimizationResult] = useState<any>(null);
  const { toast } = useToast();

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
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or Word document",
          variant: "destructive",
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
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
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error("User not authenticated");
      }

      // Create a unique filename
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const fileExt = resumeFile.name.split('.').pop();
      const filePath = `${user.id}/original-${timestamp}.${fileExt}`;

      // Upload the file to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(filePath, resumeFile);

      if (uploadError) {
        throw new Error(`Error uploading file: ${uploadError.message}`);
      }

      // Call the optimize-resume function
      const { data: optimizationData, error: optimizationError } = await supabase.functions
        .invoke('optimize-resume', {
          body: {
            originalResumeUrl: filePath,
            jobDescription,
            userId: user.id,
            fileType: resumeFile.type
          },
        });

      if (optimizationError) {
        throw new Error(`Error optimizing resume: ${optimizationError.message}`);
      }

      setOptimizationResult(optimizationData);
      
      toast({
        title: "Resume optimized successfully!",
        description: `Optimization score: ${optimizationData.optimizationScore}%`,
      });
      
      if (onOptimizationComplete) {
        onOptimizationComplete(optimizationData);
      }
    } catch (error) {
      console.error("Error in resume upload process:", error);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Optimize Your Resume</CardTitle>
        <CardDescription>
          Upload your resume and enter the job description to get an AI-optimized version
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="resume" className="block text-sm font-medium">
              Upload Resume (PDF or Word)
            </label>
            <Input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleFileChange}
              className="cursor-pointer"
            />
            {resumeFile && (
              <p className="text-sm text-muted-foreground">
                Selected: {resumeFile.name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="jobDescription" className="block text-sm font-medium">
              Job Description
            </label>
            <Textarea
              id="jobDescription"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here..."
              className="min-h-[150px]"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading || !resumeFile || !jobDescription.trim()}
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Optimizing...
              </>
            ) : (
              "Optimize Resume"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
