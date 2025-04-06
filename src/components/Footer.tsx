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
    <footer className="bg-[#00171F] text-[#FFFFFF] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <button 
            onClick={scrollToTop}
            className="p-3 bg-[#ADEBFF]/10 rounded-full mb-6 hover:bg-[#ADEBFF]/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} className="text-[#ADEBFF]" />
          </button>

          <p className="text-lg font-semibold mb-2 text-[#ADEBFF]">Harshita Sharma</p>
          <p className="mb-4 text-sm text-[#FFFFFF]">Full-Stack Developer & UI/UX Designer</p>

          <div className="w-20 h-px bg-[#ADEBFF]/40 mb-4"></div>

          <p className="text-center text-sm text-[#ADEBFF]/80">
            © {new Date().getFullYear()} Harshita Sharma. All rights reserved.<br />
            Made with passion & precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
