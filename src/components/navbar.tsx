"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { List, X } from "@phosphor-icons/react/dist/ssr";

const BOOKING_URL =
    "https://beauty.hotpepper.jp/CSP/bt/reserve/?storeId=H000805576";

const LINKS = [
    { href: "#services", label: "Menu" },
    { href: "#about", label: "About" },
    { href: "#stylists", label: "Staff" },
    { href: "#gallery", label: "Gallery" },
    { href: "#recruit", label: "Recruit" },
    { href: "#access", label: "Access" },
    { href: "#contact", label: "Contact" },
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
                <Link href="#top" className="flex items-center">
                    <Image
                        src="/logo_full-nav.png"
                        alt="roots hair salon"
                        width={570}
                        height={439}
                        priority
                        className="h-14 w-auto"
                    />
                </Link>

                <nav className="hidden lg:flex items-center gap-8 text-sm text-gray-500">
                    {LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="transition-colors hover:text-accent"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2 sm:gap-3">
                    <Link
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden items-center rounded-sm bg-accent px-4 py-2 text-sm font-medium text-white transition-transform active:scale-[0.98] hover:opacity-90 sm:px-5 sm:py-2.5 lg:inline-flex"
                    >
                        ご予約
                    </Link>
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-gray-500"
                        aria-label="Toggle menu"
                    >
                        {open ? <X size={23} /> : <List size={23} />}
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
                                className="block py-2.5 text-gray-500 transition-colors hover:text-accent"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <Link
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="mt-3 inline-flex w-full items-center justify-center rounded-sm bg-accent px-5 py-2.5 text-sm font-medium text-white transition-transform active:scale-[0.98] hover:opacity-90"
                    >
                        ご予約
                    </Link>
                </div>
            )}
        </header>
    );
}
