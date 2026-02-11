"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import BrickLabel from "@/components/widgets/BrickLabel";

interface ProjectItemProps {
    project: any;
    index: number;
}

export default function ProjectItem({ project, index }: ProjectItemProps) {
    return (
        <motion.article
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
            <span className="font-display text-7xl sm:text-8xl md:text-8xl lg:text-9xl font-bold text-foreground/[0.04] absolute -top-8 sm:-top-12 md:-left-2 sm:-left-2 select-none pointer-events-none transition-all">
                {String(index + 1).padStart(2, "0")}
            </span>

            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center relative">
                {/* Content Side */}
                <div className={`md:col-span-6 pt-12 md:pt-4 lg:pt-1 ${index % 2 === 1 ? "md:order-2" : ""}`}>
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
                        {project.stack.map((tech: any) => (
                            <BrickLabel key={tech.label} variant={tech.variant}>
                                {tech.label}
                            </BrickLabel>
                        ))}
                    </div>

                    <Link
                        href={`/case-study/${project.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-display font-medium text-foreground hover:text-primary transition-colors group"
                    >
                        View Case Study
                        <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </div>

                {/* Visual Side (Phone Mockup) */}
                <div className={`md:col-span-6 flex justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="relative group">
                        <div className="w-64 h-[480px] rounded-2xl bg-card border-2 border-border relative overflow-hidden shadow-2xl shadow-primary/5 group-hover:shadow-primary/10 transition-all duration-500">
                            <div className="absolute inset-3 rounded-xl bg-muted/50 flex items-center justify-center">
                                <div className="space-y-3 w-full px-6">
                                    <div className="h-4 w-1/2 mx-auto rounded-sm bg-foreground/[0.06]" />
                                    <div className="h-20 w-full rounded-sm bg-primary/10 mt-4" />
                                    <div className="h-3 w-3/4 rounded-sm bg-foreground/[0.06]" />
                                    <div className="h-3 w-full rounded-sm bg-foreground/[0.04]" />
                                    <div className="h-10 w-full rounded-sm bg-accent/15 mt-4" />
                                </div>
                            </div>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-card rounded-b-xl" />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -top-3 -right-3 w-6 h-6 rounded-sm bg-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-1" />
                        <div className="absolute -bottom-3 -left-3 w-4 h-4 rounded-sm bg-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 group-hover:translate-y-1" />
                    </div>
                </div>
            </div>
        </motion.article>
    );
}