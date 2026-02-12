"use client";

import { useCallback, useEffect, useRef, useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BRICK_COLORS = [
  "4 75% 45%",    // Red
  "174 75% 35%",  // Teal
  "38 85% 40%",   // Amber
  "215 75% 45%",  // Blue
  "150 70% 35%",  // Green
];

// Komponen Brick Lego 3D yang sudah kita pertajam
const Brick = memo(({ color, intensity }: { color: string; intensity: number }) => {
  return (
    <div className="w-full h-full p-[1px]">
      <div
        className="w-full h-full rounded-[2px] relative shadow-lg"
        style={{
          backgroundColor: `hsl(${color})`,
          borderTop: '1px solid rgba(255,255,255,0.3)',
          borderLeft: '1px solid rgba(255,255,255,0.1)',
          boxShadow: `0 ${4 * intensity}px ${10 * intensity}px rgba(0,0,0,0.2)`,
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
                boxShadow: `
                  0 2px 3px rgba(0,0,0,0.3), 
                  inset 0 1px 1px rgba(255,255,255,0.4),
                  inset 0 -1px 1px rgba(0,0,0,0.3)
                `,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default function LegoGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [grid, setGrid] = useState({ cols: 0, rows: 0 });
  const [activeBrick, setActiveBrick] = useState<number | null>(null);

  const brickSize = 60;

  useEffect(() => {
  // Gunakan path langsung tanpa kata 'public'
  const audio = new Audio("/sound/lego-click-sound.mp3");
  audio.volume = 0.8;
  audioRef.current = audio;
  
  // Memastikan audio terisi dengan benar
  console.log("Audio initialized from: ", audio.src);
}, []);

  useEffect(() => {
    const update = () => {
      setGrid({
        cols: Math.ceil(window.innerWidth / brickSize),
        rows: Math.ceil(window.innerHeight / brickSize),
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // Cek ID kotak untuk trigger suara
    const col = Math.floor(x / brickSize);
    const row = Math.floor(y / brickSize);
    const id = row * grid.cols + col;

    if (id !== activeBrick) {
      setActiveBrick(id);
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {}); // Catch jika browser blokir autoplay
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden bg-background"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: -1000, y: -1000 })}
    >
      <div 
        className="grid w-full h-full"
        style={{ 
          gridTemplateColumns: `repeat(${grid.cols}, ${brickSize}px)`,
          gridTemplateRows: `repeat(${grid.rows}, ${brickSize}px)` 
        }}
      >
        {Array.from({ length: grid.rows * grid.cols }).map((_, i) => {
          const col = i % grid.cols;
          const row = Math.floor(i / grid.cols);
          
          const bx = col * brickSize + brickSize / 2;
          const by = row * brickSize + brickSize / 2;
          
          const dist = Math.sqrt((bx - mousePos.x) ** 2 + (by - mousePos.y) ** 2);
          const isVisible = dist < 120; // Lego muncul dalam radius 120px
          const intensity = Math.max(0, 1 - dist / 120);

          return (
            <div 
              key={i} 
              className="relative border-[0.5px] border-foreground/[0.03] flex items-center justify-center"
              style={{ width: brickSize, height: brickSize }}
            >
              <AnimatePresence>
                {isVisible && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5 } }} // Efek jejak menghilang pelan
                    className="absolute inset-0 z-10"
                  >
                    <Brick 
                      color={BRICK_COLORS[(col + row) % BRICK_COLORS.length]} 
                      intensity={intensity}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}