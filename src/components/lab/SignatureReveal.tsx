"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Realistic cursive signature in two stacked rows:
 *   Row 1: "Dr Tamara"   ← drawn first
 *   Row 2: "Vujačić"     ← drawn after a brief pen-lift
 * Sacramento (Google Font) rendered in champagne-gold gradient.
 * Each row reveals via clip-path while a gold "pen tip" droplet
 * travels its width, simulating real writing.
 */

const ROW_DURATION = 2.4;       // seconds per row
const PEN_LIFT_PAUSE = 0.45;    // gap between row 1 and row 2
const ROW1_START = 0.2;
const ROW2_START = ROW1_START + ROW_DURATION + PEN_LIFT_PAUSE;
const SIG_END = ROW2_START + ROW_DURATION;

function Row({
  text,
  delay,
  className = "",
  reduced,
}: {
  text: string;
  delay: number;
  className?: string;
  reduced: boolean;
}) {
  const inkReveal = reduced
    ? { initial: false, animate: { clipPath: "inset(-20% 0% -20% 0)" } }
    : {
        initial: { clipPath: "inset(-20% 100% -20% 0)" },
        whileInView: { clipPath: "inset(-20% 0% -20% 0)" },
        viewport: { once: true, margin: "-80px" } as const,
      };

  const penMove = reduced
    ? { initial: { left: "100%", opacity: 0 }, animate: { left: "100%", opacity: 0 } }
    : {
        initial: { left: "0%", opacity: 0 },
        whileInView: { left: "100%", opacity: [0, 1, 1, 1, 0] },
        viewport: { once: true, margin: "-80px" } as const,
      };

  return (
    <div className={`relative inline-block overflow-visible ${className}`}>
      <motion.div
        className="font-script select-none"
        style={{
          background:
            "linear-gradient(115deg, #DDB045 0%, #CB9D39 40%, #8B6B3D 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          filter: "drop-shadow(0 1px 0 rgba(139,107,61,0.18))",
          fontSize: "clamp(2.8rem, 5.6vw, 4.2rem)",
          lineHeight: 1.15, // give ascenders (D, k, l, b) breathing room
          letterSpacing: "0.005em",
          paddingTop: "0.12em",  // top room for D, k, l, b
          paddingBottom: "0.18em", // descender room (j, ć)
        }}
        {...inkReveal}
        transition={{ duration: ROW_DURATION, ease: "linear", delay }}
      >
        {text}
      </motion.div>

      {!reduced && (
        <motion.span
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            top: "55%",
            transform: "translate(-50%, -50%)",
            width: 13,
            height: 13,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 35% 35%, #FFE9A8 0%, #DDB045 45%, #8B6B3D 100%)",
            boxShadow:
              "0 0 14px rgba(221,176,69,0.85), 0 0 30px rgba(221,176,69,0.4)",
          }}
          {...penMove}
          transition={{
            left: { duration: ROW_DURATION, ease: "linear", delay },
            opacity: {
              duration: ROW_DURATION + 0.3,
              ease: "easeInOut",
              delay: delay - 0.05,
              times: [0, 0.05, 0.5, 0.95, 1],
            },
          }}
        />
      )}
    </div>
  );
}

export function SignatureReveal({
  inline = false,
}: {
  inline?: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const reduced = !!prefersReducedMotion;

  const signature = (
    <div className="relative inline-block leading-none">
      <div className="flex flex-col items-start gap-1">
        <Row text="Dr Tamara" delay={ROW1_START} reduced={reduced} />
        {/* Row 2 — slight right indent, like a real handwritten flow */}
        <Row text="Vujačić" delay={ROW2_START} className="pl-6" reduced={reduced} />
      </div>

      {/* Gold underline flourish — drawn AFTER both rows finish */}
      <motion.span
        aria-hidden="true"
        className="block mt-2"
        style={{
          height: 2,
          background:
            "linear-gradient(90deg, transparent 0%, #CB9D39 20%, #DDB045 50%, #CB9D39 80%, transparent 100%)",
          borderRadius: 999,
          transformOrigin: "left center",
        }}
        initial={reduced ? { scaleX: 1 } : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: SIG_END + 0.25 }}
      />

      {/* Tiny ink-blot pearl at the tail */}
      <motion.span
        aria-hidden="true"
        className="absolute right-2 -bottom-1 block size-[6px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #DDB045, #8B6B3D 70%)",
          boxShadow: "0 0 10px rgba(221,176,69,0.6)",
        }}
        initial={reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: SIG_END + 1.1, ease: "easeOut" }}
      />
    </div>
  );

  const footnote = (
    <motion.div
      initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: SIG_END + 1.5, ease: "easeOut" }}
      className="mt-5"
    >
      <div className="text-[11px] uppercase tracking-[0.32em] text-mist">
        Osnivač · 15+ godina prakse
      </div>
    </motion.div>
  );

  if (inline) {
    return (
      <div className="flex flex-col items-start">
        {signature}
        {footnote}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl rounded-3xl bg-canvas p-10 lg:p-14 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
      <div className="grid lg:grid-cols-[1fr_auto] items-center gap-10">
        <div>
          <div className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-3">
            Reč osnivača
          </div>
          <h3 className="font-display text-[1.8rem] lg:text-[2.4rem] text-ink leading-tight mb-5">
            "Lepota{" "}
            <span className="font-display-italic text-lila">nije usluga</span>.
            <br />
            To je odnos koji se{" "}
            <span className="font-display-italic text-lila">gradi godinama</span>."
          </h3>
          <p className="text-[14px] text-mist font-light leading-relaxed max-w-md">
            Posvećenost svakom licu, plan za svaku kožu. Bez improvizacije —
            jer ono što vidite svaki dan u ogledalu zaslužuje pažnju koja se
            ne meri minutima, već godinama prakse.
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          {signature}
          {footnote}
        </div>
      </div>
    </div>
  );
}
