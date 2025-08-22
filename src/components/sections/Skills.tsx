import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import SkillsScene from '@/components/3d/SkillsScene';

const technicalSkills = [
  { name: 'JavaScript', level: 90, color: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
  { name: 'React.js', level: 85, color: 'bg-gradient-to-r from-blue-400 to-blue-600' },
  { name: 'Java', level: 88, color: 'bg-gradient-to-r from-orange-400 to-red-600' },
  { name: 'Python', level: 82, color: 'bg-gradient-to-r from-green-400 to-blue-600' },
  { name: 'Node.js', level: 80, color: 'bg-gradient-to-r from-green-400 to-green-600' },
  { name: 'MongoDB', level: 75, color: 'bg-gradient-to-r from-green-500 to-green-700' },
  { name: 'SQL', level: 85, color: 'bg-gradient-to-r from-blue-500 to-purple-600' },
  { name: 'Git', level: 78, color: 'bg-gradient-to-r from-orange-500 to-red-600' },
];

const softSkills = [
  { name: 'Problem Solving', level: 92 },
  { name: 'Communication', level: 88 },
  { name: 'Leadership', level: 85 },
  { name: 'Teamwork', level: 90 },
  { name: 'Adaptability', level: 87 },
  { name: 'Critical Thinking', level: 89 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
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
              <span className="text-gradient">Skills & Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and soft skills
            </p>
          </div>

          {/* 3D Skills Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="glass-morphism p-8 hover:shadow-glow transition-all duration-500">
              <h3 className="text-2xl font-semibold text-center mb-6 text-gradient-secondary">
                Interactive 3D Tech Stack
              </h3>
              <SkillsScene />
              <p className="text-center text-muted-foreground mt-4">
                Drag to explore • Auto-rotating skill cubes representing my technical expertise
              </p>
            </Card>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass-morphism p-8 h-full hover:shadow-purple-glow transition-all duration-500">
                <h3 className="text-2xl font-semibold mb-8 text-primary">
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {technicalSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-3 bg-surface-elevated"
                        />
                        <motion.div
                          className={`absolute top-0 left-0 h-3 rounded-full ${skill.color} opacity-80`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: index * 0.1 + 0.2, duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass-morphism p-8 h-full hover:shadow-glow transition-all duration-500">
                <h3 className="text-2xl font-semibold mb-8 text-secondary">
                  Soft Skills
                </h3>
                <div className="space-y-6">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-3 bg-surface-elevated"
                        />
                        <motion.div
                          className="absolute top-0 left-0 h-3 rounded-full bg-gradient-secondary opacity-80"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: index * 0.1 + 0.2, duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}