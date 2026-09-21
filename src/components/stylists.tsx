import Image from "next/image";
import { Reveal } from "./reveal";
import { unsplash } from "@/lib/unsplash";

const STYLISTS = [
    {
        name: "佐藤 美香",
        role: "クリエイティブディレクター",
        id: "1581065178047-8ee15951ede6",
    },
    { name: "藤田 蓮", role: "カラーリスト", id: "1758600587839-56ba05596c69" },
    { name: "中村 葵", role: "スタイリスト", id: "1738566061505-556830f8b8f5" },
    { name: "石川 翔", role: "スタイリスト", id: "1758600432264-b8d2a0fd7d83" },
];

export function Stylists() {
    return (
        <section id="stylists" className="bg-surface-sunken">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:pb-28 md:pt-10  lg:px-10">
                <Reveal>
                    <span className="font-serif text-xl font-bold uppercase tracking-[0.2em] text-accent">
                        Staff
                    </span>
                    <h2 className="mt-5 max-w-xl font-serif text-base font-thin text-gray-500 leading-snug tracking-tight md:text-3xl">
                        経験を重ねた、専属スタイリストたち。
                    </h2>
                </Reveal>

                <Reveal className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
                    {STYLISTS.map((person) => (
                        <div key={person.name}>
                            <div className="relative aspect-square w-full overflow-hidden rounded-sm">
                                <Image
                                    src={unsplash(person.id, 500, 500)}
                                    alt={`${person.name}のポートレート`}
                                    fill
                                    sizes="(min-width: 1024px) 22vw, 45vw"
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="mt-4 text-sm font-medium text-gray-500">
                                {person.name}
                            </h3>
                            <p className="text-sm text-foreground-muted">
                                {person.role}
                            </p>
                        </div>
                    ))}
                </Reveal>
            </div>
        </section>
    );
}
