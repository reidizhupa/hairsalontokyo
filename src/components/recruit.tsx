import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";
import { ParallaxImage } from "./home/parallax-image";
import type { RecruitContent } from "@/lib/types";

interface RecruitProps {
    content: RecruitContent;
}

export function Recruit({ content }: RecruitProps) {
    return (
        <section id="recruit" className="bg-surface">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-28 sm:px-6 md:grid-cols-12 md:items-end md:gap-8 md:py-44 lg:px-10">
                <Reveal className="md:col-span-6">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-foreground-muted">
                        06 — Recruit
                    </p>
                    <h2 className="mt-4 font-display text-[20vw] font-light leading-[0.8] tracking-[-0.03em] text-ink md:text-[9rem]">
                        Join
                        <br />
                        <span className="italic">us.</span>
                    </h2>
                    <p className="mt-10 text-xl font-light leading-relaxed text-ink sm:text-2xl">
                        {content.heading.join("")}
                    </p>
                    <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground-muted">
                        {content.pitch}
                    </p>
                    <div className="mt-10 flex flex-wrap gap-3">
                        <Link
                            href="/recruit"
                            className="inline-flex items-center gap-2 bg-ink px-6 py-3 text-xs uppercase tracking-[0.2em] text-paper transition-opacity hover:opacity-80"
                        >
                            募集要項を見る
                        </Link>
                        <Link
                            href={content.contactUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 border border-ink px-6 py-3 text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-paper"
                        >
                            採用について問い合わせる
                            <ArrowUpRightIcon size={12} weight="bold" />
                        </Link>
                    </div>
                </Reveal>

                <div className="md:col-span-5 md:col-start-8">
                    <ParallaxImage
                        src="/recruit.jpg"
                        alt="真剣にお客様の髪と向き合うスタイリスト"
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="group aspect-4/5"
                        strength={7}
                    />
                </div>
            </div>
        </section>
    );
}
