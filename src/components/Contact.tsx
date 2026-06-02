import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Phone, Github, Twitter, Linkedin } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f2ff', '#8a2be2', '#f8f8f8']
    });
    
    setIsSubmitting(false);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 relative bg-deep-black">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-125 bg-linear-to-t from-tech-purple/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-neon-blue font-mono text-sm tracking-[0.3em] uppercase mb-4"
            >
              Collaborate
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold mb-8"
            >
              LET'S START A <br /><span className="text-gradient">NEW STORY</span>
            </motion.h2>
            
            <p className="text-white/50 mb-12 max-w-md leading-relaxed">
              I'm always looking for ambitious projects and talented teams to collaborate with. If you have an idea that needs a premium touch, reach out.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white/70 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-neon-blue group-hover:text-deep-black transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block text-xs font-mono text-white/30 uppercase">Email</span>
                  <span className="font-medium">oi@thiagoleite.eu</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/70 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-tech-purple transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-xs font-mono text-white/30 uppercase">Location</span>
                  <span className="font-medium">Maceió, Alagoas / Remote</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: '#00f2ff' }}
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40 border border-white/5 hover:border-neon-blue/30 transition-all"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-md p-10 border border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.2em] pl-1">Identified Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-white/2 border border-white/10 px-6 py-4 outline-none focus:border-accent-cyan transition-all text-white font-mono text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.2em] pl-1">Secure Channel (Email)</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-white/2 border border-white/10 px-6 py-4 outline-none focus:border-accent-cyan transition-all text-white font-mono text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.2em] pl-1">Project Payload</label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-white/2 border border-white/10 px-6 py-4 outline-none focus:border-accent-cyan transition-all text-white font-mono text-sm resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full bg-white text-black py-4 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-accent-cyan transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Processing..." : "Transmit Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
