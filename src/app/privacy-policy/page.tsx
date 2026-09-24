import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HAIR_INSTAGRAM_URL } from "@/lib/site";

const NAV_LINKS = [
    { href: "/", label: "TOP" },
    { href: "/#shops", label: "店舗を選ぶ" },
];

const SEO_TITLE = "プライバシーポリシー | roots";
const SEO_DESCRIPTION =
    "roots のプライバシーポリシー。個人情報の取り扱い、外部サービスの利用について記載しています。";

export const metadata: Metadata = {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    alternates: { canonical: "/privacy-policy" },
    openGraph: {
        title: SEO_TITLE,
        description: SEO_DESCRIPTION,
        siteName: "roots",
        locale: "ja_JP",
        type: "website",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: SEO_TITLE,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: SEO_TITLE,
        description: SEO_DESCRIPTION,
        images: ["/og-image.jpg"],
    },
};

const SECTIONS: { title: string; body: string[] }[] = [
    {
        title: "基本方針",
        body: [
            "roots（以下「当店」といいます）は、本ウェブサイト（以下「本サイト」といいます）における個人情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。",
        ],
    },
    {
        title: "運営者情報",
        body: [
            "運営者：roots",
            "所在地：〒112-0011 東京都文京区千石4-26-2 SANSAN千石ビル",
            "お問い合わせ：浅草店 070-3600-4508／巣鴨本店・アイラッシュ&アイブロウ 080-7678-6466",
        ],
    },
    {
        title: "本サイトで取得する情報について",
        body: [
            "本サイトには、お問い合わせフォームや会員登録機能はなく、当店が本サイトを通じてお客様の個人情報を直接取得することはありません。",
            "ご予約は HOT PEPPER Beauty の予約システム、採用に関するお問い合わせは Instagram のダイレクトメッセージにて受け付けており、その際にご提供いただく情報は、それぞれ株式会社リクルートおよび Meta Platforms, Inc. が定めるプライバシーポリシーに基づいて取り扱われます。",
        ],
    },
    {
        title: "外部サービス・埋め込みコンテンツについて",
        body: [
            "本サイトの店舗情報ページには、Google マップの地図を埋め込んで表示しています。地図の表示にあたり、Google LLC のプライバシーポリシーに基づき、Cookie の使用等を含む情報の取得が行われる場合があります。",
            "予約ボタンからは HOT PEPPER Beauty（株式会社リクルート）の予約ページへ、Instagram アイコンからは Instagram（Meta Platforms, Inc.）へ、それぞれ遷移します。遷移先での情報の取り扱いについては、各サービスのプライバシーポリシーをご確認ください。",
        ],
    },
    {
        title: "Cookie・アクセス解析について",
        body: [
            "本サイト自体は、現在アクセス解析ツールや広告配信のための Cookie を使用していません。今後、アクセス解析等の導入により取り扱いを変更する場合は、本ポリシーを改定のうえお知らせします。",
        ],
    },
    {
        title: "第三者への提供について",
        body: [
            "当店は、法令に基づく場合を除き、本サイトを通じて取得した情報を本人の同意なく第三者に提供することはありません。",
        ],
    },
    {
        title: "プライバシーポリシーの変更について",
        body: [
            "本ポリシーの内容は、法令の改正やサービス内容の変更等に応じて、予告なく変更されることがあります。変更後のポリシーは、本ページに掲載した時点から効力を生じるものとします。",
        ],
    },
    {
        title: "お問い合わせ窓口",
        body: [
            "本ポリシーに関するお問い合わせは、下記までご連絡ください。",
            "roots 浅草店：070-3600-4508",
            "roots 巣鴨本店／アイラッシュ&アイブロウ：080-7678-6466",
        ],
    },
];

export default function PrivacyPolicyPage() {
    return (
        <>
            <Navbar
                bookingUrl="/#shops"
                bookingLabel="店舗を選ぶ"
                links={NAV_LINKS}
                showLocationSwitcher={false}
            />
            <main className="flex-1 bg-background">
                <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
                    <span className="font-serif text-xl font-bold uppercase tracking-[0.2em] text-accent">
                        Privacy Policy
                    </span>
                    <h1 className="mt-5 font-serif text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                        プライバシーポリシー
                    </h1>

                    <div className="mt-12 flex flex-col gap-10">
                        {SECTIONS.map((section) => (
                            <div key={section.title}>
                                <h2 className="font-serif text-base font-medium text-gray-500">
                                    {section.title}
                                </h2>
                                <div className="mt-3 flex flex-col gap-2">
                                    {section.body.map((paragraph) => (
                                        <p
                                            key={paragraph}
                                            className="text-sm leading-relaxed text-foreground-muted"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="mt-14 text-xs text-foreground-muted/80">
                        制定日：2026年9月23日
                    </p>
                </div>
            </main>
            <Footer
                displayName="roots"
                footerTagline="美容を通じて、この土地に暮らす人々の毎日に寄り添う。"
                instagramUrl={HAIR_INSTAGRAM_URL}
                links={NAV_LINKS}
            />
        </>
    );
}
