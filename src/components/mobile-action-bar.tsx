"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CalendarCheck, InstagramLogo } from "@phosphor-icons/react/dist/ssr";

const BOOKING_URL = "https://beauty.hotpepper.jp/CSP/bt/reserve/?storeId=H000805576";

export function MobileActionBar() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const about = document.getElementById("about");
        if (!about) return;

        const onScroll = () => {
            setVisible(about.getBoundingClientRect().top <= 0);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div
            className={`fixed inset-x-0 bottom-0 z-50 flex border-t border-line bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md transition-transform duration-300 ease-out lg:hidden ${
                visible ? "translate-y-0" : "translate-y-full"
            }`}
        >
            <Link
                href="https://instagram.com"
                className="flex flex-1 items-center justify-center gap-2 border-r border-line py-3.5 text-sm font-medium text-foreground-muted transition-colors active:bg-surface-sunken"
            >
                <InstagramLogo size={18} weight="light" />
                Instagram
            </Link>
            <Link
                href={BOOKING_URL}
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
