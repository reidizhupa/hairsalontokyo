import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";
import { unsplash } from "@/lib/unsplash";
import type { RecruitContent } from "@/lib/types";

interface RecruitProps {
    content: RecruitContent;
}

export function Recruit({ content }: RecruitProps) {
    return (
        <section id="recruit">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:py-28 lg:px-10">
                <Reveal className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-12">
                    <div className="relative aspect-4/5 w-full overflow-hidden rounded-sm md:aspect-auto md:h-120">
                        <Image
                            src={unsplash(content.imageId, 900, 1100)}
                            alt="真剣にお客様の髪と向き合うスタイリスト"
                            fill
                            sizes="(min-width: 768px) 45vw, 100vw"
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <span className="font-serif text-xl font-bold uppercase tracking-[0.2em] text-accent">
                            Recruit
                        </span>
                        <h2 className="mt-5 font-serif text-base font-thin text-gray-500 leading-snug tracking-tight md:text-3xl">
                            {content.heading.map((line, i) => (
                                <span key={line}>
                                    {line}
                                    {i < content.heading.length - 1 && <br />}
                                </span>
                            ))}
                        </h2>
                        <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground-muted sm:text-base">
                            {content.pitch}
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Link
                                href={content.contactUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 rounded-sm bg-accent py-3 pl-6 pr-3 text-sm font-medium text-white transition-transform active:scale-[0.98] hover:opacity-90"
                            >
                                採用について問い合わせる
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                    <ArrowUpRight size={14} weight="bold" />
                                </span>
                            </Link>
                            <Link
                                href="/recruit"
                                className="inline-flex items-center rounded-sm border border-accent bg-white px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent-soft"
                            >
                                募集要項を見る
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
