import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;