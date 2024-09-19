import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import cls from './OtherCategoryDrop.module.scss';

import { useGetHeight } from 'src/shared/lib/hooks/useGetHeight';
const OTHER_CATEGORY = ['Вечірки', 'Театр', 'Кіно', 'Спорт', 'Конференції'];

type Props = {
  showOther: boolean;
};

export const OtherCategoryDrop: React.FC<Props> = ({ showOther }) => {
  const [otherHeight, setOtherHeight] = useState(300);
  const otherList = useRef<HTMLDivElement | null>(null);

  useGetHeight(otherList, setOtherHeight);

  return (
    <div
      className={cls.otherCategoryDrop}
      style={{
        height: showOther ? `${otherHeight}px` : '0',
      }}
    >
      <nav
        ref={otherList}
        className={cls.list}
        style={{
          transform: showOther ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        {OTHER_CATEGORY.map((cat) => (
          <Link to={`catalog?category=${cat}`} className={cls.item} key={cat}>
            {cat}
          </Link>
        ))}
      </nav>
    </div>
  );
};
