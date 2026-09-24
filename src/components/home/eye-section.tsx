import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../reveal";
import { ParallaxImage } from "./parallax-image";
import type { EYE } from "@/lib/home";

interface EyeSectionProps {
    eye: typeof EYE;
}

export function EyeSection({ eye }: EyeSectionProps) {
    return (
        <section id="eye" className="bg-ink text-paper">
            <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 md:py-44 lg:px-10">
                <Reveal>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-paper/60">
                        05 — Eyelash &amp; Eyebrow
                    </p>
                    <h2 className="mt-4 font-display text-[24vw] font-light leading-[0.8] tracking-[-0.03em] md:text-[13rem]">
                        Eye
                        <span className="italic text-paper/50"> / </span>
                        Brow
                        <span className="sr-only">｜まつげ・眉サロン</span>
                    </h2>
                </Reveal>

                {/* Two columns on desktop: portrait photo left, copy + menu right. */}
                <div className="mt-16 grid grid-cols-1 gap-12 md:mt-24 md:grid-cols-12 md:items-center md:gap-8">
                    <ParallaxImage
                        src={eye.images.main}
                        alt="roots 巣鴨店 アイラッシュ&アイブロウの店内"
                        sizes="(min-width: 768px) 42vw, 100vw"
                        className="group aspect-4/5 md:col-span-5"
                        strength={7}
                    />

                    <Reveal className="md:col-span-6 md:col-start-7">
                        <p className="text-lg leading-relaxed text-paper/90 sm:text-xl">
                            {eye.tagline}
                        </p>
                        <p className="mt-6 text-xs leading-relaxed text-paper/60">
                            {eye.address}
                            <br />
                            {eye.transit}
                        </p>

                        <ul className="mt-12 border-t border-paper/20">
                            {eye.menu.map((item) => (
                                <li
                                    key={item.title}
                                    className="flex flex-col gap-1 border-b border-paper/20 py-5 xl:flex-row xl:items-baseline xl:justify-between xl:gap-6"
                                >
                                    <span className="text-base">
                                        {item.title}
                                    </span>
                                    <span className="text-xs text-paper/60">
                                        {item.tag}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-10 flex flex-wrap gap-3">
                            <Link
                                href={eye.bookingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-paper px-6 py-3 text-sm tracking-[0.1em] text-ink transition-opacity hover:opacity-80"
                            >
                                ご予約
                                <ArrowUpRightIcon size={12} weight="bold" />
                            </Link>
                            <Link
                                href={eye.href}
                                className="inline-flex items-center border border-paper px-6 py-3 text-sm tracking-[0.1em] text-paper transition-colors hover:bg-paper hover:text-ink"
                            >
                                店舗を見る
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
