import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";

const QUOTES = [
  {
    quote:
      "First salon where the cut still looked right eight weeks later, not just on the walk out.",
    name: "Yui Tanaka",
    role: "Regular guest, three years",
  },
  {
    quote:
      "I stopped explaining what I wanted after the second visit. Mika just knows by now.",
    name: "Haruto Ogawa",
    role: "Regular guest",
  },
  {
    quote:
      "The color held its tone through two full regrowth cycles with barely any fading.",
    name: "Nanako Iwasaki",
    role: "Regular guest, one year",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
      <Reveal className="max-w-xl">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          What guests come back for.
        </h2>
      </Reveal>

      <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {QUOTES.map((item) => (
          <div
            key={item.name}
            className="w-[85%] shrink-0 snap-start rounded-2xl border border-line bg-surface p-7 sm:w-[60%] lg:w-[32%]"
          >
            <Quotes size={22} weight="fill" className="text-accent" />
            <p className="mt-4 text-base leading-relaxed text-foreground">
              {item.quote}
            </p>
            <div className="mt-6">
              <p className="text-sm font-semibold text-foreground">
                {item.name}
              </p>
              <p className="text-sm text-foreground-muted">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
