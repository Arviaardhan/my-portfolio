import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen">
      <Navbar />
      <Hero />
      <About />
      
      {/* Anda bisa menambahkan footer di sini jika perlu */}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        © 2026 MPA. Built brick by brick.
      </footer>
    </main>
  );
}
