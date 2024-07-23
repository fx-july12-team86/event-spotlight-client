import { NavLink } from 'react-router-dom';
import './MyBreadCrumbs.scss';

export const MyBreadCrubms = () => {
  return (
    <nav className="MyBreadCrumbs">
      <NavLink to="/" className="MyBreadCrumbs__item">
        Всі події
      </NavLink>

      <NavLink to="/" className="MyBreadCrumbs__item">
        Події Київ
      </NavLink>

      <NavLink to="/" className="MyBreadCrumbs__item">
        Майстер-клас з миловаріння
      </NavLink>
    </nav>
  );
};
