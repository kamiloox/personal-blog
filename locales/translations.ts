import commenPl from './pl/common.json';
import commonEn from './en/common.json';
import type { Locale } from '../types/types';

const polishTranslations = {
  common: commenPl,
};

type Translation = typeof polishTranslations;

const englishTranslations: Translation = {
  common: commonEn,
};

export const translations = {
  en: englishTranslations,
  pl: polishTranslations,
} as const;

export type Namespace = keyof Translation;

type FirstLevelDepthValue<N extends Namespace> = keyof Translation[N];

export const getTranslation = (lang: Locale, namespace: Namespace) => {
  return (value: FirstLevelDepthValue<typeof namespace>) => {
    return translations[lang][namespace][value];
  };
};
