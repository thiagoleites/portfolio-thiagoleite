import React from 'react';
import { motion } from 'motion/react';
import { Layers, Database, Globe, Cloud, Code2, Terminal } from 'lucide-react';

const SkillCategory = ({ title, icon: Icon, skills, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="glass p-8 rounded-3xl hover:border-tech-purple/30 transition-all duration-500 group"
  >
    <div className="w-12 h-12 rounded-sm bg-accent-cyan/10 flex items-center justify-center mb-6 text-accent-cyan group-hover:bg-accent-cyan group-hover:text-black transition-all">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-display font-bold mb-6 italic">{title}</h3>
    <div className="space-y-4">
      {skills.map((skill: any, i: number) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between text-[10px] font-mono">
            <span className="text-white/40 uppercase tracking-widest">{skill.name}</span>
            <span className="text-accent-cyan">{skill.level}%</span>
          </div>
          <div className="h-px bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-full bg-accent-cyan shadow-[0_0_10px_#00F5FF]"
            />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export const Skills = () => {
  const categories = [
    {
      title: 'Frontend Architecture',
      icon: Layers,
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Framer Motion', level: 85 }
      ]
    },
    {
      title: 'Backend Systems',
      icon: Terminal,
      skills: [
        { name: 'Node.js / Go', level: 80 },
        { name: 'PostgreSQL / NoSQL', level: 85 },
        { name: 'GraphQL / gRPC', level: 75 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        { name: 'Docker / K8s', level: 75 },
        { name: 'AWS / GCP', level: 80 },
        { name: 'CI/CD Pipelines', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-tech-gray/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-125 h-125 bg-tech-purple/5 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-neon-blue font-mono text-sm tracking-[0.3em] uppercase mb-4"
            >
              Expertise
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold leading-tight"
            >
              TECHNICAL <span className="text-gradient">CAPABILITIES</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-sm text-sm"
          >
            Leveraging cutting-edge technologies to build scalable, performant, and visualy stunning digital products.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <SkillCategory key={cat.title} {...cat} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};
