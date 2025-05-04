
import { useState, useEffect } from "react";
import { ResumeUploader } from "@/components/ResumeUploader";
import { ResumeHistory } from "@/components/ResumeHistory";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

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
        <div className="animate-pulse space-y-2 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-blue-200"></div>
          <div className="h-4 w-24 bg-blue-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-1">
        <div className="container px-4 md:px-6 py-12 max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Resume Optimizer</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailor your resume to specific job descriptions and increase your chances of getting an interview.
            </p>
          </div>
          
          <div className="mb-8">
            <Tabs defaultValue="create" className="w-full">
              <div className="bg-gray-100 rounded-t-xl p-1">
                <TabsList className="w-full grid grid-cols-2 bg-transparent">
                  <TabsTrigger 
                    value="create" 
                    className="py-3 text-base font-medium data-[state=active]:bg-white data-[state=active]:shadow-none rounded-md flex items-center justify-center"
                  >
                    Create New
                  </TabsTrigger>
                  <TabsTrigger 
                    value="history" 
                    className="py-3 text-base font-medium data-[state=active]:bg-white data-[state=active]:shadow-none rounded-md flex items-center justify-center"
                  >
                    Resume History
                  </TabsTrigger>
                </TabsList>
              </div>
              <div className="bg-white rounded-b-xl shadow-sm p-6">
                <TabsContent value="create" className="mt-0 pt-2">
                  <ResumeUploader />
                </TabsContent>
                <TabsContent value="history" className="mt-0 pt-2">
                  <ResumeHistory />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
