import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { ShopHero } from "@/components/shop/shop-hero";
import { MenuSection } from "@/components/shop/menu-section";
import { GallerySection } from "@/components/shop/gallery-section";
import { AccessSection } from "@/components/shop/access-section";
import { ContactSection } from "@/components/shop/contact-section";
import { Footer } from "@/components/footer";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { JsonLd } from "@/components/json-ld";
import {
    EYELASH_ACCESS,
    EYELASH_BOOKING_URL,
    EYELASH_CONTACT,
    EYELASH_GALLERY,
    EYELASH_HERO,
    EYELASH_INSTAGRAM_URL,
    EYELASH_MENU,
    EYELASH_SEO,
    EYELASH_STRUCTURED_ADDRESS,
} from "@/lib/eyelash";
import { localBusinessSchema } from "@/lib/structured-data";

const NAV_LINKS = [
    { href: "/", label: "TOP" },
    { href: "#services", label: "Menu" },
    { href: "#gallery", label: "Gallery" },
    { href: "#access", label: "Access" },
    { href: "#contact", label: "Book" },
];

export const metadata: Metadata = {
    title: EYELASH_SEO.title,
    description: EYELASH_SEO.description,
    keywords: EYELASH_SEO.keywords,
    alternates: { canonical: "/eyelash" },
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

const SCHEMA = localBusinessSchema({
    type: "BeautySalon",
    name: "roots 巣鴨店【アイラッシュ&アイブロウ】",
    path: "/eyelash",
    telephone: EYELASH_STRUCTURED_ADDRESS.telephone,
    streetAddress: EYELASH_STRUCTURED_ADDRESS.streetAddress,
    addressLocality: EYELASH_STRUCTURED_ADDRESS.addressLocality,
    addressRegion: EYELASH_STRUCTURED_ADDRESS.addressRegion,
    postalCode: EYELASH_STRUCTURED_ADDRESS.postalCode,
    openingHours: EYELASH_STRUCTURED_ADDRESS.openingHours,
    image: EYELASH_HERO.imageSrc,
    mapUrl: EYELASH_ACCESS.mapUrl,
    instagramUrl: EYELASH_INSTAGRAM_URL,
});

export default function EyelashPage() {
    return (
        <>
            <JsonLd data={SCHEMA} />
            <Navbar
                bookingUrl={EYELASH_BOOKING_URL}
                links={NAV_LINKS}
                locationSlug="eyelash"
            />
            <main className="flex-1">
                <ShopHero
                    content={EYELASH_HERO}
                    word="Eye / Brow"
                    kind="Eyelash & Eyebrow"
                    name={EYELASH_SEO.h1}
                    bookingUrl={EYELASH_BOOKING_URL}
                    dark
                />
                <MenuSection content={EYELASH_MENU} index="01" />
                <GallerySection
                    content={EYELASH_GALLERY}
                    index="02"
                    jp="まつげ・眉の仕上がり"
                />
                <AccessSection
                    content={EYELASH_ACCESS}
                    details={EYELASH_CONTACT.details}
                    index="03"
                />
                <ContactSection
                    content={EYELASH_CONTACT}
                    index="04"
                    name="roots 巣鴨店 アイラッシュ&アイブロウ"
                />
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
