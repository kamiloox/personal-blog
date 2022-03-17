import commenPl from './pl/common.json';
import aboutPl from './pl/about.json';
import errorPl from './pl/error.json';

import commonEn from './en/common.json';
import aboutEn from './en/about.json';
import errorEn from './en/error.json';

import type { Locale } from '../types/types';

const polishTranslations = {
  common: commenPl,
  about: aboutPl,
  error: errorPl,
} as const;

export type Translation = typeof polishTranslations;

const englishTranslations: Translation = {
  common: commonEn,
  about: aboutEn,
  error: errorEn,
} as const;

const translations = {
  en: englishTranslations,
  pl: polishTranslations,
} as const;

export type Namespace = keyof Translation;

export type FirstLevelDepthKey<N extends Namespace> = keyof Translation[N];

export const getTranslation = <N extends Namespace>(locale: Locale, namespace: N) => {
  return (key: FirstLevelDepthKey<N>) => {
    return translations[locale][namespace][key];
  };
};
