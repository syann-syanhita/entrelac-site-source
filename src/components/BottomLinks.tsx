"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n";
import { getLocalizedPath } from "@/lib/routes";

interface BottomLinksProps {
  lang: Locale;
}

export default function BottomLinks({ lang }: BottomLinksProps) {
  const pathname = usePathname() || "";

  const content = {
    fr: {
      title: "Ça ne répond pas à vos questions ?",
      desc: "Consultez notre FAQ ou nos références. Peut-être qu'on y a déjà pensé.\nSinon, envoyez-nous un message afin qu'on se les pose, nous aussi.",
      faq: "Accéder à la FAQ",
      research: "Références et expertises",
      contact: "Contactez-nous",
    },
    en: {
      title: "Still have questions?",
      desc: "Browse our FAQ or our references—maybe we've already thought of them.\nIf not, send us a message so we can ask ourselves the same ones.",
      faq: "Go to the FAQ",
      research: "References & Expertise",
      contact: "Contact us",
    },
    ja: {
      title: "疑問はまだ残っていますか？",
      desc: "よくある質問や参考資料もぜひご覧ください。すでに私たちが考えているかもしれません。\nもし見つからなければ、私たち自身もその問いと向き合えるよう、ぜひメッセージをお送りください。",
      faq: "よくある質問（FAQ）",
      research: "参考資料・専門機関",
      contact: "お問い合わせ",
    },
  }[lang];

  const links = [
    { href: getLocalizedPath(lang, "faq"), label: content.faq, primary: false },
    {
      href: getLocalizedPath(lang, "research"),
      label: content.research,
      primary: false,
    },
    {
      href: getLocalizedPath(lang, "contact"),
      label: content.contact,
      primary: true,
    },
  ].filter((link) => pathname !== link.href);

  return (
    <div className="pt-8 border-t border-slate-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
      <div className="space-y-1 max-w-2xl">
        <h2 className="text-xl font-bold text-white whitespace-pre-line">
          {content.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-400 whitespace-pre-line">
          {content.desc}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              link.primary
                ? "shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition shadow-lg shadow-sky-950"
                : "shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-medium text-sm transition"
            }
          >
            <span>{link.label}</span>
            {link.primary && <span aria-hidden="true">→</span>}
          </Link>
        ))}
      </div>
    </div>
  );
}