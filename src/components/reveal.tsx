"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { DURATION, EASE_OUT, VIEWPORT } from "@/lib/motion";

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
      // Same markup on server and client (`reduce` is null during SSR);
      // reduced motion just makes the entrance instant.
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={
        reduce ? { duration: 0 } : { duration: DURATION.reveal, delay, ease: EASE_OUT }
      }
    >
      {children}
    </motion.div>
  );
}
