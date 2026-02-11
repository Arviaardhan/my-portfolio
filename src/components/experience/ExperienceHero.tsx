"use client";

import { motion, BezierDefinition } from "framer-motion";

const customEase: BezierDefinition = [0.22, 1, 0.36, 1];

export default function ExperienceHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-24 pb-12">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: customEase }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[0.95] text-foreground">
            Engineering
            <br />
            Systems That
            <br />
            <span className="text-primary">Scale.</span>
          </h1>
        </motion.div>

        <motion.p
          className="mt-8 text-lg md:text-xl text-muted-foreground font-body font-light max-w-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
        >
          From individual features to full product architectures — a progression
          of increasingly complex modular builds.
        </motion.p>
      </div>
    </section>
  );
}