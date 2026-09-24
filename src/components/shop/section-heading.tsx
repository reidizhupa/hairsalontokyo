import type { ReactNode } from "react";
import { Reveal } from "../reveal";

interface SectionHeadingProps {
    index: string;
    label: string;
    title: ReactNode;
    aside?: ReactNode;
    dark?: boolean;
}

// Shared editorial header: small numbered eyebrow, oversized display word,
// optional short note aligned to the bottom-right on desktop.
export function SectionHeading({
    index,
    label,
    title,
    aside,
    dark = false,
}: SectionHeadingProps) {
    return (
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
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
                </h2>
            </div>
            {aside && (
                <p
                    className={`max-w-xs text-sm leading-relaxed md:pb-4 ${
                        dark ? "text-paper/70" : "text-foreground-muted"
                    }`}
                >
                    {aside}
                </p>
            )}
        </Reveal>
    );
}
