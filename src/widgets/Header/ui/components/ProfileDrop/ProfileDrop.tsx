import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import './ProfileDrop.scss';

import {
  useAppDispatch,
  useAppSelector,
} from 'src/shared/lib/hooks/reduxHooks';
import { userActions } from 'src/entities/User';

import { MyDialog, MySuccess } from 'src/shared/ui';
import { LoginForm } from 'src/features/Login';
import { RegistrationForm } from 'src/features/Registration';
import { ResetPasswordForm } from 'src/features/ResetPasswordForm';

import { ACCESS_TOKEN } from 'src/shared/lib/consts/common';
import { FormType } from 'src/shared/lib/types/formTypes';
import localStorageServise from 'src/shared/lib/servises/localStorage.servise';

type Props = {
  showDrop?: boolean;
  setShowDrop?: (v: boolean) => void;
};

export const ProfileDrop: React.FC<Props> = (props) => {
  const { showDrop, setShowDrop = () => {} } = props;
  const { user } = useAppSelector((state) => state.user);
  const [showDialog, setShowDialog] = useState(false);
  const [formType, setFormType] = useState<FormType>(FormType.LOGIN);
  const profileRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const FormComponents: Record<FormType, JSX.Element> = {
    [FormType.LOGIN]: <LoginForm setFormType={setFormType} />,
    [FormType.REGISTRATION]: <RegistrationForm setFormType={setFormType} />,
    [FormType.PASSWORD]: <ResetPasswordForm />,
    [FormType.SUCCESS]: (
      <MySuccess
        title="Вітаємо"
        text="Тепер ви будете перенаправлені на сторінку входу"
      />
    ),
  };

  const activeForm: JSX.Element = FormComponents[formType];

  function handleShowDialog() {
    if (user?.token) {
      dispatch(userActions.setUser(null));
      localStorageServise.remove(ACCESS_TOKEN);
      setShowDrop(false);
      navigate('/');
      setFormType(FormType.LOGIN);

      return;
    }

    setShowDialog(!showDialog);
    setShowDrop(false);
    setFormType(FormType.LOGIN);
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

      {showDialog && activeForm && (
        <MyDialog onClose={setShowDialog}>{activeForm}</MyDialog>
      )}
    </div>
  );
};
