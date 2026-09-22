"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";

const STYLISTS = [
    {
        name: "やぎ あんじ",
        role: "代表 / スタイリスト",
        src: "/staff/yagi-anji.jpg",
    },
    {
        name: "村松 和哉",
        role: "代表 / スタイリスト",
        src: "/staff/muramatsu-kazuya.jpg",
    },
    { name: "澤本 芽衣", role: "スタイリスト", src: "/staff/sawamoto-mei.jpg" },
    { name: "TAIKI", role: "アシスタント", src: "/staff/taiki.jpg" },
    {
        name: "松浦 茉潤",
        role: "アシスタント",
        src: "/staff/matsuura-mahiro.jpg",
    },
    { name: "松家 はるか", role: "アシスタント", src: null },
    { name: "菅野 大樹", role: "アシスタント", src: null },
];

export function Stylists() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const updateScrollState = () => {
            setCanScrollPrev(el.scrollLeft > 4);
            setCanScrollNext(
                el.scrollLeft < el.scrollWidth - el.clientWidth - 4,
            );
        };

        updateScrollState();
        el.addEventListener("scroll", updateScrollState, { passive: true });
        window.addEventListener("resize", updateScrollState);
        return () => {
            el.removeEventListener("scroll", updateScrollState);
            window.removeEventListener("resize", updateScrollState);
        };
    }, []);

    const scrollByPage = (direction: 1 | -1) => {
        scrollRef.current?.scrollBy({
            left: direction * scrollRef.current.clientWidth * 0.8,
            behavior: "smooth",
        });
    };

    return (
        <section id="stylists" className="bg-surface-sunken">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:pb-28 md:pt-10  lg:px-10">
                <div className="flex items-end justify-between gap-6">
                    <Reveal>
                        <span className="font-serif text-xl font-bold uppercase tracking-[0.2em] text-accent">
                            Staff
                        </span>
                        <h2 className="mt-5 max-w-xl font-serif text-base font-thin text-gray-500 leading-snug tracking-tight md:text-3xl">
                            経験を重ねた、専属スタイリストたち。
                        </h2>
                    </Reveal>

                    <div className="hidden shrink-0 items-center gap-2 sm:flex">
                        <button
                            type="button"
                            onClick={() => scrollByPage(-1)}
                            disabled={!canScrollPrev}
                            aria-label="前へ"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-gray-500 transition-colors hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-30"
                        >
                            <CaretLeftIcon size={16} weight="bold" />
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollByPage(1)}
                            disabled={!canScrollNext}
                            aria-label="次へ"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-gray-500 transition-colors hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-30"
                        >
                            <CaretRightIcon size={16} weight="bold" />
                        </button>
                    </div>
                </div>

                <Reveal>
                    <div
                        ref={scrollRef}
                        className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden scroll-pl-4 pb-2 [touch-action:pan-x] sm:mt-12 sm:gap-5 sm:scroll-pl-6 lg:scroll-pl-10"
                    >
                        {STYLISTS.map((person) => (
                            <div
                                key={person.name}
                                className="w-36 shrink-0 snap-start sm:w-44 lg:w-52"
                            >
                                <div className="relative aspect-square w-full overflow-hidden rounded-sm">
                                    {person.src ? (
                                        <Image
                                            src={person.src}
                                            alt={`${person.name}のポートレート`}
                                            fill
                                            quality={100}
                                            sizes="(min-width: 1024px) 208px, (min-width: 640px) 176px, 144px"
                                            className="object-cover object-[50%_15%]"
                                        />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center bg-accent-soft">
                                            <span className="font-serif text-4xl text-accent">
                                                {person.name.charAt(0)}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <h3 className="mt-4 text-sm font-medium text-gray-500">
                                    {person.name}
                                </h3>
                                <p className="text-sm text-foreground-muted">
                                    {person.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
