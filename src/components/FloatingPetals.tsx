"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

// Elongated almond/leaf petal silhouettes — tapered tip + rounded base,
// not the previous balloon-shaped circles. ViewBox 100x140 (taller than wide).
const PETAL_PATHS = [
  // Classic rose petal — long, pointed tip
  "M50 4 C 70 18, 86 50, 78 90 C 72 118, 56 134, 50 134 C 44 134, 28 118, 22 90 C 14 50, 30 18, 50 4 Z",
  // Slightly curved / asymmetric
  "M52 4 C 76 22, 90 56, 78 96 C 70 122, 52 134, 48 134 C 42 132, 24 116, 20 88 C 16 52, 32 20, 52 4 Z",
  // Wider, fuller bloom petal
  "M50 4 C 78 22, 92 60, 82 98 C 74 124, 56 136, 50 136 C 44 136, 26 124, 18 98 C 8 60, 22 22, 50 4 Z",
  // Narrower, more pointed
  "M50 4 C 66 22, 78 56, 72 96 C 68 124, 56 134, 50 134 C 44 134, 32 124, 28 96 C 22 56, 34 22, 50 4 Z",
];

type Petal = {
  id: number;
  variant: number;
  width: number; // px, height is 1.4× this (matches viewBox ratio)
  startX: number;
  swayAmp: number; // how wide it swings left-right (vw)
  swayPeriod: number; // seconds per swing cycle
  rotateStart: number;
  spinSpeed: number; // deg per fall (continuous)
  flipSpeed: number; // 3D Y-axis flip rate (catches air)
  duration: number; // total fall time
  delay: number;
  opacity: number;
  flipped: boolean;
};

function makePetal(id: number, immediate: boolean): Petal {
  return {
    id,
    variant: Math.floor(Math.random() * PETAL_PATHS.length),
    width: 20 + Math.random() * 28, // 20-48 px (height auto = 28-67 px)
    startX: Math.random() * 100,
    swayAmp: 4 + Math.random() * 8, // 4-12vw side-to-side
    swayPeriod: 3 + Math.random() * 3, // 3-6s per cycle
    rotateStart: Math.random() * 360,
    spinSpeed: (Math.random() - 0.5) * 180, // ±90° over the fall
    flipSpeed: 4 + Math.random() * 4, // 4-8s per 3D flip
    duration: 16 + Math.random() * 14, // 16-30s
    delay: immediate ? -Math.random() * 20 : Math.random() * 6,
    opacity: 0.4 + Math.random() * 0.35,
    flipped: Math.random() > 0.5,
  };
}

export function FloatingPetals({ count = 10 }: { count?: number }) {
  const prefersReducedMotion = useReducedMotion();
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    setPetals(Array.from({ length: count }, (_, i) => makePetal(i, true)));
  }, [count]);

  if (prefersReducedMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden" style={{ perspective: 1200 }}>
      {petals.map((p) => {
        // Build a sway keyframe array — sine-wave path across the fall
        const cycles = Math.max(2, Math.floor(p.duration / p.swayPeriod));
        const swayKeys = Array.from({ length: cycles * 2 + 1 }, (_, i) => {
          const phase = (i % 2 === 0 ? 0 : (i % 4 === 1 ? 1 : -1));
          return `${p.swayAmp * phase}vw`;
        });
        // Build flip keyframes (3D rotation around Y) — like a leaf catching air
        const flipKeys = Array.from({ length: Math.floor(p.duration / p.flipSpeed) + 1 }, (_, i) => i * 180);

        return (
          <motion.div
            key={p.id}
            className="absolute"
            style={{
              left: `${p.startX}vw`,
              top: "-12vh",
              width: p.width,
              height: p.width * 1.4,
              opacity: p.opacity,
              willChange: "transform",
              transformStyle: "preserve-3d",
            }}
            initial={{ y: 0, x: 0, rotate: p.rotateStart, rotateY: 0 }}
            animate={{
              y: ["0vh", "115vh"],
              x: swayKeys,
              rotate: [p.rotateStart, p.rotateStart + p.spinSpeed],
              rotateY: flipKeys,
            }}
            transition={{
              y: { duration: p.duration, ease: "linear", repeat: Infinity, delay: p.delay },
              x: { duration: p.duration, ease: "easeInOut", repeat: Infinity, delay: p.delay },
              rotate: { duration: p.duration, ease: "linear", repeat: Infinity, delay: p.delay },
              rotateY: { duration: p.duration, ease: "easeInOut", repeat: Infinity, delay: p.delay },
            }}
          >
            <svg
              viewBox="0 0 100 140"
              className="h-full w-full"
              style={{ transform: p.flipped ? "scaleX(-1)" : undefined, filter: "drop-shadow(0 3px 6px rgba(148,113,211,0.18))" }}
            >
              <defs>
                <radialGradient id={`petal-grad-${p.id}`} cx="50%" cy="20%" r="80%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="55%" stopColor="#fdf2ef" />
                  <stop offset="100%" stopColor="#c97a99" />
                </radialGradient>
                <linearGradient id={`petal-vein-${p.id}`} x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="rgba(180,120,150,0)" />
                  <stop offset="50%" stopColor="rgba(180,120,150,0.18)" />
                  <stop offset="100%" stopColor="rgba(180,120,150,0)" />
                </linearGradient>
              </defs>
              <path d={PETAL_PATHS[p.variant]} fill={`url(#petal-grad-${p.id})`} />
              {/* Subtle central vein for realism */}
              <path d="M50 12 L50 130" stroke={`url(#petal-vein-${p.id})`} strokeWidth="0.8" fill="none" />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
}
