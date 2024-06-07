import { Category } from '@/domain';
import style from './style.module.scss';

type CategoryText = {
  category: Category;
};

export function CategoryText({ category }: CategoryText) {
  return (
    <div>
      <span className={`${style.text} ${style[category?.code]}`}>
        {category.name}
      </span>
    </div>
  );
}
