import React from "react";
import Link from "next/link";
import { getDictionary } from "@/dictionaries/get-dictionary";
import type { Locale } from "@/i18n";
import PlaceholderBadge from "@/components/PlaceholderBadge";

export default async function B2BHardwarePage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(params.lang);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2">
          <PlaceholderBadge lang={params.lang} />
          <span className="text-xs uppercase tracking-widest font-mono text-sky-400">
            Hardware Integration
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          {dict.b2b_hardware.title}
        </h1>
        <p className="text-base sm:text-lg text-slate-300">
          {dict.b2b_hardware.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Eligibility Criteria */}
        <div className="rounded-xl border border-sky-800/60 bg-slate-900/60 p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-700 flex items-center justify-center text-sky-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">
              {dict.b2b_hardware.criteria_title}
            </h2>
          </div>
          <p className="text-sm text-slate-300">
            {dict.b2b_hardware.criteria_intro}
          </p>
          <ul className="space-y-4 text-sm text-slate-200">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-sky-400 mt-2 shrink-0"></span>
              <span>{dict.b2b_hardware.spec_1}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-sky-400 mt-2 shrink-0"></span>
              <span>{dict.b2b_hardware.spec_2}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-sky-400 mt-2 shrink-0"></span>
              <span>{dict.b2b_hardware.spec_3}</span>
            </li>
          </ul>
        </div>

        {/* Strict Exclusions */}
        <div className="rounded-xl border border-red-900/60 bg-gradient-to-br from-red-950/20 to-slate-900/60 p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-950 border border-red-800 flex items-center justify-center text-red-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">
              {dict.b2b_hardware.exclusions_title}
            </h2>
          </div>
          <p className="text-sm text-slate-300">
            Pour des impératifs éthiques et de sécurité civile, Entrelac refuse formellement l&apos;intégration des technologies suivantes :
          </p>
          <ul className="space-y-4 text-sm text-slate-200">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0"></span>
              <span>{dict.b2b_hardware.exclusion_1}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0"></span>
              <span>{dict.b2b_hardware.exclusion_2}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0"></span>
              <span>{dict.b2b_hardware.exclusion_3}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* CTA Box for Hardware Manufacturers */}
      <div className="text-center p-8 rounded-2xl border border-slate-800 bg-slate-900/40 max-w-3xl mx-auto space-y-4">
        <h3 className="text-xl font-bold text-white">
          Vous développez un robot de table ou d&apos;accueil ?
        </h3>
        <p className="text-sm text-slate-300">
          Rejoignez notre programme de validation matérielle pour intégrer le protocole Entrelac dès les premières séries.
        </p>
        <Link
          href={`/${params.lang}/contact`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition"
        >
          <span>Prendre contact avec l&apos;équipe technique</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
