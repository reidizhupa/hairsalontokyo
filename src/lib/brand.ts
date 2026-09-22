import type { AboutContent, HeroContent } from "./types";

export const BRAND_HERO: HeroContent = {
    imageSrc: "/herobg15.png",
    imageAlt: "やわらかな光の中でくつろぐ女性",
    imageClassName:
        "scale-130 object-cover object-[75%_50%] translate-y-25 sm:scale-100 sm:object-[55%_20%] sm:translate-y-0",
    heading: "地域に根を張り、未来を育てる。",
    subheading: "美容を通じて、この土地に暮らす人々の毎日に寄り添う。",
};

export const BRAND_ABOUT: AboutContent = {
    heading: [
        "技術だけでなく、人として、",
        "一生涯寄り添えるサロンでありたい。",
        "期待を超える技術と、",
        "大切な人を連れてきたくなる空間で、",
        "日常まで幸せにする体験を。",
    ],
    images: [
        {
            src: "/sugamo/sugamo_interior.webp",
            alt: "roots 巣鴨本店の明るく開放的な店内",
        },
        { src: "/asakusa_interior.webp", alt: "roots 浅草店の落ち着いた店内" },
        {
            src: "/eyelash/eyelash_interior.webp",
            alt: "roots 巣鴨店 アイラッシュ&アイブロウの店内",
        },
    ],
};
