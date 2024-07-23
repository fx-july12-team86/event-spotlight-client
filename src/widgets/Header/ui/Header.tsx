import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../shared/hooks/reduxHooks';
import { MyButton, MyLocation, MyLogo } from '../../../shared/ui';
import { HeaderNavList } from './components/HeaderNavList/HeaderNavList';
import { HeaderSearch } from './components/HeaderSearch/HeaderSearch';
import './Header.scss';

export const Header = () => {
  const { location } = useAppSelector((state) => state.user);
  const { pathname } = useLocation();

  return (
    <header className="Header">
      <div className="Header__item Header__item--top">
        <div className="container">
          <div className="Header__top-content">
            <div className="Header__controls Header__controls--left">
              <MyLogo />

              <MyLocation city={location} />
            </div>

            <HeaderSearch />

            <div className="Header__controls">
              <img
                src="icons/calendar.svg"
                alt="calendar"
                className="Header__icon"
                height={64}
                width={64}
              />

              <img
                height={64}
                width={64}
                src="icons/account.svg"
                alt="account"
                className="Header__icon"
              />

              <div className="Header__addBtn">
                <MyButton>Додати подію</MyButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {pathname === '/' && (
        <div className="Header__item">
          <div className="container">
            <nav className="Header__nav">
              <HeaderNavList />

              <div className="Header__nav-other">Інше</div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
