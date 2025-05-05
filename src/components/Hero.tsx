
import { ArrowRight, FileCheck, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute -z-10 top-24 left-1/4 w-72 h-72 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-12 right-1/3 w-80 h-80 bg-purple-200/30 dark:bg-purple-800/20 rounded-full blur-3xl"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-medium text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full w-fit animate-fade-in">Launch Your Career</span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Get Your Resume Past <span className="text-primary">
                ATS Filters
              </span> & Land More Interviews
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
              75% of resumes never reach human eyes. Beat the ATS with Resume Crafted - tailored for the Indian job market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Link to="/resume">
                <Button size="lg" className="w-full sm:w-auto gap-2 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-brand-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="w-full sm:w-auto hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
                  How It Works
                </Button>
              </Link>
            </div>
            <div className="mt-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <p className="font-medium">100% Free Service</p>
              <p className="text-lg font-bold">
                <span className="text-primary">₹0</span> <span className="text-muted-foreground line-through text-sm">₹999</span> Lifetime Access
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 mt-6 animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2 hover-lift">
                <div className="p-1.5 bg-primary/10 dark:bg-primary/20 rounded-full">
                  <FileCheck className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">ATS-Optimized</span>
              </div>
              <div className="flex items-center gap-2 hover-lift">
                <div className="p-1.5 bg-primary/10 dark:bg-primary/20 rounded-full">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">Ready in 60 Seconds</span>
              </div>
              <div className="flex items-center gap-2 hover-lift">
                <div className="p-1.5 bg-primary/10 dark:bg-primary/20 rounded-full">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">Trusted by 10,000+ Users</span>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in-right">
            <div className="absolute -z-10 inset-0 rounded-3xl bg-gradient-to-r from-brand-200/20 to-brand-300/20 dark:from-brand-800/20 dark:to-brand-900/20 blur-2xl"></div>
            <div className="glass-card rounded-xl border shadow-lg p-6 relative transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent rounded-xl"></div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-semibold text-lg">Your Resume Score</h3>
                  <p className="text-sm text-muted-foreground">Position: Senior Developer</p>
                </div>
                <div className="inline-flex items-center justify-center bg-green-100 dark:bg-green-900/60 text-green-700 dark:text-green-400 rounded-full h-16 w-16 font-bold text-xl shadow-sm">
                  92%
                </div>
              </div>
              <div className="space-y-4">
                <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Keyword Match</span>
                    <span className="text-sm font-medium">98%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 dark:bg-green-400 rounded-full transition-all duration-1000" style={{ width: "98%" }}></div>
                  </div>
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Format Compliance</span>
                    <span className="text-sm font-medium">95%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 dark:bg-green-400 rounded-full transition-all duration-1000" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Experience Match</span>
                    <span className="text-sm font-medium">87%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 dark:bg-green-400 rounded-full transition-all duration-1000" style={{ width: "87%" }}></div>
                  </div>
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Skills Relevance</span>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 dark:bg-green-400 rounded-full transition-all duration-1000" style={{ width: "92%" }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/30 rounded-lg animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <h4 className="font-medium text-amber-800 dark:text-amber-400 text-sm">Suggested Improvements</h4>
                <ul className="mt-2 space-y-1">
                  <li className="text-xs text-amber-700 dark:text-amber-300 flex items-center">
                    <span className="mr-1">•</span> Add "Docker" to your technical skills
                  </li>
                  <li className="text-xs text-amber-700 dark:text-amber-300 flex items-center">
                    <span className="mr-1">•</span> Mention "Agile methodology" experience
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
