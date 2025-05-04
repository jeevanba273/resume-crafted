
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const features = [
    "Unlimited ATS resume optimization",
    "Unlimited cover letter generation",
    "ATS score analysis",
    "Missing keywords checklist",
    "Multiple resume versions",
    "PDF & DOCX exports",
    "Indian job market optimization",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
              <p className="text-lg text-muted-foreground">
                Get lifetime access to Resume Crafted completely free - no subscriptions, no hidden fees.
              </p>
            </div>

            <div className="max-w-xl mx-auto rounded-xl overflow-hidden shadow-lg border">
              <div className="bg-primary/10 p-8 text-center">
                <div className="uppercase text-sm font-semibold text-primary mb-2">100% Free Access</div>
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-5xl font-bold">₹0</span>
                  <span className="text-lg text-muted-foreground ml-2">forever</span>
                </div>
                <div className="text-muted-foreground">Lifetime access to all features</div>
              </div>

              <div className="p-8 bg-white">
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link to="/register">
                    <Button size="lg" className="w-full">
                      Get Started Now
                    </Button>
                  </Link>
                  <div className="text-center mt-4 text-sm text-muted-foreground">
                    No payment information required
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
              
              <div className="space-y-6 text-left">
                <div>
                  <h3 className="font-medium mb-2">Is Resume Crafted really free?</h3>
                  <p className="text-muted-foreground">
                    Yes, Resume Crafted is completely free. Get access to all current features at no cost. No recurring charges or hidden fees.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Do I need to provide payment information?</h3>
                  <p className="text-muted-foreground">
                    No, you won't need to provide any payment details. Simply create an account and start using all features immediately.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Will there be any charges in the future?</h3>
                  <p className="text-muted-foreground">
                    No. Resume Crafted will remain free for all users. Premium features added in the future may be offered as optional upgrades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
