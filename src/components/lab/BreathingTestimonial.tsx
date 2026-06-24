"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const QUOTE =
  "Posle prve konsultacije dr Tamara mi je dala plan koji nije samo radio — već sam u njemu osetila pažnju. Sada svaki tretman doživljavam kao ritual, ne obavezu.";

const AUTHOR = "Jovana M.";
const TAG = "Klijent · 2 godine";

// 4-second slow-inhale / slow-exhale loop
const BREATH = 4.2;

export function BreathingTestimonial({ portraitSrc }: { portraitSrc: string }) {
  const prefersReducedMotion = useReducedMotion();
  const [typed, setTyped] = useState(prefersReducedMotion ? QUOTE.length : 0);
  const containerRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            let i = 0;
            const id = setInterval(() => {
              i++;
              setTyped(i);
              if (i >= QUOTE.length) clearInterval(id);
            }, 28);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="mx-auto max-w-4xl rounded-3xl bg-white p-8 lg:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
    >
      <div className="grid lg:grid-cols-[240px_1fr] items-center gap-12">
        {/* Breathing portrait */}
        <div className="relative mx-auto h-56 w-56 lg:h-60 lg:w-60">
          {/* Outer "exhale" ring — expands & fades, repeats */}
          {!prefersReducedMotion && (
            <>
              {[0, 1].map((i) => (
                <motion.span
                  key={i}
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full border border-champagne/60"
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: [1, 1.45], opacity: [0.45, 0] }}
                  transition={{
                    duration: BREATH * 1.4,
                    ease: "easeOut",
                    repeat: Infinity,
                    delay: i * (BREATH * 0.7),
                  }}
                />
              ))}
              {/* Inner halo — pulses gently with the breath */}
              <motion.span
                aria-hidden="true"
                className="absolute -inset-3 rounded-full"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(221,176,69,0.55), rgba(148,113,211,0.28) 55%, transparent 80%)",
                  filter: "blur(10px)",
                }}
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.55, 1, 0.55],
                }}
                transition={{ duration: BREATH, ease: "easeInOut", repeat: Infinity }}
              />
            </>
          )}

          {/* The portrait itself — bigger breath amplitude (1 → 1.07) */}
          <motion.div
            className="relative h-full w-full overflow-hidden rounded-full ring-2 ring-white shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    scale: [1, 1.07, 1],
                    boxShadow: [
                      "0 10px 30px rgba(0,0,0,0.18), 0 0 0 0 rgba(221,176,69,0)",
                      "0 18px 50px rgba(148,113,211,0.30), 0 0 0 10px rgba(221,176,69,0.18)",
                      "0 10px 30px rgba(0,0,0,0.18), 0 0 0 0 rgba(221,176,69,0)",
                    ],
                  }
            }
            transition={{ duration: BREATH, ease: "easeInOut", repeat: Infinity }}
          >
            <Image src={portraitSrc} alt={AUTHOR} fill sizes="240px" className="object-cover" />
          </motion.div>

          {/* Tiny "inhale" indicator — soft gold breath label below */}
          {!prefersReducedMotion && (
            <motion.span
              aria-hidden="true"
              className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] uppercase tracking-[0.3em] text-champagne/70"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: BREATH, ease: "easeInOut", repeat: Infinity }}
            >
              · diše ·
            </motion.span>
          )}
        </div>

        {/* Typed quote */}
        <div>
          <svg
            width="30"
            height="22"
            viewBox="0 0 30 22"
            fill="currentColor"
            className="text-lila/30 mb-3"
          >
            <path d="M0 22V12C0 5.4 3.6 1 10.8 0L12 3.6c-4.2 1.2-6 3.6-6 7.2h6V22H0zm17 0V12C17 5.4 20.6 1 27.8 0L29 3.6c-4.2 1.2-6 3.6-6 7.2h6V22H17z" />
          </svg>
          <p className="font-display text-[1.35rem] lg:text-[1.65rem] text-ink leading-snug min-h-[6em]">
            {QUOTE.slice(0, typed)}
            {typed < QUOTE.length && (
              <motion.span
                className="inline-block w-[2px] h-[1em] -mb-[2px] ml-[1px] bg-lila"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity }}
              />
            )}
          </p>
          <div className="mt-5 flex items-center gap-3">
            <span className="h-px w-8 bg-champagne" />
            <div>
              <div className="font-display text-[15px] text-ink-soft">{AUTHOR}</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-mist mt-0.5">{TAG}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
