import { SITE_URL } from "./site";

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
        parentOrganization: {
            "@type": "Organization",
            name: "roots",
            url: SITE_URL,
        },
    };
}
