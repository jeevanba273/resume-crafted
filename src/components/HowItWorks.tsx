
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">How Resume Crafted Works</h2>
          <p className="text-lg text-muted-foreground">
            Get your ATS-optimized resume and cover letter in just 6 easy steps
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="step-card">
              <div className="step-number">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/register">
            <Button size="lg">
              Get Started Now for Just ₹299
            </Button>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Early Bird Pricing • One-Time Payment • Lifetime Access
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
