import { type Locales, defaultLocale } from '@/locale';
import { ProductStore } from '@/server/modules/products';
import { DiscoverProductItem, ProductCategory } from '@/types/discover';

const revalidate: number = 3600;

export class DiscoverService {
  productStore = new ProductStore();

  // Products
  searchProduct = async (
    locale: Locales,
    keywords: string,
  ): Promise<DiscoverProductItem[]> => {
    const list = await this.getProductList(locale);
    return list.filter((item) => {
      return [
        item.author,
        item.meta.title,
        item.meta.description,
        item.meta?.tags,
      ]
        .flat()
        .filter(Boolean)
        .join(',')
        .toLowerCase()
        .includes(decodeURIComponent(keywords).toLowerCase());
    });
  };

  getProductCategory = async (
    locale: Locales,
    category: ProductCategory,
  ): Promise<DiscoverProductItem[]> => {
    const list = await this.getProductList(locale);
    return list.filter((item) => item.meta.category === category);
  };

  getProductList = async (locale: Locales): Promise<DiscoverProductItem[]> => {
    let res = await fetch(this.productStore.getAgentIndexUrl(locale), {
      next: { revalidate },
    });

    if (!res.ok) {
      res = await fetch(this.productStore.getAgentIndexUrl(defaultLocale), {
        next: { revalidate },
      });
    }

    if (!res.ok) return [];

    const json = await res.json();

    return json.agents;
  };
}
