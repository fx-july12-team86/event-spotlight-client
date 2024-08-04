import isEmail from 'validator/lib/isEmail';
import { isMobilePhone } from 'validator';
import cn from 'classnames';

import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../../../shared/hooks/reduxHooks';
import './ContactsForm.scss';
import { eventActions } from '../../../../../../../../../entities/Event';
import { useState } from 'react';

type ErrorType = {
  phone?: string;
  email?: string;
};

export const ContactsForm = () => {
  const { phone, email, instagram, telegram, facebook } = useAppSelector(
    (state) => state.event
  );
  const [errors, setErrors] = useState<ErrorType>({});
  const dispatch = useAppDispatch();

  function validateField(id: string) {
    switch (id) {
      case 'phone':
        if (phone && !isMobilePhone(phone?.toString(), 'uk-UA')) {
          setErrors({ ...errors, phone: 'Не дійсний телефон' });
        } else {
          setErrors({ ...errors, phone: '' });
        }
        break;

      case 'email':
        if (!email && isEmail(email)) {
          setErrors({ ...errors, email: 'Не дійсний еmail' });
        } else {
          setErrors({ ...errors, email: '' });
        }
        break;
    }
  }

  return (
    <form className="ContactsForm">
      <div className="ContactsForm__input ContactsForm__input--phone">
        <p className="ContactsForm__input-label">Номер телефону</p>

        <input
          type="number"
          placeholder="+380990000000"
          className={cn(
            'ContactsForm__input-field ContactsForm__input-field--icon',
            {
              'ContactsForm__input-field--invalid': errors.phone,
            }
          )}
          value={phone || ''}
          onChange={(e) =>
            dispatch(
              eventActions.updateProperty({
                field: 'phone',
                value: e.target.value,
              })
            )
          }
          onBlur={() => validateField('phone')}
        />

        <p className="ContactsForm__input-field--error">{errors.phone}</p>
      </div>

      <div className="ContactsForm__input ContactsForm__input--email">
        <p className="ContactsForm__input-label">E-mail</p>

        <input
          type="text"
          placeholder="myemail@gmail.com"
          className={cn(
            'ContactsForm__input-field ContactsForm__input-field--icon',
            {
              'ContactsForm__input-field--invalid': errors.email,
            }
          )}
          value={email}
          onBlur={() => validateField('email')}
          onChange={(e) =>
            dispatch(
              eventActions.updateProperty({
                field: 'email',
                value: e.target.value,
              })
            )
          }
        />

        <p className="ContactsForm__input-field--error">{errors.email}</p>
      </div>

      <div className="ContactsForm__input ContactsForm__input--instagram">
        <p className="ContactsForm__input-label">Instagram</p>

        <input
          type="text"
          placeholder="@instagram"
          className="ContactsForm__input-field ContactsForm__input-field--icon"
          value={instagram}
          onChange={(e) =>
            dispatch(
              eventActions.updateProperty({
                field: 'instagram',
                value: e.target.value,
              })
            )
          }
        />
      </div>

      <div className="ContactsForm__input ContactsForm__input--telegram">
        <p className="ContactsForm__input-label">Telegram</p>

        <input
          type="text"
          placeholder="@telegram"
          className="ContactsForm__input-field ContactsForm__input-field--icon"
          value={telegram}
          onChange={(e) =>
            dispatch(
              eventActions.updateProperty({
                field: 'telegram',
                value: e.target.value,
              })
            )
          }
        />
      </div>

      <div className="ContactsForm__input ContactsForm__input--facebook">
        <p className="ContactsForm__input-label">Facebook</p>

        <input
          type="email"
          placeholder="facebook.com"
          className="ContactsForm__input-field ContactsForm__input-field--icon"
          value={facebook}
          onChange={(e) =>
            dispatch(
              eventActions.updateProperty({
                field: 'facebook',
                value: e.target.value,
              })
            )
          }
        />
      </div>
    </form>
  );
};
