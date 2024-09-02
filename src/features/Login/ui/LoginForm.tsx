import { useState } from 'react';
import { isEmail } from 'validator';
import cn from 'classnames';

import './LoginForm.scss';
import { MyLoader, MyPasswordInput } from '../../../shared/ui';
import { ErrorType } from '../../../shared/types/errorTypes';
import { validateField } from '../../../shared/helpers/validateFields';
import { ERROR_MESSAGE } from '../../../shared/consts/errorMessage';
import { userActions, userApi } from '../../../entities/User';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../shared/hooks/reduxHooks';
import localStorageServise from '../../../shared/servises/localStorage.servise';

type Props = {
  handleOnClose?: () => void;
  setFormType?: (v: string) => void;
};

export const LoginForm: React.FC<Props> = ({
  handleOnClose,
  setFormType = () => {},
}) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<ErrorType>({});
  const [loaging, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const isFormValid = !errors.email && !errors.password;

  function handleSetPassword(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (value.length > 4) {
      setErrors({ ...errors, password: '' });
    }

    setPassword(value);
  }

  function handleSetEmail(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (isEmail(value)) {
      setErrors({ ...errors, email: '' });
    }

    setEmail(value);
  }

  function validate(e: React.FocusEvent<HTMLInputElement>) {
    validateField({ id: e.target.id, password, errors, setErrors });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errors: ErrorType = {};

    if (!password || password.length < 4) {
      errors.password = ERROR_MESSAGE.WEAK_PASSWORD;
    }

    if (!email || !isEmail(email)) {
      errors.email = ERROR_MESSAGE.WRONG_EMAIL;
    }

    setErrors(errors);

    if (!Object.keys(errors).length) {
      setLoading(true);
      debugger;
      userApi
        .login({ password, email })
        .then((res) => {
          dispatch(userActions.setUser(res));
          localStorageServise.set('accessToken', res.token);
          handleOnClose && handleOnClose();
        })
        .catch((err) => setLoginError(err.message))
        .finally(() => {
          setLoading(false);
          console.log(user);
        });
    }
  }

  return (
    <form
      className="LoginForm"
      onSubmit={handleSubmit}
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="LoginForm__title">Вхід</h2>

      <div className="LoginForm__input">
        <p className="LoginForm__input-label">E-mail</p>

        <input
          type="email"
          placeholder="myemail@gmail.com"
          className="LoginForm__input-field"
          onChange={handleSetEmail}
          value={email}
          autoComplete="email"
        />

        <p className="LoginForm__input-field--error">{errors.email}</p>
      </div>

      <MyPasswordInput
        handleSetPassword={handleSetPassword}
        errors={errors}
        password={password}
        validate={validate}
        title="Пароль"
      />

      {loaging ? (
        <div className="LoginForm__loader">
          <MyLoader />
        </div>
      ) : (
        <button
          className={cn('LoginForm__btn', {
            'LoginForm__btn--disabled': !isFormValid,
          })}
          type="submit"
          disabled={!isFormValid}
        >
          Увійти
        </button>
      )}

      {loginError && (
        <p className="LoginForm__input-field--error">{loginError}</p>
      )}

      <div className="LoginForm__footer">
        {!user && (
          <p
            className="LoginForm__footer-text"
            onClick={() => setFormType('password')}
          >
            Не пам’ятаю пароль
          </p>
        )}

        <p className="LoginForm__footer-text">/</p>

        <p
          className="LoginForm__footer-text"
          onClick={() => setFormType('reg')}
          data-cy="registration"
        >
          Реєстрація
        </p>
      </div>
    </form>
  );
};
