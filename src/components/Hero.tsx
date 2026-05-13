import React from 'react';
import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row border-b border-white/5 pt-20">
      {/* Left Panel: Core Message */}
      <div className="w-full md:w-[45%] p-8 md:p-20 flex flex-col justify-between border-r border-white/5 relative z-10 bg-black/40 backdrop-blur-sm">
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <span className="text-accent-cyan text-[10px] font-mono uppercase tracking-[0.4em]">Available for new projects</span>
            <h1 className="text-6xl md:text-[5.5rem] font-bold tracking-tighter leading-[0.85] text-white">
              CRAFTING<br />
              <span className="text-transparent text-stroke">DIGITAL</span><br />
              PRESTIGE
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-[320px]"
          >
            Senior Frontend Engineer merged with high-end aesthetic precision. Specialized in immersive web experiences for global brands.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4"
          >
            <button className="px-8 py-4 bg-white text-black text-[11px] uppercase tracking-widest font-bold hover:bg-accent-cyan transition-all">
              Enter Showcase
            </button>
            <button className="px-8 py-4 border border-white/20 text-white text-[11px] uppercase tracking-widest font-bold hover:bg-white/10 transition-all">
              Get Resume
            </button>
          </motion.div>
        </div>

        {/* Stats Panel */}
        <div className="space-y-8 pt-12 border-t border-white/5 mt-12 md:mt-0">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Expertise</div>
              <div className="text-2xl font-medium">8+ Years</div>
            </div>
            <div>
              <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Focus</div>
              <div className="text-2xl font-medium">Visual UI</div>
            </div>
          </div>
          <div className="text-[9px] font-mono text-neutral-600 uppercase tracking-[0.2em]">
            // LOC: 52.5200° N, 13.4050° E
          </div>
        </div>
      </div>

      {/* Right Panel: Animated Visuals */}
      <div className="flex-1 relative bg-black/20 overflow-hidden flex items-center justify-center p-12">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 w-full max-w-lg aspect-square border border-white/5 flex items-center justify-center group"
        >
          <div className="absolute inset-0 bg-accent-cyan/5 blur-[100px] group-hover:bg-accent-cyan/10 transition-all duration-700" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-[80%] h-[80%] border-dashed border border-white/10 rounded-full" 
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute w-[60%] h-[60%] border border-white/10 rounded-sm" 
          />
          <div className="absolute text-[12px] font-mono text-white/20 tracking-[0.5em] -rotate-90 right-[-60px]">
            SCROLL FOR MORE
          </div>
        </motion.div>
        
        {/* Floating Metadata elements */}
        <div className="absolute right-8 bottom-8 text-right hidden lg:block">
          <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-2 font-mono">Current Status</div>
          <div className="flex justify-end items-center gap-2">
            <span className="text-xs font-mono text-white/50">BUILD_V2.0.48</span>
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
