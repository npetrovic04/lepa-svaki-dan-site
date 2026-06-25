"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PricingPanel } from "./PricingPanel";
import { LOCATIONS } from "@/lib/locations";

type FilterType = "nb" | "bw";

const TABS = [
  { id: "lice", label: "Tretmani lica" },
  { id: "telo", label: "Tretmani tela" },
  { id: "estetske", label: "Estetske procedure" },
  { id: "protokoli", label: "Naši protokoli" },
  { id: "laserska", label: "Laserska epilacija" },
];

const [NB, BW] = LOCATIONS;

export function CenovnikClient() {
  const [activeTab, setActiveTab] = useState("lice");
  const [activeFilter, setActiveFilter] = useState<FilterType>("nb");

  const activeLoc = activeFilter === "nb" ? NB : BW;

  return (
    <div>
      {/* ── Tabs (sticky) — primary category navigation ────────────── */}
      <div className="sticky top-[72px] z-30 bg-canvas/95 backdrop-blur-md pb-4 pt-2">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
          className="flex overflow-x-auto gap-1 rounded-2xl bg-white/70 p-1 shadow-[0_1px_8px_rgba(0,0,0,0.06)] border border-black/[0.06] no-scrollbar"
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex-shrink-0 rounded-xl px-4 py-2.5 text-[12.5px] font-medium transition-all duration-200 ${
                activeTab === tab.id ? "text-onyx shadow-sm" : "text-mist hover:text-ink-soft"
              }`}
            >
              {activeTab === tab.id && (
                <>
                  <motion.span
                    layoutId="tab-bg"
                    className="absolute inset-0 rounded-xl bg-white shadow-[0_2px_12px_rgba(148,113,211,0.18)]"
                    style={{ boxShadow: `0 2px 12px ${activeLoc.accent}33` }}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                  />
                  <motion.span
                    layoutId="tab-glow"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: `radial-gradient(60% 100% at 50% 100%, ${activeLoc.accent}26 0%, transparent 70%)`,
                    }}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                  />
                </>
              )}
              <span className="relative flex items-center gap-1.5">
                {activeTab === tab.id && (
                  <motion.span
                    className="size-1.5 rounded-full"
                    style={{ background: activeLoc.accent }}
                    animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
                {tab.label}
              </span>
            </button>
          ))}
        </motion.div>
      </div>

      {/* ── Salon toggle — two-option pill switch ───────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 mb-6 flex justify-center"
      >
        <div className="relative inline-flex items-center rounded-full bg-canvas p-1 shadow-[inset_0_1px_3px_rgba(0,0,0,0.06)]">
          <motion.span
            layout
            className="absolute inset-y-1 z-0 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.18)]"
            style={{
              left: activeFilter === "nb" ? "4px" : "50%",
              right: activeFilter === "nb" ? "50%" : "4px",
              background: activeLoc.accent,
            }}
            transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
          />
          {LOCATIONS.map((l) => (
            <button
              key={l.key}
              onClick={() => setActiveFilter(l.key)}
              className="relative z-10 px-7 py-3 text-[13px] font-semibold transition-colors"
              style={{ color: activeFilter === l.key ? "#fff" : "var(--color-ink-soft)" }}
            >
              {l.subtitle}
            </button>
          ))}
        </div>
      </motion.div>

      {/* ── Salon hero card — always visible, switches with toggle ──── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeLoc.key}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl mb-8"
        >
          <Image
            src={activeLoc.image}
            alt={activeLoc.name}
            width={1600}
            height={500}
            className="h-[260px] w-full object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, ${activeLoc.accent}55 0%, ${activeLoc.accent}d8 100%)`,
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10 text-white">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              <div className="text-[10px] uppercase tracking-[0.35em] opacity-90">
                Cenovnik
              </div>
              <div className="font-display text-[2.4rem] lg:text-[2.8rem] leading-tight mt-1">
                {activeLoc.name}
              </div>
              <div className="font-display-italic text-[1.3rem] lg:text-[1.5rem] opacity-90">
                {activeLoc.subtitle}
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-[12px] opacity-90">
                <span className="inline-flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {activeLoc.address}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href={`tel:${activeLoc.phone.replace(/\s/g, "")}`} className="hover:underline">
                    {activeLoc.phone}
                  </a>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  {activeLoc.hours}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ── Pricing panel ───────────────────── */}
      <PricingPanel activeTab={activeTab} activeFilter={activeFilter} />

      {/* ── Footer note ─────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 space-y-3 border-t border-black/[0.07] pt-8 text-[12px] text-mist leading-relaxed"
      >
        <p>
          Cene su iskazane u evrima isključivo informativnog karaktera —{" "}
          <strong className="text-ink-soft">sva plaćanja su u dinarima</strong>. Pakete
          je moguće platiti na do 12 rata Banka Intesa karticama ili dvokratno.
        </p>
        <p>
          Cenovnik je važeći od <strong className="text-ink-soft">15.03.2026.</strong>{" "}
          · Izmene cena zadržavamo pravo bez prethodne najave.
        </p>
      </motion.div>
    </div>
  );
}
