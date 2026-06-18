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
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  bounce: 0.1,
                  duration: 0.5,
                  delay: gi * 0.04,
                }}
                className="overflow-hidden rounded-2xl border border-black/[0.07] bg-white"
              >
                <button
                  onClick={() => setOpenGroup(isOpen ? null : group.title)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-black/[0.02]"
                >
                  <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-ink-soft">
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
                      className="text-mist"
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
                      className="overflow-hidden border-t border-black/[0.06]"
                    >
                      {group.services.map((svc, i) => (
                        <div
                          key={i}
                          className={
                            i < group.services.length - 1
                              ? "border-b border-black/[0.05]"
                              : ""
                          }
                        >
                          <ServiceRow service={svc} />
                        </div>
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
