'use client';

import { ElementType, createElement, forwardRef, useMemo } from 'react';

import { ImageProps } from 'antd';

import { ImgProps } from '@/types';

const createContainer = (as: ElementType) =>
  // eslint-disable-next-line react/display-name
  forwardRef((props: any, ref) => createElement(as, { ...props, ref }));

const Img = forwardRef<any, ImgProps & ImageProps & { unoptimized?: boolean }>(
  ({ unoptimized, ...res }, ref) => {
    const render = 'img';

    const ImgContainer = useMemo(() => createContainer(render), [render]);

    return <ImgContainer ref={ref} {...res} />;
  },
);

Img.displayName = 'Img';

export default Img;
