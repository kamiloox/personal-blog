import enHome from './en/home.json';
import plHome from './pl/home.json';
import type { Locale } from '../types/types';

const polishTranslations = {
  home: plHome,
};

type Translation = typeof polishTranslations;

const englishTranslations: Translation = {
  home: enHome,
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
