import { NewsHeadline } from "@/domain";
import Link from "next/link";
import { CategoryText } from "../CategoryText";
import style from "./style.module.scss";

type HeadlineProps = {
  headline: NewsHeadline
}

export function Headline({ headline }: HeadlineProps) {
  return (
    <Link href={"/news/" + headline.id} className={style.container}>
      <CategoryText category={headline.category}/>

      <div>
        <h1 className={style.title}>
          {headline.title}
        </h1>
      </div>
    </Link>
  )
}