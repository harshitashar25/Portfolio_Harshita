import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-background text-foreground py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <button 
            onClick={scrollToTop}
            className="p-3 bg-muted mb-6 hover:bg-accent transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} className="text-primary" />
          </button>

          <p className="text-lg font-semibold mb-2 text-primary">Harshita Sharma</p>
          <p className="mb-2 text-sm text-foreground">Software Engineer | Full-Stack Developer</p>
          <p className="mb-4 text-xs text-foreground/60">IDD CSE @ RGIPT | SWE Intern @ Cryptique</p>

          <div className="w-20 h-px bg-border mb-4"></div>

          <p className="text-center text-sm text-foreground/70">
            © {new Date().getFullYear()} Harshita Sharma. All rights reserved.<br />
            Made with passion & precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
