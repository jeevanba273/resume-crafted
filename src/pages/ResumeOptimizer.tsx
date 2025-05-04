
import { useState } from "react";
import { ResumeUploader } from "@/components/ResumeUploader";
import { ResumeHistory } from "@/components/ResumeHistory";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";

export default function ResumeOptimizer() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      try {
        // Get current user
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    getUserData();

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
        setLoading(session === undefined);
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <div className="container px-4 md:px-6 py-10">
          <h1 className="text-3xl font-bold mb-6">Resume Optimizer</h1>
          <Tabs defaultValue="create" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="create">Create New</TabsTrigger>
              <TabsTrigger value="history">Resume History</TabsTrigger>
            </TabsList>
            <TabsContent value="create">
              <ResumeUploader />
            </TabsContent>
            <TabsContent value="history">
              <ResumeHistory />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
}
