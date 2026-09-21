"use client";

import Link from "next/link";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { List, X } from "@phosphor-icons/react/dist/ssr";

const LINKS = [
    { href: "#services", label: "メニュー" },
    { href: "#about", label: "ABOUT" },
    { href: "#stylists", label: "スタイリスト" },
    { href: "#gallery", label: "ギャラリー" },
    { href: "#recruit", label: "採用情報" },
    { href: "#contact", label: "アクセス" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 12);
    });

    return (
        <header
            className={`sticky top-0 z-50 transition-colors duration-300 ${
                scrolled
                    ? "bg-surface/90 backdrop-blur-md border-b border-line"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
                <Link
                    href="#top"
                    className="font-serif text-lg tracking-tight sm:text-xl"
                >
                    かんざし
                </Link>

                <nav className="hidden lg:flex items-center gap-8 text-sm text-foreground-muted">
                    {LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="transition-colors hover:text-foreground"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2 sm:gap-3">
                    <Link
                        href="#contact"
                        className="inline-flex items-center rounded-sm bg-accent px-4 py-2 text-sm font-medium text-white transition-transform active:scale-[0.98] hover:opacity-90 sm:px-5 sm:py-2.5"
                    >
                        ご予約
                    </Link>
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground"
                        aria-label="Toggle menu"
                    >
                        {open ? <X size={18} /> : <List size={18} />}
                    </button>
                </div>
            </div>

            {open && (
                <div className="lg:hidden border-t border-line bg-surface px-4 py-4 sm:px-6">
                    <nav className="flex flex-col gap-1 text-sm">
                        {LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="block py-2.5 text-foreground-muted transition-colors hover:text-foreground"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
