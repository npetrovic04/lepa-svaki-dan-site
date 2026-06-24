"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { pricingTabs, Service, Location } from "@/lib/cenovnik";

type Question = {
  id: string;
  prompt: string;
  options: { key: string; label: string; emoji: string; keywords: string[] }[];
};

// Each option carries a list of keywords/substrings the matcher will look for
// inside service names / descriptions / group titles from cenovnik.ts.
const QUESTIONS: Question[] = [
  {
    id: "goal",
    prompt: "Šta je tvoj primarni cilj?",
    options: [
      {
        key: "glow",
        label: "Trenutni sjaj",
        emoji: "✨",
        keywords: ["glow", "venus glow", "fresh up", "icon", "cinderella", "ready to glow", "rehydrate", "biorevit", "lift & glow"],
      },
      {
        key: "antiage",
        label: "Anti-aging",
        emoji: "🌿",
        keywords: ["anti-aging", "anti aging", "lift", "venus legacy", "profhilo", "remodel", "myolift", "lifting", "wrinkle", "kolagen"],
      },
      {
        key: "deep",
        label: "Dubinska nega",
        emoji: "💧",
        keywords: ["dermapen", "prx", "hemijski piling", "mezoporacij", "no filter", "dermafacial", "fitopiling", "detox"],
      },
      {
        key: "body",
        label: "Telo i kontura",
        emoji: "🌸",
        keywords: ["telo", "presoter", "proballancer", "celulit", "stomak", "butine", "zadnjic", "noge", "ruke", "endo", "linfodrenaž"],
      },
    ],
  },
  {
    id: "skin",
    prompt: "Kako bi opisala svoju kožu?",
    options: [
      {
        key: "sensitive",
        label: "Osetljiva",
        emoji: "🍃",
        keywords: ["sensi", "sensitive", "rehydrate", "biolosk", "biološk", "smiruj"],
      },
      {
        key: "oily",
        label: "Masna / mešovita",
        emoji: "💎",
        keywords: ["fitopiling", "detox", "skin detox", "dermafacial", "venus glow", "higijensk"],
      },
      {
        key: "mature",
        label: "Zrela",
        emoji: "🌷",
        keywords: ["anti-aging", "anti aging", "profhilo", "venus legacy", "myolift", "lift", "wide awake", "remodel", "dermapen anti"],
      },
      {
        key: "normal",
        label: "Normalna",
        emoji: "🌼",
        keywords: ["biolosk", "biološk", "ready to glow", "glow", "be an icon", "revive", "radiate"],
      },
    ],
  },
  {
    id: "depth",
    prompt: "Da li si spremna za intenzivne tretmane?",
    options: [
      {
        key: "gentle",
        label: "Lagana nega",
        emoji: "🕊",
        keywords: ["higijensk", "biolosk", "biološk", "venus glow", "fresh up", "sensi", "face gym", "masaž"],
      },
      {
        key: "balanced",
        label: "Balansirana",
        emoji: "⚖️",
        keywords: ["dermafacial", "mezoporacij", "biorevit", "fitopiling", "venus lift", "lift & glow"],
      },
      {
        key: "intensive",
        label: "Intenzivna",
        emoji: "🔥",
        keywords: ["dermapen", "prx", "hemijski piling ii", "no filter", "anti-aging", "dermaworld"],
      },
    ],
  },
];

type Scored = Service & { score: number; groupTitle: string };

function flattenServices(): { svc: Service; groupTitle: string }[] {
  const list: { svc: Service; groupTitle: string }[] = [];
  pricingTabs.forEach((tab) => {
    if (!tab.groups) return;
    tab.groups.forEach((g) => {
      g.services.forEach((s) => list.push({ svc: s, groupTitle: g.title }));
    });
  });
  return list;
}

function locationLabel(loc: Location) {
  if (loc === "nb") return "Novi Beograd";
  if (loc === "bw") return "Belgrade Waterfront";
  return "Obe lokacije";
}

function locationColor(loc: Location) {
  if (loc === "nb") return "#3F6E5E";
  if (loc === "bw") return "#5B6F94";
  return "#5A4928";
}

function priceOf(s: Service) {
  if (s.price) return s.price;
  if (s.priceNB && s.priceBW) return `${s.priceNB} / ${s.priceBW}`;
  if (s.priceNB) return s.priceNB;
  if (s.priceBW) return s.priceBW;
  return "po dogovoru";
}

function score(allKeywords: string[], pool: { svc: Service; groupTitle: string }[]): Scored[] {
  const lowered = allKeywords.map((k) => k.toLowerCase());
  const seen = new Set<string>();
  const scored: Scored[] = [];

  pool.forEach(({ svc, groupTitle }) => {
    if (seen.has(svc.name)) return;
    const haystack = [svc.name, svc.description ?? "", groupTitle].join(" ").toLowerCase();
    let s = 0;
    lowered.forEach((kw) => {
      if (haystack.includes(kw)) s += 1;
    });
    if (s > 0) {
      scored.push({ ...svc, score: s, groupTitle });
      seen.add(svc.name);
    }
  });

  return scored.sort((a, b) => b.score - a.score).slice(0, 3);
}

export function RitualQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const pool = useMemo(flattenServices, []);

  const isDone = step >= QUESTIONS.length;

  const recos: Scored[] = useMemo(() => {
    if (!isDone) return [];
    const keywords: string[] = [];
    QUESTIONS.forEach((q) => {
      const picked = q.options.find((o) => o.key === answers[q.id]);
      if (picked) keywords.push(...picked.keywords);
    });
    return score(keywords, pool);
  }, [isDone, answers, pool]);

  function pick(key: string) {
    const q = QUESTIONS[step];
    setAnswers((a) => ({ ...a, [q.id]: key }));
    setStep((s) => s + 1);
  }

  function reset() {
    setStep(0);
    setAnswers({});
  }

  return (
    <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 lg:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
      {/* Progress bar */}
      <div className="mb-8 flex items-center gap-2">
        {QUESTIONS.map((_, i) => (
          <span
            key={i}
            className={`h-1 flex-1 rounded-full transition-all duration-500 ${
              i < step ? "bg-lila" : i === step ? "bg-lila/40" : "bg-black/8"
            }`}
          />
        ))}
        <span className="ml-3 text-[10px] uppercase tracking-[0.22em] text-mist">
          {isDone ? "Tvoj ritual" : `${step + 1} / ${QUESTIONS.length}`}
        </span>
      </div>

      <AnimatePresence mode="wait">
        {!isDone ? (
          <motion.div
            key={`q-${step}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-display text-[1.8rem] lg:text-[2.2rem] text-ink leading-snug mb-6">
              {QUESTIONS[step].prompt}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {QUESTIONS[step].options.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => pick(opt.key)}
                  className="group flex items-center gap-4 rounded-2xl border border-black/8 bg-canvas px-5 py-4 text-left transition-all duration-300 hover:border-lila/50 hover:bg-lila/[0.05] hover:shadow-[0_4px_20px_rgba(148,113,211,0.18)] hover:-translate-y-0.5"
                >
                  <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                    {opt.emoji}
                  </span>
                  <span className="font-display text-[1.05rem] text-ink-soft group-hover:text-lila transition-colors">
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6 text-center">
              <div className="text-[10px] uppercase tracking-[0.3em] text-lila mb-3">Tvoj ritual</div>
              <h3 className="font-display text-[2rem] lg:text-[2.4rem] text-ink leading-tight">
                Tri tretmana iz našeg{" "}
                <span className="font-display-italic text-lila">cenovnika</span>
              </h3>
              <p className="mt-2 text-[12px] text-mist">izabrani po tvojim odgovorima</p>
            </div>

            {recos.length === 0 ? (
              <div className="rounded-2xl border border-black/8 bg-canvas p-6 text-center text-[14px] text-mist">
                Bez direktnog matcha — preporučujemo da kreneš sa{" "}
                <a href="/cenovnik" className="text-lila underline">
                  ličnom konsultacijom
                </a>
                .
              </div>
            ) : (
              <div className="space-y-3">
                {recos.map((r, i) => (
                  <motion.div
                    key={r.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="group flex items-start gap-4 rounded-2xl border border-black/8 bg-canvas p-5 transition-all hover:border-lila/40 hover:shadow-[0_4px_20px_rgba(148,113,211,0.15)]"
                  >
                    <span className="mt-1 flex size-9 flex-shrink-0 items-center justify-center rounded-full bg-lila text-white text-[12px] font-bold">
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                        <h4 className="font-display text-[1.15rem] text-ink group-hover:text-lila transition-colors">
                          {r.name}
                        </h4>
                        <span className="text-[12px] font-semibold text-champagne whitespace-nowrap">
                          {priceOf(r)}
                        </span>
                      </div>
                      {r.description && (
                        <p className="mt-1 text-[13px] text-mist leading-relaxed">{r.description}</p>
                      )}
                      <div className="mt-2 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-mist-light">
                        <span className="inline-flex items-center gap-1.5">
                          <span
                            className="block size-2 rounded-full"
                            style={{ background: locationColor(r.location) }}
                          />
                          {locationLabel(r.location)}
                        </span>
                        <span className="text-mist-light/70">·</span>
                        <span>{r.groupTitle}</span>
                        <span className="text-mist-light/70">·</span>
                        <span>Match {r.score}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            <div className="mt-7 flex flex-wrap gap-3 justify-center">
              <a
                href="/cenovnik"
                className="inline-flex items-center gap-2 rounded-full bg-lila px-7 py-3.5 text-[13px] font-semibold text-white hover:bg-lila-glow transition-colors"
              >
                Vidi sve u cenovniku ›
              </a>
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 rounded-full border border-black/12 bg-white px-6 py-3.5 text-[13px] font-medium text-ink-soft hover:border-lila/40 hover:text-lila transition-colors"
              >
                Promeni odgovore
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
