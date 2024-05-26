import { NewsSecondary } from "@/domain";
import Link from "next/link";
import style from "./style.module.scss";

type SecondaryNewsProps = {
  news: NewsSecondary[]
}

export function SecondaryNews({ news }: SecondaryNewsProps) {
  return (
    <div className={style.container}>
      {news.map((item, index) => (
        <Link href={"/news/" + item.id} key={index} className={style.content}>
          <div className={`${style.hr} ${style[item.category.code]}`}></div>
          <span className={style.text}>
            {item.title}
          </span>
        </Link>
      ))}
    </div>
  )
}