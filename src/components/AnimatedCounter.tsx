"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  className,
  duration = 1.4,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${prefix}${Math.round(v).toLocaleString("sr-RS")}${suffix}`);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration, ease: [0.25, 1, 0.5, 1] });
      return controls.stop;
    }
  }, [isInView, value, duration, count]);

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  );
}
