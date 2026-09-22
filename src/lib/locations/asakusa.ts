import {
    couponUrl,
    reserveUrl,
    styleUrl,
    stylistBaseUrl,
} from "@/lib/hotpepper";
import type { LocationConfig } from "@/lib/types";

const STORE_ID = "H000805576";

export const ASAKUSA: LocationConfig = {
    slug: "asakusa",
    displayName: "roots 浅草店",
    footerTagline: "浅草にある、完全予約制の小さな美容室です。",
    bookingUrl: reserveUrl(STORE_ID),
    instagramUrl: "https://instagram.com",
    stylistBaseUrl: stylistBaseUrl(STORE_ID),
    seo: {
        siteName: "roots 浅草店",
        title: "roots 浅草店 | 浅草の完全予約制ヘアサロン",
        description:
            "地域に根を張り、未来を育てる。髪の悩みに本気で向き合い、一生涯寄り添う完全予約制のヘアサロン。カット・カラー・縮毛矯正・髪質改善トリートメントに対応。",
        keywords: [
            "浅草 美容室",
            "浅草 ヘアサロン",
            "roots 浅草店",
            "レイヤーカット 浅草",
            "縮毛矯正 浅草",
            "髪質改善トリートメント",
            "カラー 浅草",
            "メンズカット 浅草",
        ],
    },
    hero: {
        imageSrc: "/herobg15.png",
        imageAlt: "やわらかな光の中でくつろぐ女性",
        imageClassName:
            "scale-130 object-cover object-[75%_50%] translate-y-25 sm:scale-100 sm:object-[55%_20%] sm:translate-y-0",
        heading: "地域に根を張り、未来を育てる。",
        subheading: "美容を通じて、この土地に暮らす人々の毎日に寄り添う。",
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
                src: "/interior.webp",
                alt: "明るく落ち着いた店内、スタイリングチェアと鏡が並ぶ",
            },
            {
                src: "/interior.webp",
                alt: "白を基調にした、静かな店内の一角",
            },
            {
                src: "/interior.webp",
                alt: "使い込まれた鋏と道具たち",
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
                src: "/menu/cut.jpg",
            },
            {
                title: "カラー",
                tag: "髪に負担の少ない色設計。",
                src: "/menu/color.jpg",
            },
            {
                title: "髪質改善トリートメント",
                tag: "根本から、うるツヤ髪へ。",
                src: "/menu/treatment.jpg",
            },
            {
                title: "メンズカット",
                tag: "一人ひとりの骨格に似合わせて。",
                src: "/menu/mens-cut.jpg",
            },
        ],
        otherItems: ["パーマ", "縮毛矯正", "ヘッドスパ", "その他ケアメニュー"],
    },
    gallery: {
        heading: "一人ひとりに似合わせた、スタイルの一例です。",
        shots: [
            { src: "/gallery/shot-1.jpg", width: 904, height: 1280 },
            { src: "/gallery/shot-2.jpg", width: 853, height: 1280 },
            { src: "/gallery/shot-3.jpg", width: 852, height: 1280 },
            { src: "/gallery/shot-4.jpg", width: 1010, height: 1280 },
            { src: "/gallery/shot-5.jpg", width: 853, height: 1280 },
        ],
        moreTileImage: "/gallery/shot-6.jpg",
        moreUrl: styleUrl(STORE_ID),
    },
    access: {
        heading: "交番横の路面店。浅草・入谷エリアからも便利な立地です。",
        transitNote: "つくばエクスプレス「浅草駅」徒歩3分",
        mapEmbedUrl:
            "https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1zcm9vdHMg5rWF6I2J5bqXIOadseS6rOmDveWPsOadseWMuuilv-a1heiNiTMtMjgtMTk",
        mapUrl: "https://share.google/sTyt5wFD745DjG2Xw",
        iframeTitle: "roots 浅草店 地図",
    },
    contact: {
        heading: "空き枠には限りがあります。お早めにご予約を。",
        bookingUrl: reserveUrl(STORE_ID),
        details: [
            {
                icon: "map",
                value: "東京都台東区西浅草3-28-19 ニッケンマンション1F",
            },
            { icon: "clock", value: "10:00〜19:00（定休日：不定休）" },
            { icon: "phone", value: "070-3600-4508", href: "tel:07036004508" },
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
            "COIN+",
        ],
        cancellationNote:
            "※ 無断キャンセルの場合、施術料金の100%をキャンセル料として申し受けます。",
    },
};
