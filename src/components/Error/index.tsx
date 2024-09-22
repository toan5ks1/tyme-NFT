'use client';

import { memo } from 'react';

import Link from 'next/link';

import { Button } from 'antd';
import { useTranslations } from 'next-intl';
import { Flexbox } from 'react-layout-kit';

import { MAX_WIDTH } from '@/const/layout';

interface ErrorCaptureProps {
  reset: () => void;
}

const ErrorCapture = memo<ErrorCaptureProps>(({ reset }) => {
  const t = useTranslations('error');

  return (
    <Flexbox
      align={'center'}
      justify={'center'}
      style={{ minHeight: '100%', width: '100%' }}
    >
      <h1
        style={{
          filter: 'blur(8px)',
          fontSize: `min(${MAX_WIDTH / 6}px, 25vw)`,
          fontWeight: 900,
          margin: 0,
          opacity: 0.12,
          position: 'absolute',
          zIndex: 0,
        }}
      >
        ERROR
      </h1>
      <h2 style={{ fontWeight: 'bold', marginTop: '1em', textAlign: 'center' }}>
        {t('title')}
      </h2>
      <p style={{ marginBottom: '2em' }}>{t('desc')}</p>
      <Flexbox gap={12} horizontal style={{ marginBottom: '1em' }}>
        <Button onClick={() => reset()}>{t('retry')}</Button>
        <Link href="/">
          <Button type={'primary'}>{t('backHome')}</Button>
        </Link>
      </Flexbox>
    </Flexbox>
  );
});

ErrorCapture.displayName = 'ErrorCapture';

export default ErrorCapture;
