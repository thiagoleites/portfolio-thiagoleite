/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-100 bg-deep-black flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-white font-display text-4xl font-bold tracking-tighter mb-8"
      >
        THIAGO LEITE<span className="text-neon-blue">.</span>
      </motion.div>
      <div className="w-64 h-0.5 bg-white/10 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-neon-blue origin-left"
          style={{ scaleX: percent / 100 }}
        />
      </div>
      <div className="mt-4 text-[10px] font-mono text-white/30 tracking-widest uppercase">
        Initializing Experience {percent}%
      </div>
    </motion.div>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const lenisRef = useRef<Lenis | null>(null);

  const handleNavScroll = useCallback((href: string) => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    if (href === '#' || href === '') {
      lenis.scrollTo(0);
      return;
    }

    const target = document.querySelector<HTMLElement>(href);
    if (target) {
      lenis.scrollTo(target, { offset: -88 });
    }
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <main className="bg-deep-black overflow-x-hidden selection:bg-neon-blue selection:text-deep-black selection:shadow-lg">
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative min-h-screen grid-pattern"
        >
          {/* Theme Background Elements */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-cyan/10 rounded-full blur-[160px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-purple/10 rounded-full blur-[140px]" />
          </div>

          <div className="relative z-10">
            <Navbar onNavigate={handleNavScroll} />
            <Hero />
            
            <div id="projects">
              <Timeline />
            </div>

            <Skills />
            
            <div id="experience">
              <Experience />
            </div>

            <Contact />

            <footer className="h-12 bg-black border-t border-white/5 flex items-center justify-between px-6 md:px-12 z-20">
              <div className="flex items-center gap-6">
                <div className="flex gap-2 items-center">
                  <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-pulse"></div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-accent-cyan">System Live</span>
                </div>
                <span className="hidden md:inline text-[10px] text-neutral-600 uppercase tracking-widest">Mem: 24.8GB / CPU: 12%</span>
              </div>
              <div className="flex gap-4 md:gap-8 text-[10px] uppercase tracking-widest font-medium text-neutral-400">
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="https://www.linkedin.com/in/thiagoleites" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="https://github.com/thiagoleites" className="hover:text-white transition-colors">GitHub</a>
              </div>
            </footer>
          </div>
        </motion.div>
      )}
    </main>
  );
}
