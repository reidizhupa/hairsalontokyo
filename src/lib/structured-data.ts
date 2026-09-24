import {
    EYELASH_INSTAGRAM_URL,
    HAIR_INSTAGRAM_URL,
    SITE_URL,
} from "./site";

interface LocalBusinessInput {
    type: "HairSalon" | "BeautySalon";
    name: string;
    path: string;
    telephone: string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    openingHours: string;
    image: string;
    mapUrl?: string;
    instagramUrl?: string;
}

export function localBusinessSchema(input: LocalBusinessInput) {
    return {
        "@context": "https://schema.org",
        "@type": input.type,
        "@id": `${SITE_URL}${input.path}#business`,
        name: input.name,
        url: `${SITE_URL}${input.path}`,
        image: `${SITE_URL}${input.image}`,
        telephone: input.telephone,
        address: {
            "@type": "PostalAddress",
            streetAddress: input.streetAddress,
            addressLocality: input.addressLocality,
            addressRegion: input.addressRegion,
            postalCode: input.postalCode,
            addressCountry: "JP",
        },
        openingHours: input.openingHours,
        ...(input.mapUrl ? { hasMap: input.mapUrl } : {}),
        ...(input.instagramUrl ? { sameAs: [input.instagramUrl] } : {}),
        parentOrganization: { "@id": ORGANIZATION_ID },
    };
}

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

// Brand-level entity for the home page; the shop pages' LocalBusiness blocks
// point back to it via parentOrganization, and it lists them here.
export function organizationSchema() {
    const shop = (type: string, name: string, path: string) => ({
        "@type": type,
        "@id": `${SITE_URL}${path}#business`,
        name,
        url: `${SITE_URL}${path}`,
    });
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: "roots",
        url: SITE_URL,
        logo: `${SITE_URL}/logo_full.png`,
        description:
            "浅草・巣鴨の完全予約制ヘアサロンと、巣鴨のまつげ・眉サロンを運営する roots。",
        sameAs: [HAIR_INSTAGRAM_URL, EYELASH_INSTAGRAM_URL],
        subOrganization: [
            shop("HairSalon", "roots 巣鴨本店", "/sugamo"),
            shop("HairSalon", "roots 浅草店", "/asakusa"),
            shop(
                "BeautySalon",
                "roots 巣鴨店【アイラッシュ&アイブロウ】",
                "/eyelash",
            ),
        ],
    };
}
