"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { testimonials, images } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Testimonial() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const t = testimonials[idx];

  function go(next: number) {
    setDir(next > idx ? 1 : -1);
    setIdx(next);
  }
  function prev() { go((idx - 1 + testimonials.length) % testimonials.length); }
  function next() { go((idx + 1) % testimonials.length); }

  return (
    <section className="bg-white px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <Reveal>
          <div className="mb-12 text-center">
            <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.38em] text-lila">
              Iskustva klijentica
            </div>
            <h2 className="font-display text-balance text-[clamp(2.4rem,5vw,4.5rem)] font-normal text-ink">
              Šta osete kad{" "}
              <span className="font-display-italic text-lila">odu</span>.
            </h2>
          </div>
        </Reveal>

        {/* 2-col card */}
        <div className="overflow-hidden rounded-3xl shadow-[0_4px_40px_rgba(0,0,0,0.07)]">
          <div className="grid lg:grid-cols-2">

            {/* Left: image */}
            <div className="relative min-h-[360px] overflow-hidden lg:min-h-[520px]">
              <Image
                src={images.about}
                alt="Iskustvo klijentice u Lepa Svaki Dan"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
            </div>

            {/* Right: animated quote */}
            <div className="flex flex-col justify-center bg-[#FAF7F6] px-10 py-12 lg:px-14 lg:py-16">

              {/* Big quote mark */}
              <div className="font-display text-[6rem] font-normal text-lila/15 leading-none -mb-4">
                &ldquo;
              </div>

              {/* Animated quote text */}
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={idx}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -30 }}
                  transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
                >
                  <blockquote className="font-display text-[clamp(1.35rem,2.5vw,1.9rem)] font-normal text-ink leading-[1.4]">
                    {t.quote}
                  </blockquote>

                  <div className="mt-6 flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="15" height="15" viewBox="0 0 20 20" fill="#B48E5A">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>

                  <div className="mt-5">
                    <div className="h-px w-8 bg-lila/40 mb-4" />
                    <div className="text-[13px] font-semibold text-ink uppercase tracking-[0.22em]">
                      — {t.attribution}
                    </div>
                    <div className="mt-1 text-[11px] text-mist font-medium uppercase tracking-[0.18em]">
                      {t.context}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Nav dots + arrows */}
              <div className="mt-10 flex items-center justify-between">
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => go(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === idx ? "w-5 h-2 bg-lila" : "size-2 bg-black/15"
                      }`}
                      aria-label={`Testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="flex size-11 items-center justify-center rounded-full border border-black/10 text-ink-soft transition-all hover:border-lila hover:text-lila hover:scale-105"
                    aria-label="Prethodno"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5m0 0l6-6m-6 6l6 6"/>
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="flex size-11 items-center justify-center rounded-full border border-black/10 text-ink-soft transition-all hover:border-lila hover:text-lila hover:scale-105"
                    aria-label="Sledeće"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14m0 0l-6-6m6 6l-6 6"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
