"use client";

import { motion, useReducedMotion } from "motion/react";

export function KineticText({
  text,
  className,
  by = "word",
  delay = 0,
  stagger = 0.04,
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

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} style={{ display: "inline-block" }}>
      {units.map((unit, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", whiteSpace: by === "letter" ? "pre" : "normal" }}
          initial={{ opacity: 0, y: "0.6em", filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once, margin: "-60px" }}
          transition={{
            duration: 0.6,
            ease: [0.25, 1, 0.5, 1],
            delay: delay + i * stagger,
          }}
        >
          {unit}
          {by === "word" && i < units.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </span>
  );
}
