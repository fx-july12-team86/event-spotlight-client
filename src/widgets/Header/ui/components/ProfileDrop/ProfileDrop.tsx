import { useRef } from 'react';
import { Link } from 'react-router-dom';

import cn from 'classnames';
import './ProfileDrop.scss';

type Props = {
  showDrop?: boolean;
  setShowDrop?: (v: boolean) => void;
};

export const ProfileDrop: React.FC<Props> = ({
  showDrop,
  setShowDrop = () => {},
}) => {
  const profileRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={profileRef}
      className={cn('ProfileDrop', {
        'ProfileDrop--hidden': !showDrop,
      })}
    >
      <nav className="ProfileDrop__nav">
        <div
          className="ProfileDrop__nav-list"
          onClick={() => setShowDrop(false)}
        >
          <Link to="profile/settings" className="ProfileDrop__nav-link">
            <img src="icons/account_black.svg" alt="Мій профіль" />

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

          <Link to="profile/my-events" className="ProfileDrop__nav-link">
            <img
              src="icons/star_black.svg"
              alt="Мої події"
              height={18}
              width={18}
            />

            <p className="">Мої події</p>
          </Link>
        </div>

        <Link to="/" className="ProfileDrop__nav-link">
          <img src="icons/exit.svg" alt="Вийти" height={18} width={18} />

          <p className="ProfileDrop__btn">Вийти</p>
        </Link>
      </nav>
    </div>
  );
};
