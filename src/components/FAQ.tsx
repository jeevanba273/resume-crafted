
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is ATS and why does it matter?",
      answer:
        "ATS (Applicant Tracking System) is software used by 98% of Fortune 500 companies and a majority of Indian recruiters to filter resumes before a human sees them. If your resume isn't optimized for ATS, it may be automatically rejected even if you're qualified for the role."
    },
    {
      question: "How does Resume Crafted optimize my resume for ATS?",
      answer:
        "Resume Crafted analyzes your resume against the job description, identifies missing keywords, and restructures your content to be ATS-friendly. We ensure proper formatting, appropriate keyword density, and clear section headers that ATS systems can easily parse."
    },
    {
      question: "What file formats does Resume Crafted support?",
      answer:
        "You can upload your existing resume in DOCX or PDF format. Our system will extract the content and use it to create an optimized version. You can also start from scratch using our templates."
    },
    {
      question: "How accurate is the ATS score?",
      answer:
        "Our ATS score algorithm is built on research of how major ATS systems like Taleo, Workday, and other systems used in India evaluate resumes. While no tool can predict with 100% accuracy how every ATS will score your resume, our system focuses on the key factors that most ATS systems use."
    },
    {
      question: "Is this a subscription or a one-time payment?",
      answer:
        "Resume Crafted is currently available for a one-time payment of ₹299 (early bird pricing), giving you lifetime access to the platform. This includes unlimited resume optimizations and cover letter generations."
    },
    {
      question: "How long does it take to generate an optimized resume?",
      answer:
        "The entire process takes less than 60 seconds from the moment you upload your resume and paste the job description. You'll instantly see your ATS score and can download your optimized resume and cover letter."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-primary/5 dark:from-primary/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-primary/5 dark:from-primary/10 to-transparent"></div>
      <div className="absolute top-40 -left-24 w-64 h-64 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 -right-24 w-64 h-64 bg-purple-100/50 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
      
      <div className="container px-4 md:px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-bold tracking-wider uppercase mb-4 bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full animate-fade-in">Questions</span>
          <h2 className="text-3xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Everything you need to know about Resume Crafted
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="animate-fade-in border-b dark:border-gray-800 group"
              style={{ animationDelay: `${index * 100 + 400}ms` }}
            >
              <AccordionTrigger 
                className="text-left py-5 hover:no-underline group-hover:text-primary transition-colors"
              >
                <span className="font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground animate-fade-in">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <p className="inline-block text-primary font-medium px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full">
            Still have questions? <Link to="/support" className="underline hover:no-underline">Contact our support team</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

function Link({ to, className, children }) {
  return (
    <a href={to} className={className}>
      {children}
    </a>
  );
}
