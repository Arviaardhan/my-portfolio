"use client";

import { motion, BezierDefinition } from "framer-motion";

const ease: BezierDefinition = [0.22, 1, 0.36, 1];

interface CaseStudyChallengeProps {
  project: {
    challenge: {
      headline: string;
      business: string;
      technical: string;
      userPain: string;
      vision: string;
    };
  };
}

export default function CaseStudyChallenge({ project }: CaseStudyChallengeProps) {
  return (
    <section className="relative py-24 px-6">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            {project.challenge.headline}
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-16" />
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 text-muted-foreground font-body leading-relaxed">
          <div className="md:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Business Challenge</h3>
              <p>{project.challenge.business}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Technical Constraints</h3>
              <p>{project.challenge.technical}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-primary font-bold text-sm uppercase tracking-widest mb-2">User Pain Points</h3>
              <p>{project.challenge.userPain}</p>
            </motion.div>
          </div>

          {/* Sisi Kanan: Vision Box */}
          <motion.div 
            className="md:col-span-5 flex items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="p-8 rounded-sm bg-card border border-border shadow-sm relative overflow-hidden group">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-primary/5 rounded-bl-full" />
              
              <h3 className="font-display font-semibold text-lg tracking-wide text-accent mb-3">
                Product Vision
              </h3>
              <p className="italic text-foreground/90 leading-relaxed">
                &quot;{project.challenge.vision}&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}