import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    title: 'B.Tech Information Technology',
    institution: 'K Ramakrishnan College of Engineering',
    period: '2023 - 2027',
    location: 'Trichy, Tamil Nadu',
    grade: 'CGPA: 8.26',
    type: 'education',
    status: 'current'
  },
  {
    title: 'Matrimorphosis\'25 Training & Internship',
    institution: 'Matrimony.com',
    period: '2024 - Present',
    location: 'Remote',
    grade: '8 months program (5 months training + 3 months internship)',
    type: 'experience',
    status: 'current'
  },
  {
    title: 'Higher Secondary (XII)',
    institution: 'Campion Anglo Indian Higher Secondary School',
    period: '2023',
    location: 'Chennai, Tamil Nadu',
    grade: 'Percentage: 85%',
    type: 'education',
    status: 'completed'
  },
  {
    title: 'Secondary (X)',
    institution: 'Vasavi Vidhyalaya',
    period: '2021',
    location: 'Chennai, Tamil Nadu',
    grade: 'Percentage: 92%',
    type: 'education',
    status: 'completed'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Education & Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Academic journey and professional experience building a strong foundation
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-0.5"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-primary rounded-full transform md:-translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-background rounded-full"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <Card className="glass-morphism p-6 hover:shadow-glow transition-all duration-500 group">
                      {/* Status Badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className={`p-2 rounded-lg ${
                          item.type === 'education' ? 'bg-primary/20' : 'bg-secondary/20'
                        }`}>
                          {item.type === 'education' ? (
                            <GraduationCap className="w-5 h-5 text-primary" />
                          ) : (
                            <Briefcase className="w-5 h-5 text-secondary" />
                          )}
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === 'current' 
                            ? 'bg-success/20 text-success border border-success/30' 
                            : 'bg-muted/50 text-muted-foreground border border-muted/30'
                        }`}>
                          {item.status === 'current' ? 'Current' : 'Completed'}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {item.title}
                      </h3>

                      {/* Institution */}
                      <p className="text-primary font-semibold mb-3">
                        {item.institution}
                      </p>

                      {/* Grade/Description */}
                      <p className="text-muted-foreground mb-4">
                        {item.grade}
                      </p>

                      {/* Period and Location */}
                      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Card className="glass-morphism p-8 hover:shadow-purple-glow transition-all duration-500">
              <h3 className="text-2xl font-semibold text-gradient-secondary mb-4">
                Continuous Learning
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Currently pursuing advanced training at Matrimony.com, gaining hands-on experience 
                with industry tools, workflows, and live project development in a professional environment.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}