import { Link } from 'react-router-dom';
import cn from 'classnames';
import './SideMenu.scss';

import { MyLogo } from '../../../../../shared/ui';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../shared/hooks/reduxHooks';
import { dialogAction } from '../../../../../shared/ui/MyDialog';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const SideMenu: React.FC<Props> = ({ isOpen, onClose }) => {
  const { location, user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

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
        <div className="SideMenu__buttons" onClick={() => onClose()}>
          {user ? (
            <nav className="ProfileDrop__nav">
              {user && (
                <div className="ProfileDrop__nav-list">
                  <Link to="profile/settings" className="ProfileDrop__nav-link">
                    <img
                      src="icons/account_black.svg"
                      alt="Мій профіль"
                      height={18}
                      width={18}
                    />

                    <p className="">Мій профіль</p>
                  </Link>

                  <Link to="profile/favorite" className="ProfileDrop__nav-link">
                    <img
                      src="icons/heart_black.svg"
                      alt="Улюблене"
                      height={18}
                      width={18}
                    />

                    <p>Улюблене</p>
                  </Link>

                  <Link
                    to="profile/my-events"
                    className="ProfileDrop__nav-link"
                  >
                    <img
                      src="icons/star_black.svg"
                      alt="Мої події"
                      height={18}
                      width={18}
                    />

                    <p className="">Мої події</p>
                  </Link>
                </div>
              )}

              <div className="ProfileDrop__nav-link" onClick={() => {}}>
                <img src="icons/exit.svg" alt="Вийти" height={18} width={18} />

                <p className="ProfileDrop__btn">Вийти</p>
              </div>
            </nav>
          ) : (
            <button
              className="SideMenu__buttons-item SideMenu__buttons-item--exit"
              onClick={() => dispatch(dialogAction.setShowDialog(true))}
            >
              Увійти
            </button>
          )}
        </div>
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

      <div className="SideMenu__buttons" onClick={() => onClose()}>
        <Link to="" className="SideMenu__buttons-item">
          Концерти
        </Link>

        <Link to="" className="SideMenu__buttons-item">
          Майстер-класи
        </Link>

        <Link to="" className="SideMenu__buttons-item">
          Виставки
        </Link>

        <Link to="" className="SideMenu__buttons-item">
          Фестивалі
        </Link>

        <Link to="" className="SideMenu__buttons-item">
          Для дітей
        </Link>

        <Link to="" className="SideMenu__buttons-item">
          Усі події
        </Link>
      </div>

      <button className="SideMenu__buttons-item SideMenu__buttons-item--location">
        {location}
      </button>
    </div>
  );
};
