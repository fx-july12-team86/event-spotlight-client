import './MyLogo.scss';
import cn from 'classnames';

import { Link } from 'react-router-dom';

type Props = {
  theme?: 'light' | 'dark';
};

export const MyLogo: React.FC<Props> = ({ theme = 'light' }) => {
  return (
    <Link to="/" className="Logo">
      <div className="Logo__img" />

      <p
        className={cn('Logo__sitename', {
          'Logo__sitename--dark': theme === 'dark',
        })}
      >
        EventSpotlight
      </p>
    </Link>
  );
};
