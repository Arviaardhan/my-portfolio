// src/app/case-study/[slug]/page.tsx

import { PROJECTS } from "@/data/projects";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar/navbar";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyContent from "@/components/case-study/CaseStudyContent";
import CaseStudyVisuals from "@/components/case-study/CaseStudyVisuals";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import CaseStudyOutcome from "@/components/case-study/CaseStudyOutcome";
import CaseStudyChallenge from "@/components/case-study/CaseStudyChallenge";

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  
  const { slug } = await params;

  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const prevProject = PROJECTS[projectIndex - 1];
  const nextProject = PROJECTS[projectIndex + 1];

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <CaseStudyHero project={project} />
      <CaseStudyChallenge project={project} />
      <CaseStudyContent project={project} />
      <CaseStudyVisuals project={project} />
      <CaseStudyOutcome project={project} />
      <CaseStudyNav prevProject={prevProject} nextProject={nextProject} />
      
      <footer className="py-16 text-center text-sm text-muted-foreground font-body">
        © 2026 MPA. Built brick by brick.
      </footer>
    </main>
  );
}