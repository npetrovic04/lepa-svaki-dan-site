"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { LOCATIONS } from "@/lib/locations";

/**
 * One large coin in the center. Click to flip — front shows NB, back shows BW.
 * 3D rotation with preserved depth.
 */
export function CoinFlip() {
  const [flipped, setFlipped] = useState(false);
  const [nb, bw] = LOCATIONS;

  function Face({ loc, back = false }: { loc: typeof LOCATIONS[number]; back?: boolean }) {
    return (
      <div
        className="absolute inset-0 overflow-hidden rounded-full ring-4 ring-white shadow-[0_25px_70px_rgba(0,0,0,0.25)]"
        style={{
          backfaceVisibility: "hidden",
          transform: back ? "rotateY(180deg)" : "rotateY(0)",
        }}
      >
        <Image src={loc.image} alt={loc.name} fill sizes="400px" className="object-cover" />
        <div className="absolute inset-0" style={{ background: `${loc.accent}80` }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-8">
          <div className="text-[9px] uppercase tracking-[0.32em] opacity-90">
            {back ? "Druga strana" : "Prva strana"}
          </div>
          <div className="font-display text-[2.4rem] leading-tight mt-2">{loc.name}</div>
          <div className="font-display-italic text-[1.4rem] opacity-90">{loc.subtitle}</div>
          <div className="mt-4 h-px w-12 bg-white/60" />
          <div className="mt-4 text-[12px] opacity-85">{loc.address}</div>
          <div className="text-[11px] opacity-75">{loc.phone}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center" style={{ perspective: 1600 }}>
      <button
        onClick={() => setFlipped((v) => !v)}
        aria-label="Okreni novčić"
        className="relative h-[400px] w-[400px] cursor-pointer focus:outline-none"
      >
        <motion.div
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Face loc={nb} />
          <Face loc={bw} back />
        </motion.div>

        {/* Coin edge highlight */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            boxShadow:
              "inset 0 0 0 1px rgba(255,255,255,0.5), 0 0 0 6px rgba(221,176,69,0.18)",
          }}
        />
      </button>

      <button
        onClick={() => setFlipped((v) => !v)}
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-black/12 bg-white px-6 py-3 text-[13px] font-medium text-ink-soft transition-colors hover:border-lila hover:text-lila"
      >
        Okreni novčić
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M3 12a9 9 0 0 1 14.5-7.1M21 12a9 9 0 0 1-14.5 7.1M17 4v5h-5M7 20v-5h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}
