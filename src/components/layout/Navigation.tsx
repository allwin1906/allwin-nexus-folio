import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, GraduationCap, Award, Mail } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '#hero', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Awards', href: '#achievements', icon: Award },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 hidden lg:block"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="glass-morphism rounded-full px-8 py-4 flex items-center justify-between">
            <motion.div
              className="text-xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              Allwin E
            </motion.div>
            
            <div className="flex items-center gap-2">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost_glow"
                  size="sm"
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-2"
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 right-4 z-50 lg:hidden"
      >
        <Button
          variant="cyber"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full"
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          scale: isOpen ? 1 : 0.9,
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 lg:hidden"
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-lg" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="glass-morphism rounded-xl p-8 min-w-[280px]">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gradient">Navigation</h3>
            </div>
            <div className="space-y-3">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost_glow"
                  className="w-full justify-start gap-3"
                  onClick={() => scrollToSection(item.href)}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}