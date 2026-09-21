import Image from "next/image";
import { Reveal } from "./reveal";

const SHOTS = [
  { seed: "kanzashi-work-1", span: "row-span-2" },
  { seed: "kanzashi-work-2", span: "" },
  { seed: "kanzashi-work-3", span: "" },
  { seed: "kanzashi-work-4", span: "row-span-2" },
  { seed: "kanzashi-work-5", span: "" },
  { seed: "kanzashi-work-6", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
      <Reveal className="max-w-xl">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Recent work.
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:grid-rows-2 md:auto-rows-[1fr]">
        {SHOTS.map((shot, i) => (
          <Reveal
            key={shot.seed}
            delay={i * 0.04}
            className={`${shot.span} ${i === 0 ? "col-span-2 md:col-span-1" : ""}`}
          >
            <div className="relative h-full min-h-40 overflow-hidden rounded-2xl">
              <Image
                src={`https://picsum.photos/seed/${shot.seed}/700/700`}
                alt="A recent cut or color finished at the studio"
                fill
                sizes="(min-width: 768px) 32vw, 48vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
