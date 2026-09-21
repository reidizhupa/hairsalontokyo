import Link from "next/link";
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";

const LINKS = [
    { href: "#services", label: "メニュー" },
    { href: "#about", label: "ABOUT" },
    { href: "#stylists", label: "スタイリスト" },
    { href: "#gallery", label: "ギャラリー" },
    { href: "#recruit", label: "採用情報" },
];

export function Footer() {
    return (
        <footer className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
            <div className="flex flex-col gap-8 border-t border-line pt-10 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <p className="font-serif text-lg font-medium tracking-tight">
                        かんざし
                    </p>
                    <p className="mt-2 max-w-xs text-sm text-foreground-muted">
                        神宮前にある、完全予約制の小さな美容室です。
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
                © {new Date().getFullYear()} 美容室かんざし
            </p>
        </footer>
    );
}
