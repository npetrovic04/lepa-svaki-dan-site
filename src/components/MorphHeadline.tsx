"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type Phase = {
  primary: string;
  italic: string;
  /** ms to hold this phrase on screen */
  hold: number;
};

const SEQUENCE: Phase[] = [
  { primary: "Budi", italic: "smirena.", hold: 1400 },
  { primary: "Budi", italic: "ti.", hold: 1400 },
  { primary: "Budi lepa,", italic: "svaki dan.", hold: 999999 },
];

export function MorphHeadline() {
  const prefersReducedMotion = useReducedMotion();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIdx(SEQUENCE.length - 1);
      return;
    }
    if (idx >= SEQUENCE.length - 1) return;
    const t = setTimeout(() => setIdx((i) => i + 1), SEQUENCE[idx].hold);
    return () => clearTimeout(t);
  }, [idx, prefersReducedMotion]);

  const phase = SEQUENCE[idx];

  return (
    <h1 className="font-display text-[clamp(3.2rem,6.5vw,7rem)] font-normal text-ink leading-[1.2] whitespace-nowrap text-center">
      <div className="block min-h-[1.2em]">
        <AnimatePresence mode="wait">
          <motion.span
            key={`p-${idx}`}
            initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -14, filter: "blur(8px)" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            {phase.primary}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="block min-h-[1.2em]">
        <AnimatePresence mode="wait">
          <motion.span
            key={`i-${idx}`}
            initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -14, filter: "blur(8px)" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="font-display-italic text-lila inline-block"
          >
            {phase.italic}
          </motion.span>
        </AnimatePresence>
      </div>
    </h1>
  );
}
