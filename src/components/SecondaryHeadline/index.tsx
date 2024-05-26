import { NewsHeadline } from "@/domain";
import Image from "next/image";
import Link from "next/link";
import { CategoryText } from "../";
import style from "./style.module.scss";

type SecondaryHeadline = {
  key: number;
  headline: NewsHeadline;
}

export function SecondaryHeadline({ key, headline }: SecondaryHeadline) {
  return (
    <Link href={"/news/" + headline.id} key={key} className={style.container}>
      <div>
        <Image
          src={"http://localhost:3001" + headline.image}
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