import { useAppSelector } from '../../../shared/hooks/reduxHooks';
import { MyButton, MyLocation, MyLogo } from '../../../shared/ui';
import { HeaderSearch } from './components/HeaderSearch/HeaderSearch';
import './Header.scss';

export const Header = () => {
  const { location } = useAppSelector((state) => state.user);

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
              />

              <img
                src="icons/profile.svg"
                alt="profile"
                className="Header__icon"
              />

              <div className="Header__addBtn">
                <MyButton icon={true}>Додати івент</MyButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="Header__item"></div>
      </div>
    </header>
  );
};
