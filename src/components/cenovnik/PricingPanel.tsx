"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ServiceRow } from "./ServiceRow";
import { LaserTable } from "./LaserTable";
import { pricingTabs } from "@/lib/cenovnik";

type FilterType = "all" | "nb" | "bw";

interface Props {
  activeTab: string;
  activeFilter: FilterType;
}

export function PricingPanel({ activeTab, activeFilter }: Props) {
  const tab = pricingTabs.find((t) => t.id === activeTab);

  // Accordion — only one group open at a time, first group opens by default per tab
  const [openGroup, setOpenGroup] = useState<string | null>(
    tab ? tab.groups[0]?.title ?? null : null
  );

  useEffect(() => {
    setOpenGroup(tab ? tab.groups[0]?.title ?? null : null);
  }, [activeTab, tab]);

  if (activeTab === "laserska") {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="laserska"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ type: "spring", bounce: 0.1, duration: 0.45 }}
        >
          <LaserTable activeFilter={activeFilter} />
        </motion.div>
      </AnimatePresence>
    );
  }

  if (!tab) return null;

  // Filter services by location
  function filterService(loc: string) {
    if (activeFilter === "all") return true;
    if (activeFilter === "nb") return loc === "nb" || loc === "both";
    if (activeFilter === "bw") return loc === "bw" || loc === "both";
    return true;
  }

  const filteredGroups = tab.groups
    .map((group) => ({
      ...group,
      services: group.services.filter((s) => filterService(s.location)),
    }))
    .filter((g) => g.services.length > 0);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab + activeFilter}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ type: "spring", bounce: 0.1, duration: 0.45 }}
        className="space-y-3"
      >
        {filteredGroups.length === 0 ? (
          <div className="py-16 text-center text-mist text-[14px]">
            Nema usluga za odabranu lokaciju u ovoj kategoriji.
          </div>
        ) : (
          filteredGroups.map((group, gi) => {
            const isOpen = openGroup === group.title;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  boxShadow: isOpen
                    ? "0 8px 40px rgba(148,113,211,0.18), 0 0 0 1px rgba(148,113,211,0.35)"
                    : "0 0 0 1px rgba(0,0,0,0.07)",
                }}
                transition={{
                  type: "spring",
                  bounce: 0.1,
                  duration: 0.5,
                  delay: gi * 0.04,
                }}
                className="overflow-hidden rounded-2xl bg-white"
              >
                <button
                  onClick={() => setOpenGroup(isOpen ? null : group.title)}
                  className="relative flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-lila/[0.04]"
                >
                  {isOpen && (
                    <motion.span
                      layoutId="group-accent"
                      className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-[3px] rounded-r bg-lila shadow-[0_0_10px_rgba(148,113,211,0.6)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className={`text-[12px] font-semibold uppercase tracking-[0.22em] transition-colors ${isOpen ? "text-lila" : "text-ink-soft"}`}>
                    {group.title}
                  </span>
                  <span className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-[11px] font-medium text-mist-light">
                      {group.services.length} {group.services.length === 1 ? "usluga" : "usluga"}
                    </span>
                    <motion.svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={isOpen ? "text-lila" : "text-mist"}
                    >
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                      className="relative overflow-hidden border-t border-black/[0.06]"
                    >
                      {/* Gold shimmer sweep — fires once when panel opens */}
                      <motion.div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 z-10 w-1/3"
                        style={{
                          background:
                            "linear-gradient(110deg, transparent 0%, rgba(255,236,180,0.55) 45%, rgba(221,176,69,0.7) 50%, rgba(255,236,180,0.55) 55%, transparent 100%)",
                          filter: "blur(2px)",
                          mixBlendMode: "screen",
                        }}
                        initial={{ x: "-120%", opacity: 0 }}
                        animate={{ x: "320%", opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.05 }}
                      />
                      {/* Sparkle confetti — tiny gold stars puff out */}
                      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10">
                        {[...Array(7)].map((_, k) => (
                          <motion.span
                            key={k}
                            className="absolute top-2 block size-[3px] rounded-full"
                            style={{
                              left: `${10 + k * 13}%`,
                              background: "#DDB045",
                              boxShadow: "0 0 6px rgba(221,176,69,0.9)",
                            }}
                            initial={{ opacity: 0, y: 6, scale: 0.4 }}
                            animate={{ opacity: [0, 1, 0], y: [-2, -22], scale: [0.6, 1.1, 0.5] }}
                            transition={{
                              duration: 0.95,
                              delay: 0.1 + k * 0.05,
                              ease: "easeOut",
                            }}
                          />
                        ))}
                      </div>
                      {group.services.map((svc, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.45,
                            ease: [0.25, 1, 0.5, 1],
                            delay: i * 0.05,
                          }}
                          className={
                            i < group.services.length - 1
                              ? "border-b border-black/[0.05]"
                              : ""
                          }
                        >
                          <ServiceRow service={svc} />
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })
        )}
      </motion.div>
    </AnimatePresence>
  );
}
