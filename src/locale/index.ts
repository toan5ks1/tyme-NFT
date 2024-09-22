import { Locale } from 'antd/lib/locale';
import en_US from 'antd/locale/en_US';
import vi_VN from 'antd/locale/vi_VN';

export const languages = {
  'vi-VN': {
    name: 'Vietnam',
    flag: '🇻🇳',
    unicode: '1f1e8-1f1f3',
    antd: vi_VN,
  },
  'en-US': { name: 'English', flag: '🇺🇸', unicode: '1f1fa-1f1f8', antd: en_US },
};

export const supportLocales = Object.keys(languages);

export type ILanguage = {
  [K in keyof typeof languages]: {
    name: string;
    flag: string;
    unicode: string;
    antd: Locale;
  };
};

export const defaultLocale: keyof typeof languages = 'en-US';

export type Locales = keyof typeof languages;

export const normalizeLocale = (locale?: string): string => {
  if (!locale) return 'en-US';

  if (locale.startsWith('cn')) return 'vi-VN';

  for (const l of supportLocales) {
    if (l.startsWith(locale)) {
      return l;
    }
  }

  return 'en-US';
};

/**
 * Check if the language is supported
 * @param locale
 */
export const isLocaleNotSupport = (locale: string) => {
  return (
    normalizeLocale(locale) === defaultLocale ||
    !supportLocales.includes(locale)
  );
};
