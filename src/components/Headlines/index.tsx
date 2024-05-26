import { NewsHeadline } from "@/domain";
import { Headline } from "../Headline";
import { SecondaryHeadline } from "../SecondaryHeadline";
import style from "./style.module.scss";

type HeadlinesProps = {
  headlines: NewsHeadline[]
}

export function Headlines({ headlines }: HeadlinesProps) {
  return (
    <div className={style.container}>
      {headlines.length > 0 && (
        <>
          <Headline headline={headlines[0]}/>
          <div className={style.secondary}>
            {headlines.slice(1).map((headline, index) => (
              <SecondaryHeadline key={index} headline={headline} />
            ))}
          </div>
        </>
      )}

    </div>
  )
}