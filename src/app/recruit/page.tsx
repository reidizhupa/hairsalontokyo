import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RECRUIT } from "@/lib/company";
import { HAIR_INSTAGRAM_URL } from "@/lib/site";

const NAV_LINKS = [
    { href: "/", label: "トップ" },
    { href: "/#shops", label: "店舗を選ぶ" },
];

const SEO_TITLE = "採用情報 | roots";
const SEO_DESCRIPTION =
    "roots の採用情報。スタイリスト・アシスタント募集要項、給与、応募から採用までの流れをご案内します。";

export const metadata: Metadata = {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
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

export default function RecruitPage() {
    return (
        <>
            <Navbar
                bookingUrl="/#shops"
                bookingLabel="店舗を選ぶ"
                links={NAV_LINKS}
                showLocationSwitcher={false}
            />
            <main className="flex-1 bg-background">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
                        <div className="relative h-80 sm:h-105 md:sticky md:top-16 md:h-[calc(100vh-4rem)]">
                            <Image
                                src="/recruit.jpg"
                                alt="真剣にお客様の髪と向き合うスタイリスト"
                                fill
                                priority
                                sizes="(min-width: 768px) 50vw, 100vw"
                                className="object-cover"
                            />
                        </div>

                        <div className="py-10 sm:py-14 md:py-20">
                            <span className="font-serif text-xl font-bold uppercase tracking-[0.2em] text-accent">
                                Recruit
                            </span>
                            <h1 className="mt-5 font-serif text-xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
                                {RECRUIT.heading.map((line, i) => (
                                    <span key={line}>
                                        {line}
                                        {i < RECRUIT.heading.length - 1 && <br />}
                                    </span>
                                ))}
                            </h1>
                            <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground-muted sm:text-base">
                                {RECRUIT.pitch}
                            </p>
                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <Link
                                    href={RECRUIT.contactUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 rounded-sm bg-accent py-3 pl-6 pr-3 text-sm font-medium text-white transition-transform active:scale-[0.98] hover:opacity-90"
                                >
                                    採用について問い合わせる
                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                        <ArrowUpRight size={14} weight="bold" />
                                    </span>
                                </Link>
                            </div>

                            <h2 className="mt-14 font-serif text-sm font-bold uppercase tracking-[0.2em] text-accent">
                                募集要項
                            </h2>
                            <div className="mt-6 border-t border-line">
                                {RECRUIT.requirements.map((item) => (
                                    <div
                                        key={item.label}
                                        className="grid grid-cols-1 gap-1 border-b border-line py-4 sm:grid-cols-[9rem_1fr] sm:gap-6 sm:py-5"
                                    >
                                        <span className="text-sm font-medium text-gray-500 sm:text-base">
                                            {item.label}
                                        </span>
                                        <span className="text-sm leading-relaxed text-foreground-muted sm:text-base">
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <h2 className="mt-14 font-serif text-sm font-bold uppercase tracking-[0.2em] text-accent">
                                給与
                            </h2>
                            <div className="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-2">
                                {RECRUIT.salary.map((group) => (
                                    <div key={group.role}>
                                        <h3 className="font-serif text-lg font-medium text-gray-500">
                                            {group.role}
                                        </h3>
                                        <p className="mt-2 font-serif text-base text-accent">
                                            {group.base}
                                        </p>
                                        <ul className="mt-4 flex flex-col gap-2">
                                            {group.items.map((item) => (
                                                <li
                                                    key={item}
                                                    className="text-sm leading-relaxed text-foreground-muted"
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <h2 className="mt-14 font-serif text-sm font-bold uppercase tracking-[0.2em] text-accent">
                                採用までの流れ
                            </h2>
                            <div className="mt-6 border-t border-line">
                                {RECRUIT.steps.map((step, i) => (
                                    <div
                                        key={step.title}
                                        className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line py-5 sm:gap-6"
                                    >
                                        <span className="font-serif text-sm text-accent">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <div>
                                            <h3 className="font-serif text-base font-medium text-gray-500">
                                                {step.title}
                                            </h3>
                                            <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">
                                                {step.body}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-8 text-xs leading-relaxed text-foreground-muted/80 sm:text-sm">
                                履歴書送付先：{RECRUIT.resumeAddress}
                            </p>
                            <p className="mt-2 text-xs leading-relaxed text-foreground-muted/80 sm:text-sm">
                                気になること、質問等ありましたら採用担当{" "}
                                {RECRUIT.contactName}（
                                <Link
                                    href={RECRUIT.contactUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                                >
                                    Instagram: {RECRUIT.contactHandle}
                                </Link>
                                ）までお願いします。
                            </p>
                        </div>
                    </div>
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
