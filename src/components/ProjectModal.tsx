import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10"
      >
        <div className="absolute inset-0 bg-deep-black/90 backdrop-blur-3xl" onClick={onClose} />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-6xl max-h-full bg-tech-gray rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,242,255,0.1)] flex flex-col md:flex-row"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>

          {/* Left: Image/Gallery */}
          <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Info */}
          <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-[10px] font-mono font-bold tracking-widest uppercase">
                {project.category}
              </span>
              <span className="text-white/30 text-xs font-mono">{project.date}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
              {project.title}
            </h2>

            <p className="text-white/60 leading-relaxed mb-8 text-lg">
              {project.fullDescription || project.description}
            </p>

            {/* Metrics */}
            {project.metrics && (
              <div className="grid grid-cols-3 gap-4 mb-12">
                {project.metrics.map(m => (
                  <div key={m.label} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <span className="block text-[10px] font-mono text-white/30 uppercase mb-1">{m.label}</span>
                    <span className="text-xl font-display font-bold text-neon-blue">{m.value}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-mono text-white/30 uppercase tracking-widest mb-4">Core Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-8 border-t border-white/5">
                {project.links.demo && (
                  <a href={project.links.demo} className="flex items-center gap-2 px-8 py-3 rounded-full bg-soft-white text-deep-black font-bold hover:bg-neon-blue transition-colors">
                    Live Preview <ArrowUpRight size={18} />
                  </a>
                )}
                {project.links.github && (
                  <a href={project.links.github} className="flex items-center gap-2 px-8 py-3 rounded-full border border-white/10 hover:border-white/30 text-soft-white font-bold transition-colors">
                    Source Code <Github size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
