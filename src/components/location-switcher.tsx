import Link from "next/link";
import { CaretDownIcon, MapPinIcon } from "@phosphor-icons/react/dist/ssr";
import { LOCATIONS } from "@/lib/locations";
import type { NavSlug } from "@/lib/types";

interface LocationSwitcherProps {
    currentSlug?: NavSlug;
    className?: string;
}

export function LocationSwitcher({
    currentSlug,
    className = "",
}: LocationSwitcherProps) {
    const others = LOCATIONS.filter((loc) => loc.slug !== currentSlug);

    return (
        <div className={`group relative ${className}`}>
            <button
                type="button"
                className="flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-accent"
            >
                <MapPinIcon size={16} weight="light" />
                他の店舗
                <CaretDownIcon size={12} weight="bold" />
            </button>
            <div className="invisible absolute right-0 top-full z-10 w-48 rounded-sm border border-line bg-surface p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                {others.map((loc) => (
                    <Link
                        key={loc.slug}
                        href={loc.href}
                        className="block rounded-sm px-3 py-2 text-sm text-gray-500 transition-colors hover:bg-surface-sunken hover:text-accent"
                    >
                        {loc.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}
