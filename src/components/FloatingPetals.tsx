"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

// Four hand-drawn petal silhouettes — white body, soft pink tip — matching
// the source photos. Each has its own viewBox so it animates as one shape.
const PETAL_PATHS = [
  // Curved teardrop, pink wash at tip
  "M50 5 C 72 12, 86 36, 80 64 C 74 88, 50 96, 32 86 C 14 76, 8 50, 18 28 C 26 12, 38 5, 50 5 Z",
  // Slightly tilted, narrower
  "M52 4 C 78 14, 88 42, 78 70 C 68 92, 42 96, 26 82 C 12 68, 12 40, 26 22 C 34 10, 44 4, 52 4 Z",
  // Folded look — asymmetric
  "M50 6 C 76 10, 90 36, 84 62 C 78 88, 50 96, 30 84 C 14 72, 10 46, 22 26 C 30 14, 42 6, 50 6 Z",
  // Rounder petal
  "M50 4 C 74 8, 92 32, 88 60 C 84 88, 56 98, 34 88 C 14 78, 6 52, 16 28 C 24 12, 38 4, 50 4 Z",
];

type Petal = {
  id: number;
  variant: number;
  size: number;
  startX: number;
  drift: number;
  rotateStart: number;
  rotateEnd: number;
  duration: number;
  delay: number;
  opacity: number;
  flipped: boolean;
};

function makePetal(id: number, immediate: boolean): Petal {
  return {
    id,
    variant: Math.floor(Math.random() * PETAL_PATHS.length),
    size: 28 + Math.random() * 38, // 28-66 px
    startX: Math.random() * 100,    // 0-100% viewport width
    drift: (Math.random() - 0.5) * 30, // ±15vw horizontal sway
    rotateStart: Math.random() * 360,
    rotateEnd: Math.random() * 720 - 360, // ±1 full rotation
    duration: 18 + Math.random() * 18, // 18-36s
    delay: immediate ? -Math.random() * 18 : Math.random() * 8,
    opacity: 0.35 + Math.random() * 0.35, // 0.35-0.70
    flipped: Math.random() > 0.5,
  };
}

export function FloatingPetals({ count = 8 }: { count?: number }) {
  const prefersReducedMotion = useReducedMotion();
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    setPetals(Array.from({ length: count }, (_, i) => makePetal(i, true)));
  }, [count]);

  if (prefersReducedMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.startX}vw`,
            top: "-8vh",
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            willChange: "transform",
          }}
          initial={{ y: 0, x: 0, rotate: p.rotateStart }}
          animate={{
            y: ["0vh", "108vh"],
            x: [`0vw`, `${p.drift / 2}vw`, `${p.drift}vw`, `${p.drift / 2}vw`, `0vw`],
            rotate: [p.rotateStart, p.rotateStart + p.rotateEnd],
          }}
          transition={{
            y: { duration: p.duration, ease: "linear", repeat: Infinity, delay: p.delay },
            x: { duration: p.duration, ease: "easeInOut", repeat: Infinity, delay: p.delay },
            rotate: { duration: p.duration, ease: "linear", repeat: Infinity, delay: p.delay },
          }}
        >
          <svg
            viewBox="0 0 100 100"
            className="h-full w-full"
            style={{ transform: p.flipped ? "scaleX(-1)" : undefined }}
          >
            <defs>
              <radialGradient id={`petal-grad-${p.id}`} cx="50%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="60%" stopColor="#fff5f3" />
                <stop offset="100%" stopColor="#d99bb0" />
              </radialGradient>
              <filter id={`petal-blur-${p.id}`}>
                <feGaussianBlur stdDeviation="0.4" />
              </filter>
            </defs>
            <path
              d={PETAL_PATHS[p.variant]}
              fill={`url(#petal-grad-${p.id})`}
              filter={`url(#petal-blur-${p.id})`}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
