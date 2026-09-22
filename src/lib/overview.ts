export interface OverviewCard {
    slug: string;
    name: string;
    kind: string;
    tagline: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    imageClassName?: string;
}

export const OVERVIEW_CARDS: OverviewCard[] = [
    {
        slug: "sugamo",
        name: "roots 巣鴨本店",
        kind: "HAIR SALON",
        tagline: "表参道の有名店から独立したスタイリストたちが集う、rootsの本店。",
        href: "/sugamo",
        imageSrc: "/sugamo/hero.jpg",
        imageAlt: "roots 巣鴨本店",
        imageClassName: "object-[85%_20%]",
    },
    {
        slug: "asakusa",
        name: "roots 浅草店",
        kind: "HAIR SALON",
        tagline: "交番横の路面店。浅草・入谷エリアの日常に寄り添う美容室。",
        href: "/asakusa",
        imageSrc: "/herobg15.png",
        imageAlt: "roots 浅草店",
    },
    {
        slug: "eyelash",
        name: "roots 巣鴨店【アイラッシュ&アイブロウ】",
        kind: "EYELASH & BROW",
        tagline: "白とリネン、グリーンに包まれる、完全予約制のまつげ・眉サロン。",
        href: "/eyelash",
        imageSrc: "/eyelash/hero.jpg",
        imageAlt: "roots 巣鴨店 アイラッシュ&アイブロウ",
    },
];
