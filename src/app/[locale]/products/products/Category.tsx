'use client';

import { memo, useMemo } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import urlJoin from 'url-join';

import { useQueryRoute } from '@/hooks/useQueryRoute';
import { ProductCategory } from '@/types/discover';

import CategoryMenu from '../_components/CategoryMenu';
import { useCategory } from './useCategory';

const Category = memo(() => {
  const items = useCategory();
  const pathname = usePathname();
  const selectedKey = useMemo(() => {
    if (pathname.includes('/discover/assistants/')) {
      return pathname.split('/')[3]?.split('?')[0];
    }
    return 'all';
  }, [pathname]);
  const router = useQueryRoute();

  return (
    <CategoryMenu
      items={items.map((item: any) => ({
        ...item,
        label: (
          <Link
            href={urlJoin(
              '/discover/assistants',
              item.key === ProductCategory.All ? '' : item.key,
            )}
          >
            {item.label}
          </Link>
        ),
      }))}
      onSelect={({ key }) => {
        router.push(
          urlJoin(
            '/discover/assistants',
            key === ProductCategory.All ? '' : key,
          ),
        );
      }}
      selectedKeys={[selectedKey || 'all']}
    />
  );
});

Category.displayName = 'Category';

export default Category;
