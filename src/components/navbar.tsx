"use client";

import Link from "next/link";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { List, X } from "@phosphor-icons/react/dist/ssr";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#studio", label: "Studio" },
  { href: "#stylists", label: "Stylists" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Visit" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 12);
  });

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="#top" className="text-lg font-semibold tracking-tight">
          Kanzashi <span className="text-accent">Hair</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm text-foreground-muted">
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

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-surface transition-transform active:scale-[0.98] hover:opacity-90"
          >
            Reserve
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <List size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-surface px-6 py-4">
          <nav className="flex flex-col gap-4 text-sm">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-foreground-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 font-medium text-surface"
            >
              Reserve
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
