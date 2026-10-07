export const locales = ['en', 'tr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const localeNames: Record<Locale, string> = { en: 'English', tr: 'Türkçe' };
export const ogLocales: Record<Locale, string> = { en: 'en_US', tr: 'tr_TR' };

/** Prefix an internal path with the locale: href('tr', '/projects') -> '/tr/projects' */
export const href = (locale: Locale, path = '/') =>
  `/${locale}${path === '/' ? '' : path}`;
