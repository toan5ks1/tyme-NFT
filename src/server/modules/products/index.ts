import urlJoin from 'url-join';

import {
  Locales,
  defaultLocale,
  isLocaleNotSupport,
  normalizeLocale,
} from '@/locale';

export class ProductStore {
  private readonly baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || 'https://chat-agents.lobehub.com';
  }

  getAgentIndexUrl = (lang: Locales = defaultLocale) => {
    if (isLocaleNotSupport(lang)) return this.baseUrl;

    return urlJoin(this.baseUrl, `index.${normalizeLocale(lang)}.json`);
  };

  getAgentUrl = (identifier: string, lang: Locales = defaultLocale) => {
    if (isLocaleNotSupport(lang))
      return urlJoin(this.baseUrl, `${identifier}.json`);

    return urlJoin(this.baseUrl, `${identifier}.${normalizeLocale(lang)}.json`);
  };
}
