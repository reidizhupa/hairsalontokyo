"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { DURATION, EASE_OUT, STAGGER, VIEWPORT } from "@/lib/motion";

interface MaskedTextProps {
    text: string;
    // Start the sequence immediately (hero) instead of when scrolled into view.
    onMount?: boolean;
    delay?: number;
}

// Words rise through an invisible mask, staggered, once. Words stay real
// text (not letters, no aria tricks), so reading order and SEO are intact.
// The mask is padded so tight display leading never clips ascenders or
// descenders (y, g, p).
//
// The in-view trigger sits on the mask, not the word: a word parked below
// its mask is fully clipped, so observing it directly would never fire.
export function MaskedText({ text, onMount = false, delay = 0 }: MaskedTextProps) {
    const reduce = useReducedMotion();
    const parts = text.split(/(\s+)/);
    let index = 0;

    return (
        <>
            {parts.map((part, i) => {
                if (!part.trim()) return part;
                const wordIndex = index++;
                const word: Variants = {
                    hidden: { y: "115%" },
                    shown: {
                        y: "0%",
                        // Instant under reduced motion; the markup itself must
                        // not branch on `reduce`, which is null during SSR.
                        transition: reduce
                            ? { duration: 0 }
                            : {
                                  duration: DURATION.reveal,
                                  ease: EASE_OUT,
                                  delay: delay + wordIndex * STAGGER.word,
                              },
                    },
                };
                return (
                    <motion.span
                        key={i}
                        className="my-[-0.2em] inline-block overflow-hidden py-[0.2em] align-top"
                        initial="hidden"
                        {...(onMount
                            ? { animate: "shown" }
                            : { whileInView: "shown", viewport: VIEWPORT })}
                    >
                        <motion.span
                            className="masked-word inline-block will-change-transform"
                            variants={word}
                        >
                            {part}
                        </motion.span>
                    </motion.span>
                );
            })}
        </>
    );
}
