"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const SCRAMBLE_CHARS = "0123456789";

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  className,
  duration = 1.6,
  scrambleFrames = 12,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
  scrambleFrames?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const finalText = value.toLocaleString("sr-RS");
  const [display, setDisplay] = useState(() => finalText.replace(/\d/g, "0"));

  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const totalFrames = Math.round((duration * 1000) / 60);
    const scrambleEndAt = totalFrames - scrambleFrames;
    let raf = 0;

    function tick() {
      frame++;
      const targetDigits = finalText.split("");
      if (frame >= totalFrames) {
        setDisplay(finalText);
        return;
      }
      const settledCount = Math.floor((frame / scrambleEndAt) * targetDigits.length);
      const out = targetDigits
        .map((ch, i) => {
          if (!/\d/.test(ch)) return ch;
          if (i < settledCount) return ch;
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        })
        .join("");
      setDisplay(out);
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, finalText, duration, scrambleFrames]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </motion.span>
  );
}
