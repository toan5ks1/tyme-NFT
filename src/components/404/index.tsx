'use client';

import { memo } from 'react';

import Link from 'next/link';

import { Button } from 'antd';
import { useTranslations } from 'next-intl';
import { Flexbox } from 'react-layout-kit';

import { MAX_WIDTH } from '@/const/layout';

const NotFound = memo(() => {
  const t = useTranslations('notFound');
  return (
    <Flexbox
      align={'center'}
      justify={'center'}
      style={{ minHeight: '100%', width: '100%' }}
    >
      <h1
        style={{
          filter: 'blur(8px)',
          fontSize: `min(${MAX_WIDTH / 3}px, 50vw)`,
          fontWeight: 'bolder',
          margin: 0,
          opacity: 0.12,
          position: 'absolute',
          zIndex: 0,
        }}
      >
        404
      </h1>
      <h2 style={{ fontWeight: 'bold', marginTop: '1em', textAlign: 'center' }}>
        {t('title')}
      </h2>
      <p style={{ lineHeight: '1.8', marginBottom: '2em' }}>
        {t('desc')}
        <br />
        <div style={{ textAlign: 'center' }}>{t('check')}</div>
      </p>
      <Link href="/">
        <Button type={'primary'}>{t('backHome')}</Button>
      </Link>
    </Flexbox>
  );
});

NotFound.displayName = 'NotFound';

export default NotFound;
