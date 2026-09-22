import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
        { path: "/", priority: 1, changeFrequency: "weekly" },
        { path: "/asakusa", priority: 0.9, changeFrequency: "weekly" },
        { path: "/sugamo", priority: 0.9, changeFrequency: "weekly" },
        { path: "/eyelash", priority: 0.9, changeFrequency: "weekly" },
        { path: "/recruit", priority: 0.6, changeFrequency: "monthly" },
        { path: "/privacy-policy", priority: 0.3, changeFrequency: "monthly" },
    ];

    const lastModified = new Date();

    return routes.map(({ path, priority, changeFrequency }) => ({
        url: `${SITE_URL}${path}`,
        lastModified,
        changeFrequency,
        priority,
    }));
}
