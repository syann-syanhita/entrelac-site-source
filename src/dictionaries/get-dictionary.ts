import "server-only";
import type { Locale } from "@/i18n";
import { notFound } from "next/navigation";

const dictionaries = {
  fr: () => import("./fr.json").then((module) => module.default),
  en: () => import("./en.json").then((module) => module.default),
  ja: () => import("./ja.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  if (locale === "fr" || locale === "en" || locale === "ja") {
    return dictionaries[locale]();
  }
  notFound();
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;