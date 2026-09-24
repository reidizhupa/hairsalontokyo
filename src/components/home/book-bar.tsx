"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
    ArrowUpRightIcon,
    CalendarCheckIcon,
    XIcon,
} from "@phosphor-icons/react/dist/ssr";
import { AnimatePresence, motion } from "motion/react";
import type { BOOK_OPTIONS } from "@/lib/home";

interface BookBarProps {
    options: typeof BOOK_OPTIONS;
}

// Mobile-only fixed BOOK button: tap → choose salon → Hot Pepper (2 taps).
export function BookBar({ options }: BookBarProps) {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);

    // Hidden while the hero is on screen; slides in once it's scrolled past.
    useEffect(() => {
        const hero = document.getElementById("top");
        if (!hero) return;
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(!entry.isIntersecting),
            { threshold: 0 },
        );
        observer.observe(hero);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!open) return;
        document.body.style.overflow = "hidden";
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [open]);

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                tabIndex={visible ? 0 : -1}
                aria-hidden={!visible}
                className={`fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-2 bg-ink pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-4 text-sm tracking-[0.2em] text-paper transition-transform duration-300 ease-out lg:hidden ${
                    visible ? "translate-y-0" : "translate-y-full"
                }`}
            >
                <CalendarCheckIcon size={18} weight="light" aria-hidden />
                ご予約
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed inset-0 z-50 lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <button
                            type="button"
                            aria-label="閉じる"
                            onClick={() => setOpen(false)}
                            className="absolute inset-0 bg-ink/50"
                        />
                        <motion.div
                            role="dialog"
                            aria-label="予約する店舗を選択"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-x-0 bottom-0 bg-paper px-5 pb-[calc(env(safe-area-inset-bottom)+1.5rem)] pt-6"
                        >
                            <div className="flex items-center justify-between">
                                <p className="text-[11px] uppercase tracking-[0.3em] text-foreground-muted">
                                    Select salon
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    aria-label="閉じる"
                                    className="-mr-2 flex h-10 w-10 items-center justify-center text-ink"
                                >
                                    <XIcon size={20} />
                                </button>
                            </div>
                            <div className="mt-2 border-t border-ink">
                                {options.map((option) => (
                                    <Link
                                        key={option.href}
                                        href={option.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setOpen(false)}
                                        className="flex items-center justify-between border-b border-ink py-5 text-ink active:bg-surface-sunken"
                                    >
                                        <span className="flex flex-col">
                                            <span className="font-display text-3xl font-light leading-none">
                                                {option.en}
                                            </span>
                                            <span className="mt-1.5 text-xs text-foreground-muted">
                                                {option.name}
                                            </span>
                                        </span>
                                        <ArrowUpRightIcon size={20} weight="light" />
                                    </Link>
                                ))}
                            </div>
                            <p className="mt-4 text-[11px] leading-relaxed text-foreground-muted">
                                HOT PEPPER Beautyの予約ページへ移動します。
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
