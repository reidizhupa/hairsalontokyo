import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";
import type { OverviewCard } from "@/lib/overview";

interface LocationOverviewProps {
    cards: OverviewCard[];
}

export function LocationOverview({ cards }: LocationOverviewProps) {
    return (
        <section id="shops" className="bg-surface-sunken">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:py-28 lg:px-10">
                <Reveal>
                    <span className="font-serif text-xl font-bold uppercase tracking-[0.2em] text-accent">
                        Shops
                    </span>
                    <h2 className="mt-5 max-w-xl font-serif text-base font-thin text-gray-500 leading-snug tracking-tight md:text-3xl">
                        お近くの店舗、気になるメニューからお選びください。
                    </h2>
                </Reveal>

                <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {cards.map((card, i) => (
                        <Reveal key={card.slug} delay={i * 0.08}>
                            <Link
                                href={card.href}
                                className="group relative block h-105 overflow-hidden rounded-sm sm:h-120"
                            >
                                <Image
                                    src={card.imageSrc}
                                    alt={card.imageAlt}
                                    fill
                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    className={`object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${card.imageClassName ?? ""}`}
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 from-10% via-black/10 via-50% to-transparent to-85%" />

                                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                                        {card.kind}
                                    </span>
                                    <h2 className="mt-2 font-serif text-xl font-medium leading-snug text-white sm:text-2xl">
                                        {card.name}
                                    </h2>
                                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/80">
                                        {card.tagline}
                                    </p>
                                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                                        詳しく見る
                                        <ArrowUpRight
                                            size={15}
                                            weight="bold"
                                            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </span>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
