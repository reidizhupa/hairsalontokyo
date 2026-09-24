import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../reveal";
import { ParallaxImage } from "./parallax-image";
import type { StyleShot } from "@/lib/home";

interface StyleSectionProps {
    shots: StyleShot[];
    links: { label: string; href: string }[];
    bookingBySalon: Record<StyleShot["salon"], string>;
}

// Mobile: 2 columns, every second photo staggered down, mixed frames.
// Desktop: 3 even columns, only the middle column offset for rhythm.
const MOBILE_FRAMES = ["aspect-4/5", "aspect-3/4", "aspect-3/4", "aspect-4/5"];
const STRENGTH = [6, 9, 7, 8];

function cellClass(i: number) {
    const mobile = i % 2 === 1 ? "mt-16" : "";
    const desktop = i % 3 === 1 ? "md:mt-20" : "md:mt-0";
    return `${mobile} ${desktop}`;
}

export function StyleSection({
    shots,
    links,
    bookingBySalon,
}: StyleSectionProps) {
    return (
        <section id="style" className="bg-background">
            <div className="mx-auto max-w-7xl px-4 pb-28 sm:px-6 md:pb-44 lg:px-10">
                <Reveal className="flex flex-col gap-6 md:gap-14">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-foreground-muted">
                            02 — Style
                        </p>
                        <h2 className="mt-4 font-display text-[22vw] font-light leading-[0.8] tracking-[-0.03em] text-ink md:text-[11rem]">
                            Style
                        </h2>
                    </div>
                    <p className="max-w-sm text-sm leading-relaxed text-foreground-muted">
                        一人ひとりの骨格や髪質に合わせて。
                        <br />
                        rootsのスタイリストが手がけたスタイルです。
                    </p>
                </Reveal>

                <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-20 md:grid-cols-3 md:gap-x-8 md:gap-y-16">
                    {shots.map((shot, i) => {
                        return (
                        <Reveal
                            key={shot.src}
                            delay={(i % 3) * 0.08}
                            className={cellClass(i)}
                        >
                            <ParallaxImage
                                src={shot.src}
                                alt={shot.alt}
                                sizes="(min-width: 768px) 30vw, 50vw"
                                className={`group ${MOBILE_FRAMES[i % MOBILE_FRAMES.length]} md:aspect-3/4`}
                                strength={STRENGTH[i % STRENGTH.length]}
                            />
                            <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-foreground-muted">
                                <span>
                                    No.{String(i + 1).padStart(2, "0")} —{" "}
                                    {shot.salon}
                                </span>
                                <Link
                                    href={bookingBySalon[shot.salon]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-ink transition-opacity hover:opacity-60"
                                >
                                    ご予約
                                    <ArrowUpRightIcon size={11} weight="bold" />
                                </Link>
                            </div>
                        </Reveal>
                        );
                    })}
                </div>

                {/* Sits on the same 3-column grid as the photos so it reads as
                    part of the layout: label | Sugamo | Asakusa. */}
                <Reveal className="mt-20 grid grid-cols-1 border-t border-ink md:mt-28 md:grid-cols-3 md:gap-x-8">
                    <div className="py-6 md:py-8">
                        <p className="text-[11px] uppercase tracking-[0.3em] text-foreground-muted">
                            More Styles
                        </p>
                        <p className="mt-2 text-xs text-foreground-muted">
                            HOT PEPPER Beauty のスタイル一覧へ
                        </p>
                    </div>
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between border-t border-line py-6 text-ink md:border-t-0 md:py-8"
                        >
                            <span className="font-display text-3xl font-light leading-none md:text-4xl">
                                {link.label}
                            </span>
                            <ArrowUpRightIcon
                                size={20}
                                weight="light"
                                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </Link>
                    ))}
                </Reveal>
            </div>
        </section>
    );
}
