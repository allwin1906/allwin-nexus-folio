import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/enhanced-button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import FloatingParticles from '@/components/3d/FloatingParticles';

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 lg:pt-0">
      <FloatingParticles />
      
      {/* Content */}
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-gradient glow-text">Allwin E</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-4xl font-medium text-muted-foreground mb-4">
              Software Developer • Innovator • IT Student
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              "Building innovative solutions with code & creativity."
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button variant="hero" size="xl" className="group" onClick={() => {
    const projectSection = document.getElementById('projects');
    projectSection?.scrollIntoView({ behavior: 'smooth' });
  }}>
              View My Work
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                →
              </motion.div>
            </Button>
            
            <Button variant="cyber" size="xl">
              <a href="/ALLWIN_2025_RESUME.pdf" download="ALLWIN_2025_RESUME.pdf">
              Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center gap-6 mb-16"
          >
            <Button 
              variant="ghost_glow" 
              size="icon"
              className="w-12 h-12 rounded-full"
              asChild
            >
              <a href="mailto:allwinedwinofficial@gmail.com" aria-label="Email">
                <Mail className="w-6 h-6" />
              </a>
            </Button>
            
            <Button 
              variant="ghost_glow" 
              size="icon"
              className="w-12 h-12 rounded-full"
              asChild
            >
              <a href="https://www.linkedin.com/in/allwinedwin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
            </Button>
            
            <Button 
              variant="ghost_glow" 
              size="icon"
              className="w-12 h-12 rounded-full"
              asChild
            >
              <a href="https://github.com/allwin1906" aria-label="GitHub">
                <Github className="w-6 h-6" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary hover:text-primary-glow transition-colors duration-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}