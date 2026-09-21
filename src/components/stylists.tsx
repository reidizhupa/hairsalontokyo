import Image from "next/image";
import { Reveal } from "./reveal";
import { unsplash } from "@/lib/unsplash";

const STYLISTS = [
  { name: "佐藤 美香", role: "クリエイティブディレクター", id: "1581065178047-8ee15951ede6" },
  { name: "藤田 蓮", role: "カラーリスト", id: "1758600587839-56ba05596c69" },
  { name: "中村 葵", role: "スタイリスト", id: "1738566061505-556830f8b8f5" },
  { name: "石川 翔", role: "スタイリスト", id: "1758600432264-b8d2a0fd7d83" },
];

export function Stylists() {
  return (
    <section id="stylists" className="bg-surface-sunken">
      <div className="mx-auto max-w-7xl py-14 sm:py-20 md:py-28">
        <div className="px-4 sm:px-6 lg:px-10">
          <Reveal>
            <h2 className="mt-5 max-w-xl font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              4名体制、変わらない仕上がり。
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden scroll-pl-4 px-4 pb-2 scrollbar-none [-ms-overflow-style:none] [touch-action:pan-x] sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:scroll-pl-6 sm:px-6 lg:grid-cols-4 lg:scroll-pl-10 lg:px-10">
          {STYLISTS.map((person, i) => (
            <Reveal
              key={person.name}
              delay={i * 0.05}
              className="w-[60%] shrink-0 snap-start sm:w-auto"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                <Image
                  src={unsplash(person.id, 500, 500)}
                  alt={`${person.name}のポートレート`}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 42vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foreground">
                {person.name}
              </h3>
              <p className="text-sm text-foreground-muted">{person.role}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
