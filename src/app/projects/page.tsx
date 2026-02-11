import Navbar from "@/components/navbar/navbar";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectItem from "@/components/projects/ProjectItem";
import { PROJECTS } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      
      <ProjectHeader />

      {/* Project List Container */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto space-y-32">
          {PROJECTS.map((project, index) => (
            <ProjectItem 
              key={project.slug} 
              project={project} 
              index={index} 
            />
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
            <div className="w-2 h-2 rounded-sm bg-brick-amber/40" />
          </div>
        </div>
      </footer>
    </main>
  );
}