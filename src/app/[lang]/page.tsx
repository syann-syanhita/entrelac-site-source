import React from "react";
import Link from "next/link";
import { getDictionary } from "@/dictionaries/get-dictionary";
import type { Locale } from "@/i18n";
import { getLocalizedPath } from "@/lib/routes";

export default async function HomePage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(params.lang);

  const localLabels = {
    fr: {
      video_label: "Présentation",
      video_coming_soon: "À venir",
      milestones: [
        "Incubation",
        "Financement de recherche",
        "Milieu universitaire",
        "Partenariats",
      ],
      contact_badge: "Échangeons",
      contact_title: "Une question, une réflexion ou un projet ?",
      contact_desc:
        "Que vous souhaitiez partager une préoccupation, proposer une ressource scientifique ou discuter d'une collaboration, écrivez-nous directement.",
      contact_btn: "Aller à la page Contact",
      crowdfunding_btn: "J'en veux un ! (Alerte sociofinancement)",
    },
    en: {
      video_label: "Presentation",
      video_coming_soon: "Coming soon",
      milestones: [
        "Incubation",
        "Research funding",
        "Academic community",
        "Partnerships",
      ],
      contact_badge: "Let's talk",
      contact_title: "A question, a thought, or a project?",
      contact_desc:
        "Whether you want to share a concern, suggest a scientific resource, or discuss a collaboration, write to us directly.",
      contact_btn: "Go to the Contact page",
      crowdfunding_btn: "I want one! (Crowdfunding alert)",
    },
    ja: {
      video_label: "紹介映像",
      video_coming_soon: "近日公開",
      milestones: [
        "インキュベーション",
        "研究助成",
        "大学・学術界",
        "連携・提携",
      ],
      contact_badge: "ご意見・ご相談",
      contact_title: "ご質問やご意見、プロジェクトのご相談がありますか？",
      contact_desc:
        "ご懸念の共有、科学的な資料のご提案、共同の取り組みに関するご相談など、どうぞ直接ご連絡ください。",
      contact_btn: "お問い合わせページへ",
      crowdfunding_btn: "ほしい！（クラウドファンディング開始通知）",
    },
  }[params.lang];

  return (
    <div className="space-y-24 py-12 md:py-20">
      {/* Section d'ouverture */}
      <section className="relative max-w-7xl mx-auto px-7 sm:px-8 lg:px-10 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-2 mb-6">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-950/80 text-sky-300 border border-sky-800">
            {dict.home.badge}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight md:leading-tight whitespace-pre-line">
          {dict.home.hero_title}
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
          {dict.home.hero_subtitle}
        </p>

        {/* Boutons d'accès rapide */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href={getLocalizedPath(params.lang, "end-users")}
            className="px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition shadow-lg shadow-sky-950/50 flex items-center gap-2"
          >
            <span>{dict.nav.use_cases}</span>
            <span>→</span>
          </Link>
          <Link
            href={getLocalizedPath(params.lang, "safety")}
            className="px-6 py-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium text-sm transition"
          >
            {dict.nav.safety}
          </Link>
          <Link
            href={
              getLocalizedPath(params.lang, "contact") +
              "?motif=sociofinancement"
            }
            className="px-6 py-3 rounded-lg bg-sky-950/70 hover:bg-sky-900/80 text-sky-200 border border-sky-500/60 font-medium text-sm transition"
          >
            {localLabels.crowdfunding_btn}
          </Link>
        </div>
      </section>

      {/* Encadré vidéo — À venir */}
      <section className="max-w-5xl mx-auto px-7 sm:px-8 lg:px-10">
        <div className="relative rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-[#091120] p-7 md:p-12 shadow-2xl overflow-hidden">
          <div className="mb-6">
            <span className="text-xs uppercase font-mono tracking-widest text-sky-400">
              {localLabels.video_label}
            </span>
            <h2 className="mt-1 text-2xl font-bold text-white whitespace-pre-line">
              {dict.home.video_title}
            </h2>
          </div>

          <div className="aspect-video w-full rounded-xl bg-slate-950/90 border border-slate-800 flex items-center justify-center p-6 text-center">
            <span className="px-5 py-2.5 rounded-full bg-slate-900/90 border border-slate-700 text-slate-200 text-base sm:text-lg font-medium tracking-wide">
              {localLabels.video_coming_soon}
            </span>
          </div>
        </div>
      </section>

      {/* Les 3 piliers principaux */}
      <section className="max-w-7xl mx-auto px-7 sm:px-8 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight whitespace-pre-line">
            {dict.home.pillars_title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pilier 1 */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8 hover:border-sky-700/50 hover:bg-slate-900/80 transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 font-mono text-lg font-bold mb-6">
                01
              </div>
              <h3 className="text-xl font-bold text-white mb-3 whitespace-pre-line">
                {dict.home.pillar_1_title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                {dict.home.pillar_1_desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/60">
              <Link
                href={getLocalizedPath(params.lang, "end-users")}
                className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1"
              >
                <span>{dict.nav.use_cases}</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Pilier 2 */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8 hover:border-emerald-700/50 hover:bg-slate-900/80 transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 font-mono text-lg font-bold mb-6">
                02
              </div>
              <h3 className="text-xl font-bold text-white mb-3 whitespace-pre-line">
                {dict.home.pillar_2_title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                {dict.home.pillar_2_desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/60">
              <Link
                href={getLocalizedPath(params.lang, "b2b-retail")}
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
              >
                <span>{dict.nav.b2b_retail}</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Pilier 3 */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-8 hover:border-purple-700/50 hover:bg-slate-900/80 transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-purple-950 border border-purple-800 flex items-center justify-center text-purple-400 font-mono text-lg font-bold mb-6">
                03
              </div>
              <h3 className="text-xl font-bold text-white mb-3 whitespace-pre-line">
                {dict.home.pillar_3_title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                {dict.home.pillar_3_desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/60">
              <Link
                href={getLocalizedPath(params.lang, "safety")}
                className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1"
              >
                <span>{dict.nav.safety}</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bandeau institutionnel */}
      <section className="max-w-7xl mx-auto px-7 sm:px-8 lg:px-10">
        <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              {dict.home.partners_title}
            </h4>
            <p className="text-xs text-slate-400 max-w-2xl whitespace-pre-line">
              {dict.home.partners_text}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {localLabels.milestones.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-slate-800/80 text-xs font-mono text-slate-200 border border-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Redirection vers la page Contact */}
      <section className="max-w-4xl mx-auto px-7 sm:px-8 lg:px-10">
        <div className="rounded-2xl border border-sky-800/50 bg-gradient-to-tr from-sky-950/40 via-slate-900/80 to-[#060b13] p-8 md:p-12 text-center flex flex-col items-center">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-sky-900/60 text-sky-200 border border-sky-700/60 mb-4">
            {localLabels.contact_badge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 whitespace-pre-line">
            {localLabels.contact_title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-lg mb-7 leading-relaxed whitespace-pre-line">
            {localLabels.contact_desc}
          </p>
          <Link
            href={getLocalizedPath(params.lang, "contact")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition shadow-lg shadow-sky-950"
          >
            <span>{localLabels.contact_btn}</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}