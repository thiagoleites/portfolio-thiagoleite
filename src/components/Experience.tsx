import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-deep-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-tech-purple font-mono text-sm tracking-[0.3em] uppercase mb-4"
          >
            Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold"
          >
            CAREER <span className="italic font-light">PATH</span>
          </motion.h2>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-12 border-l-2 border-white/5 pb-12 last:pb-0"
            >
              {/* Timeline Marker */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-tech-purple shadow-[0_0_10px_rgba(138,43,226,0.5)]" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-neon-blue transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-neon-blue font-medium mt-1">
                    <Briefcase size={14} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-white/30 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/5 h-fit">
                  {exp.period}
                </span>
              </div>

              <p className="text-white/50 leading-relaxed mb-6 max-w-2xl">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map(t => (
                  <span key={t} className="text-[10px] font-mono text-white/40 border border-white/10 px-2 py-1 rounded bg-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
