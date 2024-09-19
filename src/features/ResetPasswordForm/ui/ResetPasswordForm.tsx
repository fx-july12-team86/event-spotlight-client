import { useState } from 'react';
import { isEmail } from 'validator';
import cn from 'classnames';

import './ResetPasswordForm.scss';
import { MyLoader } from '../../../shared/ui';
import { ErrorType } from '../../../shared/lib/types/errorTypes';
import { ERROR_MESSAGE } from '../../../shared/lib/consts/errorMessage';

type Props = {
  handleOnClose?: () => void;
};

export const ResetPasswordForm: React.FC<Props> = ({ handleOnClose }) => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<ErrorType>({});
  const [loaging] = useState(false);

  const isFormValid = !errors.email && !errors.password;

  function handleSetEmail(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (isEmail(value)) {
      setErrors({ ...errors, email: '' });
    }

    setEmail(value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errors: ErrorType = {};

    if (!email || !isEmail(email)) {
      errors.email = ERROR_MESSAGE.WRONG_EMAIL;
    }

    setErrors(errors);

    if (!Object.keys(errors).length) {
      console.log(email);
      //add request
      handleOnClose && handleOnClose();
    }
  }

  return (
    <form
      className="LoginForm"
      onSubmit={handleSubmit}
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="LoginForm__title">Відновити пароль</h2>

      <div className="LoginForm__input">
        <p className="LoginForm__input-label">E-mail</p>

        <input
          type="text"
          placeholder="myemail@gmail.com"
          className="LoginForm__input-field"
          onChange={handleSetEmail}
          value={email}
        />

        <p className="LoginForm__input-field--error">{errors.email}</p>
      </div>

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
          Відновити
        </button>
      )}
    </form>
  );
};
