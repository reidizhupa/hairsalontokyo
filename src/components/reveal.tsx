"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
  mobileStatic = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  // Skip the fade/slide-in animation below the `sm` breakpoint (640px).
  mobileStatic?: boolean;
}) {
  const reduce = useReducedMotion();
  const [isMobile, setIsMobile] = useState(
    () =>
      mobileStatic &&
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 639px)").matches,
  );

  useEffect(() => {
    if (!mobileStatic) return;
    const mql = window.matchMedia("(max-width: 639px)");
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [mobileStatic]);

  const skip = reduce || (mobileStatic && isMobile);

  return (
    <motion.div
      className={className}
      initial={skip ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
