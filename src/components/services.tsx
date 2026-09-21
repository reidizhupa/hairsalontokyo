import Image from "next/image";
import {
    Drop,
    FlowerLotus,
    Scissors,
    Sparkle,
    Wind,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";
import { unsplash } from "@/lib/unsplash";

const SUPPORTING = [
    {
        icon: Drop,
        title: "カラー / バレイヤージュ",
        body: "根元の伸び方に合わせた、髪に負担の少ない色設計。",
    },
    {
        icon: Sparkle,
        title: "トリートメント",
        body: "薬剤で傷んだ髪への集中補修ケア。",
    },
    {
        icon: FlowerLotus,
        title: "ブライダル / 撮影",
        body: "リハーサル付き、出張スタイリングにも対応。",
    },
    {
        icon: Wind,
        title: "ヘッドスパ",
        body: "カットの前に、ゆっくりと頭皮をほぐします。",
    },
];

export function Services() {
    return (
        <section id="services" className="bg-surface-sunken">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:py-28 lg:px-10">
                <Reveal>
                    <span className="font-serif text-xl font-bold uppercase tracking-[0.2em] text-accent">
                        Menu
                    </span>
                    <h2 className="mt-5 max-w-xl font-serif text-base font-medium text-gray-500 leading-snug tracking-tight md:text-3xl">
                        メニューは、あえて少なく。
                    </h2>
                </Reveal>

                <Reveal className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-4 md:grid-rows-2">
                    <div className="md:col-span-2 md:row-span-2">
                        <div className="relative h-full min-h-64 overflow-hidden rounded-sm sm:min-h-80">
                            <Image
                                src={unsplash(
                                    "1647140655214-e4a2d914971f",
                                    900,
                                    900,
                                )}
                                alt="鋏でカットを行うスタイリストの手元"
                                fill
                                sizes="(min-width: 768px) 45vw, 100vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                                <h3 className="mt-3 font-serif text-xl font-medium text-white">
                                    カット
                                </h3>
                                <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-white/80">
                                    髪の生え方や癖を見極めてから、鋏を入れます。
                                </p>
                            </div>
                        </div>
                    </div>

                    {SUPPORTING.map((item) => (
                        <div key={item.title} className="md:col-span-1">
                            <div className="flex h-full flex-col justify-between rounded-sm border border-line bg-surface p-5 sm:p-7">
                                <item.icon
                                    size={22}
                                    weight="light"
                                    className="text-accent"
                                />
                                <div className="mt-6">
                                    <h3 className="font-serif text-lg font-medium text-gray-500">
                                        {item.title}
                                    </h3>
                                    <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">
                                        {item.body}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Reveal>
            </div>
        </section>
    );
}
