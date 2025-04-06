import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="font-bold text-4xl md:text-6xl mb-4">
              Hello, I'm <span className="text-primary">Harshita Sharma</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Full-Stack Developer & UI/UX Designer
            </h2>
            <p className="text-lg mb-8 max-w-md">
              I specialize in crafting beautiful, responsive, and user-focused digital experiences.
              From interactive frontends to powerful backends — let's build something amazing together!
            </p>
            <div className="flex space-x-4">
              <Button asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="absolute inset-4 bg-background rounded-full flex items-center justify-center">
                <img 
                  src="/img.svg"  // Replace this with your actual image path
                  alt="Harshita Sharma" 
                  className="w-full h-full object-cover rounded-full"
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
