import { TrainSimpleIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";

const MAP_EMBED_URL =
    "https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1zcm9vdHMg5rWF6I2J5bqXIOadseS6rOmDveWPsOadseWMuuilv-a1heiNiTMtMjgtMTk";
const MAP_URL = "https://share.google/sTyt5wFD745DjG2Xw";

export function Access() {
    return (
        <section id="access" className="bg-surface-sunken">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:py-28 lg:px-10">
                <Reveal>
                    <span className="font-serif text-xl font-bold uppercase tracking-[0.2em] text-accent">
                        Access
                    </span>
                    <h2 className="mt-5 max-w-xl font-serif text-base font-thin text-gray-500 leading-snug tracking-tight md:text-3xl">
                        交番横の路面店。浅草・入谷エリアからも便利な立地です。
                    </h2>
                    <p className="mt-3 flex items-center gap-2 text-sm text-foreground-muted">
                        <TrainSimpleIcon
                            size={16}
                            weight="light"
                            className="shrink-0 text-foreground-muted/70"
                        />
                        つくばエクスプレス「浅草駅」徒歩3分
                    </p>
                </Reveal>

                <Reveal className="mt-10 sm:mt-12">
                    <div className="overflow-hidden rounded-sm">
                        <iframe
                            src={MAP_EMBED_URL}
                            title="roots 浅草店 地図"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="h-80 w-full sm:h-96 md:h-[420px]"
                        />
                    </div>
                    <a
                        href={MAP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-sm text-foreground-muted underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                    >
                        Googleマップで見る
                    </a>
                </Reveal>
            </div>
        </section>
    );
}
