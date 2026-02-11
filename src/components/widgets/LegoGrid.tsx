import { useCallback, useEffect, useRef, useState, memo } from "react";

const BRICK_COLORS = [
  "var(--brick-red)",
  "var(--brick-teal)",
  "var(--brick-amber)",
  "var(--brick-blue)",
  "var(--brick-green)",
];

interface BrickProps {
  color: string;
  delay: number;
  isActive: boolean;
  intensity: number;
}

const Brick = memo(({ color, delay, isActive, intensity }: BrickProps) => {
  const lift = isActive ? intensity * 12 : 0;
  const glow = isActive ? intensity * 0.6 : 0;

  return (
    <div
      className="relative transition-transform duration-500 ease-out"
      style={{
        transform: `translateY(${-lift}px)`,
        animationDelay: `${delay}s`,
      }}
    >
      {/* Brick body */}
      <div
        className="w-full aspect-square rounded-[3px] relative transition-all duration-500"
        style={{
          backgroundColor: `hsl(${color})`,
          opacity: `calc(var(--lego-opacity) + ${glow * 0.3})`,
          border: '1px solid hsla(0, 0%, 0%, 0.08)',
          boxShadow: isActive
            ? `0 ${10 + lift}px 20px -5px hsl(${color} / 0.4)`
            : `0 2px 4px rgba(0,0,0,0.08)`,
        }}
      >
        {/* Container Grid untuk 4 Stud */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 p-[20%] gap-[22%]">
          {[...Array(4)].map((_, idx) => (
            <div
              key={idx}
              className="w-full h-full rounded-full relative"
              style={{
                // Warna dasar sama dengan kotak
                backgroundColor: `hsl(${color})`,
                // Highlight di atas (seolah terkena lampu) dan shadow di bawah
                backgroundImage: `linear-gradient(135deg, rgba(255,255,255,25) 0%, rgba(0,0,0,15) 100%)`,
                boxShadow: `
                  0 1px 2px rgba(0,0,0,0.3), 
                  inset 0 1px 1px rgba(255,255,255,0.3),
                  inset 0 -1px 1px rgba(0,0,0,0.2)
                `,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

Brick.displayName = "Brick";

export default function LegoGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [cols, setCols] = useState(20);
  const [rows, setRows] = useState(12);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const brickSize = w < 768 ? 50 : 60;
      setCols(Math.ceil(w / brickSize) + 1);
      setRows(Math.ceil(h / brickSize) + 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: -1000, y: -1000 });
  }, []);

  const brickSize = typeof window !== "undefined" && window.innerWidth < 768 ? 50 : 60;
  const radius = 150;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="grid w-full h-full"
        style={{
          gridTemplateColumns: `repeat(${cols}, ${brickSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${brickSize}px)`,
          gap: "2px",
        }}
      >
        {Array.from({ length: rows * cols }).map((_, i) => {
          const col = i % cols;
          const row = Math.floor(i / cols);
          const bx = col * (brickSize + 2) + brickSize / 2;
          const by = row * (brickSize + 2) + brickSize / 2;
          const dist = Math.sqrt((bx - mousePos.x) ** 2 + (by - mousePos.y) ** 2);
          const isActive = dist < radius;
          const intensity = isActive ? Math.max(0, 1 - dist / radius) : 0;
          const colorIndex = (col * 7 + row * 13) % BRICK_COLORS.length;
          const delay = (col + row) * 0.3;

          return (
            <Brick
              key={i}
              color={BRICK_COLORS[colorIndex]}
              delay={delay}
              isActive={isActive}
              intensity={intensity}
            />
          );
        })}
      </div>
    </div>
  );
}
