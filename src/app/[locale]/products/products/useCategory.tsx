import { useTheme } from 'antd-style';
import {
  BadgeDollarSignIcon,
  BriefcaseIcon,
  Coffee,
  GamepadIcon,
  GraduationCapIcon,
  ImageIcon,
  LanguagesIcon,
  LaughIcon,
  Layers,
  LayoutPanelTop,
  MicroscopeIcon,
  PencilIcon,
  PrinterIcon,
  TerminalSquareIcon,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

import Icon from '@/components/ui/Icon';
import { ProductCategory } from '@/types/discover';

import { ICON_SIZE } from '../_components/CategoryMenu';

export const useCategory = (fontsize?: number) => {
  const theme = useTheme();

  const t = useTranslations('category');

  const size = fontsize ? { fontSize: fontsize } : ICON_SIZE;

  return [
    {
      icon: (
        <Icon
          color={theme.colorTextSecondary}
          icon={LayoutPanelTop}
          size={size}
        />
      ),
      key: ProductCategory.All,
      label: t('all'),
    },
    {
      icon: (
        <Icon
          color={theme.colorTextSecondary}
          icon={MicroscopeIcon}
          size={size}
        />
      ),
      key: ProductCategory.Academic,
      label: t('academic'),
    },
    {
      icon: (
        <Icon
          color={theme.colorTextSecondary}
          icon={BriefcaseIcon}
          size={size}
        />
      ),
      key: ProductCategory.Career,
      label: t('career'),
    },
    {
      icon: (
        <Icon color={theme.colorTextSecondary} icon={PencilIcon} size={size} />
      ),
      key: ProductCategory.CopyWriting,
      label: t('copywriting'),
    },
    {
      icon: (
        <Icon color={theme.colorTextSecondary} icon={ImageIcon} size={size} />
      ),
      key: ProductCategory.Design,
      label: t('design'),
    },
    {
      icon: (
        <Icon
          color={theme.colorTextSecondary}
          icon={GraduationCapIcon}
          size={size}
        />
      ),
      key: ProductCategory.Education,
      label: t('education'),
    },
    {
      icon: (
        <Icon color={theme.colorTextSecondary} icon={LaughIcon} size={size} />
      ),
      key: ProductCategory.Emotions,
      label: t('emotions'),
    },
    {
      icon: (
        <Icon color={theme.colorTextSecondary} icon={GamepadIcon} size={size} />
      ),
      key: ProductCategory.Games,
      label: t('games'),
    },
    {
      icon: <Icon color={theme.colorTextSecondary} icon={Layers} size={size} />,
      key: ProductCategory.General,
      label: t('general'),
    },
    {
      icon: <Icon color={theme.colorTextSecondary} icon={Coffee} size={size} />,
      key: ProductCategory.Life,
      label: t('life'),
    },
    {
      icon: (
        <Icon
          color={theme.colorTextSecondary}
          icon={BadgeDollarSignIcon}
          size={size}
        />
      ),
      key: ProductCategory.Marketing,
      label: t('marketing'),
    },
    {
      icon: (
        <Icon color={theme.colorTextSecondary} icon={PrinterIcon} size={size} />
      ),
      key: ProductCategory.Office,
      label: t('office'),
    },
    {
      icon: (
        <Icon
          color={theme.colorTextSecondary}
          icon={TerminalSquareIcon}
          size={size}
        />
      ),
      key: ProductCategory.Programming,
      label: t('programming'),
    },
    {
      icon: (
        <Icon
          color={theme.colorTextSecondary}
          icon={LanguagesIcon}
          size={size}
        />
      ),
      key: ProductCategory.Translation,
      label: t('translation'),
    },
  ];
};

export const useCategoryItem = (key?: ProductCategory, fontsize?: number) => {
  const items = useCategory(fontsize);
  if (!key) return;
  return items.find((item) => item.key === key);
};
