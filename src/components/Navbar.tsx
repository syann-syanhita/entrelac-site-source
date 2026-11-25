"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Noto_Sans_JP } from "next/font/google";
import type { Locale } from "@/i18n";
import type { Dictionary } from "@/dictionaries/get-dictionary";
import { getLocalizedPath, getTranslatedPathname } from "@/lib/routes";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "800"],
  display: "swap",
});

interface NavbarProps {
  lang: Locale;
  dict: Dictionary;
}

export default function Navbar({ lang, dict }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname() || `/${lang}`;

  const navItems = [
    { href: getLocalizedPath(lang, "end-users"), label: dict.nav.use_cases },
    { href: getLocalizedPath(lang, "b2b-retail"), label: dict.nav.b2b_retail },
    { href: getLocalizedPath(lang, "safety"), label: dict.nav.safety },
    { href: getLocalizedPath(lang, "about"), label: dict.nav.about },
    { href: getLocalizedPath(lang, "contact"), label: dict.nav.contact },
  ];

  const getLanguageSwitchHref = (targetLocale: Locale) =>
    getTranslatedPathname(pathname, targetLocale);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#060b13]/85 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Brand Logo & MVP Badge */}
          <div className="flex items-center">
            <Link href={`/${lang}`} className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-600 to-cyan-400 flex items-center justify-center font-bold text-2xl text-white shadow-md shadow-sky-900/40 shrink-0">
                E
              </div>
              <div className="flex flex-col items-end">
                <span
                  className={`${notoSansJP.className} font-extrabold text-2xl sm:text-4xl tracking-tight text-white group-hover:text-sky-400 transition-colors leading-none whitespace-nowrap`}
                >
                  Entrelac <span className="text-sky-400 font-light">IA</span>{" "}
                  <span className="font-normal text-lg sm:text-2xl">inc.</span>
                </span>
                <span className="mt-1 text-xs font-medium text-sky-300">
                  {dict.common.mvp_badge}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-xl font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-sky-400 bg-sky-950/50 border border-sky-800/40"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Language Selector & Mobile Button */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="inline-flex rounded-lg border border-slate-700 bg-slate-900/80 p-0.5 text-xs">
              <Link
                href={getLanguageSwitchHref("fr")}
                className={`px-2 py-1 rounded-md transition font-medium ${
                  lang === "fr"
                    ? "bg-sky-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
                title="Français"
              >
                FR
              </Link>
              <Link
                href={getLanguageSwitchHref("en")}
                className={`px-2 py-1 rounded-md transition font-medium ${
                  lang === "en"
                    ? "bg-sky-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
                title="English"
              >
                EN
              </Link>
              <Link
                href={getLanguageSwitchHref("ja")}
                className={`px-2 py-1 rounded-md transition font-medium ${
                  lang === "ja"
                    ? "bg-sky-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
                title="日本語"
              >
                JP
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-slate-800 bg-[#060b13]/98 px-4 pt-2 pb-6 space-y-1">
          <div className="py-2 mb-2 border-b border-slate-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
              {dict.common.mvp_badge}
            </span>
          </div>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === item.href
                  ? "text-sky-400 bg-sky-950/60 font-semibold"
                  : "text-slate-200 hover:bg-slate-800/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}