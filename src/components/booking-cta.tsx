import Link from "next/link";
import {
    ArrowUpRight,
    Clock,
    MapPin,
    Phone,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";

const DETAILS = [
    { icon: MapPin, value: "東京都渋谷区神宮前3-2-1" },
    { icon: Clock, value: "火〜日 10:00〜19:00" },
    { icon: Phone, value: "03-1234-5678" },
];

export function BookingCta() {
    return (
        <section id="contact" className="px-4 py-14 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-7xl">
                <Reveal>
                    <div className="flex flex-col gap-8 rounded-3xl sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-10 md:p-12">
                        <div className="sm:flex-1">
                            <h2 className="max-w-md font-serif text-lg font-medium leading-snug tracking-tight text-foreground sm:text-2xl md:text-3xl">
                                空き枠には限りがあります。お早めにご予約を。
                            </h2>
                            <Link
                                href="https://wa.me/810312345678"
                                className="group mt-6 inline-flex items-center gap-2 rounded-sm bg-accent py-3 pl-6 pr-3 text-sm font-medium text-white transition-transform active:scale-[0.98] hover:opacity-90"
                            >
                                ご予約
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                    <ArrowUpRight size={14} weight="bold" />
                                </span>
                            </Link>
                        </div>

                        <div className="flex flex-col gap-2 border-t border-line pt-6 sm:w-56 sm:shrink-0 sm:border-t-0 sm:border-l sm:pl-10 sm:pt-0">
                            {DETAILS.map((item) => (
                                <div
                                    key={item.value}
                                    className="flex items-center gap-2 text-sm whitespace-nowrap text-foreground-muted"
                                >
                                    <item.icon
                                        size={16}
                                        weight="light"
                                        className="shrink-0 text-foreground-muted/70"
                                    />
                                    {item.value}
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
