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
  { primary: "Budi", italic: "smirena.", hold: 1700 },
  { primary: "Budi", italic: "ti.", hold: 1700 },
  { primary: "Budi lepa,", italic: "svaki dan.", hold: 3000 },
];

const LETTER_STAGGER = 0.09; // slower than before (was implicit ~0.05)

const lineVariants = {
  hidden: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
  visible: {
    transition: {
      staggerChildren: LETTER_STAGGER,
      delayChildren: 0.05,
    },
  },
  exit: {
    transition: { staggerChildren: 0.02, staggerDirection: -1 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 14, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -14, filter: "blur(8px)" },
};

function Letters({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span
      className={`inline-block ${className ?? ""}`}
      variants={lineVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {ch}
        </motion.span>
      ))}
    </motion.span>
  );
}

function phraseDuration(text: string) {
  // Time it takes for the letter stagger to complete the full word.
  return text.length * LETTER_STAGGER * 1000 + 300;
}

export function MorphHeadline() {
  const prefersReducedMotion = useReducedMotion();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIdx(SEQUENCE.length - 1);
      return;
    }
    const phase = SEQUENCE[idx];
    // Hold begins only after the longest line has finished drawing in.
    const enterTime = Math.max(
      phraseDuration(phase.primary),
      phraseDuration(phase.italic)
    );
    const t = setTimeout(
      () => setIdx((i) => (i + 1) % SEQUENCE.length),
      enterTime + phase.hold
    );
    return () => clearTimeout(t);
  }, [idx, prefersReducedMotion]);

  const phase = SEQUENCE[idx];

  return (
    <h1 className="font-display text-[clamp(3.2rem,6.5vw,7rem)] font-normal text-ink leading-[1.2] whitespace-nowrap text-center">
      <div className="block min-h-[1.2em]">
        <AnimatePresence mode="wait">
          <Letters key={`p-${idx}`} text={phase.primary} />
        </AnimatePresence>
      </div>
      <div className="block min-h-[1.2em]">
        <AnimatePresence mode="wait">
          <Letters
            key={`i-${idx}`}
            text={phase.italic}
            className="font-display-italic text-lila"
          />
        </AnimatePresence>
      </div>
    </h1>
  );
}
