'use client';

import { ReactNode, memo } from 'react';

import { Tag as AntTag, type TagProps as AntTagProps } from 'antd';
import { createStyles } from 'antd-style';
import { Flexbox } from 'react-layout-kit';

const useStyles = createStyles(({ cx, css, token }) => ({
  small: css`
    padding-block: 2px;
    padding-inline: 6px;
    line-height: 1;
  `,
  tag: cx(css`
    user-select: none;
    color: ${token.colorTextSecondary} !important;
    background: ${token.colorFillSecondary};
    border: ${token.borderRadius}px;

    &:hover {
      color: ${token.colorText};
      background: ${token.colorFill};
    }
  `),
}));

export interface TagProps extends AntTagProps {
  icon?: ReactNode;
  size?: 'default' | 'small';
}

const Tag = memo<TagProps>(({ icon, children, size = 'default', ...rest }) => {
  const { styles, cx } = useStyles();

  return (
    <AntTag
      bordered={false}
      className={cx(styles.tag, size === 'small' && styles.small)}
      {...rest}
    >
      <Flexbox align={'center'} gap={4} horizontal>
        {icon}
        {children}
      </Flexbox>
    </AntTag>
  );
});

Tag.displayName = 'Tag';

export default Tag;
