import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";

export function Recruit() {
  return (
    <section id="recruit" className="bg-surface-sunken">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:py-24 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
            <div className="max-w-xl">
              <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-xs font-medium tracking-wide text-foreground-muted">
                採用情報
              </span>
              <h2 className="mt-5 font-serif text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                一緒に働く仲間を、募集しています。
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground-muted sm:text-base">
                経験者はもちろん、美容師デビューを目指す方も歓迎します。技術面はもちろん、接客や働き方まで丁寧に向き合う研修制度があります。
              </p>
            </div>

            <Link
              href="mailto:recruit@kanzashi-hair.jp?subject=採用について"
              className="group inline-flex shrink-0 items-center gap-2 rounded-sm bg-accent py-3 pl-6 pr-3 text-sm font-medium text-white transition-transform active:scale-[0.98] hover:opacity-90"
            >
              採用について問い合わせる
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={14} weight="bold" />
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
