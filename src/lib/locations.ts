import type { NavSlug } from "./types";

export interface LocationNavEntry {
    slug: NavSlug;
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
    {
        slug: "eyelash",
        label: "roots 巣鴨店【アイラッシュ&アイブロウ】",
        shortLabel: "アイラッシュ&アイブロウ",
        href: "/eyelash",
    },
];
