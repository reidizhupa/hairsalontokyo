import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../reveal";
import { SectionHeading } from "./section-heading";
import type { ContactContent } from "@/lib/types";

interface ContactSectionProps {
    content: ContactContent;
    index: string;
    name: string;
}

export function ContactSection({ content, index, name }: ContactSectionProps) {
    const phone = content.details.find((d) => d.icon === "phone");

    return (
        <section id="contact" className="bg-surface text-ink">
            <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 md:py-44 lg:px-10">
                <SectionHeading
                    index={index}
                    label="Reservation"
                    title="Book"
                    aside={content.heading}
                    stacked
                />

                <Reveal className="mt-16 md:mt-24">
                    <Link
                        href={content.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-between gap-6 overflow-hidden border-y border-ink py-8 md:py-12"
                    >
                        <span className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-y-100" />
                        <span className="relative flex flex-col gap-2 transition-colors duration-500 group-hover:text-paper md:flex-row md:items-baseline md:gap-8">
                            <span className="text-3xl font-light md:text-5xl">
                                ご予約はこちら
                            </span>
                            <span className="text-sm">
                                {name}／HOT PEPPER Beauty
                            </span>
                        </span>
                        <ArrowUpRightIcon
                            size={28}
                            weight="light"
                            className="relative shrink-0 transition-colors duration-500 group-hover:text-paper"
                        />
                    </Link>

                    {phone && (
                        <p className="mt-6 text-sm text-foreground-muted">
                            お電話でのご予約：
                            <Link
                                href={phone.href ?? "#"}
                                className="ml-1 text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
                            >
                                {phone.value}
                            </Link>
                        </p>
                    )}
                </Reveal>

                <Reveal className="mt-16 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-3 md:gap-8">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-foreground-muted">
                            Features
                        </p>
                        <ul className="mt-4 space-y-2 text-sm">
                            {content.features.map((f) => (
                                <li key={f}>{f}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-foreground-muted">
                            Payment
                        </p>
                        <p className="mt-4 text-sm leading-relaxed">
                            {content.paymentMethods.join(" / ")}
                        </p>
                    </div>
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-foreground-muted">
                            Cancellation
                        </p>
                        <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                            {content.cancellationNote.replace(/^※\s*/, "")}
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
