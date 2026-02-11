"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CaseStudyNavProps {
  prevProject: any;
  nextProject: any;
}

export default function CaseStudyNav({ prevProject, nextProject }: CaseStudyNavProps) {
  return (
    <section className="border-t border-border py-24 px-6 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm font-display text-muted-foreground tracking-widest uppercase mb-12">
          Continue the Build
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Previous Project Button */}
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
            <div className="hidden md:block" />
          )}

          {/* Next Project Button / Back to Portfolio */}
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
  );
}