import React from "react";
import style from "./style.module.scss";

type PageContent = {
  children: React.ReactNode
}

export function PageContent({ children }: PageContent) {
  return (
    <div className={style.page}>
      {children}
    </div>
  )
}