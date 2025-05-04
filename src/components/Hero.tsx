
import { ArrowRight, FileCheck, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Get Your Resume Past <span className="text-primary">ATS Filters</span> & Land More Interviews
            </h1>
            <p className="text-xl text-muted-foreground">
              75% of resumes never reach human eyes. Beat the ATS with Resume Crafted - tailored for the Indian job market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  How It Works
                </Button>
              </Link>
            </div>
            <div className="mt-6">
              <p className="font-medium">Early Bird Offer</p>
              <p className="text-lg font-bold">
                <span className="text-primary">₹299</span> <span className="text-muted-foreground line-through text-sm">₹999</span> Lifetime Access
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 mt-6">
              <div className="flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-primary" />
                <span className="text-sm">ATS-Optimized</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm">Ready in 60 Seconds</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm">Trusted by 10,000+ Users</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 inset-0 rounded-3xl bg-gradient-to-r from-brand-200/20 to-brand-300/20 blur-2xl"></div>
            <div className="bg-white rounded-xl border shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-semibold text-lg">Your Resume Score</h3>
                  <p className="text-sm text-muted-foreground">Naukri Job ID: 230945</p>
                </div>
                <div className="inline-flex items-center justify-center bg-green-100 text-green-700 rounded-full h-16 w-16 font-bold text-xl">
                  92%
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Keyword Match</span>
                    <span className="text-sm font-medium">98%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "98%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Format Compliance</span>
                    <span className="text-sm font-medium">95%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Experience Match</span>
                    <span className="text-sm font-medium">87%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "87%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Skills Relevance</span>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <h4 className="font-medium text-amber-800 text-sm">Suggested Improvements</h4>
                <ul className="mt-2 space-y-1">
                  <li className="text-xs text-amber-700 flex items-center">
                    <span className="mr-1">•</span> Add "Docker" to your technical skills
                  </li>
                  <li className="text-xs text-amber-700 flex items-center">
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
