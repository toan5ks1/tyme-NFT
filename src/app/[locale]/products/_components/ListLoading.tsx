'use client';

import { memo } from 'react';

import { Skeleton } from 'antd';
import { Flexbox } from 'react-layout-kit';

import GridLoadingCard from './GridLoadingCard';

const ListLoading = memo(() => {
  return (
    <Flexbox gap={16}>
      <Flexbox justify={'center'} style={{ minHeight: 62 }}>
        <Skeleton.Button active style={{ minWidth: 150 }} />
      </Flexbox>
      <GridLoadingCard banner />
      <Flexbox justify={'center'} style={{ minHeight: 62 }}>
        <Skeleton.Button active style={{ minWidth: 150 }} />
      </Flexbox>
      <GridLoadingCard />
    </Flexbox>
  );
});

ListLoading.displayName = 'ListLoading';

export const ListLoadingWithoutBanner = memo<{ banner?: boolean }>(() => {
  return (
    <Flexbox gap={16}>
      <Flexbox justify={'center'} style={{ minHeight: 62 }}>
        <Skeleton.Button active style={{ minWidth: 150 }} />
      </Flexbox>
      <GridLoadingCard count={16} />
    </Flexbox>
  );
});

ListLoadingWithoutBanner.displayName = 'ListLoadingWithoutBanner';

export const ProviderListLoading = memo<{ banner?: boolean }>(() => {
  return (
    <Flexbox gap={16}>
      <Flexbox justify={'center'} style={{ minHeight: 62 }}>
        <Skeleton.Button active style={{ minWidth: 150 }} />
      </Flexbox>
      <GridLoadingCard count={6} rows={1} />
    </Flexbox>
  );
});

ProviderListLoading.displayName = 'ProviderListLoading';

export const HomeLoading = memo<{ banner?: boolean }>(() => {
  return (
    <Flexbox gap={16}>
      <Flexbox justify={'center'} style={{ minHeight: 62 }}>
        <Skeleton.Button active style={{ minWidth: 150 }} />
      </Flexbox>
      <GridLoadingCard banner />
      <GridLoadingCard />
      <Flexbox justify={'center'} style={{ minHeight: 62 }}>
        <Skeleton.Button active style={{ minWidth: 150 }} />
      </Flexbox>
      <GridLoadingCard />
      <Flexbox justify={'center'} style={{ minHeight: 62 }}>
        <Skeleton.Button active style={{ minWidth: 150 }} />
      </Flexbox>
      <GridLoadingCard />
    </Flexbox>
  );
});

HomeLoading.displayName = 'HomeLoading';

export default ListLoading;
