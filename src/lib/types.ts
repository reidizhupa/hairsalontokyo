export type LocationSlug = "asakusa" | "sugamo";

// Broader than LocationSlug: includes non-LocationConfig pages (like the
// eyelash service page) that still belong in the shop switcher / footer nav.
export type NavSlug = LocationSlug | "eyelash";

export interface HeroContent {
    imageSrc: string;
    imageAlt: string;
    imageClassName?: string;
    heading: string;
    subheading: string;
}

export interface AboutImage {
    src: string;
    alt: string;
}

export interface AboutContent {
    heading: string[];
    images: [AboutImage, AboutImage, AboutImage];
}

export interface MenuHighlight {
    title: string;
    tag: string;
    src: string;
}

export interface MenuContent {
    heading: string;
    menuUrl: string;
    highlights: MenuHighlight[];
    otherItems: string[];
}

export interface StaffMember {
    name: string;
    role: string;
    src: string | null;
    locations: LocationSlug[];
    profileIdByLocation?: Partial<Record<LocationSlug, string>>;
}

export interface GalleryShot {
    src: string;
    width: number;
    height: number;
}

export interface GalleryContent {
    heading: string;
    shots: GalleryShot[];
    moreTileImage: string;
    moreUrl: string;
}

export interface AccessContent {
    heading: string;
    transitNote: string;
    mapEmbedUrl: string;
    mapUrl: string;
    iframeTitle: string;
}

export type ContactIcon = "map" | "clock" | "phone";

export interface ContactDetail {
    icon: ContactIcon;
    value: string;
    href?: string;
}

export interface ContactContent {
    heading: string;
    bookingUrl: string;
    details: ContactDetail[];
    features: string[];
    paymentMethods: string[];
    cancellationNote: string;
}

export interface RecruitRequirement {
    label: string;
    value: string;
}

export interface RecruitSalaryGroup {
    role: string;
    base: string;
    items: string[];
}

export interface RecruitStep {
    title: string;
    body: string;
}

export interface RecruitContent {
    heading: string[];
    pitch: string;
    contactUrl: string;
    contactName: string;
    contactHandle: string;
    requirements: RecruitRequirement[];
    salary: RecruitSalaryGroup[];
    steps: RecruitStep[];
    resumeAddress: string;
}

export interface FaqItem {
    q: string;
    a: string;
}

export interface SeoMeta {
    siteName: string;
    title: string;
    description: string;
    keywords: string[];
}

export interface LocationConfig {
    slug: LocationSlug;
    displayName: string;
    footerTagline: string;
    bookingUrl: string;
    instagramUrl: string;
    stylistBaseUrl: string;
    seo: SeoMeta;
    hero: HeroContent;
    about: AboutContent;
    menu: MenuContent;
    gallery: GalleryContent;
    access: AccessContent;
    contact: ContactContent;
}
