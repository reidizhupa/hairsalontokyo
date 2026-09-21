import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";

const QUOTES = [
  {
    quote: "仕上がりが2ヶ月経っても崩れないサロンは初めてです。",
    name: "田中 結衣",
    role: "3年通っている常連",
  },
  {
    quote: "説明しなくても、もう分かってもらえる安心感があります。",
    name: "小川 陽翔",
    role: "常連",
  },
  {
    quote: "カラーの色持ちが良くて、褪色がほとんど気になりません。",
    name: "岩崎 菜々子",
    role: "通い始めて1年",
  },
];

export function Testimonials() {
  return (
    <section className="bg-surface-sunken">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:py-28 lg:px-10">
      <Reveal className="max-w-xl">
        <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          お客様の声。
        </h2>
      </Reveal>

      <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-none [-ms-overflow-style:none] sm:mt-12">
        {QUOTES.map((item) => (
          <div
            key={item.name}
            className="w-[82%] shrink-0 snap-start rounded-2xl border border-line bg-surface p-5 sm:w-[60%] sm:p-7 lg:w-[32%]"
          >
            <Quotes size={22} weight="fill" className="text-accent" />
            <p className="mt-4 font-serif text-lg leading-relaxed text-foreground">
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
      </div>
    </section>
  );
}
