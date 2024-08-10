import { useState } from 'react';
import { isEmail } from 'validator';
import cn from 'classnames';

import './RegistrationForm.scss';
import { MyPasswordInput } from '../../../shared/ui';
import { ErrorType } from '../../../shared/types/errorTypes';
import { validateField } from '../../../shared/helpers/validateFields';
import { ERROR_MESSAGE } from '../../../shared/consts/errorMessage';

type Props = {
  handleOnClose?: () => void;
};

export const RegistrationForm: React.FC<Props> = ({ handleOnClose }) => {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<ErrorType>({});

  const isFormValid = !errors.email && !errors.login && !errors.password;

  function handleSetPassword(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (value.length > 4) {
      setErrors({ ...errors, password: '' });
    }

    setPassword(value);
  }

  function handleSetLogin(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (value.length > 55) {
      setErrors({ ...errors, login: ERROR_MESSAGE.MAX_LENGTH });
    } else {
      setErrors({ ...errors, login: '' });
      setLogin(value);
    }
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

    if (!login || errors.login) {
      errors.login = ERROR_MESSAGE.WRONG_LOGIN;
    }

    setErrors(errors);

    if (!Object.keys(errors).length) {
      console.log({ login, email });

      handleOnClose && handleOnClose();
    }
  }

  return (
    <form
      className="RegistrationForm"
      onSubmit={handleSubmit}
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="RegistrationForm__title">реєстрація</h2>

      <div className="RegistrationForm__input">
        <p className="RegistrationForm__input-label">E-mail</p>

        <input
          type="email"
          placeholder="myemail@gmail.com"
          className="RegistrationForm__input-field"
          onChange={handleSetEmail}
          value={email}
        />

        <p className="RegistrationForm__input-field--error">{errors.email}</p>
      </div>

      <div className="RegistrationForm__input">
        <p className="RegistrationForm__input-label">
          Ваше ім’я / нік / псевдонім
        </p>

        <input
          type="text"
          placeholder="Аліса Ло"
          className="RegistrationForm__input-field"
          onChange={handleSetLogin}
          value={login}
        />

        <p className="RegistrationForm__input-field--error">{errors.login}</p>
      </div>

      <MyPasswordInput
        handleSetPassword={handleSetPassword}
        errors={errors}
        password={password}
        validate={validate}
        title="Пароль"
      />

      <button
        className={cn('RegistrationForm__btn', {
          'RegistrationForm__btn--disabled': !isFormValid,
        })}
        type="submit"
        disabled={!isFormValid}
      >
        Створити акаунт
      </button>
    </form>
  );
};
