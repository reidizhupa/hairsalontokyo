import Image from "next/image";
import { Reveal } from "./reveal";
import { unsplash } from "@/lib/unsplash";

const GALLERY = [
    {
        id: "1633681926022-84c23e8cb2d6",
        alt: "明るく落ち着いた店内、スタイリングチェアと鏡が並ぶ",
    },
    {
        id: "1633681140152-3b8726450518",
        alt: "白を基調にした、静かな店内の一角",
    },
    {
        id: "1633681926035-ec1ac984418a",
        alt: "使い込まれた鋏と道具たち",
    },
];

export function About() {
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
                        「提案力」を大切にするサロン。
                        <br />
                        お客様の想いに寄り添いながら、
                        <br />
                        本当に似合うデザインをご提案します。
                        <br />
                        表参道で培った技術を、浅草で。
                        <br />
                        地域に根ざし、長く通える一軒へ。
                    </h2>
                </div>

                <div>
                    <div className="mx-auto grid max-w-150 grid-cols-2 gap-3 sm:gap-4 md:mx-0 md:ml-auto md:grid-cols-[3fr_2fr]">
                        <div className="relative col-span-2 aspect-square overflow-hidden rounded-sm md:col-span-1 md:aspect-auto md:row-span-2">
                            <Image
                                src="/interior.webp"
                                alt={GALLERY[0].alt}
                                fill
                                sizes="(min-width: 768px) 22vw, 45vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="relative aspect-square overflow-hidden rounded-sm">
                            <Image
                                src="/interior.webp"
                                alt={GALLERY[1].alt}
                                fill
                                sizes="(min-width: 768px) 10vw, 15vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="relative aspect-square overflow-hidden rounded-sm">
                            <Image
                                src="/interior.webp"
                                alt={GALLERY[2].alt}
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
