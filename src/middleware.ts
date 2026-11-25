import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, type Locale } from "@/i18n";
import { ROUTE_SLUGS, resolvePageKeyFromSlug } from "@/lib/routes";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignorer les ressources internes Next.js, les fichiers statiques et les routes API
  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0] as Locale | undefined;
  const pathnameHasLocale =
    firstSegment !== undefined && locales.includes(firstSegment);

  // Cas 1 : l'adresse commence déjà par une langue (/fr, /en, /ja)
  if (pathnameHasLocale && firstSegment) {
    const slug = segments[1];

    if (!slug) {
      return NextResponse.next();
    }

    const pageKey = resolvePageKeyFromSlug(slug);

    if (pageKey) {
      const canonicalSlug = ROUTE_SLUGS[pageKey][firstSegment];
      const rest = segments.slice(2);
      const suffix = rest.length > 0 ? `/${rest.join("/")}` : "";

      // Si le mot tapé ne correspond pas à la langue (ex. /fr/toiawase ou /fr/end-users),
      // on redirige proprement vers l'adresse officielle dans cette langue
      if (slug !== canonicalSlug) {
        const redirectUrl = request.nextUrl.clone();
        redirectUrl.pathname = `/${firstSegment}/${canonicalSlug}${suffix}`;
        return NextResponse.redirect(redirectUrl);
      }

      // Si l'adresse officielle diffère du nom du dossier interne (ex. /fr/securite -> /fr/safety),
      // on affiche la bonne page de façon invisible sans changer la barre d'adresse
      if (canonicalSlug !== pageKey) {
        const rewriteUrl = request.nextUrl.clone();
        rewriteUrl.pathname = `/${firstSegment}/${pageKey}${suffix}`;
        return NextResponse.rewrite(rewriteUrl);
      }
    }

    return NextResponse.next();
  }

  // Cas 2 : aucune langue dans l'adresse (ex. / ou /toiawase)
  const acceptLanguage = request.headers.get("accept-language") || "";
  const primaryLang = acceptLanguage.split(",")[0]?.toLowerCase() || "";
  let targetLocale: Locale = defaultLocale;

  if (primaryLang.startsWith("ja")) {
    targetLocale = "ja";
  } else if (primaryLang.startsWith("en")) {
    targetLocale = "en";
  } else if (primaryLang.startsWith("fr")) {
    targetLocale = "fr";
  }

  const url = request.nextUrl.clone();

  if (segments.length > 0) {
    const pageKey = resolvePageKeyFromSlug(segments[0]);
    if (pageKey) {
      const rest = segments.slice(1);
      const suffix = rest.length > 0 ? `/${rest.join("/")}` : "";
      url.pathname = `/${targetLocale}/${ROUTE_SLUGS[pageKey][targetLocale]}${suffix}`;
      return NextResponse.redirect(url);
    }
  }

  url.pathname = `/${targetLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};