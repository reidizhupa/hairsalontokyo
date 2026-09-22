"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";
import type { HeroContent } from "@/lib/types";

interface HeroProps {
    content: HeroContent;
    bookingUrl: string;
    bookingLabel?: string;
    secondaryHref?: string;
    secondaryLabel?: string;
}

export function Hero({
    content,
    bookingUrl,
    bookingLabel = "ご予約",
    secondaryHref = "#services",
    secondaryLabel = "メニューを見る",
}: HeroProps) {
    const bookingIsExternal = bookingUrl.startsWith("http");

    return (
        <section
            id="top"
            className="relative flex min-h-[75svh] flex-col justify-end overflow-hidden bg-background sm:min-h-svh"
        >
            <div className="absolute inset-0">
                <Image
                    src={content.imageSrc}
                    alt={content.imageAlt}
                    fill
                    priority
                    sizes="100vw"
                    className={
                        content.imageClassName ??
                        "object-cover object-[55%_20%]"
                    }
                />
                {content.foregroundSrc && (
                    <Image
                        src={content.foregroundSrc}
                        alt={content.imageAlt}
                        fill
                        priority
                        sizes="100vw"
                        className={
                            content.foregroundClassName ??
                            content.imageClassName ??
                            "object-cover object-[55%_20%]"
                        }
                    />
                )}
                <div className="absolute inset-0 bg-linear-to-t from-accent-soft/70 from-15% via-accent-soft/10 md:via-accent-soft/1 via-45% to-transparent to-85%" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 sm:pb-16 lg:px-10 lg:pb-50">
                <Reveal className="mx-auto max-w-xl text-left sm:mx-0 sm:text-left">
                    <h1 className="font-serif text-[24px] font-medium leading-[1.4] tracking-tight text-[#135565] sm:text-5xl lg:text-6xl">
                        ROOTS <br />
                        {content.heading.split("\n").map((line, i, arr) => (
                            <span key={line}>
                                {line}
                                {i < arr.length - 1 && <br />}
                            </span>
                        ))}
                    </h1>

                    <div className="mt-9 flex flex-wrap items-center gap-4 sm:justify-start">
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
            </div>
        </section>
    );
}
