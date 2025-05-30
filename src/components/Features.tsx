
import { 
  Search, 
  FileUp, 
  FileCheck, 
  FileText, 
  Download, 
  TrendingUp 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <FileUp className="h-8 w-8 text-primary" />,
      title: "Resume Upload",
      description: "Upload your existing resume in DOCX or PDF format, or start from scratch with our templates."
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Job Description Analysis",
      description: "Paste any job listing from Naukri, LinkedIn, or Indeed and our AI will extract the key requirements."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "ATS Score Check",
      description: "See how well your resume matches the job with our ATS compatibility score and keyword analysis."
    },
    {
      icon: <FileCheck className="h-8 w-8 text-primary" />,
      title: "Resume Optimization",
      description: "Our AI rewrites your resume to match the job description and pass ATS filters."
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Cover Letter Generation",
      description: "Create a personalized cover letter tailored to the job description in seconds."
    },
    {
      icon: <Download className="h-8 w-8 text-primary" />,
      title: "Export & Apply",
      description: "Download your optimized resume and cover letter as PDF or DOCX and start applying."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary text-sm font-bold tracking-wider uppercase mb-4 bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full animate-fade-in">Features</span>
          <h2 className="text-3xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Everything You Need to <span className="text-primary">Land The Interview</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Our comprehensive toolkit helps you optimize your application for every job you apply to.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card card-highlight glass-card p-6 rounded-xl transition-all duration-500 animate-fade-in" 
              style={{ animationDelay: `${index * 100 + 400}ms` }}
            >
              <div className="mb-4 p-3 bg-primary/10 dark:bg-primary/20 rounded-lg inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
