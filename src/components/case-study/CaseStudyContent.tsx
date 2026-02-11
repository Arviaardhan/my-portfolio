"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const colorMap: Record<string, string> = {
    red: "var(--brick-red)",
    teal: "var(--brick-teal)",
    amber: "var(--brick-amber)",
    blue: "var(--brick-blue)",
    green: "var(--brick-green)",
};

export default function CaseStudyContent({ project }: { project: any }) {
    return (
        <>
            {/* SYSTEM ARCHITECTURE */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">System Architecture</h2>
                    <p className="text-muted-foreground font-body max-w-lg mb-16">Modular blueprint — independent units connected through clean interfaces.</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.architecture.map((mod: any, i: number) => (
                            <motion.div key={i} className="group relative p-6 rounded-sm bg-card border border-border hover:border-primary/30 transition-all duration-500" whileHover={{ y: -4 }}>
                                <div className="w-3 h-3 rounded-full mb-4 transition-shadow duration-500 group-hover:shadow-lg"
                                    style={{ backgroundColor: `hsl(${colorMap[mod.color]})` }}
                                />
                                <h3 className="font-display font-semibold text-foreground mb-2">{mod.label}</h3>
                                <p className="text-sm text-muted-foreground font-body leading-relaxed">{mod.description}</p>
                                <div className="absolute -bottom-4 left-1/2 w-px h-4 bg-border group-hover:bg-primary/30 transition-colors hidden lg:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BRICK BY BRICK */}
            <section className="py-24 px-6 bg-muted/5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Brick by Brick Execution</h2>
                    <div className="w-16 h-1 bg-primary rounded-full mb-16" />
                    <div className="space-y-16">
                        {project.buildSteps.map((step: any, i: number) => (
                            <div key={i} className="grid md:grid-cols-12 gap-8 items-start">
                                <div className="md:col-span-2">
                                    <span
                                        className="font-display text-6xl font-bold transition-colors duration-500 select-none pointer-events-none"
                                        style={{ color: `hsla(var(--number-display), var(--number-opacity))` }}
                                    >
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <h3 className="font-display font-bold text-foreground text-lg">{step.phase}</h3>
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
        </>
    );
}