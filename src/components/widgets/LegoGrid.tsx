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
  const lift = isActive ? intensity * 8 : 0;
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
        className="w-full aspect-square rounded-sm relative"
        style={{
          backgroundColor: `hsl(${color})`,
          opacity: 0.12 + glow * 0.4,
          boxShadow: isActive
            ? `0 ${4 + lift}px ${12 + lift * 2}px -2px hsl(${color} / ${0.3 + glow * 0.3}), inset 0 1px 1px hsl(0 0% 100% / 0.1)`
            : `0 2px 4px -1px hsl(${color} / 0.1), inset 0 1px 1px hsl(0 0% 100% / 0.05)`,
          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Stud on top */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] rounded-full"
          style={{
            backgroundColor: `hsl(${color})`,
            opacity: 0.25 + glow * 0.5,
            boxShadow: `inset 0 -1px 2px hsl(0 0% 0% / 0.2), 0 1px 2px hsl(0 0% 100% / 0.1)`,
          }}
        />
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
