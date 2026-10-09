"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

// Eases mouse-wheel / trackpad scrolling so the page glides instead of
// stepping. Touch is left native on purpose (syncTouch is off by default):
// iOS/Android momentum scrolling already feels right and stays flicker-free.
// Skipped entirely under reduced motion.
export function SmoothScroll({ children }: { children: ReactNode }) {
    const reduce = useReducedMotion();
    return (
        <ReactLenis
            root
            options={{
                smoothWheel: !reduce,
                lerp: 0.075,
                wheelMultiplier: 0.9,
                // #anchors already clear the navbar via scroll-padding-top.
                anchors: true,
            }}
        >
            {children}
        </ReactLenis>
    );
}
