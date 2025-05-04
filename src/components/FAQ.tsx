
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
    <section className="py-20">
      <div className="container px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Resume Crafted
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
