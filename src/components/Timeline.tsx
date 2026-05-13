import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Project } from '../types';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { ProjectModal } from './ProjectModal';

interface TimelineItemProps {
  project: Project;
  index: number;
  onViewDetails: (project: Project) => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ project, index, onViewDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative pl-8 md:pl-12 border-l border-white/10 mb-16 last:mb-0"
    >
      {/* Timeline Marker */}
      <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_10px_#00F5FF]" />
      
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline gap-2">
          <h3 
            onClick={() => onViewDetails(project)}
            className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-accent-cyan transition-colors cursor-pointer"
          >
            {project.title.toUpperCase()}
          </h3>
          <span className="font-mono text-xs text-neutral-500 tracking-widest">{project.date}</span>
        </div>

        {/* Stack Tags */}
        <div className="flex flex-wrap gap-3">
          {project.stack.map(tech => (
            <span key={tech} className="px-2 py-0.5 border border-white/10 rounded text-[9px] uppercase tracking-tighter text-neutral-400">
              {tech}
            </span>
          ))}
        </div>

        {/* Card Content */}
        <div 
          onClick={() => onViewDetails(project)}
          className="bg-white/[0.03] border border-white/5 p-4 md:p-6 rounded-sm flex flex-col md:flex-row gap-6 hover:bg-white/[0.06] transition-all cursor-pointer group/card"
        >
          <div className="w-full md:w-32 h-20 bg-neutral-800 rounded overflow-hidden relative grayscale group-hover/card:grayscale-0 transition-all duration-500">
             <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/20 to-transparent" />
          </div>
          <div className="flex-1">
            <p className="text-xs md:text-sm text-neutral-400 leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex items-center gap-2 text-[10px] font-bold text-accent-cyan tracking-widest group-hover/card:gap-4 transition-all">
              EXPLORE CASE STUDY 
              <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Timeline = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="projects" className="relative py-32 bg-black/10 flex flex-col" ref={containerRef}>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-xs uppercase tracking-[0.5em] text-neutral-500">Experience Map / Core Projects</h2>
          <div className="hidden md:flex items-center gap-4 text-[10px] font-mono opacity-40">
            <span>Filter: ALL_PROJECTS</span>
            <span>/</span>
            <span>Sort: CHRONOLOGICAL</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          {PROJECTS.map((project, index) => (
            <TimelineItem 
              key={project.id} 
              project={project} 
              index={index} 
              onViewDetails={setSelectedProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
