import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-20 bg-[#00171F] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
          <h1 className="font-bold text-4xl md:text-6xl mb-4">
  Hello, I'm{' '}
  <span className="relative inline-block text-[#ADEBFF] transition-all duration-500 hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#ADEBFF] to-[#00A8E8] hover:drop-shadow-[0_0_6px_#ADEBFF]">
    Harshita Sharma
  </span>
</h1>
            <h2 className="text-2xl md:text-3xl text-[#C2E6FF] mb-6">
              Full-Stack Developer & UI/UX Designer
            </h2>
            <p className="text-lg mb-8 max-w-md text-white/90">
              I specialize in crafting beautiful, responsive, and user-focused digital experiences.
              From interactive frontends to powerful backends — let's build something amazing together!
            </p>
            <div className="flex space-x-4">
              <Button asChild className="border-[#ADEBFF] text-[#ADEBFF] bg-[#00171F] hover:text-[#00171F] hover:bg-[#ADEBFF]">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button 
                variant="outline" 
                asChild 
                className="border-[#ADEBFF] text-[#ADEBFF] bg-[#00171F] hover:text-[#00171F] hover:bg-[#ADEBFF]"
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          <div 
            className="md:w-1/2 flex justify-center animate-fade-in" 
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-[#ADEBFF] to-[#00A8E8]"></div>
              <div className="absolute inset-4 bg-[#00171F] rounded-full flex items-center justify-center">
              <img 
  src="/img.jpeg" 
  alt="Harshita Sharma" 
  className="w-full h-full object-cover rounded-full transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-1 hover:shadow-[0_0_20px_#ADEBFF99]"
/>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-[#ADEBFF]" size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
