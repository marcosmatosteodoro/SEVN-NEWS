import { NewsHeadline } from "@/domain";
import { CategoryText } from "../CategoryText";
import style from "./style.module.scss";

type HeadlineProps = {
  headline: NewsHeadline
}

export function Headline({ headline }: HeadlineProps) {
  return (
    <div className={style.container}>
      <CategoryText category={headline.category}/>

      <div>
        <h1 className={style.title}>
          {headline.title}
        </h1>
      </div>
    </div>
  )
}