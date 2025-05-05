
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  const benefits = [
    "ATS-Optimized Resume Generator",
    "Tailored Cover Letter Creation",
    "Keyword Analysis & ATS Score",
    "Unlimited Exports (PDF & DOCX)",
    "Indian Job Market Focused",
    "24/7 Access to All Features"
  ];

  return (
    <section className="py-20 bg-primary/5 dark:bg-primary/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-100/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-full px-3 py-1 text-sm font-medium text-primary mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4 mr-2" />
            <span>Limited Time Offer</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl animate-fade-in" style={{ animationDelay: '0.2s' }}>Ready to Land More Interviews?</h2>
          <p className="mb-8 text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Join thousands of Indian professionals who have improved their job search success with Resume Crafted
          </p>
          
          <div className="mb-8 grid gap-4 md:grid-cols-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center group hover-lift">
                <div className="flex items-center justify-center w-5 h-5 mr-2 rounded-full bg-primary/20 dark:bg-primary/30 text-primary">
                  <Check className="h-3 w-3" />
                </div>
                <span className="group-hover:text-primary transition-colors duration-300">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="glass-card border-primary/20 p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-radial from-primary/10 to-transparent rounded-full"></div>
              
              <div className="mb-4 inline-flex items-center justify-center px-3 py-1 text-sm font-medium text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 rounded-full">
                100% Free Forever
              </div>
              <div className="mb-2 flex items-center justify-center gap-2">
                <span className="text-3xl font-bold">₹0</span>
                <span className="text-muted-foreground line-through">₹999</span>
                <span className="rounded-full bg-green-100 dark:bg-green-900/30 px-2 py-0.5 text-xs font-medium text-green-700 dark:text-green-400">
                  FREE
                </span>
              </div>
              <p className="mb-6 text-center text-muted-foreground">No payment required • Lifetime access</p>
              <Link to="/register">
                <Button size="lg" className="w-full group relative overflow-hidden hover:-translate-y-1 transition-all duration-300 btn-pulse">
                  <span className="relative z-10">Get Started Now</span>
                  <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-brand-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.8s' }}>
              No credit card required • No hidden fees • Full access to all features
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
