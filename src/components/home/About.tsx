"use client";

import { motion } from "framer-motion";

const PILLARS = [
  { title: "Modular Architecture", desc: "Components designed for reuse, testability, and independent scaling across features." },
  { title: "Performance Engineering", desc: "60fps animations, sub-second loads, and memory-efficient patterns as standard practice." },
  { title: "UX Precision", desc: "Every tap, swipe, and transition crafted to feel native and intentional." },
];

export default function About() {
  return (
    <section className="relative py-32 px-6">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-foreground mb-4">
            About
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-16" />
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xl md:text-2xl font-body font-light leading-relaxed text-foreground/90 mb-8">
              I approach mobile development the way an architect approaches a structure —
              every component is a deliberate choice, every interaction a carefully placed brick
              in a larger system.
            </p>
            <p className="text-base md:text-lg font-body text-muted-foreground leading-relaxed mb-8">
              With years of experience building products used by millions, I focus on modular
              architecture that scales gracefully and UX precision.
            </p>
            <p className="text-base md:text-lg font-body text-muted-foreground leading-relaxed">
              My process is systematic: understand the system, design the modules,
              build the foundation, then assemble with care.
            </p>
          </motion.div>

          <motion.div
            className="md:col-span-5 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-64 h-64">
              <div className="absolute top-0 left-4 w-20 h-20 rounded-sm bg-primary/20 border border-primary/10 animate-brick-float" />
              <div className="absolute top-12 left-20 w-16 h-16 rounded-sm bg-accent/20 border border-accent/10 animate-brick-float" style={{ animationDelay: "1s" }} />
              <div className="absolute top-6 right-4 w-14 h-14 rounded-sm bg-brick-amber/20 border border-brick-amber/10 animate-brick-float" style={{ animationDelay: "2s" }} />
              <div className="absolute bottom-16 left-8 w-24 h-12 rounded-sm bg-brick-blue/20 border border-brick-blue/10 animate-brick-float" style={{ animationDelay: "0.5s" }} />
              <div className="absolute bottom-4 right-8 w-18 h-18 rounded-sm bg-brick-teal/20 border border-brick-teal/10 animate-brick-float" style={{ animationDelay: "1.5s" }} />
              <div className="absolute bottom-0 left-0 w-12 h-12 rounded-sm bg-brick-green/20 border border-brick-green/10 animate-brick-float" style={{ animationDelay: "3s" }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary/30 border border-primary/20" />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid sm:grid-cols-3 gap-8 mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {PILLARS.map((pillar, i) => (
            <div key={i} className="group">
              <div className="w-3 h-3 rounded-sm bg-primary mb-4 group-hover:scale-125 transition-transform" />
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}