// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const ROWS = 20;
// const COLS = 40;

// export default function PixelGrid() {
//   const [hoverPos, setHoverPos] = useState({ x: -1, y: -1 });

//   const pixels = Array.from({ length: ROWS * COLS }, (_, i) => {
//     const row = Math.floor(i / COLS);
//     const col = i % COLS;
//     return { row, col };
//   });

//   return (
//     <div
//       className="absolute inset-0 grid"
//       style={{
//         gridTemplateColumns: `repeat(${COLS}, 1fr)`,
//         gridTemplateRows: `repeat(${ROWS}, 1fr)`,
//         pointerEvents: "none",
//       }}
//       onMouseMove={(e) => {
//         const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
//         const x = Math.floor(((e.clientX - rect.left) / rect.width) * COLS);
//         const y = Math.floor(((e.clientY - rect.top) / rect.height) * ROWS);
//         setHoverPos({ x, y });
//       }}
//       onMouseLeave={() => setHoverPos({ x: -1, y: -1 })}
//     >
//       {pixels.map(({ row, col }) => {
//         const distance =
//           hoverPos.x >= 0
//             ? Math.hypot(hoverPos.x - col, hoverPos.y - row)
//             : 1000;
//         const scale = distance < 3 ? 1.5 - distance * 0.3 : 1;

//         return (
//           <motion.div
//             key={`${row}-${col}`}
//             animate={{ scale: [1, 1.1, 1] }}
//             transition={{
//               duration: Math.random() * 2 + 1,
//               repeat: Infinity,
//               repeatType: "loop",
//             }}
//             className="w-full h-full bg-[rgb(var(--primary))] dark:bg-[rgb(var(--accent))] rounded-sm opacity-20"
//           />
//         );
//       })}
//     </div>
//   );
// }
