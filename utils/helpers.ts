import { z } from 'zod';
import cookie from 'js-cookie';
import type { Locale } from '../types/types';

export const parseParam = (param: string | string[]) => z.string().parse(param);

export const setNonExpiredCookie = (name: string, value: string) => {
  const infiniteDate = new Date('Fri, 31 Dec 9999 23:59:59 GMT');
  cookie.set(name, value, { expires: infiniteDate });
};

export const isLocale = (locale: string | undefined): locale is Locale => {
  if (locale && (locale === 'en' || locale === 'pl')) {
    return true;
  }
  return false;
};
