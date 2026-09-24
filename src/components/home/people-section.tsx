import Link from "next/link";
import {
    ArrowUpRightIcon,
    InstagramLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../reveal";
import { ParallaxImage } from "./parallax-image";
import type { StaffMember } from "@/lib/types";

export interface PersonBooking {
    label: string;
    href: string;
}

export interface PersonCard {
    member: StaffMember;
    bookings: PersonBooking[];
}

interface PeopleSectionProps {
    stylists: PersonCard[];
    assistants: StaffMember[];
    index?: string;
    className?: string;
}

// Alternating vertical offsets give the portrait wall an editorial rhythm.
const OFFSET = ["", "md:mt-32", "md:mt-12", "md:mt-44"];

export function PeopleSection({
    stylists,
    assistants,
    index = "04",
    className = "bg-background",
}: PeopleSectionProps) {
    return (
        <section id="people" className={className}>
            <div className="mx-auto max-w-7xl px-4 pb-28 sm:px-6 md:pb-44 lg:px-10">
                <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-foreground-muted">
                            {index} — People
                        </p>
                        <h2 className="mt-4 font-display text-[22vw] font-light leading-[0.8] tracking-[-0.03em] text-ink md:text-[11rem]">
                            People
                        </h2>
                    </div>
                    <p className="max-w-xs text-sm leading-relaxed text-foreground-muted md:pb-4">
                        担当制で、はじめから最後まで同じスタイリストが向き合います。
                    </p>
                </Reveal>

                <div className="mt-16 grid grid-cols-1 gap-16 sm:grid-cols-2 md:mt-24 md:grid-cols-4 md:gap-8">
                    {stylists.map(({ member, bookings }, i) => (
                        <Reveal
                            key={member.name}
                            delay={(i % 4) * 0.08}
                            className={OFFSET[i % OFFSET.length]}
                        >
                            {member.src && (
                                <ParallaxImage
                                    src={member.src}
                                    alt={`${member.name}のポートレート`}
                                    sizes="(min-width: 768px) 24vw, (min-width: 640px) 50vw, 100vw"
                                    className="group aspect-3/4 bg-surface-sunken"
                                    imageClassName="object-cover object-[50%_15%]"
                                    strength={5}
                                />
                            )}
                            <p className="mt-5 text-[11px] uppercase tracking-[0.25em] text-foreground-muted">
                                {member.role}
                            </p>
                            <h3 className="mt-1 text-lg font-medium text-ink">
                                {member.name}
                            </h3>
                            {member.specialty && (
                                <p className="mt-2 font-display text-lg italic text-ink">
                                    {member.specialty}
                                </p>
                            )}
                            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
                                {bookings.map((booking) => (
                                    <Link
                                        key={booking.href}
                                        href={booking.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 border-b border-ink pb-0.5 text-ink transition-opacity hover:opacity-60"
                                    >
                                        {booking.label}
                                        <ArrowUpRightIcon
                                            size={11}
                                            weight="bold"
                                        />
                                    </Link>
                                ))}
                                {member.instagram && (
                                    <Link
                                        href={`https://www.instagram.com/${member.instagram}/`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${member.name}のInstagram`}
                                        className="flex items-center gap-1 text-foreground-muted transition-colors hover:text-ink"
                                    >
                                        <InstagramLogoIcon size={14} />@
                                        {member.instagram}
                                    </Link>
                                )}
                            </div>
                        </Reveal>
                    ))}
                </div>

                {assistants.length > 0 && (
                    <Reveal className="mt-24 border-t border-line pt-8 md:mt-32">
                        <p className="text-[11px] uppercase tracking-[0.3em] text-foreground-muted">
                            Assistants
                        </p>
                        <p className="mt-4 text-base text-ink sm:text-lg">
                            {assistants.map((a) => a.name).join("　/　")}
                        </p>
                    </Reveal>
                )}
            </div>
        </section>
    );
}
