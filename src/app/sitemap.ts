import type { MetadataRoute } from "next";
import { allRoutes, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map((route) => ({
    url: `${siteUrl}${route.href === "/" ? "" : route.href}`,
    lastModified: "2026-10-26",
    changeFrequency: route.href === "/" ? "monthly" : "yearly",
    priority: route.href === "/" ? 1 : 0.7,
  }));
}
