import Link from 'next/link';
import { ArrowIcon } from '../';
import style from './style.module.scss';

type HeaderProps = {
  backButton?: boolean;
};

export function Header({ backButton }: HeaderProps) {
  return (
    <header className={style.header}>
      <nav>
        <span>SEVN NEWS</span>

        {backButton && (
          <Link href="/" className={style.link} data-testid="back-button">
            <ArrowIcon />
          </Link>
        )}
      </nav>
    </header>
  );
}
