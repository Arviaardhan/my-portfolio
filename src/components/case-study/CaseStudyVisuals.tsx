"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CaseStudyVisuals({ project }: { project: any }) {
  return (
    <>
      {/* UI SYSTEM */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">UI & Interaction System</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-16" />
          <div className="space-y-32">
            {project.screens.map((screen: any, i: number) => (
              <motion.div key={i} className={cn("grid md:grid-cols-12 gap-12 items-center", i % 2 === 1 && "md:flex-row-reverse")} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
                <div className={cn("md:col-span-5", i % 2 === 1 && "md:order-2")}>
                  <h3 className="font-display font-bold text-3xl text-foreground mb-4">{screen.title}</h3>
                  <p className="text-muted-foreground font-body text-lg leading-relaxed">{screen.description}</p>
                </div>
                <div className={cn("md:col-span-7 flex justify-center", i % 2 === 1 && "md:order-1")}>
                  <div className="relative group">
                    <div className="w-56 h-[400px] rounded-2xl bg-card border-2 border-border relative overflow-hidden shadow-2xl">
                       <div className="absolute inset-3 rounded-xl bg-muted/50 flex items-center justify-center text-[10px] italic text-muted-foreground/60 text-center px-4">
                        UI Visualization: {screen.title}
                      </div>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-card rounded-b-xl" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE & SCALE */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-left">Performance & Optimization</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-16" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {project.performance.map((perf: any, i: number) => (
              <div key={i} className="p-6 rounded-sm bg-card border border-border">
                <div className="text-3xl font-bold text-primary font-display">{perf.value}</div>
                <div className="text-xs font-bold uppercase mt-5 tracking-widest text-white">{perf.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}