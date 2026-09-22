import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Stylists } from "@/components/stylists";
import { Faq } from "@/components/faq";
import { Recruit } from "@/components/recruit";
import { LocationOverview } from "@/components/location-overview";
import { Footer } from "@/components/footer";
import { BRAND_ABOUT, BRAND_HERO } from "@/lib/brand";
import { FAQ, RECRUIT, STAFF } from "@/lib/company";
import { OVERVIEW_CARDS } from "@/lib/overview";
import { ASAKUSA } from "@/lib/locations/asakusa";
import { SUGAMO } from "@/lib/locations/sugamo";
import type { StaffMember } from "@/lib/types";

const NAV_LINKS = [
    { href: "#about", label: "About" },
    { href: "#shops", label: "Shops" },
    { href: "#stylists", label: "Staff" },
    { href: "#recruit", label: "Recruit" },
    { href: "#faq", label: "FAQ" },
];

function resolveStaffHref(person: StaffMember): string | undefined {
    const asakusaId = person.profileIdByLocation?.asakusa;
    if (asakusaId) return `${ASAKUSA.stylistBaseUrl}${asakusaId}/`;
    const sugamoId = person.profileIdByLocation?.sugamo;
    if (sugamoId) return `${SUGAMO.stylistBaseUrl}${sugamoId}/`;
    return undefined;
}

const STAFF_HREFS_BY_NAME = Object.fromEntries(
    STAFF.map((person) => [person.name, resolveStaffHref(person)]),
);

export const metadata: Metadata = {
    title: "roots | 浅草・巣鴨の美容室、まつげ・眉サロン",
    description:
        "美容を通じて、この土地に暮らす人々の毎日に寄り添う roots。浅草店・巣鴨本店の完全予約制ヘアサロンと、巣鴨のまつげ・眉サロンをご案内します。",
};

export default function RootPage() {
    return (
        <>
            <Navbar
                bookingUrl="#shops"
                bookingLabel="店舗を選ぶ"
                links={NAV_LINKS}
                showLocationSwitcher={false}
            />
            <main className="flex-1">
                <Hero
                    content={BRAND_HERO}
                    bookingUrl="#shops"
                    bookingLabel="店舗を選ぶ"
                    secondaryHref="#about"
                    secondaryLabel="こだわりを見る"
                />
                <About content={BRAND_ABOUT} />
                <LocationOverview cards={OVERVIEW_CARDS} />
                <Stylists staff={STAFF} hrefsByName={STAFF_HREFS_BY_NAME} />
                <Recruit content={RECRUIT} />
                <Faq items={FAQ} />
            </main>
            <Footer
                displayName="roots"
                footerTagline="美容を通じて、この土地に暮らす人々の毎日に寄り添う。"
                instagramUrl="https://instagram.com"
                links={NAV_LINKS}
                showLocations={false}
            />
        </>
    );
}
