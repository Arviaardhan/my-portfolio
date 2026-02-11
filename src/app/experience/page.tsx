import Navbar from "@/components/navbar/navbar";
import ExperienceHero from "@/components/experience/ExperienceHero";
import ExperienceLog from "@/components/experience/ExperienceLog";
import CapabilityMatrix from "@/components/experience/CapabilityMatrix";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ExperiencePage() {
  return (
    <main className="relative bg-background min-h-screen">
      <Navbar />
      <ExperienceHero />
      
      <section className="py-32 px-6 relative border-t border-border/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-foreground mb-4">Beyond Job Titles.</h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-16" />
          <p className="text-xl md:text-2xl font-body font-light leading-relaxed text-foreground/90 max-w-2xl">
            I don&apos;t think in terms of tasks assigned. I think in systems — how modules connect, how data flows.
          </p>
        </div>
      </section>

      <ExperienceLog />
      <CapabilityMatrix />

      {/* CTA */}
      <section className="py-32 px-6 text-center bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-12">Ready for the next build?</h2>
          <Link href="/projects" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-display font-semibold rounded-sm hover:opacity-90 transition-all group">
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-6 text-center text-sm text-muted-foreground font-body">
        © 2026 MPA. Built brick by brick.
      </footer>
    </main>
  );
}