import { useState } from 'react';
import cn from 'classnames';

import './MyPasswordInput.scss';
import { ErrorType } from '../../types/errorTypes';

type Props = {
  handleSetPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: ErrorType;
  password: string;
  validate: (e: React.FocusEvent<HTMLInputElement>) => void;
  title: string;
  id?: string;
};

export const MyPasswordInput: React.FC<Props> = ({
  handleSetPassword,
  errors,
  password,
  validate,
  title,
  id = 'main',
}) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="MyPasswordInput">
      <p className="MyPasswordInput__label">{title}</p>

      <input
        id="password"
        type={isVisible ? 'text' : 'password'}
        className={cn('MyPasswordInput__field', {
          'MyPasswordInput__field--invalid':
            (errors.password && id === 'main') ||
            (errors.password2 && id === 'second'),
        })}
        placeholder="qwerdx123456"
        onChange={handleSetPassword}
        value={password}
        onBlur={validate}
      />

      <img
        src={isVisible ? 'icons/eye.svg' : 'icons/no_eye.svg'}
        alt="показати пароль"
        className="MyPasswordInput__eye"
        width={24}
        height={24}
        onClick={() => setIsVisible(!isVisible)}
      />

      <p className="MyPasswordInput__field--error">
        {id === 'main' ? errors.password : errors.password2}
      </p>
    </div>
  );
};
