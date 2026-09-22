import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./reveal";

const MENU_URL = "https://beauty.hotpepper.jp/slnH000805576/coupon/";

const MENU_HIGHLIGHTS = [
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
];

const OTHER_MENU = ["パーマ", "縮毛矯正", "ヘッドスパ", "その他ケアメニュー"];

export function Services() {
    return (
        <section id="services" className="bg-surface-sunken">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:py-28 lg:px-10">
                <Reveal>
                    <span className="font-serif text-xl font-bold uppercase tracking-[0.2em] text-accent">
                        Menu
                    </span>
                    <h2 className="mt-5 max-w-xl font-serif text-base font-thin text-gray-500 leading-snug tracking-tight md:text-3xl">
                        一人ひとりの髪質や悩みに合わせて。
                    </h2>
                </Reveal>

                <Reveal className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-4 lg:grid-cols-4">
                    {MENU_HIGHLIGHTS.map((item) => (
                        <Link
                            key={item.title}
                            href={MENU_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-3/4 overflow-hidden rounded-sm"
                        >
                            <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                sizes="(min-width: 1024px) 23vw, 45vw"
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                                <h3 className="font-serif text-base font-medium text-white sm:text-lg">
                                    {item.title}
                                </h3>
                                <p className="mt-1 text-xs leading-relaxed text-white/80 sm:text-sm">
                                    {item.tag}
                                </p>
                            </div>
                        </Link>
                    ))}
                </Reveal>

                <p className="mt-8 text-sm text-foreground-muted sm:mt-10">
                    {OTHER_MENU.map((item, i) => (
                        <span key={item}>
                            <Link
                                href={MENU_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                            >
                                {item}
                            </Link>
                            {i < OTHER_MENU.length - 1 && "　・　"}
                        </span>
                    ))}
                    など、その他のメニューもお気軽にご相談ください。
                </p>
            </div>
        </section>
    );
}
