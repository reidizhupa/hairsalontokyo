import type {
    AboutContent,
    AccessContent,
    ContactContent,
    GalleryContent,
    HeroContent,
    MenuContent,
    SeoMeta,
    StructuredAddress,
} from "./types";

const STORE_ID = "H000811448";
const BASE_URL = `https://beauty.hotpepper.jp/kr/sln${STORE_ID}`;

export const EYELASH_BOOKING_URL = `https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=${STORE_ID}`;
export { EYELASH_INSTAGRAM_URL } from "./site";

export const EYELASH_STRUCTURED_ADDRESS: StructuredAddress = {
    streetAddress: "千石4-26-2 SANSAN千石ビル2F 201号室",
    addressLocality: "文京区",
    addressRegion: "東京都",
    postalCode: "112-0011",
    telephone: "080-7678-6466",
    openingHours: "Mo-Su 10:00-19:00",
};

export const EYELASH_SEO: SeoMeta = {
    siteName: "roots 巣鴨店【アイラッシュ&アイブロウ】",
    title: "roots 巣鴨店 アイラッシュ&アイブロウ | 巣鴨の完全予約制まつげ・眉サロン",
    description:
        "白とリネン、グリーンに包まれる完全予約制のまつげ・眉サロン roots 巣鴨店。まつげパーマ・パリジェンヌリフト・まつげエクステ・アイブロウwaxに対応。",
    keywords: [
        "巣鴨 まつげパーマ",
        "巣鴨 まつげエクステ",
        "巣鴨 アイブロウ",
        "巣鴨 眉毛サロン",
        "パリジェンヌリフト 巣鴨",
        "roots 巣鴨店",
    ],
};

export const EYELASH_HERO: HeroContent = {
    imageSrc: "/eyelash/eyelash_interior.webp",
    imageAlt: "サロンでくつろぐ女性の目もと",
    imageClassName: "object-cover object-[75%_15%]",
    heading: "巣鴨で、目もとから美しく。",
    subheading: "白とリネン、グリーンに包まれる完全予約制のまつげ・眉サロン。",
};

export const EYELASH_ABOUT: AboutContent = {
    heading: [
        "一人ひとりの毛流れや骨格に合わせて、",
        "トレンドと自然な仕上がりを両立するデザインを。",
        "白を基調にした、リラックスできる空間で、",
        "リクライニングチェアに揺られながら、",
        "贅沢なひとときをお過ごしください。",
    ],
    images: [
        {
            src: "/eyelash/about-1.jpg",
            alt: "白を基調にした、明るく開放的な店内",
        },
        {
            src: "/eyelash/about-2.jpg",
            alt: "観葉植物とリネンに囲まれたくつろぎの一角",
        },
        {
            src: "/eyelash/about-3.jpg",
            alt: "リクライニングチェアのある施術スペース",
        },
    ],
};

export const EYELASH_MENU: MenuContent = {
    heading: "まつげ・眉、それぞれのお悩みに合わせて。",
    menuUrl: `${BASE_URL}/coupon/`,
    highlights: [
        {
            title: "まつげパーマ・リフト",
            tag: "根本から立ち上げる、ナチュラルな上向きまつげへ。",
            src: "/eyelash/menu/perm.jpg",
        },
        {
            title: "まつげエクステ",
            tag: "束感仕上げから濃さまで、お好みに合わせて。",
            src: "/eyelash/menu/extension.jpg",
        },
        {
            title: "アイブロウ",
            tag: "似合わせデザイン&カットで、垢抜け眉へ。",
            src: "/eyelash/menu/eyebrow.jpg",
        },
    ],
    otherItems: [
        "上下まつげパーマ",
        "HBLハリウッドブロウリフト",
        "メンズアイブロウwax",
        "マツエクオフ",
    ],
};

export const EYELASH_GALLERY: GalleryContent = {
    heading: "仕上がりの一例です。",
    shots: [
        { src: "/eyelash/gallery/shot-1.jpg", width: 640, height: 910 },
        { src: "/eyelash/gallery/shot-2.jpg", width: 550, height: 890 },
    ],
    moreTileImage: "/eyelash/gallery/more.jpg",
    moreUrl: `${BASE_URL}/photo/`,
};

export const EYELASH_ACCESS: AccessContent = {
    heading: "roots 巣鴨店（美容室）と同じ建物内です。",
    transitNote: "JR山手線・都営三田線「巣鴨駅」徒歩5分",
    mapEmbedUrl:
        "https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1zcm9vdHMg5bej6bSo5pys5bqXIOadseS6rOmDveaWh-S6rOWMuuWNg-efszQtMjYtMiBTQU5TQU7ljYPnn7Pjg5Pjg6s",
    mapUrl: "https://www.google.com/maps?q=roots+巣鴨本店+東京都文京区千石4-26-2",
    iframeTitle: "roots 巣鴨店 地図",
};

export const EYELASH_CONTACT: ContactContent = {
    heading: "空き枠には限りがあります。お早めにご予約を。",
    bookingUrl: EYELASH_BOOKING_URL,
    details: [
        {
            icon: "map",
            value: "東京都文京区千石4-26-2 SANSAN千石ビル2F 201号室",
        },
        { icon: "clock", value: "10:00〜19:00（定休日：不定休）" },
        { icon: "phone", value: "080-7678-6466", href: "tel:08076786466" },
    ],
    features: [
        "完全予約制",
        "リクライニングチェア完備",
        "白×リネン×グリーンの半個室空間",
        "男性のご利用もOK",
        "禁煙",
    ],
    paymentMethods: [
        "Visa",
        "Mastercard",
        "JCB",
        "American Express",
        "Diners Club",
        "交通系IC",
        "PayPay",
    ],
    cancellationNote:
        "※ 無断キャンセルの場合、施術料金の100%をキャンセル料として申し受けます。",
};
