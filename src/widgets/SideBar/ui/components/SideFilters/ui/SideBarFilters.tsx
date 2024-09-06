import cn from 'classnames';

import { MyLogo } from 'src/shared/ui';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const SideBarFilters: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <div
      className={cn('SideMenu')}
      style={{ animationName: isOpen ? 'enter' : 'exit' }}
      onClick={(e) => e.stopPropagation()}
    >
      <button className="SideMenu__close" onClick={() => onClose()}>
        <img
          src="icons/close_black.svg"
          alt="закрити меню"
          width={16}
          height={16}
        />
      </button>

      <div className="SideMenu__logo">
        <MyLogo theme="dark" />
      </div>

      <div
        onClick={() => {
          onClose();
        }}
      >
        <h1>filters</h1>
      </div>
    </div>
  );
};
