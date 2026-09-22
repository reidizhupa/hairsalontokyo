import Image from "next/image";
import { Reveal } from "./reveal";
import type { AboutContent } from "@/lib/types";

interface AboutProps {
    content: AboutContent;
}

export function About({ content }: AboutProps) {
    return (
        <section
            id="about"
            className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:py-28 lg:px-10"
        >
            <Reveal className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-12">
                <div>
                    <span className="font-serif text-xl font-bold uppercase tracking-[0.2em] text-accent">
                        About
                    </span>
                    <h2 className="mt-5 font-serif text-md md:text-3xl font-thin text-gray-500 leading-snug tracking-tight ">
                        {content.heading.map((line, i) => (
                            <span key={line}>
                                {line}
                                {i < content.heading.length - 1 && <br />}
                            </span>
                        ))}
                    </h2>
                </div>

                <div>
                    <div className="mx-auto grid max-w-150 grid-cols-2 gap-3 sm:gap-4 md:mx-0 md:ml-auto md:grid-cols-[3fr_2fr]">
                        <div className="relative col-span-2 aspect-square overflow-hidden rounded-sm md:col-span-1 md:aspect-auto md:row-span-2">
                            <Image
                                src={content.images[0].src}
                                alt={content.images[0].alt}
                                fill
                                sizes="(min-width: 768px) 22vw, 45vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="relative aspect-square overflow-hidden rounded-sm">
                            <Image
                                src={content.images[1].src}
                                alt={content.images[1].alt}
                                fill
                                sizes="(min-width: 768px) 10vw, 15vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="relative aspect-square overflow-hidden rounded-sm">
                            <Image
                                src={content.images[2].src}
                                alt={content.images[2].alt}
                                fill
                                sizes="(min-width: 768px) 10vw, 15vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
