import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Faq } from "@/components/faq";
import { Recruit } from "@/components/recruit";
import { Footer } from "@/components/footer";
import { HomeHero } from "@/components/home/home-hero";
import { BrandMessage } from "@/components/home/brand-message";
import { Marquee } from "@/components/home/marquee";
import { StyleSection } from "@/components/home/style-section";
import { SalonSection } from "@/components/home/salon-section";
import {
    PeopleSection,
    type PersonCard,
} from "@/components/home/people-section";
import { EyeSection } from "@/components/home/eye-section";
import { BookSection } from "@/components/home/book-section";
import { BookBar } from "@/components/home/book-bar";
import { BRAND_MESSAGE } from "@/lib/brand";
import { FAQ, RECRUIT, STAFF } from "@/lib/company";
import {
    BOOK_OPTIONS,
    EYE,
    SALONS,
    STYLE_LINKS,
    STYLE_SHOTS,
} from "@/lib/home";
import { ASAKUSA } from "@/lib/locations/asakusa";
import { SUGAMO } from "@/lib/locations/sugamo";
import { HAIR_INSTAGRAM_URL } from "@/lib/site";

const NAV_LINKS = [
    { href: "#style", label: "Style" },
    { href: "#salon", label: "Salon" },
    { href: "#people", label: "People" },
    { href: "#eye", label: "Eye / Brow" },
    { href: "#recruit", label: "Recruit" },
    { href: "#faq", label: "FAQ" },
];

const STORES = [
    { slug: "sugamo", label: "巣鴨で予約", bookingUrl: SUGAMO.bookingUrl },
    { slug: "asakusa", label: "浅草で予約", bookingUrl: ASAKUSA.bookingUrl },
] as const;

// Stylist-specific Hot Pepper reservation links, one per salon they're
// listed at (Hot Pepper issues a separate stylist ID per store).
const STYLISTS: PersonCard[] = STAFF.filter(
    (m) => m.src && m.role.includes("スタイリスト"),
).map((member) => ({
    member,
    bookings: STORES.flatMap((store) => {
        const id = member.profileIdByLocation?.[store.slug];
        return id
            ? [{ label: store.label, href: `${store.bookingUrl}&stylistId=${id}` }]
            : [];
    }),
}));

const ASSISTANTS = STAFF.filter((m) => !m.role.includes("スタイリスト"));

const SEO_TITLE = "roots | 浅草・巣鴨の美容室、まつげ・眉サロン";
const SEO_DESCRIPTION =
    "美容を通じて、この土地に暮らす人々の毎日に寄り添う roots。浅草店・巣鴨本店の完全予約制ヘアサロンと、巣鴨のまつげ・眉サロンをご案内します。";

export const metadata: Metadata = {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    openGraph: {
        title: SEO_TITLE,
        description: SEO_DESCRIPTION,
        siteName: "roots",
        locale: "ja_JP",
        type: "website",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: SEO_TITLE,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: SEO_TITLE,
        description: SEO_DESCRIPTION,
        images: ["/og-image.jpg"],
    },
};

export default function RootPage() {
    return (
        <>
            <Navbar
                bookingUrl="#book"
                bookingLabel="ご予約"
                links={NAV_LINKS}
                showLocationSwitcher={false}
            />
            <main className="flex-1">
                <HomeHero />
                <BrandMessage
                    lines={BRAND_MESSAGE.lines}
                    image={BRAND_MESSAGE.image}
                />
                <StyleSection
                    shots={STYLE_SHOTS}
                    links={STYLE_LINKS}
                    bookingBySalon={{
                        SUGAMO: SUGAMO.bookingUrl,
                        ASAKUSA: ASAKUSA.bookingUrl,
                    }}
                />
                <Marquee
                    words={["Roots", "Hair", "Sugamo", "Asakusa", "Eye", "Brow", "Tokyo"]}
                    className="border-y border-line bg-surface py-6 text-6xl text-ink md:py-10 md:text-9xl"
                />
                <SalonSection salons={SALONS} />
                <PeopleSection stylists={STYLISTS} assistants={ASSISTANTS} />
                <EyeSection eye={EYE} />
                <Recruit content={RECRUIT} />
                <Faq items={FAQ} eyebrow="07 — FAQ" />
                <BookSection options={BOOK_OPTIONS} />
            </main>
            <Footer
                displayName="roots"
                footerTagline="美容を通じて、この土地に暮らす人々の毎日に寄り添う。"
                instagramUrl={HAIR_INSTAGRAM_URL}
                links={NAV_LINKS}
                showLocations={false}
            />
            <BookBar options={BOOK_OPTIONS} />
        </>
    );
}
