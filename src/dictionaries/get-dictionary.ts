import "server-only";
import type { Locale } from "@/i18n";

const dictionaries = {
  fr: () => import("./fr.json").then((module) => module.default),
  en: () => import("./en.json").then((module) => module.default),
  ja: () => import("./ja.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  if (dictionaries[locale]) {
    return dictionaries[locale]();
  }
  return dictionaries.fr();
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
