import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 md:pt-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-8 md:grid-cols-12 md:gap-8 md:pb-24 lg:px-10">
        <Reveal className="md:col-span-6">
          <span className="inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
            Omotesando, Tokyo
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl">
            Hair, done with quiet precision.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-foreground-muted">
            A private studio offering considered cuts, color, and treatments
            for people who value quiet, unhurried care.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground py-3 pl-6 pr-3 text-sm font-medium text-surface transition-transform active:scale-[0.98]"
            >
              Reserve
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface/15 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={14} weight="bold" />
              </span>
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center rounded-full border border-line px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/30"
            >
              View services
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl md:aspect-[9/10]">
            <Image
              src="https://picsum.photos/seed/kanzashi-studio-hero/1000/1200"
              alt="Stylist finishing a client's cut inside a sunlit studio"
              fill
              priority
              sizes="(min-width: 768px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
