
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Download, Eye, Loader2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ResumeScoreCard } from "@/components/ResumeScoreCard";

export function ResumeHistory() {
  const [resumeHistory, setResumeHistory] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedResume, setSelectedResume] = useState<any>(null);
  const [analysisData, setAnalysisData] = useState<any>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchResumeHistory();
  }, []);

  const fetchResumeHistory = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error("User not authenticated");
      }

      const { data, error } = await supabase
        .from("resume_optimizations")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        throw error;
      }

      setResumeHistory(data || []);
    } catch (error) {
      console.error("Error fetching resume history:", error);
      toast({
        title: "Error",
        description: "Could not load resume history",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAnalysisData = async (path: string) => {
    try {
      const { data, error } = await supabase.storage
        .from("resumes")
        .download(path);

      if (error) {
        throw error;
      }

      // Safely parse JSON to ensure we're getting clean data
      const text = await data.text();
      try {
        return JSON.parse(text);
      } catch (parseError) {
        console.error("Error parsing analysis data:", parseError);
        throw new Error("Unable to parse analysis data");
      }
    } catch (error) {
      console.error("Error fetching analysis data:", error);
      throw error;
    }
  };

  const cleanTextContent = (text: string) => {
    // Remove any non-printable characters and ensure text is clean
    try {
      // Try to parse if it's JSON
      const parsed = JSON.parse(text);
      // If it's JSON, stringify it with proper formatting
      return JSON.stringify(parsed, null, 2);
    } catch (e) {
      // If it's not JSON, just clean the text
      return text
        .replace(/[^\x20-\x7E\r\n\t]/g, '') // Remove non-printable characters
        .trim();
    }
  };

  const handleViewResume = async (resume: any) => {
    try {
      setSelectedResume(resume);
      setIsLoading(true);
      
      // Fetch and set the analysis data
      const analysis = await fetchAnalysisData(resume.optimized_resume_path);
      setAnalysisData(analysis);
      
      setIsViewModalOpen(true);
    } catch (error) {
      console.error("Error viewing resume:", error);
      toast({
        title: "Error",
        description: "Could not load resume content",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadResume = async (resume: any) => {
    try {
      setIsLoading(true);

      // Download the resume content
      const { data, error } = await supabase.storage
        .from("resumes")
        .download(resume.original_resume_path);

      if (error) {
        throw error;
      }

      // Create a download link for the file
      const url = URL.createObjectURL(data);
      const link = document.createElement("a");
      link.href = url;
      
      // Extract file extension from path
      const fileExtension = resume.original_resume_path.split('.').pop();
      
      link.download = `resume-${new Date(resume.created_at).toISOString().slice(0, 10)}.${fileExtension}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast({
        title: "Download started",
        description: "Your resume is being downloaded",
      });
    } catch (error) {
      console.error("Error downloading resume:", error);
      toast({
        title: "Error",
        description: "Could not download resume",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadAnalysis = async (resume: any) => {
    try {
      setIsLoading(true);

      // Get the analysis data
      const analysis = await fetchAnalysisData(resume.optimized_resume_path);
      
      // Format the analysis data as clean text
      const analysisText = JSON.stringify(analysis, null, 2);

      // Create a download link for the analysis
      const blob = new Blob([analysisText], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `analysis-${new Date(resume.created_at).toISOString().slice(0, 10)}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast({
        title: "Download started",
        description: "Analysis results are being downloaded",
      });
    } catch (error) {
      console.error("Error downloading analysis:", error);
      toast({
        title: "Error",
        description: "Could not download analysis results",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading && resumeHistory.length === 0) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (resumeHistory.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No resume history found</p>
        <p className="mt-2">
          Optimize your first resume to see it appear here
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {resumeHistory.map((resume) => (
              <TableRow key={resume.id}>
                <TableCell>
                  {new Date(resume.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <span className="font-medium">{resume.optimization_score}%</span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleViewResume(resume)}
                      disabled={isLoading}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownloadAnalysis(resume)}
                      disabled={isLoading}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Analysis
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownloadResume(resume)}
                      disabled={isLoading}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Resume
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl">
              Resume Analysis - {selectedResume && new Date(selectedResume.created_at).toLocaleDateString()}
            </DialogTitle>
          </DialogHeader>

          {/* Score Card */}
          {analysisData && (
            <ResumeScoreCard 
              score={analysisData.atsScore || analysisData.optimizationScore}
              metrics={{
                keywordMatch: analysisData.metrics?.keywordMatch || 0,
                formatCompliance: analysisData.metrics?.formatCompliance || 0,
                experienceMatch: analysisData.metrics?.experienceMatch || 0,
                skillsRelevance: analysisData.metrics?.skillsRelevance || 0,
              }}
              improvementSuggestions={analysisData.improvementSuggestions || []}
            />
          )}
          
          {/* Missing Keywords Section */}
          {analysisData && analysisData.missingKeywords && (
            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-2">Missing Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {analysisData.missingKeywords.map((keyword: string, idx: number) => (
                  <span key={idx} className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Summary Section */}
          {analysisData && analysisData.summaryOfChanges && (
            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-2">Summary of Recommendations</h3>
              <p className="text-gray-700 text-sm">{analysisData.summaryOfChanges}</p>
            </div>
          )}

          <div className="flex justify-end space-x-2 mt-6">
            <Button
              variant="outline"
              onClick={() => setIsViewModalOpen(false)}
            >
              Close
            </Button>
            {selectedResume && (
              <div className="space-x-2">
                <Button 
                  onClick={() => handleDownloadAnalysis(selectedResume)}
                  variant="outline"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Analysis
                </Button>
                <Button 
                  onClick={() => handleDownloadResume(selectedResume)}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
