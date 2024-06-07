'use client';

import {
  Advertising,
  Headlines,
  PageContent,
  SecondaryNews,
} from '@/components';
import useApi from '@/hooks/useApi.hook';
import { useEffect } from 'react';

export default function Home() {
  const { getHeadline, getSecondary, headline, secondary } = useApi();

  useEffect(() => {
    getHeadline();
    getSecondary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageContent>
      <Advertising />
      <Headlines headlines={headline.data} />
      <SecondaryNews news={secondary.data} />
    </PageContent>
  );
}
