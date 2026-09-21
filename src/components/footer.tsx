import Link from "next/link";
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#studio", label: "Studio" },
  { href: "#stylists", label: "Stylists" },
  { href: "#gallery", label: "Gallery" },
];

export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
      <div className="flex flex-col gap-8 border-t border-line pt-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight">
            Kanzashi <span className="text-accent">Hair</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-foreground-muted">
            A private hair studio in Jingumae, open six days a week.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-foreground-muted">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="https://instagram.com"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-foreground-muted transition-colors hover:border-foreground/30 hover:text-foreground"
          aria-label="Instagram"
        >
          <InstagramLogo size={18} />
        </Link>
      </div>

      <p className="mt-10 text-xs text-foreground-muted">
        © {new Date().getFullYear()} Kanzashi Hair. All rights reserved.
      </p>
    </footer>
  );
}
