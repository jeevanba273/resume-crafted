
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
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
    <section className="py-20 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Land More Interviews?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join thousands of Indian professionals who have improved their job search success with Resume Crafted
          </p>
          
          <div className="mb-8 grid gap-4 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="space-y-6">
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
              <div className="mb-4 flex items-center justify-center">
                <span className="text-sm font-medium uppercase text-primary">100% Free Forever</span>
              </div>
              <div className="mb-2 flex items-center justify-center gap-2">
                <span className="text-3xl font-bold">₹0</span>
                <span className="text-muted-foreground line-through">₹999</span>
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                  FREE
                </span>
              </div>
              <p className="mb-6 text-center text-muted-foreground">No payment required • Lifetime access</p>
              <Link to="/register">
                <Button size="lg" className="w-full">
                  Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-muted-foreground">
              No credit card required • No hidden fees • Full access to all features
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
