import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";

const DETAILS = [
  {
    icon: MapPin,
    label: "Address",
    value: "3-2-1 Jingumae, Shibuya, Tokyo",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Tue to Sun, 10:00 to 19:00",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "03-1234-5678",
  },
];

export function BookingCta() {
  return (
    <section id="contact" className="px-4 pb-4 md:px-6 md:pb-6">
      <Reveal>
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-foreground px-8 py-16 text-background md:px-16 md:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <h2 className="max-w-lg text-3xl font-semibold leading-[1.1] tracking-tight md:text-4xl">
                Chairs are limited. Reserve before the week fills.
              </h2>
              <Link
                href="https://wa.me/810312345678"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-background py-3 pl-6 pr-3 text-sm font-medium text-foreground transition-transform active:scale-[0.98]"
              >
                Reserve
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground/10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight size={14} weight="bold" />
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 border-t border-background/15 pt-8 sm:grid-cols-3 md:col-span-5 md:border-t-0 md:border-l md:pl-10 md:pt-0">
              {DETAILS.map((item) => (
                <div key={item.label}>
                  <item.icon size={18} weight="light" className="text-background/60" />
                  <p className="mt-3 text-xs uppercase tracking-[0.14em] text-background/50">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-background/90">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
