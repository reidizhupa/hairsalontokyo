import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../reveal";
import { SectionHeading } from "./section-heading";
import type { AccessContent, ContactDetail } from "@/lib/types";

interface AccessSectionProps {
    content: AccessContent;
    details: ContactDetail[];
    index: string;
}

const LABEL: Record<ContactDetail["icon"], string> = {
    map: "住所",
    clock: "営業時間",
    phone: "電話",
};

export function AccessSection({ content, details, index }: AccessSectionProps) {
    const address = details.find((d) => d.icon === "map");
    const rest = details.filter((d) => d.icon !== "map");

    return (
        <section id="access" className="bg-background text-ink">
            <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 md:py-44 lg:px-10">
                <SectionHeading
                    index={index}
                    label="Access"
                    title="Access"
                    aside={content.heading}
                />

                <div className="mt-16 grid grid-cols-1 gap-12 md:mt-24 md:grid-cols-12 md:gap-8">
                    <Reveal className="md:col-span-4">
                        <dl className="border-t border-ink">
                            {address && (
                                <Row label={LABEL.map}>{address.value}</Row>
                            )}
                            <Row label="アクセス">{content.transitNote}</Row>
                            {rest.map((d) => (
                                <Row key={d.value} label={LABEL[d.icon]}>
                                    {d.href ? (
                                        <Link
                                            href={d.href}
                                            className="underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
                                        >
                                            {d.value}
                                        </Link>
                                    ) : (
                                        d.value
                                    )}
                                </Row>
                            ))}
                        </dl>
                        <Link
                            href={content.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group mt-8 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm"
                        >
                            Googleマップで見る
                            <ArrowUpRightIcon
                                size={14}
                                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </Link>
                    </Reveal>

                    <Reveal className="md:col-span-8">
                        <iframe
                            src={content.mapEmbedUrl}
                            title={content.iframeTitle}
                            width="100%"
                            height="480"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="h-80 w-full bg-surface-sunken sm:h-96 md:h-120"
                        />
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-line py-5 text-sm leading-relaxed">
            <dt className="text-foreground-muted">{label}</dt>
            <dd>{children}</dd>
        </div>
    );
}
