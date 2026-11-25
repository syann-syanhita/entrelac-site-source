import React from "react";
import type { Locale } from "@/i18n";

interface PlaceholderBadgeProps {
  lang: Locale;
  label?: string;
}

export default function PlaceholderBadge({ lang, label }: PlaceholderBadgeProps) {
  const defaultLabels: Record<Locale, string> = {
    fr: "À venir",
    en: "Coming soon",
    ja: "近日公開",
  };

  const text = label || defaultLabels[lang] || "À venir";

  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
      {text}
    </span>
  );
}
