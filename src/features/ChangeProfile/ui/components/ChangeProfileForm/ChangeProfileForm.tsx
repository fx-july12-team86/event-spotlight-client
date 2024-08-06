import { useState } from 'react';
import cn from 'classnames';

import './ChangeProfileForm.scss';
import { validateField } from '../../../../../shared/helpers/validateFields';
import { ErrorType } from '../../../../../shared/types/errorTypes';

const NAME_MAX_LENGTH = 50;

export const ChangeProfileForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<ErrorType>({});

  function handleSetName(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (value.length < NAME_MAX_LENGTH) {
      setName(value);
    }
  }

  function validate(e: React.FocusEvent<HTMLInputElement>) {
    validateField({ id: e.target.id, email, errors, setErrors });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log({ name, email });
  }

  return (
    <form className="ChangeProfileForm" onSubmit={handleSubmit}>
      <div className="ChangeProfileForm__input">
        <p className="ChangeProfileForm__input-label">
          Ваше ім’я / нік / псевдонім
        </p>

        <input
          className="ChangeProfileForm__input-field"
          placeholder="Ваше ім’я / нік / псевдонім"
          onChange={handleSetName}
          value={name}
        />

        <p className="ChangeProfileForm__input-field--error">{}</p>
      </div>

      <div className="ChangeProfileForm__input">
        <p className="ChangeProfileForm__input-label">E-mail</p>

        <input
          id="email"
          className={cn('ChangeProfileForm__input-field', {
            'ChangeProfileForm__input-field--invalid': errors.email,
          })}
          placeholder="Ваше E-mail"
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validate}
        />

        <p className="ChangeProfileForm__input-field--error">{errors.email}</p>
      </div>

      <button
        className="ChangeProfileForm__btn"
        disabled={!!errors.email}
        type="submit"
      >
        Зберегти
      </button>
    </form>
  );
};
