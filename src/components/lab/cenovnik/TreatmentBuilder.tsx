"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DEMO_GROUPS } from "./sampleData";

function eur(price: string) {
  const m = price.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

/**
 * Plate-builder interaction — client picks treatments to build their
 * personal ritual. Sticky summary at top: count + running total.
 * Quick "package discount" appears when picking ≥3 services.
 */
export function TreatmentBuilder() {
  const [picked, setPicked] = useState<Set<string>>(new Set());

  const flat = useMemo(
    () =>
      DEMO_GROUPS.flatMap((g) =>
        g.services.map((s) => ({ ...s, group: g.title }))
      ),
    []
  );

  const total = useMemo(() => {
    let sum = 0;
    flat.forEach((s) => { if (picked.has(s.name)) sum += eur(s.price); });
    return sum;
  }, [flat, picked]);

  const discount = picked.size >= 3 ? Math.round(total * 0.12) : 0;
  const finalPrice = total - discount;

  function toggle(name: string) {
    setPicked((cur) => {
      const next = new Set(cur);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }

  return (
    <div>
      {/* Sticky summary */}
      <div className="sticky top-[72px] z-30 mb-6">
        <motion.div
          layout
          className="rounded-2xl bg-ink text-white p-5 lg:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-white/60">Tvoj ritual</div>
              <div className="font-display text-[1.4rem] mt-1">
                {picked.size === 0
                  ? "Izaberi tretmane"
                  : `${picked.size} ${picked.size === 1 ? "tretman" : picked.size < 5 ? "tretmana" : "tretmana"}`}
              </div>
            </div>
            <div className="text-right">
              <AnimatePresence mode="wait">
                {discount > 0 ? (
                  <motion.div
                    key="discounted"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    <div className="text-[11px] uppercase tracking-[0.22em] text-champagne/85">
                      Paket popust −{discount}€
                    </div>
                    <div className="font-display text-[1.8rem] leading-none mt-1">
                      <span className="text-white/40 line-through text-[1.1rem] mr-2">{total}€</span>
                      {finalPrice}€
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="plain"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    <div className="text-[11px] uppercase tracking-[0.22em] text-white/60">Ukupno</div>
                    <div className="font-display text-[1.8rem] leading-none mt-1">{total}€</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {picked.size > 0 && picked.size < 3 && (
            <div className="mt-3 text-[11px] text-champagne/90">
              + dodaj još {3 - picked.size} {3 - picked.size === 1 ? "tretman" : "tretmana"} → paket popust 12%
            </div>
          )}

          {picked.size > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-lila px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-lila-glow transition-colors">
                Zakaži paket ›
              </a>
              <button
                onClick={() => setPicked(new Set())}
                className="text-[11px] uppercase tracking-[0.22em] text-white/60 hover:text-white"
              >
                Obriši izbor
              </button>
            </div>
          )}
        </motion.div>
      </div>

      {/* Service grid */}
      <div className="space-y-8">
        {DEMO_GROUPS.map((g) => (
          <div key={g.title}>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px flex-1 bg-black/8" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink-soft">{g.title}</span>
              <span className="h-px flex-1 bg-black/8" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {g.services.map((s) => {
                const on = picked.has(s.name);
                return (
                  <button
                    key={s.name}
                    onClick={() => toggle(s.name)}
                    className={`group relative flex items-start gap-4 rounded-2xl border p-5 text-left transition-all ${
                      on
                        ? "border-lila bg-lila/[0.06] shadow-[0_4px_20px_rgba(148,113,211,0.18)]"
                        : "border-black/8 bg-white hover:border-lila/40 hover:bg-lila/[0.02]"
                    }`}
                  >
                    {/* Checkbox */}
                    <span
                      className={`mt-1 flex size-6 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                        on ? "border-lila bg-lila text-white" : "border-black/15"
                      }`}
                    >
                      {on && (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <div className="font-display text-[1.05rem] text-ink leading-tight">{s.name}</div>
                        <div className="font-display text-[1.05rem] text-champagne whitespace-nowrap">{s.price}</div>
                      </div>
                      {s.description && (
                        <div className="text-[12px] text-mist mt-1">{s.description}</div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
