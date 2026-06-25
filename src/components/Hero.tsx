"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MagneticButton } from "@/components/MagneticButton";
import { MorphHeadline } from "@/components/MorphHeadline";
import { FloatingPetals } from "@/components/FloatingPetals";

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

      {/* Petals — confined to hero only */}
      <FloatingPetals count={9} mode="absolute" />

      {/* Gold halo behind portrait — pulses like illuminated silhouette */}
      <motion.div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          right: "0%",
          bottom: "5%",
          width: "clamp(380px, 50vw, 780px)",
          height: "clamp(380px, 50vw, 780px)",
          background:
            "radial-gradient(closest-side, rgba(221,176,69,0.32) 0%, rgba(221,176,69,0.18) 35%, rgba(203,157,57,0.10) 55%, transparent 75%)",
          filter: "blur(8px)",
          mixBlendMode: "multiply",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: [0.55, 0.95, 0.55],
          scale: [0.96, 1.05, 0.96],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.8,
        }}
      />

      {/* Woman portrait — right side, transparent bg floats over photo */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
        className="absolute pointer-events-none right-0 bottom-[-12%] w-[clamp(240px,55vw,720px)] lg:bottom-[-10%] lg:w-[clamp(320px,45vw,720px)]"
        style={{ right: "-5%" }}
      >
        <Image
          src="/woman-portrait.png"
          alt=""
          width={2255}
          height={2519}
          priority
          className="w-full h-auto object-contain object-bottom block"
          style={{ filter: "drop-shadow(0 0 28px rgba(221,176,69,0.25))" }}
        />
      </motion.div>

      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">

        {/* Italic claim — elegant ornament */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.1 }}
          className="mb-6 lg:mb-8 flex items-center gap-2 sm:gap-4 text-mist"
        >
          <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-champagne to-transparent" />
          <span className="font-display-italic text-[13px] sm:text-[15px] md:text-[17px] tracking-wide text-ink-soft text-center">
            Dva koncepta — jedna filozofija
          </span>
          <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-champagne to-transparent" />
        </motion.div>

        {/* Headline — morphs through a manifesto, lands on "Budi lepa, svaki dan." */}
        <MorphHeadline />

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
        className="absolute bottom-0 left-0 right-0 z-10 flex flex-wrap items-center justify-between gap-3 lg:gap-4 border-t border-black/6 bg-white/75 px-4 py-3 backdrop-blur-sm sm:px-8 sm:py-4 lg:px-14"
      >
        <div className="flex flex-wrap gap-4 sm:gap-8">
          <div>
            <div className="text-[8px] sm:text-[9px] uppercase tracking-[0.28em] sm:tracking-[0.3em] text-mist-light mb-0.5 sm:mb-1">Lokacija 1</div>
            <div className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ink-soft">Novi Beograd</div>
          </div>
          <div>
            <div className="text-[8px] sm:text-[9px] uppercase tracking-[0.28em] sm:tracking-[0.3em] text-mist-light mb-0.5 sm:mb-1">Lokacija 2</div>
            <div className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ink-soft">Belgrade Waterfront</div>
          </div>
        </div>
        <div className="hidden sm:block text-[10px] uppercase tracking-[0.25em] text-mist-light">Pon — Sub · 9—21h</div>
      </motion.div>
    </section>
  );
}
