import { ASAKUSA } from "./locations/asakusa";
import { SUGAMO } from "./locations/sugamo";
import {
    EYELASH_BOOKING_URL,
    EYELASH_CONTACT,
    EYELASH_MENU,
    EYELASH_ACCESS,
} from "./eyelash";
import type { LocationConfig } from "./types";

export interface StyleShot {
    src: string;
    alt: string;
    salon: "SUGAMO" | "ASAKUSA";
}

// Real style photos from each salon's own gallery, credited by salon only —
// per-photo stylist attribution isn't known, so it isn't claimed.
export const STYLE_SHOTS: StyleShot[] = [
    { src: "/gallery/shot-2.jpg", alt: "ロングウェーブのスタイル", salon: "ASAKUSA" },
    { src: "/sugamo/gallery/shot-2.jpg", alt: "黒髪レイヤーのスタイル", salon: "SUGAMO" },
    { src: "/gallery/shot-3.jpg", alt: "ショートボブのスタイル", salon: "ASAKUSA" },
    { src: "/sugamo/gallery/shot-1.jpg", alt: "メンズのセンターパートスタイル", salon: "SUGAMO" },
    { src: "/gallery/shot-4.jpg", alt: "暗髪ロングのスタイル", salon: "ASAKUSA" },
    { src: "/gallery/shot-6.jpg", alt: "メンズのナチュラルショート", salon: "ASAKUSA" },
];

export const STYLE_LINKS = [
    { label: "Sugamo", href: SUGAMO.gallery.moreUrl },
    { label: "Asakusa", href: ASAKUSA.gallery.moreUrl },
];

function detail(config: LocationConfig, icon: "map" | "clock") {
    return config.contact.details.find((d) => d.icon === icon)?.value ?? "";
}

export interface SalonFeature {
    slug: "sugamo" | "asakusa";
    en: string;
    name: string;
    label: string;
    tagline: string;
    address: string;
    hours: string;
    transit: string;
    href: string;
    bookingUrl: string;
    image: string;
    imageAlt: string;
}

export const SALONS: SalonFeature[] = [
    {
        slug: "sugamo",
        en: "SUGAMO",
        name: SUGAMO.displayName,
        label: "Main Salon — 01",
        tagline: "表参道の有名店から独立したスタイリストたちが集う、rootsの本店。",
        address: detail(SUGAMO, "map"),
        hours: detail(SUGAMO, "clock"),
        transit: SUGAMO.access.transitNote,
        href: "/sugamo",
        bookingUrl: SUGAMO.bookingUrl,
        image: SUGAMO.hero.imageSrc,
        imageAlt: "roots 巣鴨本店の店内",
    },
    {
        slug: "asakusa",
        en: "ASAKUSA",
        name: ASAKUSA.displayName,
        label: "Salon — 02",
        tagline: "交番横の路面店。浅草・入谷エリアの日常に寄り添う美容室。",
        address: detail(ASAKUSA, "map"),
        hours: detail(ASAKUSA, "clock"),
        transit: ASAKUSA.access.transitNote,
        href: "/asakusa",
        bookingUrl: ASAKUSA.bookingUrl,
        image: ASAKUSA.hero.imageSrc,
        imageAlt: "roots 浅草店の店内",
    },
];

export const EYE = {
    href: "/eyelash",
    bookingUrl: EYELASH_BOOKING_URL,
    tagline: "白とリネン、グリーンに包まれる、完全予約制のまつげ・眉サロン。",
    address: EYELASH_CONTACT.details.find((d) => d.icon === "map")?.value ?? "",
    transit: EYELASH_ACCESS.transitNote,
    menu: EYELASH_MENU.highlights.map((h) => ({ title: h.title, tag: h.tag })),
    images: {
        main: "/eyelash/eyelash_interior.webp",
    },
};

export const BOOK_OPTIONS = [
    {
        en: "SUGAMO",
        name: "巣鴨本店",
        kind: "HAIR",
        href: SUGAMO.bookingUrl,
    },
    {
        en: "ASAKUSA",
        name: "浅草店",
        kind: "HAIR",
        href: ASAKUSA.bookingUrl,
    },
    {
        en: "EYE / BROW",
        name: "巣鴨店 アイラッシュ&アイブロウ",
        kind: "EYE",
        href: EYELASH_BOOKING_URL,
    },
];
