"use client";

import { motion } from "motion/react";

const features = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    label: "Privatni tretmani",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: "Aparatura najvišeg ranga",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    label: "15+ godina iskustva",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    label: "1.000+ klijenata godišnje",
  },
];

export function FeaturesStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", bounce: 0.1, duration: 0.7, delay: 0.9 }}
      className="relative z-10 flex justify-center px-4 py-8 lg:px-8"
    >
      <div className="w-full max-w-5xl rounded-full bg-white px-6 py-4 shadow-[0_8px_40px_rgba(0,0,0,0.09)] lg:px-10 lg:py-5">
        <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-2">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                bounce: 0.1,
                duration: 0.6,
                delay: 1.0 + i * 0.07,
              }}
              className="flex items-center gap-3 min-w-[120px]"
            >
              <div className="flex size-9 flex-shrink-0 items-center justify-center rounded-full bg-canvas text-lila">
                {f.icon}
              </div>
              <span className="text-[12px] font-medium text-ink-soft leading-tight">
                {f.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
