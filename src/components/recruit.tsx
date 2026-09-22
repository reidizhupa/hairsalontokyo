"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, XIcon } from "@phosphor-icons/react/dist/ssr";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./reveal";
import { unsplash } from "@/lib/unsplash";
import type { RecruitContent } from "@/lib/types";

interface RecruitProps {
    content: RecruitContent;
}

export function Recruit({ content }: RecruitProps) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        document.body.style.overflow = "hidden";
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [isOpen]);

    return (
        <section id="recruit">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:py-28 lg:px-10">
                <Reveal className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-12">
                    <div className="relative aspect-4/5 w-full overflow-hidden rounded-sm md:aspect-auto md:h-120">
                        <Image
                            src={unsplash(content.imageId, 900, 1100)}
                            alt="真剣にお客様の髪と向き合うスタイリスト"
                            fill
                            sizes="(min-width: 768px) 45vw, 100vw"
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <span className="font-serif text-xl font-bold uppercase tracking-[0.2em] text-accent">
                            Recruit
                        </span>
                        <h2 className="mt-5 font-serif text-base font-thin text-gray-500 leading-snug tracking-tight md:text-3xl">
                            {content.heading.map((line, i) => (
                                <span key={line}>
                                    {line}
                                    {i < content.heading.length - 1 && <br />}
                                </span>
                            ))}
                        </h2>
                        <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground-muted sm:text-base">
                            {content.pitch}
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Link
                                href={content.contactUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 rounded-sm bg-accent py-3 pl-6 pr-3 text-sm font-medium text-white transition-transform active:scale-[0.98] hover:opacity-90"
                            >
                                採用について問い合わせる
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                    <ArrowUpRight size={14} weight="bold" />
                                </span>
                            </Link>
                            <button
                                type="button"
                                onClick={() => setIsOpen(true)}
                                className="inline-flex items-center rounded-sm border border-accent bg-white px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent-soft"
                            >
                                募集要項を見る
                            </button>
                        </div>
                    </div>
                </Reveal>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4 sm:p-8"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 16 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-sm bg-surface p-6 sm:p-10 md:p-12"
                        >
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                aria-label="閉じる"
                                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-foreground-muted transition-colors hover:text-accent sm:right-6 sm:top-6"
                            >
                                <XIcon size={22} />
                            </button>

                            <span className="font-serif text-xl font-bold uppercase tracking-[0.2em] text-accent">
                                Recruit
                            </span>
                            <h2 className="mt-3 font-serif text-xl font-medium text-gray-500 sm:text-2xl">
                                募集要項
                            </h2>

                            <div className="mt-8 border-t border-line">
                                {content.requirements.map((item) => (
                                    <div
                                        key={item.label}
                                        className="grid grid-cols-1 gap-1 border-b border-line py-4 sm:grid-cols-[9rem_1fr] sm:gap-6 sm:py-5"
                                    >
                                        <span className="text-sm font-medium text-gray-500 sm:text-base">
                                            {item.label}
                                        </span>
                                        <span className="text-sm leading-relaxed text-foreground-muted sm:text-base">
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <h3 className="mt-10 font-serif text-sm font-bold uppercase tracking-[0.2em] text-accent">
                                給与
                            </h3>
                            <div className="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12">
                                {content.salary.map((group) => (
                                    <div key={group.role}>
                                        <h4 className="font-serif text-lg font-medium text-gray-500">
                                            {group.role}
                                        </h4>
                                        <p className="mt-2 font-serif text-base text-accent">
                                            {group.base}
                                        </p>
                                        <ul className="mt-4 flex flex-col gap-2">
                                            {group.items.map((item) => (
                                                <li
                                                    key={item}
                                                    className="text-sm leading-relaxed text-foreground-muted"
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <h3 className="mt-10 font-serif text-sm font-bold uppercase tracking-[0.2em] text-accent">
                                採用までの流れ
                            </h3>
                            <div className="mt-6 border-t border-line">
                                {content.steps.map((step, i) => (
                                    <div
                                        key={step.title}
                                        className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line py-5 sm:gap-6"
                                    >
                                        <span className="font-serif text-sm text-accent">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <div>
                                            <h4 className="font-serif text-base font-medium text-gray-500">
                                                {step.title}
                                            </h4>
                                            <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">
                                                {step.body}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-5 text-xs leading-relaxed text-foreground-muted/80 sm:text-sm">
                                履歴書送付先：{content.resumeAddress}
                            </p>
                            <p className="mt-2 text-xs leading-relaxed text-foreground-muted/80 sm:text-sm">
                                気になること、質問等ありましたら採用担当{" "}
                                {content.contactName}（
                                <Link
                                    href={content.contactUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                                >
                                    Instagram: {content.contactHandle}
                                </Link>
                                ）までお願いします。
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
