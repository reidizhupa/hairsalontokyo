"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CalendarCheck, InstagramLogo } from "@phosphor-icons/react/dist/ssr";

interface MobileActionBarProps {
    bookingUrl: string;
    instagramUrl: string;
}

export function MobileActionBar({
    bookingUrl,
    instagramUrl,
}: MobileActionBarProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const hero = document.getElementById("top");
        if (!hero) return;

        const observer = new IntersectionObserver(
            ([entry]) => setVisible(!entry.isIntersecting),
            { threshold: 0, rootMargin: "0px 0px -10% 0px" },
        );
        observer.observe(hero);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            className={`fixed inset-x-0 bottom-0 z-50 flex bg-ink pb-[env(safe-area-inset-bottom)] text-paper transition-transform duration-300 ease-out lg:hidden ${
                visible ? "translate-y-0" : "translate-y-full"
            }`}
        >
            <Link
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 border-r border-paper/20 py-4 text-sm text-paper/70 transition-colors active:text-paper"
            >
                <InstagramLogo size={18} weight="light" />
                Instagram
            </Link>
            <Link
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-[1.4] items-center justify-center gap-2 py-4 text-sm tracking-[0.2em] text-paper active:opacity-80"
            >
                <CalendarCheck size={18} weight="light" />
                ご予約
            </Link>
        </div>
    );
}
