import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import cn from 'classnames';
import './ProfileDrop.scss';
import { MyDialog } from '../../../../../shared/ui';
import { RegistrationForm } from '../../../../../features/Registration';
import { createPortal } from 'react-dom';
import { useAppSelector } from '../../../../../shared/hooks/reduxHooks';
import { LoginForm } from '../../../../../features/Login';

type Props = {
  showDrop?: boolean;
  setShowDrop?: (v: boolean) => void;
};

export const ProfileDrop: React.FC<Props> = ({
  showDrop,
  setShowDrop = () => {},
}) => {
  const profileRef = useRef<HTMLDivElement>(null);
  const [showDialog, setShowDialog] = useState(false);
  const { user } = useAppSelector((state) => state.user);

  function handleShowDialog() {
    setShowDialog(!showDialog);
    setShowDrop(false);
  }

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

        <Link
          to="/"
          className="ProfileDrop__nav-link"
          onClick={handleShowDialog}
        >
          <img src="icons/exit.svg" alt="Вийти" height={18} width={18} />

          <p className="ProfileDrop__btn">{user ? 'Вийти' : 'Увійти'}</p>
        </Link>
      </nav>

      {showDialog &&
        createPortal(
          <MyDialog onClose={setShowDialog}>
            {user ? <LoginForm /> : <RegistrationForm />}
          </MyDialog>,
          document.body
        )}
    </div>
  );
};
