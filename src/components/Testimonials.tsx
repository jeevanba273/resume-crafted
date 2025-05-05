
import { Card, CardContent } from "@/components/ui/card";
const Testimonials = () => {
  const testimonials = [{
    quote: "My resume match score went from 45% to 92%. I got calls from 3 companies within a week after using Resume Crafted!",
    name: "Priya Sharma",
    role: "Software Engineer, Bengaluru",
    company: "Hired at MakeMyTrip"
  }, {
    quote: "I was applying to jobs for months with no calls. Resume Crafted helped me optimize my resume for ATS and I landed my dream job in just 2 weeks.",
    name: "Rahul Verma",
    role: "Digital Marketing Specialist, Mumbai",
    company: "Hired at PhonePe"
  }, {
    quote: "The cover letter generator saved me hours of time. Each application now gets a customized cover letter that matches the job perfectly.",
    name: "Anjali Patel",
    role: "Product Manager, Hyderabad",
    company: "Hired at Flipkart"
  }];
  return <section className="py-20 bg-slate-950">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of professionals who landed their dream jobs with Resume Crafted
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => <Card key={index} className="border bg-card">
              <CardContent className="pt-6">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 inline-block mr-1">★</span>)}
                </div>
                <blockquote className="text-lg mb-6">"{testimonial.quote}"</blockquote>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;
