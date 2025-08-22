import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import InteractiveScene from '@/components/3d/InteractiveScene';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">About Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate fresher Software Developer with a strong foundation in modern technologies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="glass-morphism p-8 hover:shadow-glow transition-all duration-300">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Software Developer & Innovator
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a B.Tech IT student skilled in Java, Python, and the MERN stack, with hands-on experience 
                  building innovative solutions like Jayple, Digital Wallet System, and Gym Membership Management System.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-glow-pulse"></div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Problem Solving:</strong> Strong analytical and algorithmic thinking
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 animate-glow-pulse"></div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Communication:</strong> Excellent teamwork and presentation skills
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 animate-glow-pulse"></div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Innovation:</strong> Passionate about AI and scalable systems
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* 3D Interactive Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass-morphism p-8 hover:shadow-purple-glow transition-all duration-300">
                <h3 className="text-xl font-semibold text-center mb-6 text-gradient-secondary">
                  Interactive 3D Experience
                </h3>
                <InteractiveScene />
                <p className="text-center text-muted-foreground mt-4 text-sm">
                  Drag to interact • Auto-rotating cubes representing my tech stack
                </p>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}