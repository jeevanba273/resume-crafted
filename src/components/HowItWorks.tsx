
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Upload or Create Resume",
      description: "Start by uploading your existing resume or creating a new one from our templates."
    },
    {
      number: 2,
      title: "Paste Job Description",
      description: "Copy and paste the job description from any job portal (Naukri, LinkedIn, Indeed)."
    },
    {
      number: 3,
      title: "Get ATS Score & Analysis",
      description: "See your resume's match score and identify missing keywords and skills."
    },
    {
      number: 4,
      title: "Generate Optimized Resume",
      description: "Our AI creates an ATS-friendly resume tailored to the specific job description."
    },
    {
      number: 5,
      title: "Create Cover Letter",
      description: "Generate a matching cover letter that highlights your relevant experiences."
    },
    {
      number: 6,
      title: "Download & Apply",
      description: "Export your optimized documents as PDF or DOCX and apply with confidence."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 dark:from-gray-900 to-transparent z-10"></div>
      <div className="absolute top-40 -left-24 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 -right-24 w-64 h-64 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary text-sm font-bold tracking-wider uppercase mb-4 bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full animate-fade-in">Process</span>
          <h2 className="text-3xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            How <span className="text-primary">Resume Crafted</span> Works
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Get your ATS-optimized resume and cover letter in just 6 easy steps
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="step-card animate-fade-in" 
              style={{ animationDelay: `${index * 100 + 400}ms` }}
            >
              <div className="absolute -right-2 -top-2 w-20 h-20 bg-primary/5 dark:bg-primary/10 rounded-full"></div>
              <div className="step-number">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <Link to="/register">
            <Button size="lg" className="group relative overflow-hidden hover:-translate-y-1 transition-all duration-300">
              <span className="relative z-10">Get Started Now - 100% Free</span>
              <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-brand-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '1.1s' }}>
            No Payment Required • Completely Free • Lifetime Access
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
