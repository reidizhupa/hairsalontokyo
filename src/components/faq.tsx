"use client";

import { useState } from "react";
import { CaretDownIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";

const FAQS = [
    {
        q: "初めての美容室は緊張します…。新規でも予約しても大丈夫？",
        a: "もちろん大丈夫です！rootsでは新規のお客様も大歓迎です。",
    },
    {
        q: "どのメニューにするか迷います…。どんなクーポンで予約すればいいの？",
        a: "メニューが決まっていなくても大丈夫です！rootsでは、ご希望や髪の状態をカウンセリングで確認し、最適なメニューをご提案します。「どのクーポンを選べばいいかわからない」という方も、まずは気になるクーポンでご予約ください。ご予約前のご質問は、お電話やInstagramのDMでもお気軽にどうぞ！",
    },
    {
        q: "髪色や髪型などどうしたいかが決まってなくても大丈夫ですか？",
        a: "もちろん大丈夫です！rootsでは「似合う髪型がわからない」「髪色はおまかせしたい」というお客様も多くご来店されています。",
    },
    {
        q: "美容室が苦手です…。",
        a: "美容室が苦手な方も、大丈夫です！「何を話せばいいかわからない」「希望をうまく伝えられない」という方も多くいらっしゃいます。無理に会話をする必要もありませんので、リラックスしてお過ごしください。",
    },
    {
        q: "スタイリング剤何使えばいい？",
        a: "スタイリング剤は何を使えばいいかわからなくても大丈夫です。髪質や長さ、なりたい仕上がりに合わせて、ワックス・オイル・バームなどから最適なものをご提案します。ご自宅で再現しやすい使い方までお伝えしますので、スタイリングが苦手な方もお気軽にご相談ください。お店で使っている商品もおすすめです。",
    },
];

export function Faq() {
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
                    {FAQS.map((item, i) => {
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
