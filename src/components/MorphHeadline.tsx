"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

/**
 * Hero headline animation:
 *   • "Budi" animates in once on mount, then stays fixed forever.
 *   • Italic second line cycles through a manifesto sequence,
 *     resets to the first phrase after holding the final one.
 */

type Phrase = { text: string; hold: number };

const PHRASES: Phrase[] = [
  { text: "smirena.", hold: 1700 },
  { text: "ti.", hold: 1700 },
  { text: "lepa, svaki dan.", hold: 2800 },
];

const LETTER_STAGGER = 0.09;

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
  return text.length * LETTER_STAGGER * 1000 + 300;
}

export function MorphHeadline() {
  const prefersReducedMotion = useReducedMotion();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIdx(PHRASES.length - 1);
      return;
    }
    const phrase = PHRASES[idx];
    const enterTime = phraseDuration(phrase.text);
    const t = setTimeout(() => {
      setIdx((i) => (i + 1) % PHRASES.length);
    }, enterTime + phrase.hold);
    return () => clearTimeout(t);
  }, [idx, prefersReducedMotion]);

  const phrase = PHRASES[idx];

  return (
    <h1 className="font-display text-[clamp(2.4rem,7vw,7rem)] font-normal text-ink leading-[1.2] text-center px-4">
      <span className="block whitespace-nowrap">
      {/* Row 1 — "Budi" animates ONCE on mount, then stays fixed */}
      <div className="block min-h-[1.2em]">
        {prefersReducedMotion ? (
          <span>Budi</span>
        ) : (
          <Letters text="Budi" />
        )}
      </div>

      {/* Row 2 — italic phrase cycles */}
      <div className="block min-h-[1.2em]">
        <AnimatePresence mode="wait">
          <Letters
            key={`i-${idx}`}
            text={phrase.text}
            className="font-display-italic text-lila"
          />
        </AnimatePresence>
      </div>
      </span>
    </h1>
  );
}
