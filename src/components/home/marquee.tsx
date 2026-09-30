"use client";

import { useEffect, useRef, useState } from "react";

interface MarqueeProps {
    words: string[];
    className?: string;
}

// Slow loop (40s) that only runs while on screen, so it costs nothing once
// scrolled past ("optimize-web-animations": pause offscreen work).
export function Marquee({ words, className = "" }: MarqueeProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => setRunning(entry.isIntersecting),
            { threshold: 0.01 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    const row = (
        <div className="flex shrink-0 items-center" aria-hidden>
            {words.map((word, i) => (
                <span key={i} className="flex items-center">
                    <span className="px-6 md:px-10">{word}</span>
                    <span className="text-[0.4em]">✦</span>
                </span>
            ))}
        </div>
    );

    return (
        <div
            ref={ref}
            className={`overflow-hidden whitespace-nowrap font-display font-light leading-none ${className}`}
        >
            <div
                className="animate-marquee flex w-max"
                style={{ animationPlayState: running ? "running" : "paused" }}
            >
                {row}
                {row}
            </div>
        </div>
    );
}
