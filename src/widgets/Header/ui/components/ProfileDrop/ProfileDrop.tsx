import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import cn from 'classnames';
import './ProfileDrop.scss';
import { MyDialog } from '../../../../../shared/ui';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../shared/hooks/reduxHooks';
import { LoginForm } from '../../../../../features/Login';
import { RegistrationForm } from '../../../../../features/Registration';
import { userActions } from '../../../../../entities/User';
import { ResetPasswordForm } from '../../../../../features/ResetPasswordForm';
import localStorageServise from '../../../../../shared/servises/localStorage.servise';
import { ACCESS_TOKEN } from '../../../../../shared/consts/common';

type Props = {
  showDrop?: boolean;
  setShowDrop?: (v: boolean) => void;
};

export const ProfileDrop: React.FC<Props> = ({
  showDrop,
  setShowDrop = () => {},
}) => {
  const { user } = useAppSelector((state) => state.user);
  const profileRef = useRef<HTMLDivElement>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [formType, setFormType] = useState('login');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleShowDialog() {
    if (user?.token) {
      dispatch(userActions.setUser(null));
      localStorageServise.remove(ACCESS_TOKEN);
      setShowDrop(false);
      navigate('/');
      setFormType('login');

      return;
    }

    setShowDialog(!showDialog);
    setShowDrop(false);
    setFormType('login');
  }

  return (
    <div
      ref={profileRef}
      className={cn('ProfileDrop', {
        'ProfileDrop--hidden': !showDrop,
      })}
    >
      <nav className="ProfileDrop__nav">
        {user?.token && (
          <div
            className="ProfileDrop__nav-list"
            onClick={() => setShowDrop(false)}
          >
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
        )}

        <div className="ProfileDrop__nav-link" onClick={handleShowDialog}>
          <img src="icons/exit.svg" alt="Вийти" height={18} width={18} />

          <p className="ProfileDrop__btn">{user?.token ? 'Вийти' : 'Увійти'}</p>
        </div>
      </nav>

      {showDialog && formType === 'login' && (
        <MyDialog onClose={setShowDialog}>
          <LoginForm setFormType={setFormType} />
        </MyDialog>
      )}

      {showDialog && formType === 'reg' && (
        <MyDialog onClose={setShowDialog}>
          <RegistrationForm setFormType={setFormType} />
        </MyDialog>
      )}

      {showDialog && formType === 'password' && (
        <MyDialog onClose={setShowDialog}>
          <ResetPasswordForm />
        </MyDialog>
      )}
    </div>
  );
};
