"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DEMO_GROUPS } from "./sampleData";

/**
 * Search-first cenovnik — big input as the primary affordance.
 * Featured chips below for quick discovery, then a results list
 * that filters as you type.
 */

const CHIPS = ["Glow", "Anti-aging", "Profhilo", "Dermapen", "Mezoporacija", "Piling"];

export function SearchFirst() {
  const [query, setQuery] = useState("");
  const flat = useMemo(
    () => DEMO_GROUPS.flatMap((g) => g.services.map((s) => ({ ...s, group: g.title }))),
    []
  );

  const q = query.trim().toLowerCase();
  const results = q
    ? flat.filter((s) =>
        (s.name + " " + (s.description ?? "") + " " + s.group)
          .toLowerCase()
          .includes(q)
      )
    : flat;

  return (
    <div>
      {/* Hero search */}
      <div className="relative mx-auto mb-6 max-w-3xl">
        <div className="relative">
          <svg
            className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 text-mist"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pretraži tretmane, ciljeve, brendove…"
            className="w-full rounded-full border border-black/10 bg-white pl-16 pr-6 py-5 text-[16px] text-ink placeholder:text-mist focus:outline-none focus:border-lila focus:shadow-[0_8px_30px_rgba(148,113,211,0.15)] transition-all"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-[11px] uppercase tracking-[0.22em] text-mist hover:text-lila"
            >
              Obriši
            </button>
          )}
        </div>

        {/* Quick chips */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.28em] text-mist-light mr-2">Popularno</span>
          {CHIPS.map((c) => (
            <button
              key={c}
              onClick={() => setQuery(c)}
              className={`rounded-full border px-4 py-1.5 text-[12px] transition-all ${
                query.toLowerCase() === c.toLowerCase()
                  ? "border-lila bg-lila text-white"
                  : "border-black/10 bg-white text-ink-soft hover:border-lila/40 hover:text-lila"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="mx-auto max-w-3xl mt-10">
        <div className="mb-4 flex items-baseline justify-between">
          <span className="text-[11px] uppercase tracking-[0.28em] text-mist">
            {q ? `Rezultati za "${query}"` : "Svi tretmani"}
          </span>
          <span className="text-[11px] text-mist-light">
            {results.length} {results.length === 1 ? "rezultat" : results.length < 5 ? "rezultata" : "rezultata"}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={q || "all"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="space-y-2"
          >
            {results.length === 0 ? (
              <div className="rounded-2xl bg-canvas py-12 text-center text-mist">
                Nema rezultata. Pokušaj sa drugom rečju.
              </div>
            ) : (
              results.map((s) => (
                <div
                  key={s.name}
                  className="group flex items-start gap-4 rounded-xl bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_20px_rgba(148,113,211,0.12)] transition-shadow"
                >
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.28em] text-mist-light mb-1">
                      {s.group}
                    </div>
                    <div className="font-display text-[1.15rem] text-ink leading-snug group-hover:text-lila transition-colors">
                      {s.name}
                    </div>
                    {s.description && (
                      <div className="text-[12px] text-mist mt-1">{s.description}</div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="font-display text-[1.2rem] text-champagne leading-none">{s.price}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-mist-light mt-1">
                      {s.location === "both" ? "Oba" : s.location === "nb" ? "NB" : "BW"}
                    </div>
                  </div>
                </div>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
