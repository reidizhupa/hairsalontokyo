"use client";

import Image from "next/image";
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from "motion/react";

export function HomeHero() {
    const reduce = useReducedMotion();
    const { scrollY } = useScroll();
    const yWord = useTransform(scrollY, [0, 700], [0, -90], { clamp: true });
    const yPortrait = useTransform(scrollY, [0, 700], [0, -30], {
        clamp: true,
    });
    const fade = useTransform(scrollY, [0, 400], [1, 0], { clamp: true });

    return (
        <section
            id="top"
            className="relative h-[calc(100svh-4rem)] min-h-130 overflow-hidden bg-surface-sunken"
        >
            <motion.p
                style={reduce ? undefined : { opacity: fade }}
                className="absolute left-4 top-8 z-20 text-[11px] uppercase leading-relaxed tracking-[0.3em] text-foreground sm:left-6 lg:left-10 lg:top-12"
            >
                Hair &amp; Eye Salon
                <br />
                Sugamo / Asakusa — Tokyo
            </motion.p>

            <motion.p
                style={reduce ? undefined : { opacity: fade }}
                className="absolute right-4 top-8 z-20 hidden text-right font-display text-lg italic leading-snug text-foreground sm:right-6 sm:block lg:right-10 lg:top-12"
            >
                地域に根を張り、
                <br />
                未来を育てる。
            </motion.p>

            <motion.div
                style={reduce ? undefined : { y: yPortrait }}
                className="absolute bottom-0 left-1/2 z-10 aspect-[496/638] h-[76%] -translate-x-1/2 sm:left-auto sm:right-[6%] sm:h-[92%] sm:translate-x-0"
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

            {/* Wordmark sits in front, overlapping only the dress — never the
                face — so it layers like a cover but always stays legible. */}
            <motion.h1
                style={reduce ? undefined : { y: yWord }}
                className="absolute inset-x-0 bottom-[12%] z-20 select-none text-center font-display text-[33vw] font-light leading-[0.78] tracking-[-0.04em] text-ink sm:bottom-[7%] sm:text-[26vw]"
            >
                ROOTS
            </motion.h1>

            <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between px-4 pb-5 sm:px-6 lg:px-10">
                <p className="font-display text-base italic text-foreground sm:hidden">
                    地域に根を張り、未来を育てる。
                </p>
            </div>
        </section>
    );
}
