"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";
import type { HeroContent } from "@/lib/types";

interface HeroSplitProps {
    content: HeroContent;
    eyebrow: string;
    bookingUrl: string;
    bookingLabel?: string;
    secondaryHref?: string;
    secondaryLabel?: string;
}

export function HeroSplit({
    content,
    eyebrow,
    bookingUrl,
    bookingLabel = "ご予約",
    secondaryHref = "#services",
    secondaryLabel = "メニューを見る",
}: HeroSplitProps) {
    const bookingIsExternal = bookingUrl.startsWith("http");

    return (
        <section id="top" className="bg-background">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-10">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12">
                    <Reveal>
                        <span className="font-serif text-xl font-bold uppercase tracking-[0.2em] text-accent">
                            {eyebrow}
                        </span>
                        <h1 className="mt-5 font-serif text-3xl font-medium leading-[1.4] tracking-tight text-foreground sm:text-5xl">
                            {content.heading}
                        </h1>
                        <p className="mt-6 max-w-md text-base leading-relaxed text-foreground-muted">
                            {content.subheading}
                        </p>
                        <div className="mt-9 flex flex-wrap items-center gap-4">
                            <Link
                                href={bookingUrl}
                                target={bookingIsExternal ? "_blank" : undefined}
                                rel={
                                    bookingIsExternal
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                className="group inline-flex items-center gap-2 rounded-sm bg-accent py-3 pl-6 pr-3 text-sm font-medium text-white transition-transform active:scale-[0.98] hover:opacity-90"
                            >
                                {bookingLabel}
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                    <ArrowUpRight size={14} weight="bold" />
                                </span>
                            </Link>
                            <Link
                                href={secondaryHref}
                                className="inline-flex items-center rounded-sm border border-accent bg-white px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent-soft"
                            >
                                {secondaryLabel}
                            </Link>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm">
                            <Image
                                src={content.imageSrc}
                                alt={content.imageAlt}
                                fill
                                priority
                                sizes="(min-width: 768px) 50vw, 100vw"
                                className={
                                    content.imageClassName ?? "object-cover"
                                }
                            />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
