"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, BezierDefinition } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { useEffect } from "react";
import Navbar from "@/components/navbar/navbar";
import BrickLabel from "@/components/widgets/BrickLabel";
import { cn } from "@/lib/utils";

const ease: BezierDefinition = [0.22, 1, 0.36, 1];

function BlueprintGrid() {
  return (
    <div
      className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}

function SectionDivider() {
  return (
    <div className="flex items-center gap-1.5 py-16 justify-center">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="w-2.5 h-2.5 rounded-sm bg-primary/20"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
        />
      ))}
    </div>
  );
}

const colorMap: Record<string, string> = {
  red: "var(--brick-red)",
  teal: "var(--brick-teal)",
  amber: "var(--brick-amber)",
  blue: "var(--brick-blue)",
  green: "var(--brick-green)",
};

export default function CaseStudy() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  useEffect(() => {
    if (projectIndex === -1) {
      router.replace("/projects");
    }
  }, [projectIndex, router]);

  if (projectIndex === -1) return null;

  const project = PROJECTS[projectIndex];
  const prevProject = PROJECTS[projectIndex - 1];
  const nextProject = PROJECTS[projectIndex + 1];

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      {/* 1. HERO */}
      <section className="relative min-h-[85vh] flex items-end pb-20 px-6 overflow-hidden">
        <BlueprintGrid />
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
              transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
            <Link href="/projects" className="inline-flex items-center gap-2 text-lg text-muted-foreground hover:text-foreground transition-colors font-body mb-12">
              <ChevronLeft size={24} /> Back to Projects
            </Link>
          </motion.div>

          <motion.h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold tracking-tight leading-[0.95]" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease }}>
            {project.title}
          </motion.h1>

          <motion.p className="mt-6 text-xl md:text-2xl text-muted-foreground font-body font-light max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            {project.tagline}
          </motion.p>

          <motion.div
            className="mt-12 flex flex-wrap gap-x-10 gap-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
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
                      <BrickLabel key={t.label} variant={t.variant}>
                        {t.label}
                      </BrickLabel>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm font-body text-foreground mt-3">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEM & VISION */}
      <section className="relative py-24 px-6">
        <BlueprintGrid />
        <div className="max-w-6xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">{project.challenge.headline}</h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-16" />
          </motion.div>
          <div className="grid md:grid-cols-12 gap-12 text-muted-foreground font-body leading-relaxed">
            <div className="md:col-span-7 space-y-8">
              <div><h3 className="text-primary font-bold text-sm uppercase mb-2">Business Challenge</h3><p>{project.challenge.business}</p></div>
              <div><h3 className="text-primary font-bold text-sm uppercase mb-2">Technical Constraints</h3><p>{project.challenge.technical}</p></div>
            </div>
            <div className="md:col-span-5 flex items-center">
              <div className="p-8 rounded-sm bg-card border border-border shadow-sm italic text-foreground/90">
                <h3 className="font-display font-semibold text-lg not-italic tracking-wide text-accent mb-3">
                  Product Vision
                </h3>
                &quot;{project.challenge.vision}&quot;
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 3. SYSTEM ARCHITECTURE */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">System Architecture</h2>
          <p className="text-muted-foreground font-body max-w-lg mb-16">
            A modular blueprint — independent units connected through clean interfaces.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.architecture.map((mod, i) => (
              <motion.div
                key={i}
                className="group relative p-6 rounded-sm bg-card border border-border hover:border-primary/30 transition-all duration-500"
                whileHover={{ y: -4 }}
              >
                {/* Decorative Corner Points */}
                <div className="absolute top-2 right-2 flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-border" />
                  <div className="w-1 h-1 rounded-full bg-border" />
                </div>

                {/* --- Connection Dot (Interaktif seperti di Bricks) --- */}
                <div
                  className="w-3 h-3 rounded-full mb-4 transition-shadow duration-500 group-hover:shadow-lg"
                  style={{
                    backgroundColor: `hsl(${colorMap[mod.color]})`,
                    boxShadow: `0 0 0 0 hsl(${colorMap[mod.color]} / 0)`,
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.boxShadow = `0 0 12px 2px hsl(${colorMap[mod.color]} / 0.4)`;
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.boxShadow = `0 0 0 0 hsl(${colorMap[mod.color]} / 0)`;
                  }}
                />

                <h3 className="font-display font-semibold text-foreground mb-2">{mod.label}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {mod.description}
                </p>

                {/* Footer Points Layout */}
                <div className="mt-4 pt-4 border-t border-border/40 flex gap-1.5">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="w-1 h-1 rounded-full bg-primary/20" />
                  ))}
                </div>

                {/* Connector Line (Garis penghubung vertikal khas Bricks) */}
                <div className="absolute -bottom-4 left-1/2 w-px h-4 bg-border group-hover:bg-primary/30 transition-colors hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 4. BRICK BY BRICK */}
      <section className="py-24 px-6 bg-muted/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-16">Brick by Brick Execution</h2>
          <div className="space-y-16">
            {project.buildSteps.map((step, i) => (
              <div key={i} className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2">
                  <span className="font-display text-6xl font-bold text-foreground/[0.06]">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display font-bold text-foreground text-lg -mt-2">{step.phase}</h3>
                </div>
                <div className="md:col-span-10 grid sm:grid-cols-2 gap-6 font-body text-sm text-muted-foreground">
                  <div>
                    <h4 className="text-primary font-semibold uppercase mb-2">Problem</h4><p className="mb-4">{step.problem}</p>
                    <h4 className="text-accent font-semibold uppercase mb-2">Decision</h4><p>{step.decision}</p>
                  </div>
                  <div>
                    <h4 className="text-muted-foreground font-semibold uppercase mb-2">Approach</h4><p className="mb-4">{step.approach}</p>
                    <h4 className="text-brick-amber font-semibold uppercase mb-2">Result</h4><p className="text-foreground font-medium">{step.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 5. UI & INTERACTION SYSTEM - Same as Bricks UI */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">UI & Interaction System</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-16" />
          <div className="space-y-32">
            {project.screens.map((screen, i) => (
              <motion.div
                key={i}
                className={cn("grid md:grid-cols-12 gap-12 items-center", i % 2 === 1 && "md:flex-row-reverse")}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className={cn("md:col-span-5", i % 2 === 1 && "md:order-2")}>
                  <h3 className="font-display font-bold text-3xl text-foreground mb-4">{screen.title}</h3>
                  <p className="text-muted-foreground font-body text-lg leading-relaxed">{screen.description}</p>
                </div>

                <div className={cn("md:col-span-7 flex justify-center", i % 2 === 1 && "md:order-1")}>
                  <div className="relative group">
                    {/* Device Mockup */}
                    <div className="w-56 h-[400px] rounded-2xl bg-card border-2 border-border relative overflow-hidden shadow-2xl shadow-primary/5 group-hover:shadow-primary/10 transition-shadow duration-500">
                      <div className="absolute inset-3 rounded-xl bg-muted/50 flex items-center justify-center text-[10px] italic text-muted-foreground/60 text-center px-4">
                        UI Visualization: {screen.title}
                        <div className="absolute inset-x-5 space-y-3 mt-20">
                          <div className="h-2 w-1/2 bg-foreground/5 rounded-full" />
                          <div className="h-10 w-full bg-primary/10 rounded-sm" />
                          <div className="h-2 w-3/4 bg-foreground/5 rounded-full" />
                        </div>
                      </div>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-card rounded-b-xl" />
                    </div>
                    {/* Bricks elements as seen in Bricks UI */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 rounded-sm bg-primary/15 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-1" />
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-sm bg-accent/15 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 6. PERFORMANCE & OPTIMIZATION - Technical Stats */}
      <section className="py-24 px-6 bg-muted/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-center">Performance & Optimization</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-16 mx-auto" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.performance.map((perf, i) => (
              <div key={i} className="p-6 rounded-sm bg-card border border-border">
                <div className="text-3xl font-bold text-primary font-display">{perf.value}</div>
                <div className="text-xs font-bold uppercase mt-1 tracking-widest text-muted-foreground">{perf.metric}</div>
                <p className="text-xs text-muted-foreground/80 mt-2 font-body">{perf.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BUILT TO SCALE - Headline Results */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-center">Built to Scale</h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-16 mx-auto" />
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
            {project.outcome.results.map((res, i) => (
              <div key={i} className="p-5 bg-card border border-border rounded-sm font-body text-sm grid gap-3">
                <div className="w-2 h-2 shrink-0 rounded-full bg-primary mt-1.5" />
                {res}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. NEXT PROJECT NAVIGATION */}
      <section className="border-t border-border py-24 px-6 bg-muted/5">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-display text-muted-foreground tracking-widest uppercase mb-12">
            Continue the Build
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Previous Project */}
            {prevProject ? (
              <Link
                href={`/case-study/${prevProject.slug}`}
                className="group p-8 rounded-sm bg-card border border-border hover:border-primary/30 transition-all duration-400 flex flex-col justify-between min-h-[160px]"
              >
                <span className="flex items-center gap-2 text-xs text-muted-foreground font-display tracking-widest uppercase mb-4">
                  <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-2" />
                  Previous Build
                </span>
                <span className="font-display font-bold text-foreground text-2xl group-hover:text-primary transition-colors line-clamp-2">
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <div className="hidden md:block" /> // Spacer jika tidak ada proyek sebelumnya
            )}

            {/* Next Project */}
            {nextProject ? (
              <Link
                href={`/case-study/${nextProject.slug}`}
                className="group p-8 rounded-sm bg-card border border-border hover:border-primary/30 transition-all duration-400 text-right flex flex-col justify-between min-h-[160px]"
              >
                <span className="flex items-center justify-end gap-2 text-xs text-muted-foreground font-display tracking-widest uppercase mb-4">
                  Next Blueprint
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-2" />
                </span>
                <span className="font-display font-bold text-foreground text-2xl group-hover:text-primary transition-colors line-clamp-2">
                  {nextProject.title}
                </span>
              </Link>
            ) : (
              <Link
                href="/projects"
                className="group p-8 rounded-sm bg-card border border-border hover:border-accent/30 transition-all duration-400 text-right flex flex-col justify-between min-h-[160px]"
              >
                <span className="flex items-center justify-end gap-2 text-xs text-muted-foreground font-display tracking-widest uppercase mb-4">
                  All Builds
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-2" />
                </span>
                <span className="font-display font-bold text-foreground text-2xl group-hover:text-accent transition-colors">
                  Back to Portfolio
                </span>
              </Link>
            )}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-16 px-6 text-center text-sm text-muted-foreground font-body">
        © 2026 MPA. Built brick by brick.
      </footer>
    </div>
  );
}