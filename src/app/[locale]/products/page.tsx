import { Metadata } from 'next/types';

import { Locales, defaultLocale } from '@/locale';
import { DiscoverService } from '@/server/services/discover';
import { isMobileDevice } from '@/utils/responsive';

import List from './products/List';

type Props = { searchParams: { hl?: Locales } };

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000' as string),
  title: 'NFT marketplace',
  description: 'Discover our best NFT',
};

const Page = async ({ searchParams }: Props) => {
  const mobile = isMobileDevice();

  const discoverService = new DiscoverService();
  const items = await discoverService.getProductList(
    searchParams.hl ?? defaultLocale,
  );

  return <List items={items} mobile={mobile} />;
};

Page.DisplayName = 'DiscoverProducts';

export default Page;
