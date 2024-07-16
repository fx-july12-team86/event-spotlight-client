import './MyLogo.scss';
import { Link } from 'react-router-dom';

type Props = {
  theme?: 'light' | 'dark';
};

export const MyLogo: React.FC<Props> = ({ theme = 'light' }) => {
  console.log(theme);
  return (
    <Link to="/" className="Logo">
      <div className="Logo__img" />

      <p className="Logo__sitename">EventSpotlight</p>
    </Link>
  );
};
