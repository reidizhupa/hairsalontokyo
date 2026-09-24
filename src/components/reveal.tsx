"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
  mobileStatic = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  // Suppress the fade/slide-in below 640px. Done in CSS (see globals.css)
  // rather than a JS media check so SSR and hydration always agree.
  mobileStatic?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`${className}${mobileStatic ? " reveal-static-mobile" : ""}`}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
