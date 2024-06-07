import style from "./style.module.scss";

export function Advertising() {
  return (
    <div className={style.card}>
      <div className={style.container} data-testid="advertising-container">
        <span className={style.text}>
          Publicidade
        </span>
      </div>
    </div>
  )
}