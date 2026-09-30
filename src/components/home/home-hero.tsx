"use client";

import Image from "next/image";
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from "motion/react";
import { MaskedText } from "../masked-text";
import { DURATION, EASE_OUT } from "@/lib/motion";

export function HomeHero() {
    const reduce = useReducedMotion();
    const { scrollY } = useScroll();
    // Rendered markup never branches on `reduce` (it is null during SSR, so
    // branching would ship hidden initial styles the client never clears).
    // Reduced motion flattens the scroll ranges and makes entrances instant.
    const yWord = useTransform(scrollY, [0, 700], [0, reduce ? 0 : -90], {
        clamp: true,
    });
    const yPortrait = useTransform(scrollY, [0, 700], [0, reduce ? 0 : -30], {
        clamp: true,
    });
    const fade = useTransform(scrollY, [0, 400], [1, reduce ? 1 : 0], {
        clamp: true,
    });

    // Choreography: portrait → ROOTS → supporting text. Each beat is a small
    // fade-and-rise.
    const enter = (delay: number, y = 12) => ({
        initial: { opacity: 0, y },
        animate: { opacity: 1, y: 0 },
        transition: reduce
            ? { duration: 0 }
            : { duration: DURATION.reveal, ease: EASE_OUT, delay },
    });

    return (
        <section
            id="top"
            className="relative h-[calc(100svh-4rem)] min-h-130 overflow-hidden bg-surface-sunken"
        >
            {/* The page's real heading: visible, Japanese, keyword-bearing.
                The giant ROOTS below is decorative. */}
            <motion.h1
                style={{ opacity: fade }}
                className="absolute left-4 top-8 z-20 text-[11px] leading-relaxed text-foreground sm:left-6 lg:left-10 lg:top-12"
            >
                <motion.span className="block tracking-[0.15em]" {...enter(0.9)}>
                    浅草・巣鴨の美容室／まつげ・眉サロン
                </motion.span>
                <motion.span
                    className="block uppercase tracking-[0.3em]"
                    {...enter(1.0)}
                >
                    roots — Hair &amp; Eye Salon Tokyo
                </motion.span>
            </motion.h1>

            <motion.p
                style={{ opacity: fade }}
                className="absolute right-4 top-8 z-20 hidden text-right font-display text-lg italic leading-snug text-foreground sm:right-6 sm:block lg:right-10 lg:top-12"
            >
                <motion.span className="block" {...enter(1.05)}>
                    地域に根を張り、
                    <br />
                    未来を育てる。
                </motion.span>
            </motion.p>

            <motion.div
                style={{ y: yPortrait }}
                className="absolute bottom-0 left-1/2 z-10 aspect-[496/638] h-[76%] -translate-x-1/2 sm:left-auto sm:right-[6%] sm:h-[92%] sm:translate-x-0"
            >
                <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={
                        reduce
                            ? { duration: 0 }
                            : { duration: DURATION.hero, ease: EASE_OUT }
                    }
                >
                    <Image
                        src="/hero-portrait.webp"
                        alt="やわらかな光の中でくつろぐ女性"
                        fill
                        priority
                        sizes="(min-width: 640px) 45vw, 90vw"
                        className="object-contain object-bottom"
                    />
                </motion.div>
            </motion.div>

            {/* Wordmark sits in front, overlapping only the dress — never the
                face — so it layers like a cover but always stays legible. */}
            <motion.p
                aria-hidden
                style={{ y: yWord }}
                className="absolute inset-x-0 bottom-[12%] z-20 select-none text-center font-display text-[33vw] font-light leading-[0.78] tracking-[-0.04em] text-ink sm:bottom-[7%] sm:text-[26vw]"
            >
                <MaskedText text="ROOTS" onMount delay={0.35} />
            </motion.p>

            <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between px-4 pb-5 sm:px-6 lg:px-10">
                <motion.p
                    className="font-display text-base italic text-foreground sm:hidden"
                    {...enter(1.05)}
                >
                    地域に根を張り、未来を育てる。
                </motion.p>
            </div>
        </section>
    );
}
