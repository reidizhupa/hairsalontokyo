import Image from "next/image";
import { Reveal } from "./reveal";
import { unsplash } from "@/lib/unsplash";

const SHOTS = [
  "1657105052497-f996284ffff8",
  "1599011176306-4a96f1516d4d",
  "1520338661084-680395057c93",
  "1605980625600-88b46abafa8d",
  "1493256338651-d82f7acb2b38",
  "1560264641-1b5191cc63e2",
];

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:py-28 lg:px-10">
      <Reveal className="max-w-xl">
        <span className="font-serif text-xl font-bold uppercase tracking-[0.2em] text-accent">
          Gallery
        </span>
        <h2 className="mt-5 font-serif text-base font-medium text-gray-500 leading-snug tracking-tight md:text-3xl">
          一つひとつの仕上がりを、写真でご覧いただけます。
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-3">
        {SHOTS.map((id, i) => (
          <Reveal key={id} delay={i * 0.04}>
            <div className="relative aspect-square overflow-hidden rounded-sm">
              <Image
                src={unsplash(id, 700, 700)}
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
