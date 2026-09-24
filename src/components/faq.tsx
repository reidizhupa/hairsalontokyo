"use client";

import { useState } from "react";
import { CaretDownIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";
import type { FaqItem } from "@/lib/types";

interface FaqProps {
    items: FaqItem[];
    eyebrow?: string;
    // Vertical padding; the home page keeps the default, shop pages pass a
    // tighter value since FAQ follows Access on the same background.
    spacing?: string;
}

export function Faq({
    items,
    eyebrow = "FAQ",
    spacing = "py-28 md:py-44",
}: FaqProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq">
            <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 ${spacing}`}>
                <Reveal className="flex flex-col gap-6 md:gap-14">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-foreground-muted">
                            {eyebrow}
                        </p>
                        <h2 className="mt-4 font-display text-[22vw] font-light leading-[0.8] tracking-[-0.03em] text-ink md:text-[11rem]">
                            Q&amp;A
                        </h2>
                    </div>
                    <p className="max-w-sm text-sm leading-relaxed text-foreground-muted">
                        初めての方も、迷っている方も、安心してご相談ください。
                    </p>
                </Reveal>

                <Reveal className="mt-16 border-t border-ink md:mt-24">
                    {items.map((item, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div key={item.q} className="border-b border-line">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : i)
                                    }
                                    aria-expanded={isOpen}
                                    className="flex w-full items-center justify-between gap-4 py-5 text-left sm:py-6"
                                >
                                    <span className="text-base font-medium text-ink sm:text-lg">
                                        {item.q}
                                    </span>
                                    <CaretDownIcon
                                        size={18}
                                        weight="bold"
                                        className={`shrink-0 text-ink transition-transform duration-300 ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>
                                <div
                                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                                        isOpen
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="max-w-2xl pb-5 text-sm leading-relaxed text-foreground-muted sm:pb-6 sm:text-base">
                                            {item.a}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Reveal>
            </div>
        </section>
    );
}
