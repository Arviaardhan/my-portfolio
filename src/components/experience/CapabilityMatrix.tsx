"use client";

import { motion } from "framer-motion";

const CAPABILITIES = [
  { label: "System Architecture", color: "var(--primary)" },
  { label: "Performance Optimization", color: "var(--accent)" },
  { label: "UI Precision", color: "var(--brick-amber)" },
  { label: "Scalable State Mgmt", color: "var(--brick-blue)" },
  { label: "API & Integration", color: "var(--brick-green)" },
  { label: "Product Thinking", color: "var(--primary)" },
  { label: "Offline-First Design", color: "var(--accent)" },
  { label: "CI/CD Pipelines", color: "var(--brick-amber)" },
  { label: "Testing Strategy", color: "var(--brick-blue)" },
  { label: "Team Leadership", color: "var(--brick-green)" },
  { label: "Cross-Platform", color: "var(--primary)" },
  { label: "Design Systems", color: "var(--accent)" },
];

export default function CapabilityMatrix() {
  return (
    <section className="py-32 px-6 relative border-t border-border/40">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-foreground mb-16">
            Capability Matrix.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={i}
              className="border rounded-sm px-4 py-4 text-center cursor-default transition-all duration-500 hover:-translate-y-1"
              style={{ 
                backgroundColor: `hsl(${cap.color} / 0.1)`, 
                borderColor: `hsl(${cap.color} / 0.2)`,
                color: `hsl(${cap.color})`
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <span className="font-display text-sm font-bold tracking-wide">
                {cap.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}