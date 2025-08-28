import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import InteractiveScene from '@/components/3d/InteractiveScene';

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              <span className="text-gradient">About Me</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Passionate fresher Software Developer with a strong foundation in modern technologies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 order-2 lg:order-1"
            >
              <Card className="glass-morphism p-6 md:p-8 hover:shadow-glow transition-all duration-300">
                 {/* Profile Photo */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className="flex justify-center mb-6"
  >
     <div className="p-[4px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
    <div className="rounded-full bg-white p-2">
    <img
      src="/allwin.png"   // <-- keep your photo in /public folder with this name
      alt="Allwin E"
      className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary shadow-lg object-cover"
    />
     </div>
  </div>
  </motion.div>
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                  Software Developer & Innovator
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                  I'm a B.Tech IT student skilled in Java, Python, and the MERN stack, with hands-on experience 
                  building innovative solutions like Jayple, Digital Wallet System, and Gym Membership Management System.
                </p>
                
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-glow-pulse flex-shrink-0"></div>
                    <p className="text-sm md:text-base text-muted-foreground">
                      <strong className="text-foreground">Problem Solving:</strong> Strong analytical and algorithmic thinking
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 animate-glow-pulse flex-shrink-0"></div>
                    <p className="text-sm md:text-base text-muted-foreground">
                      <strong className="text-foreground">Communication:</strong> Excellent teamwork and presentation skills
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 animate-glow-pulse flex-shrink-0"></div>
                    <p className="text-sm md:text-base text-muted-foreground">
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
              className="order-1 lg:order-2"
            >
              <Card className="glass-morphism p-6 md:p-8 hover:shadow-purple-glow transition-all duration-300">
                <h3 className="text-lg md:text-xl font-semibold text-center mb-4 md:mb-6 text-gradient-secondary">
                  Interactive 3D Experience
                </h3>
                <div className="h-48 md:h-64">
                  <InteractiveScene />
                </div>
                <p className="text-center text-muted-foreground mt-3 md:mt-4 text-xs md:text-sm">
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