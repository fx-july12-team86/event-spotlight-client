import cn from 'classnames';
import cls from './SideBarFilters.module.scss';

import {
  MyCheckbox,
  MyDropList,
  MyLocation,
  MyLogo,
  MySelect,
} from 'src/shared/ui';
import { THEME } from 'src/shared/lib/types/themesTypes';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const SideBarFilters: React.FC<Props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <div
      className={cn(cls.filters)}
      style={{ animationName: isOpen ? 'enter' : 'exit' }}
      onClick={(e) => e.stopPropagation()}
    >
      <header>
        <button className={cls.close} onClick={() => onClose()}>
          <img
            src="icons/close_black.svg"
            alt="закрити меню"
            width={16}
            height={16}
          />
        </button>

        <div className={cls.logo}>
          <MyLogo theme={THEME.DARK} />
        </div>
      </header>

      <main onClick={() => {}} className={cls.main}>
        <MyLocation theme={THEME.DARK} />

        <MyDropList title="Тип подіі">
          <MyCheckbox title="test" setter={() => {}} value={true} />
          <MyCheckbox title="test2" setter={() => {}} value={true} />
          <MyCheckbox title="test3" setter={() => {}} value={true} />
        </MyDropList>

        <MyDropList title="Дата">
          <MyCheckbox title="test" setter={() => {}} value={true} />
          <MyCheckbox title="test2" setter={() => {}} value={true} />
        </MyDropList>
      </main>
    </div>
  );
};
