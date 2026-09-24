import {
    couponUrl,
    reserveUrl,
    styleUrl,
    stylistBaseUrl,
} from "@/lib/hotpepper";
import type { LocationConfig } from "@/lib/types";
import { HAIR_INSTAGRAM_URL } from "@/lib/site";

const STORE_ID = "H000715037";

export const SUGAMO: LocationConfig = {
    slug: "sugamo",
    displayName: "roots 巣鴨本店",
    footerTagline: "巣鴨・千石エリアにある、rootsの本店です。",
    bookingUrl: reserveUrl(STORE_ID),
    instagramUrl: HAIR_INSTAGRAM_URL,
    stylistBaseUrl: stylistBaseUrl(STORE_ID),
    seo: {
        siteName: "roots 巣鴨本店",
        h1: "巣鴨・千石の美容室　roots 巣鴨本店",
        title: "roots 巣鴨本店 | 巣鴨・千石の完全予約制ヘアサロン",
        description:
            "地域に根を張り、未来を育てる。髪の悩みに本気で向き合い、一生涯寄り添う完全予約制のヘアサロン roots の本店。カット・カラー・縮毛矯正・髪質改善トリートメントに対応。",
        keywords: [
            "巣鴨 美容室",
            "千石 美容室",
            "巣鴨 ヘアサロン",
            "roots 巣鴨本店",
            "縮毛矯正 巣鴨",
            "髪質改善トリートメント 巣鴨",
            "カラー 巣鴨",
            "メンズカット 巣鴨",
        ],
    },
    structuredAddress: {
        streetAddress: "千石4-26-2 SANSAN千石ビル2F 201号室",
        addressLocality: "文京区",
        addressRegion: "東京都",
        postalCode: "112-0011",
        telephone: "080-7678-6466",
        openingHours: "Mo-Su 10:00-19:00",
    },
    hero: {
        imageSrc: "/sugamo/sugamo_interior.webp",
        imageAlt: "サロンでくつろぐ女性",
        imageClassName: "object-cover object-[85%_15%]",
        heading: "巣鴨から、髪と暮らしに寄り添う。",
        subheading:
            "表参道の有名店から独立したスタイリストたちが、一人ひとりの魅力を引き出す。",
    },
    about: {
        heading: [
            "技術だけでなく、人として、",
            "一生涯寄り添えるサロンでありたい。",
            "期待を超える技術と、",
            "大切な人を連れてきたくなる空間で、",
            "日常まで幸せにする体験を。",
        ],
        images: [
            {
                src: "/sugamo/about-1.jpg",
                alt: "白を基調にした、明るく開放的な店内",
            },
            {
                src: "/sugamo/about-2.jpg",
                alt: "観葉植物が並ぶ、落ち着いた雰囲気の店内",
            },
            {
                src: "/sugamo/about-3.jpg",
                alt: "髪と丁寧に向き合う施術の様子",
            },
        ],
    },
    menu: {
        heading: "一人ひとりの髪質や悩みに合わせて。",
        menuUrl: couponUrl(STORE_ID),
        highlights: [
            {
                title: "カット",
                tag: "髪の生え方や癖を見極めて。",
                src: "/sugamo/menu/cut.jpg",
            },
            {
                title: "カラー",
                tag: "髪に負担の少ない色設計。",
                src: "/sugamo/menu/color.jpg",
            },
            {
                title: "髪質改善トリートメント",
                tag: "根本から、うるツヤ髪へ。",
                src: "/sugamo/menu/treatment.jpg",
            },
            {
                title: "メンズカット",
                tag: "一人ひとりの骨格に似合わせて。",
                src: "/sugamo/menu/mens-cut.jpg",
            },
        ],
        otherItems: ["パーマ", "縮毛矯正", "ヘッドスパ", "その他ケアメニュー"],
    },
    gallery: {
        heading: "一人ひとりに似合わせた、スタイルの一例です。",
        shots: [
            { src: "/sugamo/gallery/shot-1.jpg", width: 640, height: 910 },
            { src: "/sugamo/gallery/shot-2.jpg", width: 550, height: 890 },
        ],
        moreTileImage: "/sugamo/gallery/more.jpg",
        moreUrl: styleUrl(STORE_ID),
    },
    access: {
        heading: "巣鴨駅・千石駅、どちらからも徒歩圏内。",
        transitNote: "JR山手線・都営三田線「巣鴨駅」徒歩5分",
        mapEmbedUrl:
            "https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1zcm9vdHMg5bej6bSo5pys5bqXIOadseS6rOmDveaWh-S6rOWMuuWNg-efszQtMjYtMiBTQU5TQU7ljYPnn7Pjg5Pjg6s",
        mapUrl: "https://www.google.com/maps?q=roots+巣鴨本店+東京都文京区千石4-26-2",
        iframeTitle: "roots 巣鴨本店 地図",
    },
    contact: {
        heading: "空き枠には限りがあります。お早めにご予約を。",
        bookingUrl: reserveUrl(STORE_ID),
        details: [
            {
                icon: "map",
                value: "東京都文京区千石4-26-2 SANSAN千石ビル2F 201号室",
            },
            { icon: "clock", value: "10:00〜19:00（定休日：不定休）" },
            { icon: "phone", value: "080-7678-6466", href: "tel:08076786466" },
        ],
        features: [
            "担当制（1人のスタイリストが最後まで担当）",
            "朝10時前・夜19時以降も受付OK",
            "お子様連れOK",
            "ドリンクサービスあり",
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
    },
};
