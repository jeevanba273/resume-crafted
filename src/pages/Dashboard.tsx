
import { useState, useEffect, useContext } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeContext } from "@/App";
import { Layout, FileCheck, History, Settings } from "lucide-react";

const Dashboard = () => {
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
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="animate-pulse">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-12 animate-fade-in">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <Button variant="outline" onClick={handleLogout} className="hover-lift">
              Logout
            </Button>
          </div>
          
          <div className="glass-card bg-card text-card-foreground mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="p-6">
              <h2 className="text-lg font-medium mb-4">Welcome back!</h2>
              <p className="text-muted-foreground">Your email: {user.email}</p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="glass-card bg-card text-card-foreground hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="p-6">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg inline-block">
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-3">Optimize New Resume</h3>
                <p className="text-muted-foreground mb-4">
                  Upload your resume and a job description to get ATS optimization.
                </p>
                <Button onClick={() => navigate("/resume")} className="hover-glow">
                  Create New
                </Button>
              </div>
            </div>
            
            <div className="glass-card bg-card text-card-foreground hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="p-6">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg inline-block">
                  <History className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-3">Resume History</h3>
                <p className="text-muted-foreground mb-4">
                  View and manage your previously optimized resumes.
                </p>
                <Button variant="outline" onClick={() => navigate("/resume?tab=history")} className="hover-lift">
                  View History
                </Button>
              </div>
            </div>
            
            <div className="glass-card bg-card text-card-foreground hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="p-6">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg inline-block">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-3">Account Settings</h3>
                <p className="text-muted-foreground mb-4">
                  Update your profile and account preferences.
                </p>
                <Button variant="outline" onClick={() => navigate("/account")} className="hover-lift">
                  Settings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
