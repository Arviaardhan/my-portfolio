"use client";

import { motion } from "framer-motion";
import Link from "next/link"; // Perbaikan: Next.js Link
import { ExternalLink } from "lucide-react";
import Navbar from "@/components/navbar/navbar";
import { PROJECTS } from "@/data/projects";
import BrickLabel from "@/components/widgets/BrickLabel";

export default function Projects() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />

      {/* Header */}
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

      {/* Project List */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto space-y-32">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.title}
              className="relative"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Build number (Background Index) */}
              <span className="font-display text-8xl md:text-9xl font-bold text-foreground/[0.04] absolute -top-12 -left-4 select-none pointer-events-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center relative">
                {/* Content Side */}
                <div className={`md:col-span-6 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-3">
                    {project.title}
                  </h2>
                  <p className="text-primary font-display font-medium text-sm tracking-wide mb-6">
                    {project.tagline}
                  </p>
                  <p className="text-muted-foreground font-body leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map((tech) => (
                      <BrickLabel key={tech.label} variant={tech.variant}>
                        {tech.label}
                      </BrickLabel>
                    ))}
                  </div>

                  {/* Link ke Detail Project */}
                  <Link
                    href={`/case-study/${project.slug}`} // Perbaikan: to -> href
                    className="inline-flex items-center gap-2 text-sm font-display font-medium text-foreground hover:text-primary transition-colors group"
                  >
                    View Case Study
                    <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

                {/* Visual Side (Phone Mockup) */}
                <div className={`md:col-span-6 flex justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="relative group">
                    {/* LEGO-style Frame Mockup */}
                    <div className="w-64 h-[480px] rounded-2xl bg-card border-2 border-border relative overflow-hidden shadow-2xl shadow-primary/5 group-hover:shadow-primary/10 transition-all duration-500">
                      <div className="absolute inset-3 rounded-xl bg-muted/50 flex items-center justify-center">
                        <div className="space-y-3 w-full px-6">
                          <div className="h-4 w-1/2 mx-auto rounded-sm bg-foreground/[0.06]" />
                          <div className="h-20 w-full rounded-sm bg-primary/10 mt-4" />
                          <div className="h-3 w-3/4 rounded-sm bg-foreground/[0.06]" />
                          <div className="h-3 w-full rounded-sm bg-foreground/[0.04]" />
                          <div className="h-3 w-2/3 rounded-sm bg-foreground/[0.06]" />
                          <div className="h-10 w-full rounded-sm bg-accent/15 mt-4" />
                        </div>
                      </div>
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-card rounded-b-xl" />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-3 -right-3 w-6 h-6 rounded-sm bg-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-1" />
                    <div className="absolute -bottom-3 -left-3 w-4 h-4 rounded-sm bg-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 group-hover:translate-y-1" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-muted-foreground font-body">
          <span>© 2026 MPA. Built brick by brick.</span>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-sm bg-primary/40" />
            <div className="w-2 h-2 rounded-sm bg-accent/40" />
            <div className="w-2 h-2 rounded-sm bg-orange-400/40" />
          </div>
        </div>
      </footer>
    </div>
  );
}