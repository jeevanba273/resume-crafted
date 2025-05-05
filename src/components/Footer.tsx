
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t dark:border-gray-800 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container py-10 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="animate-fade-in">
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-bold bg-clip-text text-transparent animated-gradient">
                Resume Crafted
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Boost your job search with ATS-optimized resumes and cover letters tailored for the Indian job market.
            </p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-sm font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors hover-lift inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors hover-lift inline-block">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors hover-lift inline-block">
                  How it Works
                </Link>
              </li>
            </ul>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors hover-lift inline-block">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-sm text-muted-foreground hover:text-primary transition-colors hover-lift inline-block">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-sm text-muted-foreground hover:text-primary transition-colors hover-lift inline-block">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors hover-lift inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors hover-lift inline-block">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t dark:border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.5s' }}>
            &copy; {currentYear} Resume Crafted. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors group p-1 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-full">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-4 w-4 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors group p-1 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-full">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors group p-1 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-full">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-4 w-4 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
