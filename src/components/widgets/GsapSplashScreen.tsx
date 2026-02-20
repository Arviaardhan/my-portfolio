"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const BRICK_COLORS = ["#c026d3", "#0d9488", "#d97706", "#2563eb", "#16a34a"];

export default function LegoSplashScreen({ finishLoading }: { finishLoading: () => void }) {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => finishLoading(),
    });

    // 1. Animasi bata jatuh satu per satu menyusun barisan
    tl.from(".brick-part", {
      y: -100,
      opacity: 0,
      rotate: -15,
      duration: 0.6,
      stagger: 0.1,
      ease: "bounce.out",
    })
    // 2. Teks muncul di tengah bata yang sudah tersusun
    .from(".reveal-text", {
      scale: 0.8,
      opacity: 0,
      duration: 0.4,
      ease: "back.out(1.7)",
    }, "-=0.2")
    // 3. Efek "Click" (bata menyatu lebih rapat)
    .to(".brick-part", {
      y: 5,
      duration: 0.1,
      repeat: 1,
      yoyo: true,
    })
    // 4. Reveal utama: Bata pecah keluar (Explode)
    .to(".brick-part", {
      x: (i) => (i % 2 === 0 ? -500 : 500),
      y: (i) => (i < 2 ? -500 : 500),
      opacity: 0,
      duration: 0.8,
      ease: "power4.in",
      delay: 0.5,
    })
    .to(container.current, {
      opacity: 0,
      duration: 0.4,
    }, "-=0.4");

  }, { scope: container });

  return (
    <div 
      ref={container}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
    >
      <div className="relative flex flex-col items-center">
        {/* Simulasi Tumpukan Bata */}
        <div className="flex gap-2 mb-4">
          {[...Array(4)].map((_, i) => (
            <div 
              key={i}
              className="brick-part w-12 h-12 md:w-16 md:h-16 rounded-[4px] shadow-md relative"
              style={{ backgroundColor: BRICK_COLORS[i % BRICK_COLORS.length] }}
            >
              {/* Studs (Benjolan Lego) */}
              <div className="absolute -top-1 left-1/4 w-1/2 h-2 bg-black/10 rounded-full" />
            </div>
          ))}
        </div>

        <div className="overflow-hidden">
          <h2 className="reveal-text font-display text-2xl md:text-4xl font-bold tracking-tighter">
            ASSEMBLING MPA.STUDIO
          </h2>
        </div>
        
        <p className="reveal-text mt-2 text-muted-foreground font-body italic text-sm">
          Building brick by brick...
        </p>
      </div>
    </div>
  );
}