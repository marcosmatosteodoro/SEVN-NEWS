import Link from "next/link";
import style from "./style.module.scss";

type PageErrorProps = {
  title: string;
  text: string;
}

export function PageError({ title, text }: PageErrorProps) {
  return (
    <div className={style.container}>
      <article>
        <h2>{title}</h2>

        <div>
          <p>{text}</p>
          <Link href="/">Clique aqui para voltar</Link>
        </div>

      </article>
    </div>
  )
}