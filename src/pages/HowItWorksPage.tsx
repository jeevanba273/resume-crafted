
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorksPage = () => {
  const steps = [
    {
      number: 1,
      title: "Upload or Create Resume",
      description: "Start by uploading your existing resume in PDF or DOCX format. If you don't have a resume yet, you can create one from our templates.",
      details: "Our system extracts all the text and formatting from your current resume. We analyze your skills, experience, and qualifications to prepare for the optimization process."
    },
    {
      number: 2,
      title: "Paste Job Description",
      description: "Copy and paste the job description from any job portal such as Naukri, LinkedIn, or Indeed.",
      details: "The job description contains essential information about what the employer is looking for. Our system analyzes this to identify key requirements, skills, and qualifications."
    },
    {
      number: 3,
      title: "Get ATS Score & Analysis",
      description: "See your resume's match score against the job description and identify missing keywords and skills.",
      details: "We use advanced algorithms to compare your resume with the job description. The ATS score indicates how likely your resume is to pass the Applicant Tracking System filters. We also provide a list of important keywords and skills that are missing from your resume."
    },
    {
      number: 4,
      title: "Generate Optimized Resume",
      description: "Our AI creates an ATS-friendly resume tailored to the specific job description.",
      details: "Using advanced AI technology, we reformat your resume to match ATS requirements, incorporate missing keywords, and highlight relevant experience. The optimized resume maintains your original information while making it more likely to pass through ATS filters."
    },
    {
      number: 5,
      title: "Create Cover Letter",
      description: "Generate a matching cover letter that highlights your relevant experiences.",
      details: "Our AI analyzes both your resume and the job description to create a personalized cover letter that emphasizes your strengths and qualifications for the specific position."
    },
    {
      number: 6,
      title: "Download & Apply",
      description: "Export your optimized documents as PDF or DOCX and apply with confidence.",
      details: "Your optimized resume and cover letter are ready for download in industry-standard formats. You can immediately use them to apply for the job, knowing that they've been optimized to pass ATS filters and appeal to hiring managers."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl font-bold mb-4">How Resume Crafted Works</h1>
              <p className="text-lg text-muted-foreground">
                Our simple 6-step process helps you create ATS-optimized resumes and cover letters tailored for the Indian job market.
              </p>
            </div>
            
            <div className="space-y-16 mt-12 max-w-4xl mx-auto">
              {steps.map((step) => (
                <div key={step.number} className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">{step.title}</h2>
                    <p className="text-lg mb-4">{step.description}</p>
                    <p className="text-muted-foreground">{step.details}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-20 text-center">
              <h2 className="text-2xl font-bold mb-6">Ready to optimize your resume for ATS systems?</h2>
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
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
