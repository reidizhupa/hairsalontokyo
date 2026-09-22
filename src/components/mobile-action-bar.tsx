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
            className={`fixed inset-x-0 bottom-0 z-50 flex border-t border-line bg-surface pb-[env(safe-area-inset-bottom)] transition-transform duration-300 ease-out lg:hidden ${
                visible ? "translate-y-0" : "translate-y-full"
            }`}
        >
            <Link
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 border-r border-line py-3.5 text-sm font-medium text-foreground-muted transition-colors active:bg-surface-sunken"
            >
                <InstagramLogo size={18} weight="light" />
                Instagram
            </Link>
            <Link
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 bg-accent py-3.5 text-sm font-medium text-white transition-transform active:scale-[0.98]"
            >
                <CalendarCheck size={18} weight="light" />
                ご予約
            </Link>
        </div>
    );
}
