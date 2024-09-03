import { Link, useLocation } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useAppSelector } from '../../../shared/hooks/reduxHooks';

import './Header.scss';
import { MyButton, MyLocation, MyLogo, MyDropIcon } from '../../../shared/ui';
import { HeaderNavList } from './components/HeaderNavList/HeaderNavList';
import { HeaderSearch } from './components/HeaderSearch/HeaderSearch';
import { useHideDrop } from '../../../shared/hooks/useHideDrop';
import { useGetHeight } from '../../../shared/hooks/useGetHeight';
import { ProfileDrop } from './components/ProfileDrop/ProfileDrop';
import { DateRangePicker } from '../../DataRangePicker';

const OTHER_CATEGORY = ['Вечірки', 'Театр', 'Кіно', 'Спорт', 'Конференції'];
type Props = {
  openSidebar: () => void;
};
export const Header: React.FC<Props> = ({ openSidebar }) => {
  const { location, user } = useAppSelector((state) => state.user);
  const { pathname } = useLocation();
  const [showOther, setShowOther] = useState(false);
  const [otherHeight, setOtherHeight] = useState(300);
  const otherList = useRef<HTMLDivElement | null>(null);
  const otherBtn = useRef<HTMLDivElement | null>(null);

  useGetHeight(otherList, setOtherHeight);
  useHideDrop(otherBtn, setShowOther);

  return (
    <header className="Header">
      <div className="Header__item Header__item--top">
        <div className="container">
          <div className="Header__top-content">
            <button className="Header__burger">
              <img
                src="icons/burger_white.svg"
                alt="бокове меню"
                width={24}
                height={24}
                onClick={() => openSidebar()}
              />
            </button>

            <div className="Header__controls Header__controls--left">
              <MyLogo />

              <div className="Header__location">
                <MyLocation city={location} />
              </div>
            </div>

            <HeaderSearch />

            <div className="Header__controls Header__controls--right">
              <MyDropIcon openedIcon="calendar_black" closedIcon="calendar">
                <DateRangePicker />
              </MyDropIcon>

              <MyDropIcon
                openedIcon="account_black"
                closedIcon="account"
                data-cy="profile_btn"
              >
                <ProfileDrop />
              </MyDropIcon>

              {user?.token && (
                <Link to="profile/add-event" className="Header__addBtn">
                  <MyButton>Додати подію</MyButton>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {pathname === '/' && (
        <div className="Header__item">
          <div className="container">
            <nav className="Header__nav">
              <HeaderNavList />

              <div className="Header__other">
                <div
                  ref={otherBtn}
                  className="Header__other-lable"
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

                  <div
                    className="Header__other-drop"
                    style={{
                      height: showOther ? `${otherHeight}px` : '0',
                    }}
                  >
                    <nav
                      ref={otherList}
                      className="Header__other-list"
                      style={{
                        transform: showOther
                          ? 'translateY(0)'
                          : 'translateY(-100%)',
                      }}
                    >
                      {OTHER_CATEGORY.map((cat) => (
                        <Link
                          to={`catalog?category=${cat}`}
                          className="Header__other-item"
                          key={cat}
                        >
                          {cat}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
