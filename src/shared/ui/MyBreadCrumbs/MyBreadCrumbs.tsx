import { NavLink } from 'react-router-dom';
import './MyBreadCrumbs.scss';

type Breadcrumb = { title: string; path: string };

type Props = {
  breadcrumbs: Breadcrumb[];
};

export const MyBreadCrubms: React.FC<Props> = ({ breadcrumbs }) => {
  return (
    <nav className="MyBreadCrumbs">
      {breadcrumbs.map((b) => (
        <NavLink key={b.title} to={b.path} className="MyBreadCrumbs__item">
          {b.title}
        </NavLink>
      ))}
    </nav>
  );
};
