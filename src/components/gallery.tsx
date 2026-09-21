import Image from "next/image";
import { Reveal } from "./reveal";
import { unsplash } from "@/lib/unsplash";

const SHOTS = [
  { id: "1657105052497-f996284ffff8", span: "row-span-2", wide: true },
  { id: "1599011176306-4a96f1516d4d", span: "" },
  { id: "1520338661084-680395057c93", span: "" },
  { id: "1605980625600-88b46abafa8d", span: "" },
  { id: "1493256338651-d82f7acb2b38", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:py-28 lg:px-10">
      <Reveal className="max-w-xl">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          施術事例
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-3 md:grid-rows-2 md:auto-rows-[1fr]">
        {SHOTS.map((shot, i) => (
          <Reveal
            key={shot.id}
            delay={i * 0.04}
            className={`${shot.span} ${shot.wide ? "col-span-2 md:col-span-1" : ""}`}
          >
            <div className="relative h-full min-h-40 overflow-hidden rounded-2xl">
              <Image
                src={unsplash(shot.id, 700, 700)}
                alt="サロンでの施術の様子"
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
