import { Reveal } from "../reveal";
import { ParallaxImage } from "./parallax-image";

interface BrandMessageProps {
    lines: string[];
    image: { src: string; alt: string };
}

export function BrandMessage({ lines, image }: BrandMessageProps) {
    return (
        <section id="message" className="bg-background">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 py-28 sm:px-6 md:grid-cols-12 md:items-start md:gap-8 md:py-44 lg:px-10">
                <Reveal className="md:col-span-7" mobileStatic>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-foreground-muted">
                        01 — Philosophy
                    </p>
                    {/* Single word, same treatment as Style / Salon / People. */}
                    <p className="mt-4 font-display text-[22vw] font-light leading-[0.8] tracking-[-0.03em] text-ink md:text-[8rem] lg:text-[11rem]">
                        Ethos
                    </p>

                    <h2 className="mt-14 text-2xl font-light leading-[1.9] tracking-wide text-ink sm:text-3xl md:mt-20 md:text-[1.45rem] md:leading-[1.9] lg:text-[1.6rem] xl:text-[2.1rem]">
                        {lines.map((line, i) => (
                            <span
                                key={line}
                                className={`block ${i % 2 === 1 ? "xl:pl-12" : ""}`}
                            >
                                {line}
                            </span>
                        ))}
                    </h2>
                </Reveal>

                <div className="md:col-span-4 md:col-start-9 md:mt-40">
                    <ParallaxImage
                        src={image.src}
                        alt={image.alt}
                        sizes="(min-width: 768px) 32vw, 100vw"
                        className="group aspect-3/4"
                        strength={8}
                    />
                </div>
            </div>
        </section>
    );
}
