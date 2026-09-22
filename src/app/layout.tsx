import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { MobileActionBar } from "@/components/mobile-action-bar";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "roots 浅草店 | 浅草の完全予約制ヘアサロン",
  description: "一人ひとりに向き合う、落ち着いた美容室です。",
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
