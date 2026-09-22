import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const NAV_LINKS = [
    { href: "/", label: "TOP" },
    { href: "/#shops", label: "店舗を選ぶ" },
];

export default function NotFound() {
    return (
        <>
            <Navbar
                bookingUrl="/#shops"
                bookingLabel="店舗を選ぶ"
                links={NAV_LINKS}
                showLocationSwitcher={false}
            />
            <main className="flex flex-1 flex-col items-center justify-center bg-background px-4 py-24 text-center sm:py-32">
                <span className="font-serif text-xl font-bold uppercase tracking-[0.2em] text-accent">
                    404
                </span>
                <h1 className="mt-5 font-serif text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                    お探しのページが見つかりませんでした。
                </h1>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground-muted">
                    URLが変更されたか、削除された可能性があります。
                    お手数ですが、トップページまたは店舗一覧からお探しください。
                </p>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center rounded-sm bg-accent px-6 py-3 text-sm font-medium text-white transition-transform active:scale-[0.98] hover:opacity-90"
                    >
                        トップへ戻る
                    </Link>
                    <Link
                        href="/#shops"
                        className="inline-flex items-center rounded-sm border border-accent bg-white px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent-soft"
                    >
                        店舗を選ぶ
                    </Link>
                </div>
            </main>
            <Footer
                displayName="roots"
                footerTagline="美容を通じて、この土地に暮らす人々の毎日に寄り添う。"
                instagramUrl="https://instagram.com"
                links={NAV_LINKS}
            />
        </>
    );
}
