interface MarqueeProps {
    words: string[];
    className?: string;
}

export function Marquee({ words, className = "" }: MarqueeProps) {
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
            className={`overflow-hidden whitespace-nowrap font-display font-light leading-none ${className}`}
        >
            <div className="animate-marquee flex w-max">
                {row}
                {row}
            </div>
        </div>
    );
}
