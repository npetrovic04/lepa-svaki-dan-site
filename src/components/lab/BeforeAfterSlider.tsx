"use client";

import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "motion/react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  /** CSS filter applied to the "before" layer to simulate dull/pre-treatment look — use when only one source is available */
  beforeFilter?: string;
  /** CSS filter applied to the "after" layer */
  afterFilter?: string;
  caption?: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Pre",
  afterLabel = "Posle",
  beforeFilter,
  afterFilter,
  caption,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(50);
  const draggingRef = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
    setPct((x / rect.width) * 100);
  }, []);

  useEffect(() => {
    function onMove(e: PointerEvent) {
      if (!draggingRef.current) return;
      setFromClientX(e.clientX);
    }
    function onUp() {
      draggingRef.current = false;
      document.body.style.userSelect = "";
    }
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [setFromClientX]);

  return (
    <div className="mx-auto max-w-3xl">
      <div
        ref={containerRef}
        className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-canvas shadow-[0_8px_40px_rgba(0,0,0,0.08)] select-none cursor-ew-resize"
        onPointerDown={(e) => {
          draggingRef.current = true;
          document.body.style.userSelect = "none";
          setFromClientX(e.clientX);
        }}
      >
        {/* AFTER (full image, bottom) */}
        <Image
          src={afterSrc}
          alt={afterLabel}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover pointer-events-none"
          style={{ filter: afterFilter }}
        />
        <span className="absolute top-4 right-4 z-20 rounded-full bg-lila/90 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
          {afterLabel}
        </span>

        {/* BEFORE (clipped to left of slider) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
        >
          <Image
            src={beforeSrc}
            alt={beforeLabel}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
            style={{ filter: beforeFilter }}
          />
          <span className="absolute top-4 left-4 z-20 rounded-full bg-black/65 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
            {beforeLabel}
          </span>
        </div>

        {/* Slider handle */}
        <motion.div
          className="absolute top-0 bottom-0 z-30 pointer-events-none"
          style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
          initial={false}
          transition={{ type: "spring", bounce: 0.15, duration: 0.3 }}
        >
          <div className="relative h-full w-[2px] bg-gradient-to-b from-white/40 via-white to-white/40 shadow-[0_0_18px_rgba(255,255,255,0.7)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex size-14 items-center justify-center rounded-full bg-white shadow-[0_8px_28px_rgba(0,0,0,0.25),0_0_0_3px_rgba(221,176,69,0.55)]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-ink-soft">
              <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-[0.22em] text-white/85 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            povuci ←→
          </span>
        </motion.div>

        {/* Soft top/bottom vignette */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/15 to-transparent pointer-events-none" />
      </div>

      {caption && (
        <p className="mt-5 text-center text-[13px] text-mist font-light italic">{caption}</p>
      )}
    </div>
  );
}
