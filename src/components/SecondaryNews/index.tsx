import { NewsSecondary } from "@/domain";
import Link from "next/link";
import style from "./style.module.scss";

type SecondaryNewsProps = {
  news: NewsSecondary[]
}

export function SecondaryNews({ news }: SecondaryNewsProps) {
  return (
    <div className={style.container}>
      {news?.length > 0 && news?.map((item, index) => (
        <Link href={"/noticia/" + item.id} key={index} className={style.content} data-testid={`news-${index}`}>
          <div className={`${style.hr} ${style[item.category.code]}`} data-testid="category"></div>
          <span className={style.text}>
            {item.title}
          </span>
        </Link>
      ))}
    </div>
  )
}