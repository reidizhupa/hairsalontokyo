import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { HeroSplit } from "@/components/hero-split";
import { Services } from "@/components/services";
import { Gallery } from "@/components/gallery";
import { Access } from "@/components/access";
import { BookingCta } from "@/components/booking-cta";
import { Footer } from "@/components/footer";
import { MobileActionBar } from "@/components/mobile-action-bar";
import {
    EYELASH_ACCESS,
    EYELASH_BOOKING_URL,
    EYELASH_CONTACT,
    EYELASH_GALLERY,
    EYELASH_HERO,
    EYELASH_INSTAGRAM_URL,
    EYELASH_MENU,
    EYELASH_SEO,
} from "@/lib/eyelash";

const NAV_LINKS = [
    { href: "/", label: "TOP" },
    { href: "#services", label: "Menu" },
    { href: "#gallery", label: "Gallery" },
    { href: "#access", label: "Access" },
    { href: "#contact", label: "Contact" },
];

export const metadata: Metadata = {
    title: EYELASH_SEO.title,
    description: EYELASH_SEO.description,
    keywords: EYELASH_SEO.keywords,
    openGraph: {
        title: EYELASH_SEO.title,
        description: EYELASH_SEO.description,
        siteName: EYELASH_SEO.siteName,
        locale: "ja_JP",
        type: "website",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: EYELASH_SEO.title,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: EYELASH_SEO.title,
        description: EYELASH_SEO.description,
        images: ["/og-image.jpg"],
    },
};

export default function EyelashPage() {
    return (
        <>
            <Navbar
                bookingUrl={EYELASH_BOOKING_URL}
                links={NAV_LINKS}
                locationSlug="eyelash"
            />
            <main className="flex-1">
                <HeroSplit
                    content={EYELASH_HERO}
                    eyebrow="Eyelash & Brow"
                    bookingUrl={EYELASH_BOOKING_URL}
                />
                <Services content={EYELASH_MENU} />
                <Gallery content={EYELASH_GALLERY} />
                <Access content={EYELASH_ACCESS} />
                <BookingCta content={EYELASH_CONTACT} />
            </main>
            <Footer
                displayName="roots 巣鴨店【アイラッシュ&アイブロウ】"
                footerTagline="roots 巣鴨本店と同じ建物にある、まつげ・眉の完全予約制サロンです。"
                instagramUrl={EYELASH_INSTAGRAM_URL}
                links={NAV_LINKS}
                locationSlug="eyelash"
            />
            <MobileActionBar
                bookingUrl={EYELASH_BOOKING_URL}
                instagramUrl={EYELASH_INSTAGRAM_URL}
            />
        </>
    );
}
