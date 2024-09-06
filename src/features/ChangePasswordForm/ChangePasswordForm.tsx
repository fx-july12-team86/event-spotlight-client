import { useState } from 'react';

import './ChangePasswordForm.scss';
import { ErrorType } from '../../shared/lib/types/errorTypes';
import { validateField } from '../../shared/lib/helpers/validateFields';
import { MyPasswordInput } from '../../shared/ui';
import { useLocation } from 'react-router-dom';

export const ChangePasswordForm = () => {
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState<ErrorType>({});
  const { pathname } = useLocation();

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
      setErrors({ ...errors, password2: 'Паролі не співпадають' });

      return;
    }

    console.log({ password });
  }

  return (
    <form className="ChangePasswordForm" onSubmit={handleSubmit}>
      {pathname !== '/profile/settings' && (
        <h2 className="ChangePasswordForm__title">Змінити пароль</h2>
      )}

      <MyPasswordInput
        handleSetPassword={handleSetPassword}
        errors={errors}
        password={password}
        validate={validate}
        title="Новий пароль"
      />

      <MyPasswordInput
        handleSetPassword={handleSetPassword2}
        errors={errors}
        password={password2}
        validate={validate}
        title="Повторіть пароль"
        id="second"
      />

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
