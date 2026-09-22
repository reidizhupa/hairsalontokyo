"use client";

import { useState } from "react";
import { CaretDownIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";
import type { FaqItem } from "@/lib/types";

interface FaqProps {
    items: FaqItem[];
}

export function Faq({ items }: FaqProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:py-28 lg:px-10">
                <Reveal className="max-w-xl">
                    <span className="font-serif text-xl font-bold uppercase tracking-[0.2em] text-accent">
                        FAQ
                    </span>
                    <h2 className="mt-5 font-serif text-base font-thin text-gray-500 leading-snug tracking-tight md:text-3xl">
                        初めての方も、迷っている方も、安心してご相談ください。
                    </h2>
                </Reveal>

                <Reveal className="mt-10 border-t border-line sm:mt-12">
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
                                    <span className="font-serif text-base font-medium text-gray-500 sm:text-lg">
                                        {item.q}
                                    </span>
                                    <CaretDownIcon
                                        size={18}
                                        weight="bold"
                                        className={`shrink-0 text-accent transition-transform duration-300 ${
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
