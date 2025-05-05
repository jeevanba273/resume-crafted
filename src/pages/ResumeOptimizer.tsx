
import { useState, useEffect } from "react";
import { ResumeUploader } from "@/components/ResumeUploader";
import { ResumeHistory } from "@/components/ResumeHistory";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { ThemeContext } from "@/App";
import { useContext } from "react";

export default function ResumeOptimizer() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ThemeContext);

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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900">
        <div className="animate-pulse space-y-4 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 animate-spin-slow"></div>
          <div className="h-5 w-32 bg-gradient-to-r from-blue-300 to-indigo-400 rounded-md animate-shimmer"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-gradient-to-br from-blue-50 to-indigo-50'}`}>
      <Navbar />
      
      {/* Decorative elements */}
      <div className="absolute top-16 left-0 w-full h-64 bg-gradient-to-b from-primary/10 to-transparent z-0 pointer-events-none"></div>
      <div className="absolute top-24 left-4 w-64 h-64 rounded-full bg-purple-400/10 blur-3xl pointer-events-none"></div>
      <div className="absolute top-48 right-8 w-72 h-72 rounded-full bg-blue-400/10 blur-3xl pointer-events-none"></div>
      
      <div className="flex-1 relative z-10">
        <div className="container px-4 md:px-6 py-12 max-w-5xl mx-auto">
          <div className="mb-10 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-300 dark:to-indigo-400">Resume Optimizer</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Tailor your resume to specific job descriptions and increase your chances of getting an interview.
            </p>
          </div>
          
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 rounded-xl blur-xl"></div>
            <Tabs defaultValue="create" className="w-full relative">
              {/* Fixed tabs menu that stays consistent */}
              <div className={`bg-opacity-80 backdrop-blur-sm rounded-t-xl p-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <TabsList className="w-full grid grid-cols-2 bg-transparent p-1">
                  <TabsTrigger 
                    value="create" 
                    className={`py-3 text-base font-medium rounded-md flex items-center justify-center transition-all
                    data-[state=active]:bg-gradient-to-r ${isDarkMode ? 
                    'data-[state=active]:from-blue-700 data-[state=active]:to-indigo-700 data-[state=active]:text-white' : 
                    'data-[state=active]:from-blue-100 data-[state=active]:to-indigo-100 data-[state=active]:text-blue-800'}`}
                  >
                    Create New
                  </TabsTrigger>
                  <TabsTrigger 
                    value="history" 
                    className={`py-3 text-base font-medium rounded-md flex items-center justify-center transition-all
                    data-[state=active]:bg-gradient-to-r ${isDarkMode ? 
                    'data-[state=active]:from-blue-700 data-[state=active]:to-indigo-700 data-[state=active]:text-white' : 
                    'data-[state=active]:from-blue-100 data-[state=active]:to-indigo-100 data-[state=active]:text-blue-800'}`}
                  >
                    Resume History
                  </TabsTrigger>
                </TabsList>
              </div>
              
              {/* Content area that changes based on selected tab */}
              <div className={`${isDarkMode ? 'bg-gray-800/95' : 'bg-white/95'} backdrop-blur-sm rounded-b-xl shadow-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <TabsContent value="create" className="mt-0 p-6">
                  <ResumeUploader />
                </TabsContent>
                <TabsContent value="history" className="mt-0 p-6">
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
