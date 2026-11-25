import React from "react";
import Link from "next/link";
import type { Locale } from "@/i18n";
import type { Dictionary } from "@/dictionaries/get-dictionary";
import { getLocalizedPath } from "@/lib/routes";

interface FooterProps {
  lang: Locale;
  dict: Dictionary;
}

export default function Footer({ lang, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const labels = {
    fr: {
      tagline: "Agnostique • 100 % local • Sécurité par conception",
      milestones: [
        "Incubation",
        "Financement de recherche",
        "Milieu universitaire",
        "Partenariats",
      ],
      nav_title: "Navigation",
      faq: "FAQ",
      research: "Références et expertises",
    },
    en: {
      tagline: "Agnostic • 100% local • Safety by design",
      milestones: [
        "Incubation",
        "Research funding",
        "Academic community",
        "Partnerships",
      ],
      nav_title: "Navigation",
      faq: "FAQ",
      research: "References & Expertise",
    },
    ja: {
      tagline: "非依存型 • 完全ローカル • 設計段階からの安全",
      milestones: [
        "インキュベーション",
        "研究助成",
        "大学・学術界",
        "連携・提携",
      ],
      nav_title: "ナビゲーション",
      faq: "よくある質問（FAQ）",
      research: "参考資料・専門機関",
    },
  }[lang];

  return (
    <footer className="border-t border-slate-800 bg-[#04080f] text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-7 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1 : Identité */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-gradient-to-tr from-sky-600 to-cyan-400 flex items-center justify-center font-bold text-white text-sm">
                E
              </div>
              <span className="font-bold text-white text-base">
                Entrelac <span className="text-sky-400">IA</span> inc.
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed whitespace-pre-line">
              {dict.meta.description}
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs text-sky-400 font-mono bg-sky-950/40 border border-sky-800/40 px-3 py-1 rounded">
                {labels.tagline}
              </span>
            </div>
          </div>

          {/* Col 2 : Écosystème */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 whitespace-pre-line">
              {dict.home.partners_title}
            </h3>
            <ul className="text-xs space-y-2 text-slate-400">
              {labels.milestones.map((item, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 : Navigation */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 whitespace-pre-line">
              {labels.nav_title}
            </h3>
            <ul className="text-xs space-y-1.5">
              <li>
                <Link
                  href={getLocalizedPath(lang, "end-users")}
                  className="hover:text-white transition"
                >
                  {dict.nav.use_cases}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath(lang, "b2b-retail")}
                  className="hover:text-white transition"
                >
                  {dict.nav.b2b_retail}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath(lang, "safety")}
                  className="hover:text-white transition"
                >
                  {dict.nav.safety}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath(lang, "faq")}
                  className="hover:text-white transition"
                >
                  {labels.faq}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath(lang, "research")}
                  className="hover:text-white transition"
                >
                  {labels.research}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath(lang, "about")}
                  className="hover:text-white transition"
                >
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath(lang, "contact")}
                  className="hover:text-white transition"
                >
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p className="whitespace-pre-line">
            © {currentYear} Entrelac IA inc. {dict.common.all_rights_reserved}
          </p>
          <p className="text-slate-400 whitespace-pre-line">
            {dict.common.status_under_construction}
          </p>
        </div>
      </div>
    </footer>
  );
}