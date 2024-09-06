import { useAppSelector } from '../../../../../shared/lib/hooks/reduxHooks';
import './BreadcrumbsEvent.scss';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
};

export const BreadcrumbsEvent: React.FC<Props> = ({ title }) => {
  const { location } = useAppSelector((state) => state.user);

  return (
    <nav className="BreadcrumbsEvent">
      <Link to="/" className="BreadcrumbsEvent__item">
        Всі події
      </Link>

      <Link to="/catalog" className="BreadcrumbsEvent__item">
        Події {location}
      </Link>

      <button className="BreadcrumbsEvent__item">{title}</button>
    </nav>
  );
};
