"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { LOCATIONS } from "@/lib/locations";

/**
 * Stylized Beograd map silhouette (Sava + Dunav + city blob) with two
 * pulsing pins. Hover a pin → opens info card.
 */

const PINS = [
  { key: "nb" as const, x: 28, y: 56 }, // Novi Beograd — across the Sava
  { key: "bw" as const, x: 48, y: 64 }, // Waterfront — south bank
];

export function BelgradeMap() {
  const [hovered, setHovered] = useState<"nb" | "bw" | null>(null);

  return (
    <div className="relative mx-auto aspect-[5/3] w-full max-w-4xl rounded-3xl bg-canvas overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
      <svg viewBox="0 0 100 60" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="river" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#B8C9DA" />
            <stop offset="100%" stopColor="#7E96B0" />
          </linearGradient>
          <radialGradient id="land">
            <stop offset="0%" stopColor="#FAF7F6" />
            <stop offset="100%" stopColor="#F0E7DD" />
          </radialGradient>
        </defs>

        {/* Land blob — abstract Belgrade form */}
        <path
          d="M5,12 C18,8 40,6 60,10 C82,14 96,28 95,42 C92,55 75,58 55,55 C35,52 12,48 5,38 C-2,28 0,18 5,12 Z"
          fill="url(#land)"
        />

        {/* Sava + Dunav — wide ribbon flowing through */}
        <path
          d="M0,30 Q15,32 25,40 Q35,48 50,46 Q70,44 100,52"
          stroke="url(#river)"
          strokeWidth="4.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.9"
        />
        {/* Sava tributary */}
        <path
          d="M15,5 Q22,18 28,32 Q34,42 50,46"
          stroke="url(#river)"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Small city dots */}
        {[[42, 22], [56, 26], [38, 36], [68, 38], [52, 18], [62, 30], [74, 30]].map(
          ([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="0.5" fill="#88837E" opacity="0.45" />
          )
        )}

        {/* Region labels */}
        <text x="22" y="48" fontSize="2.4" fill="#88837E" opacity="0.55" fontWeight="500">
          Novi Beograd
        </text>
        <text x="55" y="40" fontSize="2.4" fill="#88837E" opacity="0.55" fontWeight="500">
          Stari Grad
        </text>
        <text x="48" y="56" fontSize="2.2" fill="#88837E" opacity="0.55" fontWeight="500">
          Waterfront
        </text>
      </svg>

      {/* Pins */}
      {PINS.map(({ key, x, y }) => {
        const loc = LOCATIONS.find((l) => l.key === key)!;
        const isActive = hovered === key;
        return (
          <button
            key={key}
            onMouseEnter={() => setHovered(key)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(key)}
            onBlur={() => setHovered(null)}
            className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
            style={{ left: `${x}%`, top: `${y}%` }}
            aria-label={`${loc.name} — ${loc.subtitle}`}
          >
            {/* Pulse rings */}
            {[0, 1].map((i) => (
              <motion.span
                key={i}
                className="absolute inset-0 -m-3 rounded-full"
                style={{ border: `2px solid ${loc.accent}` }}
                animate={{ scale: [1, 2.2], opacity: [0.55, 0] }}
                transition={{
                  duration: 2.4,
                  ease: "easeOut",
                  repeat: Infinity,
                  delay: i * 1.2,
                }}
              />
            ))}
            <span
              className="relative block size-5 rounded-full ring-4 ring-white shadow-[0_4px_14px_rgba(0,0,0,0.25)]"
              style={{ background: loc.accent }}
            />
          </button>
        );
      })}

      {/* Info card */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-6 left-6 z-10 flex w-[300px] gap-4 rounded-2xl bg-white p-3 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
          >
            {(() => {
              const loc = LOCATIONS.find((l) => l.key === hovered)!;
              return (
                <>
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl">
                    <Image src={loc.image} alt={loc.name} fill sizes="80px" className="object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-display text-[1.05rem] text-ink leading-tight">{loc.name}</div>
                    <div className="text-[11px] uppercase tracking-[0.22em] mt-0.5" style={{ color: loc.accent }}>
                      {loc.subtitle}
                    </div>
                    <div className="mt-2 text-[12px] text-mist">{loc.address}</div>
                    <div className="text-[11px] text-mist-light">{loc.hours}</div>
                  </div>
                </>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute top-5 right-6 rounded-full bg-white/85 backdrop-blur-sm px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-mist">
        Pređi mišem preko pina
      </div>
    </div>
  );
}
