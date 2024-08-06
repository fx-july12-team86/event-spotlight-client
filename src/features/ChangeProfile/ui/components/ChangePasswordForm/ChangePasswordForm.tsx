import { useState } from 'react';
import cn from 'classnames';

import './ChangePasswordForm.scss';
import { validateField } from '../../../../../shared/helpers/validateFields';
import { ErrorType } from '../../../../../shared/types/errorTypes';

export const ChangePasswordForm = () => {
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [password2, setPassword2] = useState('');
  const [isVisible2, setIsVisible2] = useState(true);

  const [errors, setErrors] = useState<ErrorType>({});

  function handleSetPassword(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (value.length > 4) {
      setErrors({});
    }

    setPassword(value);
  }

  function handleSetPassword2(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (password === value) {
      setErrors({});
    }

    setPassword2(value);
  }

  function validate(e: React.FocusEvent<HTMLInputElement>) {
    validateField({ id: e.target.id, password, errors, setErrors });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (password !== password2) {
      setErrors({ ...errors, password: 'Паролі не співпадають' });

      return;
    }

    console.log({ password });
  }

  return (
    <form className="ChangePasswordForm" onSubmit={handleSubmit}>
      <div className="ChangePasswordForm__input">
        <p className="ChangePasswordForm__input-label">Новий пароль</p>

        <input
          id="password"
          type={isVisible ? 'text' : 'password'}
          className={cn('ChangePasswordForm__input-field', {
            'ChangePasswordForm__input-field--invalid':
              errors.password === 'Слабкий пароль',
          })}
          placeholder="qwerdx123456"
          onChange={handleSetPassword}
          value={password}
          onBlur={validate}
        />

        <img
          src={isVisible ? 'icons/eye.svg' : 'icons/no_eye.svg'}
          alt="показати пароль"
          className="ChangePasswordForm__input-eye"
          width={24}
          height={24}
          onClick={() => setIsVisible(!isVisible)}
        />

        <p className="ChangePasswordForm__input-field--error">
          {errors.password === 'Слабкий пароль' && errors.password}
        </p>
      </div>

      <div className="ChangePasswordForm__input">
        <p className="ChangePasswordForm__input-label">Повторіть пароль</p>

        <input
          type={isVisible2 ? 'text' : 'password'}
          id="password"
          className={cn('ChangePasswordForm__input-field', {
            'ChangePasswordForm__input-field--invalid':
              errors.password === 'Паролі не співпадають',
          })}
          placeholder="qwerdx123456"
          onChange={handleSetPassword2}
        />

        <img
          src={isVisible2 ? 'icons/eye.svg' : 'icons/no_eye.svg'}
          alt="показати пароль"
          className="ChangePasswordForm__input-eye"
          width={24}
          height={24}
          onClick={() => setIsVisible2(!isVisible2)}
        />

        <p className="ChangePasswordForm__input-field--error">
          {errors.password === 'Паролі не співпадають' && errors.password}
        </p>
      </div>

      <button
        className="ChangePasswordForm__btn"
        disabled={!!errors.password}
        type="submit"
      >
        Зберегти
      </button>
    </form>
  );
};
