import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../reveal";
import type { BOOK_OPTIONS } from "@/lib/home";

interface BookSectionProps {
    options: typeof BOOK_OPTIONS;
}

export function BookSection({ options }: BookSectionProps) {
    return (
        <section id="book" className="bg-background">
            <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 md:py-44 lg:px-10">
                <Reveal className="flex flex-col gap-6 md:gap-14">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-foreground-muted">
                            08 — Reservation
                        </p>
                        <h2 className="mt-4 font-display text-[26vw] font-light leading-[0.8] tracking-[-0.03em] text-ink md:text-[13rem]">
                            Book
                        </h2>
                    </div>
                    <p className="max-w-sm text-sm leading-relaxed text-foreground-muted">
                        完全予約制です。ご希望の店舗を選ぶと、HOT PEPPER
                        Beautyの予約ページへ移動します。
                    </p>
                </Reveal>

                <Reveal className="mt-16 border-t border-ink md:mt-24">
                    {options.map((option) => (
                        <Link
                            key={option.href}
                            href={option.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center justify-between gap-6 overflow-hidden border-b border-ink py-7 text-ink md:py-10"
                        >
                            <span className="absolute inset-0 -z-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-y-100" />
                            <span className="relative flex flex-col gap-1 transition-colors duration-500 group-hover:text-paper md:flex-row md:items-baseline md:gap-8">
                                <span className="font-display text-5xl font-light leading-none md:text-7xl">
                                    {option.en}
                                </span>
                                <span className="text-sm">
                                    {option.name}
                                </span>
                            </span>
                            <span className="relative flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] transition-colors duration-500 group-hover:text-paper">
                                <span className="hidden sm:inline">
                                    {option.kind}
                                </span>
                                <ArrowUpRightIcon size={22} weight="light" />
                            </span>
                        </Link>
                    ))}
                </Reveal>
            </div>
        </section>
    );
}
