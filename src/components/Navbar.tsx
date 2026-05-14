import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Twitter, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        isScrolled ? 'bg-deep-black/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      )}
    >
      <div className="h-20 flex items-center justify-between px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3"
        >
          <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
            <span className="text-black font-black text-xl">TL</span>
          </div>
          <span className="text-[11px] uppercase tracking-[0.3em] font-medium hidden sm:block">
            THIAGO LEITE<span className="opacity-30">/ 2026</span>
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/70 hover:text-accent-cyan transition-colors"
            >
              0{i + 1}. {link.name}
            </motion.a>
          ))}
        </div>

        {/* Action Link */}
        <div className="hidden md:flex">
          <motion.a
            href="#contact"
            whileHover={{ letterSpacing: '0.4em' }}
            className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-cyan border border-accent-cyan/20 px-6 py-2 transition-all hover:bg-accent-cyan/10"
          >
            Connect
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-deep-black border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-display font-medium text-white/70 hover:text-neon-blue"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-6 mt-4 pt-4 border-t border-white/5">
                <Github size={24} />
                <Linkedin size={24} />
                <Twitter size={24} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
