import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { MobileActionBar } from "@/components/mobile-action-bar";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_NAME = "roots 浅草店";
const SITE_TITLE = "roots 浅草店 | 浅草の完全予約制ヘアサロン";
const SITE_DESCRIPTION =
  "表参道の有名店で培った技術を浅草で。「提案力」を大切に、髪や頭皮の本当の悩みに向き合う完全予約制のヘアサロン。カット・カラー・縮毛矯正・髪質改善トリートメントに対応。";

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
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
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#63b8bb",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans pb-14 lg:pb-0">
        {children}
        <MobileActionBar />
      </body>
    </html>
  );
}
