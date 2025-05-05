
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
import { FileSearch, History, Sparkles } from "lucide-react";

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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 to-violet-900 dark:from-slate-950 dark:to-slate-900">
        <div className="animate-pulse space-y-4 flex flex-col items-center">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full bg-blue-400 dark:bg-blue-600 blur-lg opacity-70"></div>
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 animate-spin-slow flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-blue-950 dark:bg-slate-950 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-blue-300" />
              </div>
            </div>
          </div>
          <div className="h-5 w-40 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-md animate-shimmer"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 dark:from-blue-950 dark:via-indigo-950 dark:to-violet-950">
      <Navbar />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-[800px] bg-gradient-to-b from-blue-500/5 via-indigo-500/5 to-transparent dark:from-blue-500/10 dark:via-indigo-500/10 -z-10"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-300/20 to-indigo-300/20 dark:from-blue-600/20 dark:to-indigo-600/20 blur-3xl -z-10"></div>
      <div className="absolute top-60 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-purple-300/20 to-fuchsia-300/20 dark:from-purple-600/20 dark:to-fuchsia-600/20 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-gradient-to-br from-indigo-300/10 to-blue-300/10 dark:from-indigo-600/10 dark:to-blue-600/10 blur-3xl -z-10"></div>
      
      <div className="py-12 md:py-16 lg:py-20 px-4 flex-1 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-40 h-2 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rounded-full blur-sm"></div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 leading-tight">
              Resume Optimizer
            </h1>
            
            <div className="flex justify-center mb-6">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            </div>
            
            <p className={`text-lg md:text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Tailor your resume to specific job descriptions and increase your chances of getting past the ATS filters.
            </p>
          </div>
          
          <div className="relative mb-8 mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-2xl blur-xl -z-10"></div>
            
            <Tabs defaultValue="create" className="w-full">
              <div className={`flex justify-center mb-6`}>
                <TabsList className="grid grid-cols-2 w-[400px] h-14 p-1 rounded-xl ${isDarkMode ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm shadow-lg'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`">
                  <TabsTrigger 
                    value="create" 
                    className={`rounded-lg text-base font-medium flex items-center gap-2 transition-all
                    data-[state=active]:bg-gradient-to-r ${isDarkMode ? 
                    'data-[state=active]:from-blue-600 data-[state=active]:to-indigo-700 data-[state=active]:text-white' : 
                    'data-[state=active]:from-blue-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white'}`}
                  >
                    <FileSearch className="h-4 w-4" />
                    Create New
                  </TabsTrigger>
                  <TabsTrigger 
                    value="history" 
                    className={`rounded-lg text-base font-medium flex items-center gap-2 transition-all
                    data-[state=active]:bg-gradient-to-r ${isDarkMode ? 
                    'data-[state=active]:from-blue-600 data-[state=active]:to-indigo-700 data-[state=active]:text-white' : 
                    'data-[state=active]:from-blue-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white'}`}
                  >
                    <History className="h-4 w-4" />
                    Resume History
                  </TabsTrigger>
                </TabsList>
              </div>
              
              {/* Content area for tabs */}
              <div className="mt-4">
                <TabsContent value="create" className="mt-0">
                  <div className="animate-fade-in">
                    <ResumeUploader />
                  </div>
                </TabsContent>
                <TabsContent value="history" className="mt-0">
                  <div className="animate-fade-in">
                    <ResumeHistory />
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
          
          <div className={`mt-12 md:mt-16 lg:mt-20 p-6 md:p-8 rounded-2xl text-center max-w-4xl mx-auto ${isDarkMode ? 
            'bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm' : 
            'bg-white/60 border border-gray-200/50 shadow-lg backdrop-blur-sm'}`}
          >
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              Why Optimize Your Resume?
            </h2>
            
            <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              75% of job applications never reach human eyes due to ATS filters. Our optimizer helps your resume get through these filters and into the hands of recruiters.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className={`p-5 rounded-xl ${isDarkMode ? 
                'bg-gray-800/70 border border-gray-700/50' : 
                'bg-white/80 border border-gray-200/50 shadow-md'}`}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4">
                  <FileSearch className="h-6 w-6 text-white" />
                </div>
                <h3 className={`font-bold text-lg mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                  ATS Compatibility
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Format your resume to be ATS-friendly and increase your chances of getting past the first screening.
                </p>
              </div>
              
              <div className={`p-5 rounded-xl ${isDarkMode ? 
                'bg-gray-800/70 border border-gray-700/50' : 
                'bg-white/80 border border-gray-200/50 shadow-md'}`}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <h3 className={`font-bold text-lg mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                  Keyword Optimization
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Get suggestions for relevant keywords based on the job description you're applying for.
                </p>
              </div>
              
              <div className={`p-5 rounded-xl ${isDarkMode ? 
                'bg-gray-800/70 border border-gray-700/50' : 
                'bg-white/80 border border-gray-200/50 shadow-md'}`}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className={`font-bold text-lg mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                  Instant Feedback
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Receive instant suggestions to improve your resume's effectiveness for the specific job you're targeting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
