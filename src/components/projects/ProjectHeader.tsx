"use client";

import { motion } from "framer-motion";

export default function ProjectHeader() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-foreground">
            Projects
          </h1>
          <p className="mt-4 text-lg text-muted-foreground font-body max-w-lg">
            Each build is a modular system — designed, engineered, and assembled with intent.
          </p>
          <div className="w-16 h-1 bg-primary rounded-full mt-6" />
        </motion.div>
      </div>
    </section>
  );
}