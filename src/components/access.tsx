import { TrainSimpleIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";
import type { AccessContent } from "@/lib/types";

interface AccessProps {
    content: AccessContent;
}

export function Access({ content }: AccessProps) {
    return (
        <section id="access" className="bg-surface-sunken">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:py-28 lg:px-10">
                <Reveal>
                    <span className="font-serif text-xl font-bold uppercase tracking-[0.2em] text-accent">
                        Access
                    </span>
                    <h2 className="mt-5 max-w-xl font-serif text-base font-thin text-gray-500 leading-snug tracking-tight md:text-3xl">
                        {content.heading}
                    </h2>
                    <p className="mt-3 flex items-center gap-2 text-sm text-foreground-muted">
                        <TrainSimpleIcon
                            size={16}
                            weight="light"
                            className="shrink-0 text-foreground-muted/70"
                        />
                        {content.transitNote}
                    </p>
                </Reveal>

                <Reveal className="mt-10 sm:mt-12">
                    <div className="overflow-hidden rounded-sm">
                        <iframe
                            src={content.mapEmbedUrl}
                            title={content.iframeTitle}
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="h-80 w-full sm:h-96 md:h-105"
                        />
                    </div>
                    <a
                        href={content.mapUrl}
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
