import { useMemo } from 'react';

import { useSearchParams } from 'next/navigation';

import qs from 'query-string';

export const useQuery = () => {
  const rawQuery = useSearchParams();
  return useMemo(() => qs.parse(rawQuery.toString()), [rawQuery]);
};
