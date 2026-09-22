import Link from "next/link";
import {
    ArrowUpRight,
    Clock,
    MapPin,
    Phone,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";
import type { ContactContent, ContactIcon } from "@/lib/types";

const ICONS: Record<ContactIcon, typeof MapPin> = {
    map: MapPin,
    clock: Clock,
    phone: Phone,
};

interface BookingCtaProps {
    content: ContactContent;
}

export function BookingCta({ content }: BookingCtaProps) {
    return (
        <section id="contact" className="px-4 py-14 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-7xl">
                <Reveal>
                    <div className="flex flex-col gap-8 rounded-3xl sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-10 md:p-12">
                        <div className="sm:flex-1">
                            <span className="font-serif text-xl font-bold uppercase tracking-[0.2em] text-accent">
                                Contact
                            </span>
                            <h2 className="mt-5 max-w-md font-serif text-base font-thin leading-snug tracking-tight text-gray-500 md:text-3xl">
                                {content.heading}
                            </h2>
                            <Link
                                href={content.bookingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group mt-6 inline-flex items-center gap-2 rounded-sm bg-accent py-3 pl-6 pr-3 text-sm font-medium text-white transition-transform active:scale-[0.98] hover:opacity-90"
                            >
                                ご予約
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                    <ArrowUpRight size={14} weight="bold" />
                                </span>
                            </Link>
                        </div>

                        <div className="flex flex-col gap-3 border-t border-line pt-6 sm:w-64 sm:shrink-0 sm:border-t-0 sm:border-l sm:pl-10 sm:pt-0">
                            {content.details.map((item) => {
                                const Icon = ICONS[item.icon];
                                return item.href ? (
                                    <Link
                                        key={item.value}
                                        href={item.href}
                                        className="flex items-start gap-2 text-sm text-foreground-muted transition-colors hover:text-accent"
                                    >
                                        <Icon
                                            size={16}
                                            weight="light"
                                            className="mt-0.5 shrink-0 text-foreground-muted/70"
                                        />
                                        {item.value}
                                    </Link>
                                ) : (
                                    <div
                                        key={item.value}
                                        className="flex items-start gap-2 text-sm text-foreground-muted"
                                    >
                                        <Icon
                                            size={16}
                                            weight="light"
                                            className="mt-0.5 shrink-0 text-foreground-muted/70"
                                        />
                                        {item.value}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-2 px-0 text-xs text-foreground-muted sm:mt-8 sm:px-10 sm:text-sm md:px-12">
                        <p className="flex flex-wrap gap-x-2 gap-y-1">
                            {content.features.map((item, i) => (
                                <span key={item} className="whitespace-nowrap">
                                    {item}
                                    {i < content.features.length - 1 && (
                                        <span className="ml-2 text-foreground-muted/50">
                                            ・
                                        </span>
                                    )}
                                </span>
                            ))}
                        </p>
                        <p className="flex flex-wrap gap-x-2 gap-y-1">
                            <span className="whitespace-nowrap">
                                お支払い：
                            </span>
                            {content.paymentMethods.map((item, i) => (
                                <span key={item} className="whitespace-nowrap">
                                    {item}
                                    {i < content.paymentMethods.length - 1 && (
                                        <span className="ml-2 text-foreground-muted/50">
                                            ・
                                        </span>
                                    )}
                                </span>
                            ))}
                        </p>
                        <p className="text-foreground-muted/70">
                            {content.cancellationNote}
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
