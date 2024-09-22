'use client';

import { memo } from 'react';

import { ConfigProvider, Menu, MenuProps } from 'antd';
import { useTheme } from 'antd-style';

export const ICON_SIZE = { fontSize: '1.25em' };

const CategoryMenu = memo<MenuProps>(({ style, ...rest }) => {
  const theme = useTheme();

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemSelectedBg: theme.colorFillTertiary,
          },
        },
      }}
    >
      <Menu
        mode="inline"
        style={{
          background: 'transparent',
          border: 'none',
          fontSize: 16,
          overflowX: 'hidden',
          overflowY: 'auto',
          width: '100%',
          ...style,
        }}
        {...rest}
      />
    </ConfigProvider>
  );
});

CategoryMenu.displayName = 'CategoryMenu';

export default CategoryMenu;
