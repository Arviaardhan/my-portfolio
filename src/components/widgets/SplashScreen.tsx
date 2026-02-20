"use client";
import { useRef, useMemo, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import StaticBrick from "./StaticBrick";

const BRICK_COLORS = [
  "4 85% 55%",   
  "174 80% 45%",  
  "38 95% 50%",   
  "215 85% 55%",  
  "150 80% 45%",  
];
const PRIMARY_HSL = "4 65% 48%";

export default function SplashScreen({ finishLoading }: { finishLoading: () => void }) {
  const container = useRef<HTMLDivElement>(null);
  const [brickSize, setBrickSize] = useState(20);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      const width = window.innerWidth;
      const totalCols = 36; 
      if (width < 768) {
        setBrickSize(Math.floor((width * 0.95) / totalCols));
      } else {
        setBrickSize(Math.min(22, Math.floor((width * 0.8) / totalCols)));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logoData = useMemo(() => {
    const coords: { r: number; c: number; isIcon?: boolean }[] = [
      // --- ICON ---
      { r: 3, c: 0, isIcon: true }, { r: 3, c: 1, isIcon: true },
      { r: 4, c: 0, isIcon: true }, { r: 4, c: 1, isIcon: true },

      // --- HURUF "L" ---
      { r: 1, c: 4 }, { r: 1, c: 5 }, { r: 2, c: 4 }, { r: 2, c: 5 },
      { r: 3, c: 4 }, { r: 3, c: 5 }, { r: 4, c: 4 }, { r: 4, c: 5 },
      { r: 5, c: 4 }, { r: 5, c: 5 }, { r: 5, c: 6 }, { r: 5, c: 7 }, { r: 5, c: 8 },

      // --- HURUF "y" ---
      { r: 3, c: 10 }, { r: 3, c: 11 }, { r: 4, c: 10 }, { r: 4, c: 11 },
      { r: 3, c: 13 }, { r: 3, c: 14 }, { r: 4, c: 13 }, { r: 4, c: 14 },
      { r: 5, c: 10 }, { r: 5, c: 11 }, { r: 5, c: 12 }, { r: 5, c: 13 }, { r: 5, c: 14 },
      { r: 6, c: 13 }, { r: 6, c: 14 }, { r: 7, c: 13 }, { r: 7, c: 14 },
      { r: 8, c: 13 }, { r: 8, c: 14 }, { r: 8, c: 12 }, { r: 8, c: 11 },

      // --- HURUF "A" ---
      { r: 1, c: 18 }, { r: 1, c: 19 },
      { r: 2, c: 17 }, { r: 2, c: 18 }, { r: 2, c: 19 }, { r: 2, c: 20 },
      { r: 3, c: 17 }, { r: 3, c: 20 }, 
      { r: 4, c: 17 }, { r: 4, c: 18 }, { r: 4, c: 19 }, { r: 4, c: 20 },
      { r: 5, c: 17 }, { r: 5, c: 20 }, { r: 6, c: 17 }, { r: 6, c: 20 }, // Kaki A sampai baseline row 6

      // --- HURUF "r" ---
      { r: 3, c: 23 }, { r: 3, c: 24 },
      { r: 4, c: 23 }, { r: 4, c: 24 },
      { r: 5, c: 23 }, { r: 5, c: 24 },
      { r: 6, c: 23 }, { r: 6, c: 24 }, // Baseline di Row 6
      // Lengan/Kail Tebal (Arm/Hook)
      { r: 3, c: 25 }, { r: 3, c: 26 }, // Bagian atas menjorok ke kanan
      { r: 4, c: 26 }, { r: 4, c: 27 }, // Bagian lengkungan turun sedikit

      // --- HURUF "t" ---
      { r: 1, c: 30 }, { r: 1, c: 31 }, // Top
      { r: 2, c: 28 }, { r: 2, c: 29 }, { r: 2, c: 30 }, { r: 2, c: 31 }, { r: 2, c: 32 }, { r: 2, c: 33 }, // Crossbar
      { r: 3, c: 30 }, { r: 3, c: 31 },
      { r: 4, c: 30 }, { r: 4, c: 31 },
      { r: 5, c: 30 }, { r: 5, c: 31 },
      { r: 6, c: 31 }, { r: 6, c: 32 }, // Bottom curve di baseline row 6
    ];

    return coords.map((pos) => ({
      ...pos,
      color: pos.isIcon ? PRIMARY_HSL : BRICK_COLORS[Math.floor(Math.random() * BRICK_COLORS.length)]
    }));
  }, []);

  useGSAP(() => {
    if (!mounted) return;
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(container.current, { opacity: 0, duration: 0.8, onComplete: finishLoading });
      }
    });

    tl.from(".lego-piece", {
      scale: 0,
      opacity: 0,
      y: 40,
      rotationX: -45,
      duration: 0.4,
      stagger: { amount: 1.2, from: "start" },
      ease: "back.out(1.5)"
    })
    .to({}, { duration: 1.5 })
    .to(".lego-piece", {
      y: -100,
      opacity: 0,
      stagger: { amount: 0.5, from: "random" },
      ease: "power2.in"
    });
  }, { scope: container, dependencies: [mounted, logoData] });

  if (!mounted) return null;

  return (
    <div ref={container} className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden">
      <div className="relative" style={{ width: brickSize * 36, height: brickSize * 10 }}>
        {logoData.map((brick, i) => (
          <div
            key={i}
            className="lego-piece absolute"
            style={{
              width: brickSize,
              height: brickSize,
              left: brick.c * brickSize,
              top: brick.r * brickSize,
            }}
          >
            <StaticBrick color={brick.color} />
          </div>
        ))}
      </div>
    </div>
  );
}