import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { ShopHero } from "@/components/shop/shop-hero";
import { MenuSection } from "@/components/shop/menu-section";
import { GallerySection } from "@/components/shop/gallery-section";
import { AccessSection } from "@/components/shop/access-section";
import { ContactSection } from "@/components/shop/contact-section";
import { PeopleSection } from "@/components/home/people-section";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { JsonLd } from "@/components/json-ld";
import { ASAKUSA } from "@/lib/locations/asakusa";
import { SUGAMO } from "@/lib/locations/sugamo";
import { FAQ, STAFF } from "@/lib/company";
import { localBusinessSchema } from "@/lib/structured-data";
import { buildPeople } from "@/lib/people";
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
    const { stylists, assistants } = buildPeople(staff, [
        { slug, label: "ご予約", bookingUrl: config.bookingUrl },
    ]);
    const word = slug === "sugamo" ? "Sugamo" : "Asakusa";
    const schema = localBusinessSchema({
        type: "HairSalon",
        name: config.displayName,
        path: `/${slug}`,
        telephone: config.structuredAddress.telephone,
        streetAddress: config.structuredAddress.streetAddress,
        addressLocality: config.structuredAddress.addressLocality,
        addressRegion: config.structuredAddress.addressRegion,
        postalCode: config.structuredAddress.postalCode,
        openingHours: config.structuredAddress.openingHours,
        image: config.hero.imageSrc,
        mapUrl: config.access.mapUrl,
        instagramUrl: config.instagramUrl,
    });

    return (
        <>
            <JsonLd data={schema} />
            <Navbar bookingUrl={config.bookingUrl} locationSlug={slug} />
            <main className="flex-1">
                <ShopHero
                    content={config.hero}
                    word={word}
                    kind="Hair Salon"
                    name={config.displayName}
                    bookingUrl={config.bookingUrl}
                />
                <MenuSection content={config.menu} index="01" />
                <PeopleSection
                    stylists={stylists}
                    assistants={assistants}
                    index="02"
                />
                <GallerySection content={config.gallery} index="03" />
                <AccessSection
                    content={config.access}
                    details={config.contact.details}
                    index="04"
                />
                <Faq items={FAQ} eyebrow="05 — FAQ" />
                <ContactSection
                    content={config.contact}
                    index="06"
                    name={config.displayName}
                />
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
