import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Award, Trophy, Medal, Star, FileText, Zap } from 'lucide-react';

const achievements = [
  {
    title: '1st Prize & Grant Winner',
    subtitle: 'Jayple - Online Salon Booking Platform',
    description: 'Won first prize and received grant funding for innovative salon appointment booking solution at JIM College competition.',
    icon: Trophy,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/20',
    category: 'Competition'
  },
  {
    title: 'Presentation Day Winner',
    subtitle: 'WinWheelz & Piezoelectric Shoe',
    description: 'Secured first place in project presentation for smart transportation solution and energy harvesting footwear.',
    icon: Medal,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/20',
    category: 'Presentation'
  },
  {
    title: 'Full Stack Web Development',
    subtitle: 'Udemy Certification',
    description: 'Comprehensive certification covering modern web development technologies including React, Node.js, and databases.',
    icon: FileText,
    color: 'text-green-400',
    bgColor: 'bg-green-400/20',
    category: 'Certification'
  },
  {
    title: 'Data Structures & Algorithms',
    subtitle: 'Udemy Certification',
    description: 'Advanced certification in algorithmic thinking, problem-solving, and efficient data structure implementation.',
    icon: Zap,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/20',
    category: 'Certification'
  },
  {
    title: 'Python Programming',
    subtitle: 'GUVI Certification',
    description: 'Professional certification in Python programming, covering advanced concepts and real-world applications.',
    icon: Star,
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/20',
    category: 'Certification'
  },
  {
    title: 'Innovation Excellence',
    subtitle: 'Multiple Project Recognition',
    description: 'Consistent recognition for innovative solutions and creative problem-solving across various technical domains.',
    icon: Award,
    color: 'text-pink-400',
    bgColor: 'bg-pink-400/20',
    category: 'Recognition'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
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
              <span className="text-gradient">Achievements & Certifications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Recognition for innovation, technical excellence, and continuous learning
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <Card className="glass-morphism p-6 h-full hover:shadow-glow transition-all duration-500 relative overflow-hidden">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon and Category */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-xl ${achievement.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-6 h-6 ${achievement.color}`} />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground bg-surface-elevated px-3 py-1 rounded-full border border-border">
                          {achievement.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {achievement.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-primary font-semibold mb-3">
                        {achievement.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {achievement.description}
                      </p>

                      {/* Glow Line */}
                      <div className="mt-6 h-0.5 w-full bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="glass-morphism p-8 hover:shadow-purple-glow transition-all duration-500">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-gradient mb-2">2</div>
                  <div className="text-muted-foreground text-sm">Competition Wins</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient mb-2">3</div>
                  <div className="text-muted-foreground text-sm">Certifications</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient mb-2">5</div>
                  <div className="text-muted-foreground text-sm">Major Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient mb-2">1</div>
                  <div className="text-muted-foreground text-sm">Grant Received</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}