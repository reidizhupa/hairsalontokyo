import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { HeroSplit } from "@/components/hero-split";
import { Services } from "@/components/services";
import { Stylists } from "@/components/stylists";
import { Gallery } from "@/components/gallery";
import { Access } from "@/components/access";
import { Faq } from "@/components/faq";
import { BookingCta } from "@/components/booking-cta";
import { Footer } from "@/components/footer";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { ASAKUSA } from "@/lib/locations/asakusa";
import { SUGAMO } from "@/lib/locations/sugamo";
import { FAQ, STAFF } from "@/lib/company";
import type { LocationConfig, LocationSlug } from "@/lib/types";

const LOCATION_CONFIGS: Record<string, LocationConfig> = {
    asakusa: ASAKUSA,
    sugamo: SUGAMO,
};

function getConfig(slug: string): LocationConfig | undefined {
    return LOCATION_CONFIGS[slug];
}

export function generateStaticParams() {
    return Object.keys(LOCATION_CONFIGS).map((location) => ({ location }));
}

export async function generateMetadata({
    params,
}: PageProps<"/[location]">): Promise<Metadata> {
    const { location } = await params;
    const config = getConfig(location);
    if (!config) return {};

    return {
        title: config.seo.title,
        description: config.seo.description,
        keywords: config.seo.keywords,
        openGraph: {
            title: config.seo.title,
            description: config.seo.description,
            siteName: config.seo.siteName,
            locale: "ja_JP",
            type: "website",
            images: [
                {
                    url: "/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: config.seo.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: config.seo.title,
            description: config.seo.description,
            images: ["/og-image.jpg"],
        },
    };
}

export default async function LocationPage({
    params,
}: PageProps<"/[location]">) {
    const { location } = await params;
    const config = getConfig(location);
    if (!config) notFound();

    const slug = config.slug as LocationSlug;
    const staff = STAFF.filter((member) => member.locations.includes(slug));

    return (
        <>
            <Navbar bookingUrl={config.bookingUrl} locationSlug={slug} />
            <main className="flex-1">
                <HeroSplit
                    content={config.hero}
                    eyebrow={slug === "sugamo" ? "Sugamo" : "Asakusa"}
                    bookingUrl={config.bookingUrl}
                />
                <Services content={config.menu} />
                <Stylists
                    staff={staff}
                    stylistBaseUrl={config.stylistBaseUrl}
                    locationSlug={slug}
                />
                <Gallery content={config.gallery} />
                <Access content={config.access} />
                <Faq items={FAQ} />
                <BookingCta content={config.contact} />
            </main>
            <Footer
                displayName={config.displayName}
                footerTagline={config.footerTagline}
                instagramUrl={config.instagramUrl}
                locationSlug={slug}
            />
            <MobileActionBar
                bookingUrl={config.bookingUrl}
                instagramUrl={config.instagramUrl}
            />
        </>
    );
}
