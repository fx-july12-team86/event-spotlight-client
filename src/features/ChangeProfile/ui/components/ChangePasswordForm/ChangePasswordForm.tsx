import { useState } from 'react';

import './ChangePasswordForm.scss';
import { validateField } from '../../../../../shared/helpers/validateFields';
import { ErrorType } from '../../../../../shared/types/errorTypes';
import { MyPasswordInput } from '../../../../../shared/ui/MyPasswordInput/MyPasswordInput';

export const ChangePasswordForm = () => {
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
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
      setErrors({ ...errors, password2: 'Паролі не співпадають' });

      return;
    }

    console.log({ password });
  }

  return (
    <form className="ChangePasswordForm" onSubmit={handleSubmit}>
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
