import { useState } from 'react';
import './ChangeProfileForm.scss';

export const ChangeProfileForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { errors, setErrors } = useState('');

  return (
    <form className="ChangeProfileForm">
      <div className="ChangeProfileForm__input">
        <p className="ChangeProfileForm__input-label">
          Ваше ім’я / нік / псевдонім
        </p>

        <input
          className="ChangeProfileForm__input-field"
          placeholder="Ваше ім’я / нік / псевдонім"
          onChange={(e) => setName(e.target.value)}
        />

        <p className="ChangeProfileForm__input-field--error">{}</p>
      </div>

      <div className="ChangeProfileForm__input">
        <p className="ChangeProfileForm__input-label">E-mail</p>

        <input
          className="ChangeProfileForm__input-field"
          placeholder="Ваше E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <p className="ChangeProfileForm__input-field--error">{}</p>
      </div>

      <button className="ChangeProfileForm__btn">Зберегти</button>
    </form>
  );
};
