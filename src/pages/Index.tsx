
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Responsibility from '@/components/Responsibility';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Responsibility />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
