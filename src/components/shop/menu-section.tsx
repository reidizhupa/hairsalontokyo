import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../reveal";
import { ParallaxImage } from "../home/parallax-image";
import { SectionHeading } from "./section-heading";
import type { MenuContent } from "@/lib/types";

interface MenuSectionProps {
    content: MenuContent;
    index: string;
}

export function MenuSection({ content, index }: MenuSectionProps) {
    const cols =
        content.highlights.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4";

    return (
        <section id="services" className="bg-background text-ink">
            <div className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-44 lg:px-10">
                <SectionHeading
                    index={index}
                    label="Menu"
                    title="Menu"
                    aside={content.heading}
                />

                <div
                    className={`mt-16 grid grid-cols-2 gap-x-4 gap-y-12 md:mt-24 md:gap-x-8 ${cols}`}
                >
                    {content.highlights.map((item, i) => (
                        <Reveal
                            key={item.title}
                            delay={(i % 4) * 0.08}
                            className={i % 2 === 1 ? "mt-12 md:mt-16" : ""}
                        >
                            <Link
                                href={content.menuUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/item block"
                            >
                                <ParallaxImage
                                    src={item.src}
                                    alt={item.title}
                                    sizes="(min-width: 768px) 24vw, 50vw"
                                    className="group aspect-3/4"
                                    strength={6}
                                />
                                <p className="mt-4 text-[11px] uppercase tracking-[0.25em] text-foreground-muted">
                                    No.{String(i + 1).padStart(2, "0")}
                                </p>
                                <h3 className="mt-1 text-base font-medium sm:text-lg">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-xs leading-relaxed text-foreground-muted sm:text-sm">
                                    {item.tag}
                                </p>
                                <span className="mt-4 inline-flex items-center gap-1.5 border-b border-ink pb-0.5 text-sm transition-opacity group-hover/item:opacity-60">
                                    料金・予約を見る
                                    <ArrowUpRightIcon size={13} />
                                </span>
                            </Link>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mt-20 grid grid-cols-1 border-t border-ink md:mt-28 md:grid-cols-3 md:gap-x-8">
                    <div className="py-6 md:py-8">
                        <p className="text-[11px] uppercase tracking-[0.3em] text-foreground-muted">
                            Other Menu
                        </p>
                    </div>
                    <ul className="border-t border-line py-6 text-sm leading-loose md:border-t-0 md:py-8">
                        {content.otherItems.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                        <li className="text-foreground-muted">
                            その他のメニューもお気軽にご相談ください。
                        </li>
                    </ul>
                    <Link
                        href={content.menuUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start justify-between border-t border-line py-6 md:border-t-0 md:py-8"
                    >
                        <span>
                            <span className="block text-lg">
                                全メニュー・料金を見る
                            </span>
                            <span className="mt-1 block text-xs text-foreground-muted">
                                HOT PEPPER Beauty
                            </span>
                        </span>
                        <ArrowUpRightIcon
                            size={20}
                            weight="light"
                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </Link>
                </Reveal>
            </div>
        </section>
    );
}
