"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type Speck = {
  id: number;
  x: number;     // % horizontal start
  size: number;  // px
  duration: number;
  delay: number;
  opacity: number;
  hue: number;   // gold / lila / pink
  driftAmp: number;
};

function makeSpeck(id: number): Speck {
  const palette = [42, 280, 320]; // gold, lila, pink
  return {
    id,
    x: Math.random() * 100,
    size: 1 + Math.random() * 3,
    duration: 14 + Math.random() * 16,
    delay: -Math.random() * 20,
    opacity: 0.4 + Math.random() * 0.5,
    hue: palette[Math.floor(Math.random() * palette.length)],
    driftAmp: 8 + Math.random() * 14,
  };
}

export function FloatingDust({ count = 40 }: { count?: number }) {
  const prefersReducedMotion = useReducedMotion();
  const [specks, setSpecks] = useState<Speck[]>([]);

  useEffect(() => {
    setSpecks(Array.from({ length: count }, (_, i) => makeSpeck(i)));
  }, [count]);

  if (prefersReducedMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {specks.map((s) => (
        <motion.span
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: "110%",
            width: s.size,
            height: s.size,
            background: `hsl(${s.hue}, 70%, 75%)`,
            boxShadow: `0 0 ${s.size * 2}px hsl(${s.hue}, 75%, 70%)`,
            opacity: s.opacity,
            willChange: "transform",
          }}
          initial={{ y: 0, x: 0 }}
          animate={{
            y: ["0%", "-120vh"],
            x: [`0px`, `${s.driftAmp}px`, `-${s.driftAmp * 0.7}px`, `${s.driftAmp * 0.4}px`, `0px`],
          }}
          transition={{
            y: { duration: s.duration, ease: "linear", repeat: Infinity, delay: s.delay },
            x: { duration: s.duration, ease: "easeInOut", repeat: Infinity, delay: s.delay },
          }}
        />
      ))}
    </div>
  );
}
