"use client";

import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/navbar/navbar";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, memo } from "react";
import gsap from "gsap";

// Komponen Brick Identik dengan LegoGrid.tsx
const Brick = memo(({ color, isPowering, className, id }: { color: string; isPowering: boolean; className?: string; id?: string }) => {
  return (
    <div 
      id={id} 
      className={`w-20 h-20 md:w-24 md:h-24 p-[2px] transition-all duration-700 ${className}`}
      style={{ filter: isPowering ? "grayscale(0%) brightness(100%)" : "grayscale(100%) brightness(40%)", opacity: isPowering ? 1 : 0.3 }}
    >
      <div
        className="w-full h-full rounded-[2px] relative shadow-lg"
        style={{
          backgroundColor: `hsl(${color})`,
          borderTop: '1px solid rgba(255,255,255,0.3)',
          borderLeft: '1px solid rgba(255,255,255,0.1)',
          boxShadow: isPowering ? `0 10px 30px rgba(0,0,0,0.4)` : 'none',
        }}
      >
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 p-[20%] gap-[16%]">
          {[...Array(4)].map((_, idx) => (
            <div
              key={idx}
              className="w-full h-full rounded-full"
              style={{
                backgroundColor: `hsl(${color})`,
                backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.2) 100%)`,
                boxShadow: isPowering ? `0 2px 3px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.4)` : 'none',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
});
Brick.displayName = "Brick";

const STATUS_MESSAGES = [
  "INITIALIZING CORE",
  "FETCHING ASSETS",
  "CONNECTING MODULES",
  "OPTIMIZING STUD GRID",
  "FINAL SNAP"
];

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);
  const [statusText, setStatusText] = useState(STATUS_MESSAGES[0]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  const BRICK_COLORS = ["4 75% 45%", "174 75% 35%", "38 85% 40%", "215 75% 45%"];

  useEffect(() => {
    const sessionEntered = sessionStorage.getItem("hasEnteredLego");
    if (sessionEntered === "true") {
      setHasEntered(true);
      setLoading(false);
    } else {
      setLoading(false);
      
      const tl = gsap.timeline({
        onComplete: () => setIsLoaded(true)
      });

      // Sequence Power Up
      BRICK_COLORS.forEach((_, i) => {
        tl.to({}, {
          duration: 0.8,
          onStart: () => {
            setActiveStep(i);
            setStatusText(STATUS_MESSAGES[i]);
          }
        });
      });

      tl.to({}, {
        duration: 0.5,
        onStart: () => setStatusText(STATUS_MESSAGES[4])
      });
    }
  }, []);

  const handleEnter = () => {
    if (!isLoaded) return;

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("hasEnteredLego", "true");
        setHasEntered(true);
      }
    });

    tl.to(".loading-container", { 
      scale: 1.1, 
      filter: "blur(10px)", 
      opacity: 0, 
      duration: 0.8,
      ease: "power2.in"
    })
    .to(".power-brick", {
      x: () => (Math.random() - 0.5) * 2000,
      y: () => (Math.random() - 0.5) * 2000,
      rotation: () => Math.random() * 720,
      duration: 1,
      stagger: 0.05
    }, "-=0.8");
  };

  if (loading) return null;

  return (
    <main className="relative bg-background min-h-screen">
      <AnimatePresence>
        {!hasEntered && (
          <div 
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center cursor-pointer overflow-hidden"
            onClick={handleEnter}
          >
            <div className="loading-container flex flex-col items-center">
              {/* STATUS TEXT (Ganti Angka) */}
              <div className="mb-12 h-8">
                <motion.p 
                  key={statusText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-primary font-display font-bold tracking-[0.5em] text-sm md:text-base uppercase"
                >
                  {statusText}
                </motion.p>
              </div>

              {/* LEGO POWER-UP GRID */}
              <div className="grid grid-cols-2 gap-4 p-6 bg-primary/5 rounded-2xl border border-white/5 shadow-2xl">
                {BRICK_COLORS.map((color, i) => (
                  <Brick 
                    key={i} 
                    id={`brick-${i}`}
                    color={color} 
                    intensity={1}
                    isPowering={i <= activeStep}
                    className="power-brick"
                  />
                ))}
              </div>

              {/* INTERACTION HINT */}
              <div className="mt-16 text-center">
                {isLoaded ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="h-px w-24 bg-primary/50" />
                    <h2 className="font-display font-black text-3xl italic tracking-tighter text-foreground">
                      SYSTEM READY
                    </h2>
                    <p className="text-muted-foreground text-[10px] tracking-[0.4em] animate-pulse">
                      TAP TO INITIALIZE INTERFACE
                    </p>
                  </motion.div>
                ) : (
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <motion.div 
                        key={i}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                        className="w-1.5 h-1.5 rounded-full bg-primary"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* WEB CONTENT */}
      {hasEntered && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
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