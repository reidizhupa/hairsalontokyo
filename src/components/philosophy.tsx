import Image from "next/image";
import { Reveal } from "./reveal";
import { unsplash } from "@/lib/unsplash";

export function Philosophy() {
  return (
    <section id="studio" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:py-28 lg:px-10">
      <Reveal className="max-w-2xl">
        <h2 className="text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl md:text-4xl md:leading-tight">
          一日一人。だから、慌ただしさがありません。
        </h2>
        <p className="mt-5 text-base leading-relaxed text-foreground-muted sm:mt-6">
          少人数の固定スタイリストが、予約の重ならない仕組みで対応します。カウンセリングから仕上げまで、毎回同じ担当者です。研修中のスタッフが髪に触れることはありません。
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 sm:mt-12">
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl sm:aspect-21/9">
          <Image
            src={unsplash("1781450090585-1a511b7066d9", 1600, 700)}
            alt="明るく落ち着いた店内、スタイリングチェアと鏡が並ぶ"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}
