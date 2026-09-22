"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from "motion/react";
import { Reveal } from "./reveal";

const HERO_IMAGE_ALT = "やわらかな光の中でくつろぐ女性";
const BOOKING_URL =
    "https://beauty.hotpepper.jp/CSP/bt/reserve/?storeId=H000805576";

export function Hero() {
    const reduce = useReducedMotion();
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 900], [0, -140], { clamp: true });

    return (
        <section
            id="top"
            className="relative flex min-h-[95dvh] md:min-h-[95dvh] flex-col justify-end overflow-hidden bg-background sm:min-h-screen"
        >
            <div className="absolute inset-0">
                <Image
                    src="/herobg15.png"
                    alt={HERO_IMAGE_ALT}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-[55%_20%]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-accent-soft/70 from-15% via-accent-soft/80 md:via-accent-soft/20 via-45% to-transparent to-85%" />
            </div>

            <motion.div
                style={reduce ? undefined : { y }}
                className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 sm:pb-16 lg:px-10 lg:pb-50"
            >
                <Reveal className="max-w-xl">
                    <h1 className="font-serif text-4xl font-medium leading-[1.4] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                        髪の悩みに、本気で向き合う。
                    </h1>
                    <p className="mt-6 max-w-md text-base leading-relaxed text-foreground-muted">
                        理想のスタイルだけでなく、髪や頭皮の本当の悩みに向き合い、根本から解決へ導きます。
                    </p>
                    <div className="mt-9 flex flex-wrap items-center gap-4">
                        <Link
                            href={BOOKING_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 rounded-sm bg-accent py-3 pl-6 pr-3 text-sm font-medium text-white transition-transform active:scale-[0.98] hover:opacity-90"
                        >
                            ご予約
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                <ArrowUpRight size={14} weight="bold" />
                            </span>
                        </Link>
                        <Link
                            href="#services"
                            className="inline-flex items-center rounded-sm border border-accent bg-white px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent-soft"
                        >
                            メニューを見る
                        </Link>
                    </div>
                </Reveal>
            </motion.div>
        </section>
    );
}
