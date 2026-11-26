import type { MetadataRoute } from "next";
import type { Locale } from "@/i18n";
import { ROUTE_SLUGS, getLocalizedPath, type PageKey } from "@/lib/routes";

const BASE_URL = "https://www.entrelac-ia.ca";
const LOCALES: Locale[] = ["fr", "en", "ja"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const homeEntries: MetadataRoute.Sitemap = LOCALES.map((lang) => ({
    url: `${BASE_URL}/${lang}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1,
    alternates: {
      languages: {
        fr: `${BASE_URL}/fr`,
        en: `${BASE_URL}/en`,
        ja: `${BASE_URL}/ja`,
      },
    },
  }));

  const pageKeys = Object.keys(ROUTE_SLUGS) as PageKey[];

  const pageEntries: MetadataRoute.Sitemap = pageKeys.flatMap((pageKey) => {
    const languages = {
      fr: `${BASE_URL}${getLocalizedPath("fr", pageKey)}`,
      en: `${BASE_URL}${getLocalizedPath("en", pageKey)}`,
      ja: `${BASE_URL}${getLocalizedPath("ja", pageKey)}`,
    };

    return LOCALES.map((lang) => ({
      url: languages[lang],
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages,
      },
    }));
  });

  return [...homeEntries, ...pageEntries];
}