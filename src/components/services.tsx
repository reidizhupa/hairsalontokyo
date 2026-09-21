import Image from "next/image";
import {
  Drop,
  FlowerLotus,
  Scissors,
  Sparkle,
  Wind,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";

const SUPPORTING = [
  {
    icon: Drop,
    title: "Color & balayage",
    body: "Low-damage color built around your regrowth cycle.",
  },
  {
    icon: Sparkle,
    title: "Treatment & repair",
    body: "Bond-level care for over-processed or brittle hair.",
  },
  {
    icon: FlowerLotus,
    title: "Bridal & event",
    body: "Trial run included, day-of styling on location.",
  },
  {
    icon: Wind,
    title: "Scalp spa",
    body: "A slow, pressure-point wash before every cut.",
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
      <Reveal>
        <span className="inline-flex items-center rounded-full bg-surface-sunken px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground-muted">
          What we do
        </span>
        <h2 className="mt-5 max-w-xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Considered services, not a long menu.
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2">
        <Reveal delay={0.05} className="md:col-span-2 md:row-span-2">
          <div className="relative h-full min-h-80 overflow-hidden rounded-3xl">
            <Image
              src="https://picsum.photos/seed/kanzashi-cut/900/900"
              alt="Close-up of a precision haircut in progress"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <Scissors size={22} weight="light" className="text-white" />
              <h3 className="mt-3 text-xl font-semibold text-white">
                Cut & style
              </h3>
              <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-white/80">
                A consultation-first cut, shaped to how your hair actually
                falls.
              </p>
            </div>
          </div>
        </Reveal>

        {SUPPORTING.map((item, i) => (
          <Reveal
            key={item.title}
            delay={0.1 + i * 0.05}
            className="md:col-span-1"
          >
            <div
              className={`flex h-full flex-col justify-between rounded-2xl border border-line p-7 ${
                i === 0 ? "bg-accent-soft" : "bg-surface"
              }`}
            >
              <item.icon size={22} weight="light" className="text-accent" />
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">
                  {item.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
