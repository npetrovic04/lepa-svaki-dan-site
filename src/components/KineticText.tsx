"use client";

import { motion, useReducedMotion } from "motion/react";

export function KineticText({
  text,
  className,
  by = "word",
  delay = 0,
  stagger,
  once = true,
}: {
  text: string;
  className?: string;
  by?: "word" | "letter";
  delay?: number;
  stagger?: number;
  once?: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const units = by === "letter" ? text.split("") : text.split(" ");
  const resolvedStagger = stagger ?? (by === "letter" ? 0.055 : 0.1);

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} style={{ display: "inline-block" }}>
      {units.map((unit, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", whiteSpace: by === "letter" ? "pre" : "normal" }}
          initial={{ opacity: 0, y: "0.7em", filter: "blur(10px)", scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          viewport={{ once, margin: "-60px" }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: delay + i * resolvedStagger,
          }}
        >
          {unit}
          {by === "word" && i < units.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </span>
  );
}
