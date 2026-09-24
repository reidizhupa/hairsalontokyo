import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../reveal";
import { ParallaxImage } from "./parallax-image";
import type { SalonFeature } from "@/lib/home";

interface SalonSectionProps {
    salons: SalonFeature[];
}

export function SalonSection({ salons }: SalonSectionProps) {
    return (
        <section id="salon" className="bg-surface">
            <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 md:py-44 lg:px-10">
                <Reveal>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-foreground-muted">
                        03 — Salon
                    </p>
                    <h2 className="mt-4 font-display text-[22vw] font-light leading-[0.8] tracking-[-0.03em] text-ink md:text-[11rem]">
                        Salon
                            <span className="sr-only">｜店舗一覧</span>
                    </h2>
                </Reveal>

                <div className="mt-20 flex flex-col gap-28 md:mt-28 md:gap-44">
                    {salons.map((salon, i) => {
                        const flip = i % 2 === 1;
                        return (
                            <article
                                key={salon.slug}
                                className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end md:gap-8"
                            >
                                <Link
                                    href={salon.href}
                                    className={`md:col-span-8 ${flip ? "md:order-2 md:col-start-5" : ""}`}
                                >
                                    <ParallaxImage
                                        src={salon.image}
                                        alt={salon.imageAlt}
                                        sizes="(min-width: 768px) 60vw, 100vw"
                                        className="group aspect-4/5 sm:aspect-4/3"
                                        strength={7}
                                    />
                                </Link>

                                <Reveal
                                    className={`md:col-span-4 ${flip ? "md:order-1 md:col-start-1 md:row-start-1" : ""}`}
                                >
                                    <p className="text-[11px] uppercase tracking-[0.3em] text-foreground-muted">
                                        {salon.label}
                                    </p>
                                    <h3 className="mt-3 font-display text-6xl font-light leading-none tracking-[-0.02em] text-ink lg:text-7xl">
                                        {salon.en}
                                    </h3>
                                    <p className="mt-2 text-sm text-ink">
                                        {salon.name}
                                    </p>
                                    <p className="mt-6 text-sm leading-relaxed text-foreground-muted">
                                        {salon.tagline}
                                    </p>
                                    <dl className="mt-6 space-y-1 text-xs leading-relaxed text-foreground-muted">
                                        <dd>{salon.address}</dd>
                                        <dd>{salon.transit}</dd>
                                        <dd>{salon.hours}</dd>
                                    </dl>
                                    <div className="mt-8 flex flex-wrap gap-3">
                                        <Link
                                            href={salon.bookingUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-ink px-6 py-3 text-sm tracking-[0.1em] text-paper transition-opacity hover:opacity-80"
                                        >
                                            ご予約
                                            <ArrowUpRightIcon size={12} weight="bold" />
                                        </Link>
                                        <Link
                                            href={salon.href}
                                            className="inline-flex items-center border border-ink px-6 py-3 text-sm tracking-[0.1em] text-ink transition-colors hover:bg-ink hover:text-paper"
                                        >
                                            店舗を見る
                                        </Link>
                                    </div>
                                </Reveal>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
