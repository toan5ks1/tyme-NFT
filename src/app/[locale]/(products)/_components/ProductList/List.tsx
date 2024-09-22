'use client';

import { memo, useMemo } from 'react';

import Link from 'next/link';

import { Empty } from 'antd';
import urlJoin from 'url-join';

import { DiscoverProductItem } from '@/types/discover';

import VirtuosoGridList from '../VirtuosoGridList';
import Card from './Card';

export interface ListProps {
  category?: string;
  items?: DiscoverProductItem[];
  mobile?: boolean;
  searchKeywords?: string;
}

const List = memo<ListProps>(
  ({ category, mobile, searchKeywords, items = [] }) => {
    const { all, last } = useMemo(() => {
      const recentLength = mobile ? 4 : 8;
      return {
        all: items,
        last: items.slice(recentLength),
      };
    }, [items, mobile]);

    if (searchKeywords) {
      if (!items || items?.length === 0)
        return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
      return (
        <>
          <VirtuosoGridList
            data={all}
            initialItemCount={24}
            itemContent={(_, item) => (
              <Link
                href={urlJoin('/discover/assistant/', item.identifier)}
                key={item.identifier}
              >
                <Card showCategory variant={'compact'} {...item} />
              </Link>
            )}
            style={{
              minHeight: '75vh',
            }}
          />
        </>
      );
    }

    return (
      <>
        {last && last?.length > 0 && (
          <VirtuosoGridList
            data={last}
            initialItemCount={12}
            itemContent={(_, item) => (
              <Link
                href={urlJoin('/discover/assistant/', item.identifier)}
                key={item.identifier}
              >
                <Card showCategory={!category} variant={'compact'} {...item} />
              </Link>
            )}
            style={{
              minHeight: '75vh',
            }}
          />
        )}
      </>
    );
  },
);

List.displayName = 'List';

export default List;
