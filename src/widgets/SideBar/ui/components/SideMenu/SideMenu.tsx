import cn from 'classnames';
import './SideMenu.scss';

import { MyLogo } from '../../../../../shared/ui';
import { ProfileDrop } from '../../../../Header/ui/components/ProfileDrop/ProfileDrop';
import { useAppSelector } from '../../../../../shared/hooks/reduxHooks';
import { Link } from 'react-router-dom';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const SideMenu: React.FC<Props> = ({ isOpen, onClose }) => {
  const { location } = useAppSelector((state) => state.user);
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

      <div onClick={() => onClose()}>
        <ProfileDrop showDrop={true} />
      </div>

      <div className="SideMenu__buttons" onClick={() => onClose()}>
        <Link
          to="profile/add-event"
          className="SideMenu__buttons-item SideMenu__buttons-item--plus"
        >
          Створити подію
        </Link>

        <Link
          to="catalog"
          className="SideMenu__buttons-item SideMenu__buttons-item--calendar_black"
        >
          Календар події
        </Link>

        <button className="SideMenu__buttons-item SideMenu__buttons-item--search_dark">
          Пошук
        </button>
      </div>

      <button className="SideMenu__buttons-item SideMenu__buttons-item--location">
        {location}
      </button>
    </div>
  );
};
