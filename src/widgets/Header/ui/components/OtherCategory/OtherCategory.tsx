import { useRef, useState } from 'react';
import cls from './OtherCategory.module.scss';

import { OtherCategoryDrop } from '../OtherCateroryDrop/OtherCategoryDrop';
import { useHideDrop } from 'src/shared/lib/hooks/useHideDrop';

export const OtherCategory = () => {
  const [showOther, setShowOther] = useState(false);
  const otherBtn = useRef<HTMLDivElement | null>(null);

  useHideDrop(otherBtn, setShowOther);

  return (
    <div className={cls.OtherCategory}>
      <div
        ref={otherBtn}
        className={cls.lable}
        onClick={() => setShowOther(!showOther)}
        style={{
          transition: 'box-shadow ease-in-out 500ms',
          boxShadow: showOther
            ? '-1px 0px 21px -6px rgba(0, 0, 0, 0.75)'
            : '-1px 0px 0px -6px rgba(0, 0, 0, 0.75)',
        }}
      >
        <p>Інше</p>

        <img src="icons/arrow-down.svg" alt="їнше" />

        <OtherCategoryDrop showOther={showOther} />
      </div>
    </div>
  );
};
