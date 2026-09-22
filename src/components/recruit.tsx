import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";
import { unsplash } from "@/lib/unsplash";

const RECRUIT_IMAGE_ID = "1593702288056-7927b442d0fa";

export function Recruit() {
    return (
        <section id="recruit">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:py-28 lg:px-10">
                <Reveal className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-12">
                    <div className="relative aspect-4/5 w-full overflow-hidden rounded-sm md:aspect-auto md:h-120">
                        <Image
                            src={unsplash(RECRUIT_IMAGE_ID, 900, 1100)}
                            alt="真剣にお客様の髪と向き合うスタイリスト"
                            fill
                            sizes="(min-width: 768px) 45vw, 100vw"
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <span className="font-serif text-xl font-bold uppercase tracking-[0.2em] text-accent">
                            Recruit
                        </span>
                        <h2 className="mt-5 font-serif text-base font-thin text-gray-500 leading-snug tracking-tight md:text-3xl">
                            技術を高め合う仲間を、
                            <br />
                            募集しています。
                        </h2>
                        <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground-muted sm:text-base">
                            表参道の有名店で培った技術を、浅草で。「提案力」を大切にしながら、お客様一人ひとりと本気で向き合う仕事です。アシスタントからスタイリストへ、着実に経験を積める環境があります。
                        </p>
                        <Link
                            href="mailto:recruit@roots-asakusa.jp?subject=採用について"
                            className="group mt-8 inline-flex items-center gap-2 rounded-sm bg-accent py-3 pl-6 pr-3 text-sm font-medium text-white transition-transform active:scale-[0.98] hover:opacity-90"
                        >
                            採用について問い合わせる
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                <ArrowUpRight size={14} weight="bold" />
                            </span>
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
