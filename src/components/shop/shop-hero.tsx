import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../reveal";
import { ParallaxImage } from "../home/parallax-image";
import type { HeroContent } from "@/lib/types";

interface ShopHeroProps {
    content: HeroContent;
    word: string;
    kind: string;
    name: string;
    bookingUrl: string;
    dark?: boolean;
}

export function ShopHero({
    content,
    word,
    kind,
    name,
    bookingUrl,
    dark = false,
}: ShopHeroProps) {
    return (
        <section
            id="top"
            className={dark ? "bg-ink text-paper" : "bg-surface-sunken text-ink"}
        >
            <div className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 md:pb-16 md:pt-10 lg:px-10">
                <div
                    className={`flex items-baseline justify-between text-[11px] uppercase tracking-[0.3em] ${
                        dark ? "text-paper/60" : "text-foreground-muted"
                    }`}
                >
                    <span>roots — {kind}</span>
                    <span className="hidden normal-case tracking-normal sm:inline">
                        {name}
                    </span>
                </div>

                {/* Compact two-column hero: name + copy left, photo right. */}
                <div className="mt-6 grid grid-cols-1 gap-8 md:mt-8 md:grid-cols-12 md:items-center md:gap-8">
                    <Reveal className="md:col-span-7">
                        <h1 className="font-display text-6xl font-light leading-[0.9] tracking-[-0.02em] md:text-7xl lg:text-8xl">
                            {word}
                        </h1>
                    </Reveal>

                    <ParallaxImage
                        src={content.imageSrc}
                        alt={content.imageAlt}
                        priority
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="group aspect-4/3 md:col-span-5 md:row-span-2"
                        imageClassName={content.imageClassName ?? "object-cover"}
                        strength={6}
                    />

                    <Reveal className="md:col-span-7 md:row-start-2">
                        <p className="text-xl font-light leading-relaxed sm:text-2xl">
                            {content.heading}
                        </p>
                        <p
                            className={`mt-5 max-w-md text-sm leading-relaxed ${
                                dark ? "text-paper/70" : "text-foreground-muted"
                            }`}
                        >
                            {content.subheading}
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href={bookingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 px-6 py-3 text-sm tracking-[0.1em] transition-opacity hover:opacity-80 ${
                                    dark ? "bg-paper text-ink" : "bg-ink text-paper"
                                }`}
                            >
                                ご予約
                                <ArrowUpRightIcon size={12} weight="bold" />
                            </Link>
                            <Link
                                href="#services"
                                className={`inline-flex items-center border px-6 py-3 text-sm tracking-[0.1em] transition-colors ${
                                    dark
                                        ? "border-paper hover:bg-paper hover:text-ink"
                                        : "border-ink hover:bg-ink hover:text-paper"
                                }`}
                            >
                                メニューを見る
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
