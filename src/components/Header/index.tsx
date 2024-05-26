import Link from "next/link";
import { ArrowIcon } from "../icons";
import style from "./style.module.scss";

type HeaderProps = {
  backButton?: boolean
}

export default function Header({ backButton }: HeaderProps) {
  return (
    <header className={style.header}>
      <nav>
        <span>
          SEVN NEWS
        </span>

        {backButton && (
          <Link href="/" className={style.link}>
            <ArrowIcon />
          </Link>
        )}
      </nav>
    </header>
  )
}