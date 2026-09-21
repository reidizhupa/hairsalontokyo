import Image from "next/image";
import { Reveal } from "./reveal";
import { unsplash } from "@/lib/unsplash";

const GALLERY = [
    {
        id: "1781450090585-1a511b7066d9",
        alt: "明るく落ち着いた店内、スタイリングチェアと鏡が並ぶ",
    },
    {
        id: "1633681140152-3b8726450518",
        alt: "白を基調にした、静かな店内の一角",
    },
    {
        id: "1786987942836-71e5a32dcfab",
        alt: "使い込まれた鋏と道具たち",
    },
];

export function About() {
    return (
        <section
            id="about"
            className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:py-28 lg:px-10"
        >
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-12">
                <Reveal>
                    <span className="font-serif text-xl font-bold uppercase tracking-[0.2em] text-accent">
                        About
                    </span>
                    <h2 className="mt-5 font-serif text-md md:text-3xl font-medium text-gray-500 leading-snug tracking-tight ">
                        少人数制の、指名スタイリスト。
                        <br />
                        予約が重ならない仕組みだから、
                        <br />
                        一日一人と、じっくり向き合う。
                        <br />
                        カウンセリングから仕上げまで、
                        <br />
                        同じ担当者が、最後まで。
                    </h2>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="mx-auto grid max-w-150 grid-cols-[3fr_2fr] gap-3 sm:gap-4 md:mx-0 md:ml-auto">
                        <div className="relative row-span-2 overflow-hidden rounded-3xl">
                            <Image
                                src={unsplash(GALLERY[0].id, 800, 1000)}
                                alt={GALLERY[0].alt}
                                fill
                                sizes="(min-width: 768px) 22vw, 45vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="relative aspect-square overflow-hidden rounded-2xl">
                            <Image
                                src={unsplash(GALLERY[1].id, 600, 600)}
                                alt={GALLERY[1].alt}
                                fill
                                sizes="(min-width: 768px) 10vw, 15vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="relative aspect-square overflow-hidden rounded-2xl">
                            <Image
                                src={unsplash(GALLERY[2].id, 600, 600)}
                                alt={GALLERY[2].alt}
                                fill
                                sizes="(min-width: 768px) 10vw, 15vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
