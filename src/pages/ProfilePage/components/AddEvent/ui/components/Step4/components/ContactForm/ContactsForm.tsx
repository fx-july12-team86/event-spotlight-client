import cn from 'classnames';

import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../../../shared/hooks/reduxHooks';
import './ContactsForm.scss';
import { eventActions } from '../../../../../../../../../entities/Event';
import { useState } from 'react';
import { validateField } from '../../../../../../../../../shared/helpers/validateFields';
import { ErrorType } from '../../../../../../../../../shared/types/errorTypes';
import { EventState } from '../../../../../../../../../entities/Event/store/eventSlice';

export const ContactsForm = () => {
  const dispatch = useAppDispatch();
  const { phone, email, instagram, telegram, facebook } = useAppSelector(
    (state) => state.event
  );
  const [errors, setErrors] = useState<ErrorType>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(
      eventActions.updateProperty({
        field: e.target.id as keyof EventState,
        value: e.target.value,
      })
    );
  }

  function validate(e: React.FocusEvent<HTMLInputElement>) {
    validateField({ id: e.target.id, phone, email, errors, setErrors });
  }

  return (
    <form className="ContactsForm">
      <div className="ContactsForm__input ContactsForm__input--phone">
        <p className="ContactsForm__input-label">Номер телефону</p>

        <input
          type="number"
          id="phone"
          placeholder="+380990000000"
          value={phone || ''}
          onChange={handleChange}
          onBlur={validate}
          className={cn(
            'ContactsForm__input-field ContactsForm__input-field--icon',
            { 'ContactsForm__input-field--invalid': errors.phone }
          )}
        />

        <p className="ContactsForm__input-field--error">{errors.phone}</p>
      </div>

      <div className="ContactsForm__input ContactsForm__input--email">
        <p className="ContactsForm__input-label">E-mail</p>

        <input
          id="email"
          type="text"
          placeholder="myemail@gmail.com"
          value={email}
          onChange={handleChange}
          onBlur={validate}
          className={cn(
            'ContactsForm__input-field ContactsForm__input-field--icon',
            { 'ContactsForm__input-field--invalid': errors.email }
          )}
        />

        <p className="ContactsForm__input-field--error">{errors.email}</p>
      </div>

      <div className="ContactsForm__input ContactsForm__input--instagram">
        <p className="ContactsForm__input-label">Instagram</p>

        <input
          id="instagram"
          type="text"
          placeholder="@instagram"
          className="ContactsForm__input-field ContactsForm__input-field--icon"
          value={instagram}
          onChange={handleChange}
        />
      </div>

      <div className="ContactsForm__input ContactsForm__input--telegram">
        <p className="ContactsForm__input-label">Telegram</p>

        <input
          id="telegram"
          type="text"
          placeholder="@telegram"
          className="ContactsForm__input-field ContactsForm__input-field--icon"
          value={telegram}
          onChange={handleChange}
        />
      </div>

      <div className="ContactsForm__input ContactsForm__input--facebook">
        <p className="ContactsForm__input-label">Facebook</p>

        <input
          id="facebook"
          type="text"
          placeholder="facebook.com"
          className="ContactsForm__input-field ContactsForm__input-field--icon"
          value={facebook}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};
