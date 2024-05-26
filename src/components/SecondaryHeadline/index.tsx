import { NewsHeadline } from "@/domain";
import Image from "next/image";
import Link from "next/link";
import { CategoryText } from "../";
import style from "./style.module.scss";

type SecondaryHeadline = {
  headline: NewsHeadline;
  apiUrl: string;
}

export function SecondaryHeadline({ headline, apiUrl }: SecondaryHeadline) {
  return (
    <Link href={"/news/" + headline.id}  className={style.container}>
      <div className={style.imageDiv}>
        <Image
          src={apiUrl + headline.image}
          alt={headline.title}
          className={style.img}
          layout="responsive"
          width={500}
          height={300}
          />
      </div>

      <div>
        <CategoryText category={headline.category} />
        <h2 className={style.title}>{headline.title}</h2>
      </div>
    </Link>
  )
}