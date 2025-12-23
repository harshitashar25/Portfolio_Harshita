import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-20 bg-background text-foreground relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
          <h1 className="font-bold text-4xl md:text-6xl mb-4">
  Hello, I'm{' '}
  <span className="relative inline-block text-primary transition-all duration-500 hover:scale-105">
    Harshita Sharma
  </span>
</h1>
            <h2 className="text-2xl md:text-3xl text-foreground/90 mb-4 font-medium">
              Software Engineer | Full-Stack Developer
            </h2>
            <p className="text-base md:text-lg mb-4 max-w-md text-foreground/70">
              <span className="text-primary">IDD CSE</span> @ RGIPT | CGPA: 8.36/10
            </p>
            <p className="text-base md:text-lg mb-4 max-w-md text-foreground/70">
              <span className="text-primary">SWE Intern</span> @ Cryptique | <span className="text-primary">MERN Intern</span> @ Sheldon AI
            </p>
            <p className="text-lg mb-8 max-w-md text-foreground/80">
              Building scalable systems, AI-powered solutions, and blockchain applications. 
              Passionate about full-stack development, Web3, and cutting-edge technology.
            </p>
            <div className="flex flex-wrap gap-3 mb-6 text-sm">
              <a href="https://github.com/harshitashar25" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                GitHub
              </a>
              <span className="text-foreground/30">|</span>
              <a href="https://www.linkedin.com/in/harshita-sharma-627446279/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                LinkedIn
              </a>
              <span className="text-foreground/30">|</span>
              <a href="mailto:harshitas12309@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
                harshitas12309@gmail.com
              </a>
              <span className="text-foreground/30">|</span>
              <a href="tel:+918235147069" className="text-primary hover:text-primary/80 transition-colors">
                +91-8235147069
              </a>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button 
                variant="outline" 
                asChild 
                className="border-border hover:bg-accent hover:text-accent-foreground"
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button 
                variant="outline" 
                asChild 
                className="border-border hover:bg-accent hover:text-accent-foreground"
              >
                <a href="#experience">Experience</a>
              </Button>
            </div>
          </div>
          <div 
            className="md:w-1/2 flex justify-center animate-fade-in" 
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-primary to-primary/60"></div>
              <div className="absolute inset-4 bg-background flex items-center justify-center">
              <img 
  src="/img.jpeg" 
  alt="Harshita Sharma" 
  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-1"
/>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-primary" size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
