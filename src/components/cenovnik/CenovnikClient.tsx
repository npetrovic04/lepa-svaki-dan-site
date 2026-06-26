"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { PricingPanel } from "./PricingPanel";

const TABS = [
  { id: "lice", label: "Tretmani lica" },
  { id: "telo", label: "Tretmani tela" },
  { id: "estetske", label: "Estetske procedure" },
  { id: "protokoli", label: "Naši protokoli" },
  { id: "laserska", label: "Laserska epilacija" },
];

export function CenovnikClient() {
  const [activeTab, setActiveTab] = useState("lice");

  return (
    <div>
      {/* ── Legend — quick explanation of pill colors ─────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex flex-wrap items-center justify-center gap-4 text-[11px]"
      >
        <span className="text-mist uppercase tracking-[0.22em] mr-1">Lokacije:</span>
        <span className="inline-flex items-center gap-2">
          <span
            className="inline-block rounded-full px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white"
            style={{ background: "linear-gradient(135deg, #DDB045 0%, #CB9D39 100%)" }}
          >
            NB
          </span>
          <span className="text-ink-soft">Novi Beograd · Beauty</span>
        </span>
        <span className="inline-flex items-center gap-2">
          <span
            className="inline-block rounded-full px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white"
            style={{ background: "linear-gradient(135deg, #C5B4E3 0%, #9471D3 100%)" }}
          >
            BW
          </span>
          <span className="text-ink-soft">Belgrade Waterfront · Wellbeing</span>
        </span>
      </motion.div>

      {/* ── Tabs (sticky) ────────────────────────────────────────── */}
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
                    transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                  />
                  <motion.span
                    layoutId="tab-glow"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: "radial-gradient(60% 100% at 50% 100%, rgba(148,113,211,0.18) 0%, transparent 70%)",
                    }}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                  />
                </>
              )}
              <span className="relative flex items-center gap-1.5">
                {activeTab === tab.id && (
                  <motion.span
                    className="size-1.5 rounded-full bg-lila"
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

      {/* ── Pricing panel ───────────────────── */}
      <div className="mt-6">
        <PricingPanel activeTab={activeTab} activeFilter="all" />
      </div>

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
