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
  hue: number;
  driftAmp: number;
};

function makeSpeck(id: number): Speck {
  const palette = [42, 280, 320]; // gold, lila, pink
  return {
    id,
    x: Math.random() * 100,
    size: 3 + Math.random() * 7,   // 3-10 px (much bigger than before)
    duration: 12 + Math.random() * 14,
    delay: -Math.random() * 20,
    opacity: 0.5 + Math.random() * 0.45,
    hue: palette[Math.floor(Math.random() * palette.length)],
    driftAmp: 14 + Math.random() * 24,
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
            background: `radial-gradient(circle, hsl(${s.hue}, 80%, 78%) 0%, hsl(${s.hue}, 75%, 65%) 60%, transparent 100%)`,
            boxShadow: `0 0 ${s.size * 4}px hsl(${s.hue}, 80%, 70%), 0 0 ${s.size * 8}px hsla(${s.hue}, 75%, 65%, 0.5)`,
            opacity: s.opacity,
            willChange: "transform",
          }}
          initial={{ y: 0, x: 0 }}
          animate={{
            y: ["0%", "-130vh"],
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
