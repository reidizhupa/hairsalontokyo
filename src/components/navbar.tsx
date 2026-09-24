"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { LocationSwitcher } from "./location-switcher";
import type { NavSlug } from "@/lib/types";

const DEFAULT_LINKS = [
    { href: "/", label: "TOP" },
    { href: "#services", label: "Menu" },
    { href: "#stylists", label: "Staff" },
    { href: "#gallery", label: "Gallery" },
    { href: "#access", label: "Access" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
];

interface NavbarProps {
    bookingUrl: string;
    bookingLabel?: string;
    locationSlug?: NavSlug;
    links?: { href: string; label: string }[];
    showLocationSwitcher?: boolean;
}

export function Navbar({
    bookingUrl,
    bookingLabel = "ご予約",
    locationSlug,
    links = DEFAULT_LINKS,
    showLocationSwitcher = true,
}: NavbarProps) {
    const bookingIsExternal = bookingUrl.startsWith("http");
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled((prev) => (prev ? latest > 4 : latest > 24));
    });

    return (
        <header
            className={`sticky top-0 z-50 transition-colors duration-300 ${
                scrolled
                    ? "bg-surface/98 border-b border-line"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-10">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo_full-nav.png"
                        alt="roots hair salon"
                        width={570}
                        height={439}
                        priority
                        className="h-10 w-auto sm:h-14"
                    />
                </Link>

                <nav className="hidden lg:flex items-center gap-8 text-sm text-gray-500">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="transition-colors hover:text-accent"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3 sm:gap-4">
                    {showLocationSwitcher && (
                        <LocationSwitcher
                            currentSlug={locationSlug}
                            className="hidden lg:block"
                        />
                    )}
                    <Link
                        href={bookingUrl}
                        target={bookingIsExternal ? "_blank" : undefined}
                        rel={
                            bookingIsExternal
                                ? "noopener noreferrer"
                                : undefined
                        }
                        className="hidden items-center rounded-sm bg-accent px-4 py-2 text-sm font-medium text-white transition-transform active:scale-[0.98] hover:opacity-90 sm:px-5 sm:py-2.5 lg:inline-flex"
                    >
                        {bookingLabel}
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
                        {links.map((link) => (
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
                    {showLocationSwitcher && (
                        <div className="mt-3 border-t border-line pt-3">
                            <LocationSwitcher currentSlug={locationSlug} />
                        </div>
                    )}
                    <Link
                        href={bookingUrl}
                        target={bookingIsExternal ? "_blank" : undefined}
                        rel={
                            bookingIsExternal
                                ? "noopener noreferrer"
                                : undefined
                        }
                        onClick={() => setOpen(false)}
                        className="mt-3 inline-flex w-full items-center justify-center rounded-sm bg-accent px-5 py-2.5 text-sm font-medium text-white transition-transform active:scale-[0.98] hover:opacity-90"
                    >
                        {bookingLabel}
                    </Link>
                </div>
            )}
        </header>
    );
}
