import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';
import { Github, ExternalLink, Award } from 'lucide-react';

const projects = [
  {
    title: 'Jayple',
    subtitle: 'Online Salon Appointment Booking Platform',
    description: 'A comprehensive salon management system with appointment booking, service management, and customer portal. Won 1st Prize & Grant at JIM College.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    award: '🏆 1st Prize & Grant Winner',
    image: '/images/jayple.png',
    github: '#',
    live: '#',
    featured: true
  },
  {
    title: 'Modern Login Page',
    subtitle: 'Responsive Login Page with Modern UI',
    description: 'A sleek and responsive login page designed using HTML, CSS, and JavaScript with smooth animations and a clean UI for authentication systems.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/api/placeholder/400/250',
    github: 'https://github.com/allwin1906/Modern_Logging_page',
    live: 'https://allwin1906.github.io/Modern_Logging_page/'
  },
  {
    title: 'Gym Membership Management',
    subtitle: 'DBMS Project with Login Modules',
    description: 'Complete gym management system with member registration, subscription tracking, and admin dashboard.',
    tech: ['Python', 'MySQL', 'Tkinter', 'DBMS'],
    image: '/api/placeholder/400/250',
    github: 'https://github.com/allwin1906/Gym-Membership-System',
    live: 'https://github.com/allwin1906/Gym-Membership-System'
  },
  {
    title: 'WinWheelz',
    subtitle: 'Smart Transportation Solution',
    description: 'Innovative transportation app with route optimization, real-time tracking, and smart scheduling features.',
    tech: ['React Native', 'Firebase', 'Google Maps API'],
    award: '🥇 Presentation Day Winner',
    image: '/api/placeholder/400/250',
    github: '#',
    live: '#'
  },
  {
    title: 'COVID-19 Awareness Website',
    subtitle: 'Informative Web Portal',
    description: 'A responsive website created to spread awareness about COVID-19, including safety measures, statistics, and prevention tips.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    image: '/api/placeholder/400/250',
    github: 'https://github.com/allwin1906/Covid_awarness',
    live: 'https://allwin1906.github.io/Covid_awarness/'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Innovative solutions showcasing technical expertise and creative problem-solving
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={project.featured ? 'md:col-span-2' : ''}
              >
                <Card className="glass-morphism overflow-hidden h-full group hover:shadow-glow transition-all duration-500 hover:scale-[1.02]">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-gradient-cosmic flex items-center justify-center">
                      <div className="text-6xl opacity-30">💻</div>
                    </div>
                    {project.award && (
                      <div className="absolute top-4 left-4">
                        <div className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          Award Winner
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        {project.subtitle}
                      </p>
                      {project.award && (
                        <div className="text-sm text-secondary mb-3 font-medium">
                          {project.award}
                        </div>
                      )}
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-surface-elevated text-xs font-medium rounded-full border border-primary/20 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button
                        variant="cyber"
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                      <Button
                        variant="hero"
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a 
              href="https://github.com/allwin1906" 
              target="_blank" 
              rel="noopener noreferrer"
              >
            <Button variant="cyber" size="lg">
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}