
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
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function ResumeHistory() {
  const [resumeHistory, setResumeHistory] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedResume, setSelectedResume] = useState<any>(null);
  const [resumeContent, setResumeContent] = useState<string>("");
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

  const handleViewResume = async (resume: any) => {
    try {
      setSelectedResume(resume);
      setIsLoading(true);

      // Download the resume content
      const { data, error } = await supabase.storage
        .from("resumes")
        .download(resume.optimized_resume_path);

      if (error) {
        throw error;
      }

      // Convert the blob to text
      const text = await data.text();
      setResumeContent(text);
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
        .download(resume.optimized_resume_path);

      if (error) {
        throw error;
      }

      // Create a download link and trigger download
      const blob = new Blob([data], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `optimized-resume-${new Date().toISOString().slice(0, 10)}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast({
        title: "Download started",
        description: "Your optimized resume is being downloaded",
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
                      onClick={() => handleDownloadResume(resume)}
                      disabled={isLoading}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Optimized Resume</DialogTitle>
            <DialogDescription>
              Created on {selectedResume && new Date(selectedResume.created_at).toLocaleString()}
            </DialogDescription>
          </DialogHeader>
          <div className="border rounded-md p-4 whitespace-pre-wrap">
            {resumeContent}
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            <Button
              variant="outline"
              onClick={() => setIsViewModalOpen(false)}
            >
              Close
            </Button>
            {selectedResume && (
              <Button onClick={() => handleDownloadResume(selectedResume)}>
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
