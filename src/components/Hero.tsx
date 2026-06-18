"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { KineticText } from "@/components/KineticText";
import { MagneticButton } from "@/components/MagneticButton";

const spring = { type: "spring" as const, bounce: 0.1, duration: 0.8 };
const springFast = { type: "spring" as const, bounce: 0.1, duration: 0.6 };

export function Hero() {
  return (
    <section className="relative isolate h-screen min-h-[680px] overflow-hidden bg-canvas">

      {/* Orchid background photo */}
      <Image
        src="/hero-orhideja.png"
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Soft light wash so text stays legible over the photo */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/55 via-white/25 to-white/10" />

      {/* Lila glow */}
      <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_60%_45%,rgba(148,113,211,0.10),transparent_70%)]" />

      {/* Woman portrait — right side, transparent bg floats over photo */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
        className="absolute right-0 pointer-events-none"
        style={{ bottom: "-10%", width: "clamp(320px, 45vw, 720px)" }}
      >
        <Image
          src="/woman-portrait.png"
          alt=""
          width={2255}
          height={2519}
          priority
          className="w-full h-auto object-contain object-bottom block"
        />
      </motion.div>

      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.1 }}
          className="mb-7 inline-flex w-fit items-center gap-2.5 rounded-full border border-black/8 bg-white/70 backdrop-blur-sm px-5 py-2 text-[10px] uppercase tracking-[0.35em] text-mist"
        >
          <span className="size-1.5 rounded-full bg-lila animate-pulse" />
          Beauty &amp; Wellbeing Concept · Beograd
        </motion.div>

        {/* Headline — kinetic letter-by-letter reveal, forced two lines */}
        <h1 className="font-display text-[clamp(3.2rem,6.5vw,7rem)] font-normal text-ink leading-[1.2] whitespace-nowrap">
          <div className="block">
            <KineticText text="Budi lepa," by="letter" delay={0.25} stagger={0.025} />
          </div>
          <div className="block">
            <KineticText
              text="Svaki dan"
              by="letter"
              delay={0.55}
              stagger={0.025}
              className="font-display-italic text-lila"
            />
          </div>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springFast, delay: 0.55 }}
          className="mt-6 max-w-sm text-[14px] leading-[1.8] text-mist font-light"
        >
          Aparaturni tretmani i estetske procedure — pod jednim krovom.
          Plan koji se gradi za vašu kožu. Bez improvizacije.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springFast, delay: 0.68 }}
          className="mt-9 flex flex-wrap justify-center gap-3"
        >
          <MagneticButton
            href="#tretmani"
            className="inline-flex items-center gap-2.5 rounded-full bg-lila px-9 py-4 text-[13px] font-semibold text-white transition-colors hover:bg-lila-glow hover:shadow-[0_8px_32px_rgba(148,113,211,0.35)]"
          >
            Pogledaj tretmane
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </MagneticButton>
          <a
            href="/cenovnik"
            className="inline-flex items-center gap-2.5 rounded-full border border-black/12 bg-white/70 backdrop-blur-sm px-8 py-4 text-[13px] font-medium text-ink-soft transition-all hover:border-lila/40 hover:text-lila"
          >
            Cenovnik usluga
          </a>
        </motion.div>
      </div>

      {/* Bottom info bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...springFast, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-10 flex flex-wrap items-center justify-between gap-4 border-t border-black/6 bg-white/70 px-8 py-4 backdrop-blur-sm lg:px-14"
      >
        <div className="flex flex-wrap gap-8">
          <div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-mist-light mb-1">Lokacija 1</div>
            <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-soft">Novi Beograd · Beauty Concept</div>
          </div>
          <div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-mist-light mb-1">Lokacija 2</div>
            <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-soft">Belgrade Waterfront · Wellbeing</div>
          </div>
        </div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-mist-light">Pon — Sub · 9—21h</div>
      </motion.div>
    </section>
  );
}
