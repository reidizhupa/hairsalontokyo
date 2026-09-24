import type { PersonCard } from "@/components/home/people-section";
import type { LocationSlug, StaffMember } from "./types";

export interface StoreBooking {
    slug: LocationSlug;
    label: string;
    bookingUrl: string;
}

// Splits staff into photographed stylists (with per-store Hot Pepper links —
// each store issues its own stylist ID) and a plain list of assistants.
export function buildPeople(staff: StaffMember[], stores: StoreBooking[]) {
    const stylists: PersonCard[] = staff
        .filter((m) => m.src && m.role.includes("スタイリスト"))
        .map((member) => ({
            member,
            bookings: stores.flatMap((store) => {
                const id = member.profileIdByLocation?.[store.slug];
                return id
                    ? [
                          {
                              label: store.label,
                              href: `${store.bookingUrl}&stylistId=${id}`,
                          },
                      ]
                    : [];
            }),
        }));

    const assistants = staff.filter((m) => !m.role.includes("スタイリスト"));

    return { stylists, assistants };
}
