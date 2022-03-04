import { useRouter } from 'next/router';
import { createContext, ReactNode, useCallback, useContext, useMemo } from 'react';
import { useLocalStorage } from '../components/shared/hooks/useLocalStorage';
import { Namespace, getTranslation } from './translations';
import type { Locale } from '../types/types';

const isLocale = (locale: string | undefined): locale is Locale => {
  if (locale && (locale === 'en' || locale === 'pl')) {
    return true;
  }
  return false;
};

interface IntlContextValues {
  locale: Locale;
  locales: string[];
  toggleLanguage: () => void;
  t: (namespace: Namespace) => ReturnType<typeof getTranslation>;
}

const IntlContext = createContext<IntlContextValues | undefined>(undefined);

interface IntlProviderProps {
  children: ReactNode;
}

export const IntlProvider = ({ children }: IntlProviderProps) => {
  const router = useRouter();

  const initialLocale = isLocale(router.locale) ? router.locale : 'en';
  const [locale, setLocale] = useLocalStorage<Locale>('locale', initialLocale);

  const { locales } = router;

  const toggleLanguage = useCallback(() => {
    const newLocale: Locale = locale === 'en' ? 'pl' : 'en';
    setLocale(newLocale);
  }, [locale, setLocale]);

  const t = useCallback(
    (namespace: Namespace) => {
      return getTranslation(locale, namespace);
    },
    [locale],
  );

  const value = useMemo(
    () => ({ locale, locales: locales || [], toggleLanguage, t }),
    [locale, locales, toggleLanguage, t],
  );

  return <IntlContext.Provider value={value}>{children}</IntlContext.Provider>;
};

export const useIntl = (namespace: Namespace) => {
  const context = useContext(IntlContext);
  if (!context) {
    throw new Error('useIntl must be used within IntlProvider!');
  }

  return useMemo(() => ({ ...context, t: context.t(namespace) }), [context, namespace]);
};
