import Link from "next/link";
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import { LOCATIONS } from "@/lib/locations";
import type { NavSlug } from "@/lib/types";

const LINKS = [
    { href: "/", label: "TOP" },
    { href: "#services", label: "Menu" },
    { href: "#people", label: "People" },
    { href: "#gallery", label: "Gallery" },
    { href: "#access", label: "Access" },
    { href: "#faq", label: "FAQ" },
];

interface FooterProps {
    displayName: string;
    footerTagline: string;
    instagramUrl: string;
    locationSlug?: NavSlug;
    links?: { href: string; label: string }[];
    showLocations?: boolean;
}

export function Footer({
    displayName,
    footerTagline,
    instagramUrl,
    locationSlug,
    links = LINKS,
    showLocations = true,
}: FooterProps) {
    const otherLocations = showLocations
        ? LOCATIONS.filter((loc) => loc.slug !== locationSlug)
        : [];

    return (
        <footer className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
            <div className="flex flex-col gap-8 border-t border-line pt-10 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <p className="font-serif text-lg font-medium tracking-tight">
                        {displayName}
                    </p>
                    <p className="mt-2 max-w-xs text-sm text-foreground-muted">
                        {footerTagline}
                    </p>
                </div>

                <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-foreground-muted">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="transition-colors hover:text-foreground"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex flex-col gap-3">
                    {otherLocations.length > 0 && (
                        <div className="flex flex-col gap-1.5 text-sm text-foreground-muted">
                            <span className="text-xs text-foreground-muted/70">
                                他の店舗
                            </span>
                            {otherLocations.map((loc) => (
                                <Link
                                    key={loc.slug}
                                    href={loc.href}
                                    className="transition-colors hover:text-foreground"
                                >
                                    {loc.label}
                                </Link>
                            ))}
                        </div>
                    )}
                    <Link
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-foreground-muted transition-colors hover:border-foreground/30 hover:text-foreground"
                        aria-label="Instagram"
                    >
                        <InstagramLogo size={18} />
                    </Link>
                </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-foreground-muted">
                <p>
                    © {new Date().getFullYear()} {displayName}
                </p>
                <Link
                    href="/privacy-policy"
                    className="transition-colors hover:text-foreground"
                >
                    プライバシーポリシー
                </Link>
            </div>
        </footer>
    );
}
