import React, { useState, useEffect } from "react"; 
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Pricing from "./pages/Pricing";
import HowItWorksPage from "./pages/HowItWorksPage";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import ResumeOptimizer from "./pages/ResumeOptimizer";

// Create a new QueryClient instance outside of the component
const queryClient = new QueryClient();

// Dark mode context
export const ThemeContext = React.createContext({
  isDarkMode: true,
  toggleDarkMode: () => {},
});

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has a preference stored in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // If user has explicitly set light theme, respect that choice
    // Otherwise, default to dark theme
    return savedTheme === 'light' ? false : true;
  });

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  // Update the class on the html element when dark mode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Auth />} />
                <Route path="/register" element={<Auth />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/how-it-works" element={<HowItWorksPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/account" element={<Account />} />
                <Route path="/resume" element={<ResumeOptimizer />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

export default App;
