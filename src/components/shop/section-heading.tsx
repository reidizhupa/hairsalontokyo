import type { ReactNode } from "react";
import { Reveal } from "../reveal";

interface SectionHeadingProps {
    index: string;
    label: string;
    title: ReactNode;
    // Japanese equivalent of the display title, read by search engines and
    // screen readers but not shown.
    jp?: string;
    aside?: ReactNode;
    dark?: boolean;
    // Put the note under the title (as on Style) instead of bottom-right.
    stacked?: boolean;
}

// Shared editorial header: small numbered eyebrow, oversized display word,
// optional short note aligned to the bottom-right on desktop.
export function SectionHeading({
    index,
    label,
    title,
    jp,
    aside,
    dark = false,
    stacked = false,
}: SectionHeadingProps) {
    return (
        <Reveal
            className={`flex flex-col gap-6 ${
                stacked
                    ? "md:gap-14"
                    : "md:flex-row md:items-end md:justify-between"
            }`}
        >
            <div>
                <p
                    className={`text-[11px] uppercase tracking-[0.3em] ${
                        dark ? "text-paper/60" : "text-foreground-muted"
                    }`}
                >
                    {index} — {label}
                </p>
                <h2 className="mt-4 font-display text-[22vw] font-light leading-[0.8] tracking-[-0.03em] md:text-[11rem]">
                    {title}
                    {jp && <span className="sr-only">｜{jp}</span>}
                </h2>
            </div>
            {aside && (
                <p
                    className={`text-sm leading-relaxed ${
                        stacked ? "max-w-sm" : "max-w-xs md:pb-4"
                    } ${
                        dark ? "text-paper/70" : "text-foreground-muted"
                    }`}
                >
                    {aside}
                </p>
            )}
        </Reveal>
    );
}
