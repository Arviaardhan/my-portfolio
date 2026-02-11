"use client";

import { motion, BezierDefinition } from "framer-motion"; 
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import BrickLabel from "@/components/widgets/BrickLabel";

const ease: BezierDefinition = [0.22, 1, 0.36, 1];

export default function CaseStudyHero({ project }: { project: any }) {
  return (
    <section className="relative min-h-[85vh] flex items-end pb-20 px-6 overflow-hidden">
      {/* Animated Structural Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary/[0.06] rounded-sm"
            style={{
              width: i % 2 === 0 ? "200px" : "120px",
              height: "4px",
              top: `${15 + i * 14}%`,
              left: i % 2 === 0 ? `${5 + i * 8}%` : undefined,
              right: i % 2 !== 0 ? `${5 + i * 6}%` : undefined,
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            
            transition={{ delay: i * 0.08, duration: 0.4, ease }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease }}
        >
          <Link href="/projects" className="inline-flex items-center gap-2 text-lg text-muted-foreground hover:text-foreground transition-colors font-body mb-12">
            <ChevronLeft size={24} /> Back to Projects
          </Link>
        </motion.div>

        <motion.h1 
          className="text-5xl sm:text-6xl md:text-8xl font-display font-bold tracking-tight leading-[0.95]" 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.9, ease }}
        >
          {project.title}
        </motion.h1>

        <motion.p 
          className="mt-6 text-xl md:text-2xl text-muted-foreground font-body font-light max-w-2xl" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2, ease }} 
        >
          {project.tagline}
        </motion.p>

        <motion.div 
          className="mt-12 flex flex-wrap gap-x-10 gap-y-6" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.35, ease }}
        >
          {[
            { label: "Role", value: project.role },
            { label: "Platform", value: project.platform },
            { label: "Duration", value: project.duration },
            { label: "Stack", value: project.stack }, 
          ].map((item) => (
            <div key={item.label}>
              <span className="text-xs font-display text-muted-foreground tracking-widest uppercase block mb-1">
                {item.label}
              </span>
              {Array.isArray(item.value) ? (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.value.map((t: any) => (
                    <BrickLabel key={t.label} variant={t.variant}>{t.label}</BrickLabel>
                  ))}
                </div>
              ) : (
                <p className="text-sm font-body text-foreground mt-3">{item.value}</p>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}