import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

import {
  useAppDispatch,
  useAppSelector,
} from 'src/shared/lib/hooks/reduxHooks';
import * as sidebarAction from 'src/shared/store/sideBarReducer';

import { MyButton, MyLocation, MyLogo, MyDropIcon } from 'src/shared/ui';
import { HeaderNavList } from './components/HeaderNavList/HeaderNavList';
import { HeaderSearch } from './components/HeaderSearch/HeaderSearch';
import { ProfileDrop } from './components/ProfileDrop/ProfileDrop';
import { DateRangePicker } from 'src/widgets/DataRangePicker';
import { OtherCategory } from './components/OtherCategory/OtherCategory';

type Props = {};
export const Header: React.FC<Props> = () => {
  const { location, user } = useAppSelector((state) => state.user);
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

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
                onClick={() => {
                  dispatch(sidebarAction.setShowSitebar(true));
                }}
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

              <OtherCategory />
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
