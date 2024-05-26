import { Category } from "@/domain";
import style from "./style.module.scss";

type CategoryText = {
  category: Category
}

export function CategoryText({ category }: CategoryText) {
  let color;

  switch (category?.code) {
    case "economia":
      color = style.economia
    break;

    case "educacao":
      color = style.educacao
    break;

    case "diversidades":
      color = style.diversidades
    break;

    default:
      color = style.default
  }

  return (
    <div>
      <span className={`${style.text} ${color}`}>
        {category.name}
      </span>
    </div>
  )
}