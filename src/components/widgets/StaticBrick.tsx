"use client";
import { memo } from "react";

const StaticBrick = memo(({ color }: { color: string }) => {
  return (
    <div className="w-full h-full p-[1px]">
      <div
        className="w-full h-full rounded-[2px] relative shadow-md"
        style={{
          backgroundColor: `hsl(${color})`,
          borderTop: '1px solid rgba(255,255,255,0.4)', 
          borderLeft: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '2px 2px 4px rgba(0,0,0,0.15)'
        }}
      >
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 p-[20%] gap-[16%]">
          {[...Array(4)].map((_, idx) => (
            <div
              key={idx}
              className="w-full h-full rounded-full"
              style={{
                backgroundColor: `hsl(${color})`,
                backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0.1) 100%)`,
                boxShadow: `0 1px 2px rgba(0,0,0,0.2), inset 0 0.5px 0.5px rgba(255,255,255,0.4)`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

StaticBrick.displayName = "StaticBrick";
export default StaticBrick;