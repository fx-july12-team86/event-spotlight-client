import { isMobilePhone } from 'validator';
import { ErrorType } from '../types/errorTypes';
import isEmail from 'validator/lib/isEmail';

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
        setErrors({ ...errors, phone: 'Не дійсний телефон' });
      } else {
        setErrors({ ...errors, phone: null });
      }
      break;

    case 'email':
      if (email && !isEmail(email)) {
        setErrors({ ...errors, email: 'Не дійсний еmail' });
      } else {
        setErrors({ ...errors, email: '' });
      }
      break;

    case 'password':
      if (password && password.length < 4) {
        setErrors({ ...errors, password: 'Слабкий пароль' });
      } else {
        setErrors({ ...errors, password: '' });
      }
      break;
  }
}
