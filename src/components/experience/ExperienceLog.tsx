"use client";

import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Senior Mobile Architect",
    company: "ScaleForge Labs",
    duration: "2023 — Present",
    positioning: "Leading cross-platform architecture for fintech products serving 2M+ users.",
    achievements: [
      "Designed modular feature-flag system reducing deployment risk by 80%",
      "Architected offline-first sync engine handling 50K+ transactions daily",
      "Established component library adopted across 4 product teams",
      "Reduced app cold start from 3.2s to 0.8s through lazy initialization",
      "Mentored 6 engineers on scalable mobile architecture patterns",
    ],
  },
  {
    role: "Mobile Product Engineer",
    company: "Vectron Systems",
    duration: "2021 — 2023",
    positioning: "Building real-time collaboration tools for distributed teams.",
    achievements: [
      "Built WebSocket-driven real-time sync with conflict resolution",
      "Implemented gesture-based navigation reducing user task time by 35%",
      "Shipped 12 major features with zero critical post-launch bugs",
      "Optimized rendering pipeline achieving consistent 60fps on mid-range devices",
    ],
  },
  {
    role: "Mobile Developer",
    company: "Brickyard Digital",
    duration: "2019 — 2021",
    positioning: "Crafting consumer-facing mobile experiences for lifestyle brands.",
    achievements: [
      "Delivered 3 apps from concept to App Store launch",
      "Integrated payment systems processing $2M+ in first year",
      "Built A/B testing framework increasing conversion by 22%",
    ],
  },
  {
    role: "Junior Developer",
    company: "PixelStack Studio",
    duration: "2018 — 2019",
    positioning: "Foundation building — learning craft through rapid iteration.",
    achievements: [
      "Shipped first production app within 3 months of joining",
      "Contributed to open-source UI component library (800+ stars)",
      "Established unit testing culture achieving 85% coverage",
    ],
  },
];

export default function ExperienceLog() {
  return (
    <section className="py-32 px-6 relative bg-muted/5">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-foreground mb-4">
            The Build Log.
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-20" />
        </motion.div>

        <div className="space-y-16">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.05 }}
            >
              <div className="relative rounded-sm border border-border bg-card p-8 md:p-10 hover:border-primary/20 transition-all duration-500 hover:shadow-lg">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">{exp.role}</h3>
                    <p className="font-display text-primary font-medium text-sm tracking-wide">{exp.company}</p>
                  </div>
                  <span className="font-body text-sm text-muted-foreground">{exp.duration}</span>
                </div>
                <p className="font-body leading-relaxed mb-6 max-w-2xl" style={{ color: `hsl(var(--accent))` }}>{exp.positioning}</p>
                <div className="space-y-2">
                  {exp.achievements.map((a, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-sm bg-primary/40 mt-1.5 shrink-0" />
                      <p className="text-sm font-body text-foreground/100 leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}