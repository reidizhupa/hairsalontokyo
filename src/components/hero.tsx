import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";
import { unsplash } from "@/lib/unsplash";

const HERO_IMAGE_ID = "1700760934268-8aa0ef52ce0a";
const HERO_IMAGE_ALT = "スタイリストが女性客の髪をカットしている様子";

export function Hero() {
    return (
        <section
            id="top"
            className="relative flex min-h-[85dvh] flex-col justify-end overflow-hidden bg-background sm:block sm:min-h-0"
        >
            <div className="absolute inset-0 sm:hidden">
                <Image
                    src={unsplash(HERO_IMAGE_ID, 900, 1600)}
                    alt={HERO_IMAGE_ALT}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background from-15% via-background/70 via-45% to-transparent to-85%" />
            </div>

            <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 pb-10 sm:gap-10 sm:px-6 sm:py-10 md:grid-cols-12 md:items-center md:gap-8 md:py-14 lg:px-10 lg:py-16">
                <Reveal className="md:col-span-6">
                    <h1 className="text-4xl font-semibold leading-[1.3] tracking-tight text-foreground md:text-5xl">
                        髪に、静かな集中を。
                    </h1>
                    <p className="mt-6 max-w-md text-base leading-relaxed text-foreground-muted">
                        一人ひとりの髪質と暮らしに合わせて、丁寧なカットとカラーをご提案します。
                    </p>
                    <div className="mt-9 flex flex-wrap items-center gap-4">
                        <Link
                            href="#contact"
                            className="group inline-flex items-center gap-2 rounded-full bg-foreground py-3 pl-6 pr-3 text-sm font-medium text-surface transition-transform active:scale-[0.98]"
                        >
                            ご予約
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface/15 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                <ArrowUpRight size={14} weight="bold" />
                            </span>
                        </Link>
                        <Link
                            href="#services"
                            className="inline-flex items-center rounded-full border border-gray-400 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/30"
                        >
                            メニューを見る
                        </Link>
                    </div>
                </Reveal>

                <Reveal delay={0.1} className="hidden sm:col-span-6 sm:block">
                    <div className="relative h-85 w-full overflow-hidden rounded-3xl md:h-105 lg:h-120">
                        <Image
                            src={unsplash(HERO_IMAGE_ID, 1000, 1200)}
                            alt={HERO_IMAGE_ALT}
                            fill
                            sizes="85vw"
                            className="object-cover"
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
