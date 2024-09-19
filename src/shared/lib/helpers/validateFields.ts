import { isMobilePhone } from 'validator';
import isEmail from 'validator/lib/isEmail';

import { ErrorType } from '../types/errorTypes';
import { ERROR_MESSAGE } from '../consts/errorMessage';

type Args = {
  id: string;
  email?: string;
  password?: string;
  phone?: number | null;
  errors: ErrorType;
  setErrors: React.Dispatch<React.SetStateAction<ErrorType>>;
};

export function validateField({
  id,
  email,
  phone,
  password,
  errors,
  setErrors,
}: Args) {
  switch (id) {
    case 'phone':
      if (phone && !isMobilePhone(phone?.toString(), 'uk-UA')) {
        setErrors({ ...errors, phone: ERROR_MESSAGE.WRONG_PHONE });
      } else {
        setErrors({ ...errors, phone: null });
      }
      break;

    case 'email':
      if (email && !isEmail(email)) {
        setErrors({ ...errors, email: ERROR_MESSAGE.WRONG_EMAIL });
      } else {
        setErrors({ ...errors, email: '' });
      }
      break;

    case 'password':
      if (password && password.length < 4) {
        setErrors({ ...errors, password: ERROR_MESSAGE.WEAK_PASSWORD });
      } else {
        setErrors({ ...errors, password: '' });
      }
      break;
  }
}
