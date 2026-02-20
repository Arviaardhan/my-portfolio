"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LegoIntro from "@/components/widgets/RevealPage";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sessionEntered = sessionStorage.getItem("hasEnteredLego");
    if (sessionEntered === "true") {
      setHasEntered(true);
    }
    setLoading(false);
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem("hasEnteredLego", "true");
    setHasEntered(true);
  };

  if (loading) return null;

  return (
    <main className="relative bg-background min-h-screen">
      <AnimatePresence mode="wait">
        {!hasEntered && (
          <LegoIntro key="lego-intro" onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {/* WEB CONTENT */}
      {hasEntered && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <Navbar />
          <Hero />
          <About />
          <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
            © 2026 MPA. Built brick by brick.
          </footer>
        </motion.div>
      )}
    </main>
  );
}