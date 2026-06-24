"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { LOCATIONS } from "@/lib/locations";

/**
 * Centered female silhouette. As section enters viewport, two soft circles
 * "open" outward from her midline — left circle reveals NB photo,
 * right circle reveals BW photo. Stylized take on the "arms wide" idea.
 */
export function ArmsReveal() {
  const [nb, bw] = LOCATIONS;

  return (
    <div className="relative mx-auto h-[640px] w-full max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-b from-canvas to-white">
      {/* Center portrait */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[420px]"
      >
        {/* Simplified silhouette since we don't have a dedicated asset */}
        <svg viewBox="0 0 120 180" className="h-full w-full">
          <defs>
            <linearGradient id="silhouette" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9471D3" />
              <stop offset="100%" stopColor="#DDB045" />
            </linearGradient>
          </defs>
          {/* Head */}
          <circle cx="60" cy="35" r="18" fill="url(#silhouette)" opacity="0.85" />
          {/* Neck */}
          <rect x="56" y="48" width="8" height="10" fill="url(#silhouette)" opacity="0.85" />
          {/* Torso */}
          <path d="M40,60 Q60,55 80,60 L82,120 Q60,128 38,120 Z" fill="url(#silhouette)" opacity="0.85" />
          {/* Left arm reaching out */}
          <motion.path
            d="M40,62 Q20,78 8,98"
            stroke="url(#silhouette)"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Right arm reaching out */}
          <motion.path
            d="M80,62 Q100,78 112,98"
            stroke="url(#silhouette)"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
      </motion.div>

      {/* Left circle — NB */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-[8%] top-1/2 -translate-y-1/2 origin-center"
        style={{ width: 280, height: 280 }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-full shadow-[0_15px_50px_rgba(0,0,0,0.18)] ring-4 ring-white">
          <Image src={nb.image} alt={nb.name} fill sizes="280px" className="object-cover" />
          <div className="absolute inset-0" style={{ background: `${nb.accent}55` }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
            <div className="text-[9px] uppercase tracking-[0.32em] opacity-90">Lokacija 1</div>
            <div className="font-display text-[1.6rem] leading-tight mt-2">{nb.name}</div>
            <div className="font-display-italic text-[1rem] opacity-90">{nb.subtitle}</div>
          </div>
        </div>
      </motion.div>

      {/* Right circle — BW */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-[8%] top-1/2 -translate-y-1/2 origin-center"
        style={{ width: 280, height: 280 }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-full shadow-[0_15px_50px_rgba(0,0,0,0.18)] ring-4 ring-white">
          <Image src={bw.image} alt={bw.name} fill sizes="280px" className="object-cover" />
          <div className="absolute inset-0" style={{ background: `${bw.accent}55` }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
            <div className="text-[9px] uppercase tracking-[0.32em] opacity-90">Lokacija 2</div>
            <div className="font-display text-[1.6rem] leading-tight mt-2">{bw.name}</div>
            <div className="font-display-italic text-[1rem] opacity-90">{bw.subtitle}</div>
          </div>
        </div>
      </motion.div>

      {/* Caption */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
        <div className="text-[10px] uppercase tracking-[0.35em] text-mist">Dva koncepta</div>
        <div className="font-display-italic text-[1.6rem] text-lila mt-1">jedna filozofija</div>
      </div>
    </div>
  );
}
