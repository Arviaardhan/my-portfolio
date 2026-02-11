"use client";

import { motion, BezierDefinition } from "framer-motion";

const ease: BezierDefinition = [0.22, 1, 0.36, 1];

interface CaseStudyOutcomeProps {
  project: {
    outcome: {
      headline: string;
      results: string[];
    };
  };
}

export default function CaseStudyOutcome({ project }: CaseStudyOutcomeProps) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-foreground mb-16">
            {project.outcome.headline}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {project.outcome.results.map((result, i) => (
            <motion.div
              key={i}
              className="p-5 rounded-sm bg-card border border-border text-left hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease }}
            >
              <div className="w-2 h-2 rounded-sm bg-primary mb-3" />
              <p className="font-body text-sm text-green leading-relaxed">
                {result}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}