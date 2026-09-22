import type { LocationSlug } from "./types";

export interface LocationNavEntry {
    slug: LocationSlug;
    label: string;
    shortLabel: string;
    href: string;
}

export const LOCATIONS: LocationNavEntry[] = [
    {
        slug: "sugamo",
        label: "roots 巣鴨本店",
        shortLabel: "巣鴨本店",
        href: "/sugamo",
    },
    {
        slug: "asakusa",
        label: "roots 浅草店",
        shortLabel: "浅草店",
        href: "/asakusa",
    },
];
