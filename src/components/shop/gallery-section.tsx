"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
    ArrowUpRightIcon,
    CaretLeftIcon,
    CaretRightIcon,
    XIcon,
} from "@phosphor-icons/react/dist/ssr";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "../reveal";
import { ParallaxImage } from "../home/parallax-image";
import { SectionHeading } from "./section-heading";
import type { GalleryContent } from "@/lib/types";

interface GallerySectionProps {
    content: GalleryContent;
    index: string;
}

export function GallerySection({ content, index }: GallerySectionProps) {
    const { shots } = content;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        if (openIndex === null) return;
        document.body.style.overflow = "hidden";
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpenIndex(null);
            if (e.key === "ArrowRight")
                setOpenIndex((i) => (i === null ? i : (i + 1) % shots.length));
            if (e.key === "ArrowLeft")
                setOpenIndex((i) =>
                    i === null ? i : (i - 1 + shots.length) % shots.length,
                );
        };
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [openIndex, shots.length]);

    const step = (dir: 1 | -1) =>
        setOpenIndex((i) =>
            i === null ? i : (i + dir + shots.length) % shots.length,
        );

    return (
        <section id="gallery" className="bg-surface text-ink">
            <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 md:py-44 lg:px-10">
                <SectionHeading
                    index={index}
                    label="Gallery"
                    title="Gallery"
                    aside={content.heading}
                />

                {/* Same rhythm as the home Style grid: 3 columns on desktop,
                    middle column dropped; the last tile links to Hot Pepper. */}
                <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-24 md:grid-cols-3 md:gap-x-8 md:gap-y-16">
                    {shots.map((shot, i) => (
                        <Reveal
                            key={shot.src}
                            delay={(i % 3) * 0.08}
                            className={`${i % 2 === 1 ? "mt-12" : ""} ${i % 3 === 1 ? "md:mt-20" : "md:mt-0"}`}
                        >
                            <button
                                type="button"
                                onClick={() => setOpenIndex(i)}
                                aria-label="写真を拡大表示"
                                className="block w-full text-left"
                            >
                                <ParallaxImage
                                    src={shot.src}
                                    alt="サロンでの仕上がりの一例"
                                    sizes="(min-width: 768px) 30vw, 50vw"
                                    className="group aspect-3/4"
                                    imageClassName="object-cover object-top"
                                    strength={6}
                                />
                                <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-foreground-muted">
                                    No.{String(i + 1).padStart(2, "0")}
                                </p>
                            </button>
                        </Reveal>
                    ))}

                    <Reveal
                        className={`${shots.length % 2 === 1 ? "mt-12" : ""} ${shots.length % 3 === 1 ? "md:mt-20" : "md:mt-0"}`}
                    >
                        <Link
                            href={content.moreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block aspect-3/4 overflow-hidden"
                        >
                            <Image
                                src={content.moreTileImage}
                                alt="もっとスタイルを見る"
                                fill
                                sizes="(min-width: 768px) 30vw, 50vw"
                                className="object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                            />
                            <div className="absolute inset-0 flex flex-col items-start justify-end bg-ink/55 p-5 text-paper transition-colors duration-500 group-hover:bg-ink/70 md:p-7">
                                <span className="font-display text-4xl font-light leading-none md:text-5xl">
                                    More
                                </span>
                                <span className="mt-3 flex items-center gap-1 text-sm">
                                    もっと見る
                                    <ArrowUpRightIcon size={14} />
                                </span>
                            </div>
                        </Link>
                        <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-foreground-muted">
                            HOT PEPPER Beauty
                        </p>
                    </Reveal>
                </div>
            </div>

            <AnimatePresence>
                {openIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-100 flex items-center justify-center bg-ink/95 p-4 sm:p-8"
                        onClick={() => setOpenIndex(null)}
                    >
                        <button
                            type="button"
                            onClick={() => setOpenIndex(null)}
                            aria-label="閉じる"
                            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center text-paper/80 transition-colors hover:text-paper sm:right-6 sm:top-6"
                        >
                            <XIcon size={24} />
                        </button>
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                step(-1);
                            }}
                            aria-label="前へ"
                            className="absolute left-2 flex h-11 w-11 items-center justify-center text-paper/80 transition-colors hover:text-paper sm:left-6"
                        >
                            <CaretLeftIcon size={22} weight="light" />
                        </button>
                        <Image
                            src={shots[openIndex].src}
                            alt="サロンでの仕上がりの一例"
                            width={shots[openIndex].width}
                            height={shots[openIndex].height}
                            quality={95}
                            onClick={(e) => e.stopPropagation()}
                            className="h-auto max-h-[85vh] w-auto max-w-[90vw] object-contain"
                        />
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                step(1);
                            }}
                            aria-label="次へ"
                            className="absolute right-2 flex h-11 w-11 items-center justify-center text-paper/80 transition-colors hover:text-paper sm:right-6"
                        >
                            <CaretRightIcon size={22} weight="light" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
