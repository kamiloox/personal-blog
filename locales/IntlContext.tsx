import { useRouter } from 'next/router';
import { createContext, ReactNode, useCallback, useContext, useMemo } from 'react';
import { FirstLevelDepthKey, getTranslation, Namespace, Translation } from './translations';
import { isLocale, setNonExpiredCookie } from '../utils/helpers';
import type { Locale } from '../types/types';

interface IntlContextValues {
  locale: Locale;
  locales: string[];
  toggleLanguage: () => void;
  t: <N extends Namespace>(
    namespace: N,
  ) => (key: FirstLevelDepthKey<N>) => Translation[N][typeof key];
}

const IntlContext = createContext<IntlContextValues | undefined>(undefined);

interface IntlProviderProps {
  children: ReactNode;
}

export const IntlProvider = ({ children }: IntlProviderProps) => {
  const router = useRouter();
  const { locales, defaultLocale } = router;

  const locale: Locale = isLocale(router.locale) ? router.locale : (defaultLocale as Locale);

  const toggleLanguage = useCallback(() => {
    const newLocale: Locale = locale === 'en' ? 'pl' : 'en';

    router.replace(router.asPath, router.asPath, { locale: newLocale });

    setNonExpiredCookie('NEXT_LOCALE', newLocale);
  }, [locale, router]);

  const t = useCallback(
    <N extends Namespace>(namespace: N) => {
      return getTranslation<N>(locale, namespace);
    },
    [locale],
  );

  const value = useMemo(
    () => ({ locale, locales: locales || [], toggleLanguage, t }),
    [locale, locales, toggleLanguage, t],
  );

  return <IntlContext.Provider value={value}>{children}</IntlContext.Provider>;
};

export const useIntl = <N extends Namespace>(namespace: N) => {
  const context = useContext(IntlContext);
  if (!context) {
    throw new Error('useIntl must be used within IntlProvider!');
  }

  return useMemo(() => ({ ...context, t: context.t(namespace) }), [context, namespace]);
};
