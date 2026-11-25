import type { Locale } from "@/i18n";

export type PageKey =
  | "end-users"
  | "api-guide"
  | "b2b-retail"
  | "safety"
  | "faq"
  | "research"
  | "about"
  | "contact";

export const ROUTE_SLUGS: Record<PageKey, Record<Locale, string>> = {
  "end-users": {
    fr: "comment-ca-marche",
    en: "how-it-works",
    ja: "shikumi",
  },
  "api-guide": {
    fr: "comprendre-les-api",
    en: "understanding-apis",
    ja: "api-toha",
  },
  "b2b-retail": {
    fr: "espace-public",
    en: "public-spaces",
    ja: "koukyoukuukan",
  },
  safety: {
    fr: "securite",
    en: "safety",
    ja: "anzensei",
  },
  faq: {
    fr: "faq",
    en: "faq",
    ja: "shitsumon",
  },
  research: {
    fr: "references",
    en: "references",
    ja: "shiryou",
  },
  about: {
    fr: "a-propos",
    en: "about",
    ja: "gaiyou",
  },
  contact: {
    fr: "contact",
    en: "contact",
    ja: "toiawase",
  },
};

/**
 * Retourne l'adresse officielle traduite pour une langue et une page données.
 * Exemple : getLocalizedPath("ja", "contact") -> "/ja/toiawase"
 */
export function getLocalizedPath(lang: Locale, page: PageKey): string {
  return `/${lang}/${ROUTE_SLUGS[page][lang]}`;
}

/**
 * Retrouve le dossier interne (PageKey) à partir de n'importe quel segment d'adresse,
 * quelle que soit la langue tapée (ex. "toiawase", "contact", "securite" ou "end-users").
 */
export function resolvePageKeyFromSlug(slug: string): PageKey | null {
  const normalized = slug.toLowerCase();

  for (const key of Object.keys(ROUTE_SLUGS) as PageKey[]) {
    if (key === normalized) {
      return key;
    }
    const slugs = ROUTE_SLUGS[key];
    if (
      slugs.fr === normalized ||
      slugs.en === normalized ||
      slugs.ja === normalized
    ) {
      return key;
    }
  }

  return null;
}

/**
 * Traduit le chemin actuel vers une autre langue pour le sélecteur FR / EN / JP.
 * Exemple : getTranslatedPathname("/fr/securite", "ja") -> "/ja/anzensei"
 */
export function getTranslatedPathname(
  pathname: string,
  targetLocale: Locale
): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length <= 1) {
    return `/${targetLocale}`;
  }

  const pageKey = resolvePageKeyFromSlug(segments[1]);
  if (pageKey) {
    const rest = segments.slice(2);
    const suffix = rest.length > 0 ? `/${rest.join("/")}` : "";
    return `/${targetLocale}/${ROUTE_SLUGS[pageKey][targetLocale]}${suffix}`;
  }

  return `/${targetLocale}/${segments.slice(1).join("/")}`;
}