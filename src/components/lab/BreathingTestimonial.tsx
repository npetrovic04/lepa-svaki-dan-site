"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export type Testimonial = {
  quote: string;
  author: string;
  tag: string;
  /** Optional image — if missing, we render a gradient avatar with initials */
  portraitSrc?: string;
};

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Posle prve konsultacije dr Tamara mi je dala plan koji nije samo radio — već sam u njemu osetila pažnju. Sada svaki tretman doživljavam kao ritual, ne obavezu.",
    author: "Jovana M.",
    tag: "Klijent · 2 godine",
    portraitSrc: "/lumiera-assets/FwuhHYOXRwVLdFxvgCh33culsjI.jpg",
  },
  {
    quote:
      "Probala sam mnoge tretmane, ali ovde se prvi put osećam kao da neko stvarno gleda moju kožu. Profhilo paket mi je u potpunosti vratio sjaj.",
    author: "Marija K.",
    tag: "Klijent · 3 godine",
    portraitSrc: "/lumiera-assets/bagflKECl0OlKPITxBmh1mKh28.jpg",
  },
  {
    quote:
      "Najviše me osvojio profesionalizam. Bez prodaje, bez pritiska — samo iskreni saveti i tretmani koji rade. Otkad sam tu, ne idem nigde drugde.",
    author: "Ana T.",
    tag: "Klijent · 1 godina",
  },
  {
    quote:
      "Stalno mi prijateljice pitaju gde idem na tretmane. Wellbeing Concept na Waterfront-u mi je oaza nakon posla — i koža i glava se odmore.",
    author: "Mirjana V.",
    tag: "Klijent · 6 meseci",
  },
];

const BREATH = 4.2;
const AUTO_ROTATE_MS = 9000;
const TYPE_SPEED_MS = 24;

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function gradientFor(name: string) {
  // Hash a name to a stable warm gradient pairing
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) | 0;
  const palettes = [
    "linear-gradient(135deg, #DDB045 0%, #9471D3 100%)",
    "linear-gradient(135deg, #C97A99 0%, #9471D3 100%)",
    "linear-gradient(135deg, #DDB8A8 0%, #CB9D39 100%)",
    "linear-gradient(135deg, #A887E0 0%, #DDB045 100%)",
  ];
  return palettes[Math.abs(h) % palettes.length];
}

function Avatar({ t }: { t: Testimonial }) {
  if (t.portraitSrc) {
    return <Image src={t.portraitSrc} alt={t.author} fill sizes="240px" className="object-cover" />;
  }
  return (
    <div
      className="flex h-full w-full items-center justify-center font-display text-[2.6rem] text-white"
      style={{ background: gradientFor(t.author) }}
    >
      {initials(t.author)}
    </div>
  );
}

export function BreathingTestimonial({
  testimonials = DEFAULT_TESTIMONIALS,
}: {
  testimonials?: Testimonial[];
}) {
  const prefersReducedMotion = useReducedMotion();
  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);
  const [paused, setPaused] = useState(false);

  const current = testimonials[idx];

  // Type-on effect — restart on every slide change
  useEffect(() => {
    if (prefersReducedMotion) {
      setTyped(current.quote.length);
      return;
    }
    setTyped(0);
    if (!startedRef.current) {
      // Wait until the section first scrolls into view before typing
      const el = containerRef.current;
      if (!el) return;
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            io.disconnect();
            runTyping();
          }
        });
      }, { threshold: 0.4 });
      io.observe(el);
      return () => io.disconnect();
    }
    runTyping();

    function runTyping() {
      let i = 0;
      const id = setInterval(() => {
        i++;
        setTyped(i);
        if (i >= current.quote.length) clearInterval(id);
      }, TYPE_SPEED_MS);
      return () => clearInterval(id);
    }
  }, [idx, current.quote, prefersReducedMotion]);

  // Auto-rotate
  useEffect(() => {
    if (prefersReducedMotion || paused || testimonials.length <= 1) return;
    const id = setTimeout(() => {
      setIdx((i) => (i + 1) % testimonials.length);
    }, AUTO_ROTATE_MS);
    return () => clearTimeout(id);
  }, [idx, paused, prefersReducedMotion, testimonials.length]);

  function go(delta: number) {
    setIdx((i) => (i + delta + testimonials.length) % testimonials.length);
  }

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="mx-auto max-w-4xl rounded-3xl bg-white p-8 lg:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
    >
      <div className="grid lg:grid-cols-[240px_1fr] items-center gap-12">
        {/* Breathing portrait — re-mounts on slide change so avatar fades in */}
        <div className="relative mx-auto h-56 w-56 lg:h-60 lg:w-60">
          {!prefersReducedMotion && (
            <>
              {[0, 1].map((k) => (
                <motion.span
                  key={k}
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full border border-champagne/60"
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: [1, 1.45], opacity: [0.45, 0] }}
                  transition={{
                    duration: BREATH * 1.4,
                    ease: "easeOut",
                    repeat: Infinity,
                    delay: k * (BREATH * 0.7),
                  }}
                />
              ))}
              <motion.span
                aria-hidden="true"
                className="absolute -inset-3 rounded-full"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(221,176,69,0.55), rgba(148,113,211,0.28) 55%, transparent 80%)",
                  filter: "blur(10px)",
                }}
                animate={{ scale: [1, 1.12, 1], opacity: [0.55, 1, 0.55] }}
                transition={{ duration: BREATH, ease: "easeInOut", repeat: Infinity }}
              />
            </>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={current.author}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: prefersReducedMotion ? 1 : [1, 1.07, 1],
                boxShadow: prefersReducedMotion
                  ? undefined
                  : [
                      "0 10px 30px rgba(0,0,0,0.18), 0 0 0 0 rgba(221,176,69,0)",
                      "0 18px 50px rgba(148,113,211,0.30), 0 0 0 10px rgba(221,176,69,0.18)",
                      "0 10px 30px rgba(0,0,0,0.18), 0 0 0 0 rgba(221,176,69,0)",
                    ],
              }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{
                opacity: { duration: 0.5 },
                scale: prefersReducedMotion
                  ? { duration: 0.5 }
                  : { duration: BREATH, ease: "easeInOut", repeat: Infinity },
                boxShadow: prefersReducedMotion
                  ? undefined
                  : { duration: BREATH, ease: "easeInOut", repeat: Infinity },
              }}
              className="relative h-full w-full overflow-hidden rounded-full ring-2 ring-white shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
            >
              <Avatar t={current} />
            </motion.div>
          </AnimatePresence>

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

        {/* Quote */}
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
          <AnimatePresence mode="wait">
            <motion.p
              key={current.author + "-q"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="font-display text-[1.35rem] lg:text-[1.65rem] text-ink leading-snug min-h-[6em]"
            >
              {current.quote.slice(0, typed)}
              {typed < current.quote.length && (
                <motion.span
                  className="inline-block w-[2px] h-[1em] -mb-[2px] ml-[1px] bg-lila"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.9, repeat: Infinity }}
                />
              )}
            </motion.p>
          </AnimatePresence>
          <div className="mt-5 flex items-center gap-3">
            <span className="h-px w-8 bg-champagne" />
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.author + "-meta"}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                >
                  <div className="font-display text-[15px] text-ink-soft">
                    {current.author}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-mist mt-0.5">
                    {current.tag}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      {testimonials.length > 1 && (
        <div className="mt-8 flex items-center justify-between gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Prethodni utisak"
            className="flex size-10 items-center justify-center rounded-full border border-black/12 text-ink-soft transition-colors hover:border-lila hover:text-lila"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Idi na utisak ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === idx ? "w-8 bg-lila" : "w-1.5 bg-black/15 hover:bg-black/30"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Sledeći utisak"
            className="flex size-10 items-center justify-center rounded-full border border-black/12 text-ink-soft transition-colors hover:border-lila hover:text-lila"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
