"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
    CaretLeftIcon,
    CaretRightIcon,
    XIcon,
} from "@phosphor-icons/react/dist/ssr";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./reveal";

const SHOTS = [
    { src: "/gallery/shot-1.jpg", width: 904, height: 1280 },
    { src: "/gallery/shot-2.jpg", width: 853, height: 1280 },
    { src: "/gallery/shot-3.jpg", width: 852, height: 1280 },
    { src: "/gallery/shot-4.jpg", width: 1010, height: 1280 },
    { src: "/gallery/shot-5.jpg", width: 853, height: 1280 },
];

const MORE_TILE_IMAGE = "/gallery/shot-6.jpg";
const MORE_URL = "https://beauty.hotpepper.jp/slnH000805576/style/";

export function Gallery() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        if (openIndex === null) return;

        document.body.style.overflow = "hidden";
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpenIndex(null);
            if (e.key === "ArrowRight") {
                setOpenIndex((i) => (i === null ? i : (i + 1) % SHOTS.length));
            }
            if (e.key === "ArrowLeft") {
                setOpenIndex((i) =>
                    i === null ? i : (i - 1 + SHOTS.length) % SHOTS.length,
                );
            }
        };
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [openIndex]);

    return (
        <section
            id="gallery"
            className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:py-28 lg:px-10"
        >
            <Reveal className="max-w-xl">
                <span className="font-serif text-xl font-bold uppercase tracking-[0.2em] text-accent">
                    Gallery
                </span>
                <h2 className="mt-5 font-serif text-base font-thin text-gray-500 leading-snug tracking-tight md:text-3xl">
                    一人ひとりに似合わせた、スタイルの一例です。
                </h2>
            </Reveal>

            <Reveal className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-3">
                {SHOTS.map((shot, i) => (
                    <button
                        key={shot.src}
                        type="button"
                        onClick={() => setOpenIndex(i)}
                        aria-label="写真を拡大表示"
                        className="group relative aspect-square overflow-hidden rounded-sm"
                    >
                        <Image
                            src={shot.src}
                            alt="サロンでの仕上がりの一例"
                            fill
                            quality={95}
                            sizes="(min-width: 768px) 32vw, 48vw"
                            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        />
                    </button>
                ))}

                <Link
                    href={MORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-square overflow-hidden rounded-sm"
                >
                    <Image
                        src={MORE_TILE_IMAGE}
                        alt="もっと写真を見る"
                        fill
                        quality={95}
                        sizes="(min-width: 768px) 32vw, 48vw"
                        className="object-cover object-top"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/60 text-white transition-colors group-hover:bg-black/70">
                        <div className="flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-white" />
                            <span className="h-1.5 w-1.5 rounded-full bg-white" />
                            <span className="h-1.5 w-1.5 rounded-full bg-white" />
                        </div>
                        <span className="text-sm font-medium">もっと見る</span>
                    </div>
                </Link>
            </Reveal>

            <AnimatePresence>
                {openIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 sm:p-8"
                        onClick={() => setOpenIndex(null)}
                    >
                        <button
                            type="button"
                            onClick={() => setOpenIndex(null)}
                            aria-label="閉じる"
                            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition-colors hover:text-white sm:right-6 sm:top-6"
                        >
                            <XIcon size={24} />
                        </button>

                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpenIndex((i) =>
                                    i === null
                                        ? i
                                        : (i - 1 + SHOTS.length) %
                                          SHOTS.length,
                                );
                            }}
                            aria-label="前へ"
                            className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition-colors hover:text-white sm:left-6"
                        >
                            <CaretLeftIcon size={22} weight="bold" />
                        </button>

                        <Image
                            src={SHOTS[openIndex].src}
                            alt="サロンでの仕上がりの一例"
                            width={SHOTS[openIndex].width}
                            height={SHOTS[openIndex].height}
                            quality={95}
                            onClick={(e) => e.stopPropagation()}
                            className="h-auto max-h-[85vh] w-auto max-w-[90vw] rounded-sm object-contain"
                        />

                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpenIndex((i) =>
                                    i === null ? i : (i + 1) % SHOTS.length,
                                );
                            }}
                            aria-label="次へ"
                            className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition-colors hover:text-white sm:right-6"
                        >
                            <CaretRightIcon size={22} weight="bold" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
