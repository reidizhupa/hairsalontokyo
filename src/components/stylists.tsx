import Image from "next/image";
import { Reveal } from "./reveal";

const STYLISTS = [
  { name: "Mika Sato", role: "Creative director", seed: "kanzashi-stylist-mika" },
  { name: "Ren Fujita", role: "Color specialist", seed: "kanzashi-stylist-ren" },
  { name: "Aoi Nakamura", role: "Senior stylist", seed: "kanzashi-stylist-aoi" },
  { name: "Sho Ishikawa", role: "Senior stylist", seed: "kanzashi-stylist-sho" },
];

export function Stylists() {
  return (
    <section id="stylists" className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
      <Reveal>
        <span className="inline-flex items-center rounded-full bg-surface-sunken px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground-muted">
          Meet the team
        </span>
        <h2 className="mt-5 max-w-xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Four stylists, one standard.
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {STYLISTS.map((person, i) => (
          <Reveal key={person.name} delay={i * 0.05}>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={`https://picsum.photos/seed/${person.seed}/500/500`}
                alt={`Portrait of ${person.name}`}
                fill
                sizes="(min-width: 768px) 22vw, 45vw"
                className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>
            <h3 className="mt-4 text-sm font-semibold text-foreground">
              {person.name}
            </h3>
            <p className="text-sm text-foreground-muted">{person.role}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
