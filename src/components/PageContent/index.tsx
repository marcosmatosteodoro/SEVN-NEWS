import React from "react";
import { Header } from "../Header";
import style from "./style.module.scss";

type PageContent = {
  children: React.ReactNode
}

export function PageContent({ children }: PageContent) {
  return (
    <div className={style.page}>
      <Header />

      <main className={style.main}>
        <div className={style.container}>
          {children}
        </div>
      </main>
    </div>
  )
}