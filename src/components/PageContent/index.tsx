import React from 'react';
import { Header } from '../Header';
import style from './style.module.scss';

type PageContent = {
  children: React.ReactNode;
  backButton?: boolean;
};

export function PageContent({ children, backButton }: PageContent) {
  return (
    <div className={style.page}>
      <Header backButton={!!backButton} />

      <main className={style.main}>
        <div className={style.container}>{children}</div>
      </main>
    </div>
  );
}
