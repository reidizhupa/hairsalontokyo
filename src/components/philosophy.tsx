import Image from "next/image";
import { Reveal } from "./reveal";

export function Philosophy() {
  return (
    <section id="studio" className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
      <Reveal className="max-w-2xl">
        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
          We run one chair at a time, so nothing about your visit feels
          rushed.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-foreground-muted">
          Kanzashi keeps a small, fixed roster of stylists and a booking
          system that never double-books a chair. You get a full
          consultation, a considered plan, and the same person each time you
          come back. No trainees learning on your hair, no upsell script at
          checkout.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl">
          <Image
            src="https://picsum.photos/seed/kanzashi-interior/1600/700"
            alt="Interior of the studio with natural light and minimal furnishing"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}
