import { Link } from 'react-router-dom';
import './HeaderNavList.scss';

export const HeaderNavList = () => {
  return (
    <nav className="HeaderNavList">
      <Link to="catalog?category=concert" className="HeaderNavList__item">
        Концерти
      </Link>

      <Link to="catalog?category=master" className="HeaderNavList__item">
        Майстер-класи
      </Link>

      <Link to="catalog?category=festivals" className="HeaderNavList__item">
        Фестивалі
      </Link>

      <Link to="catalog?category=exhibitions" className="HeaderNavList__item">
        Виставки
      </Link>

      <Link to="catalog?category=children" className="HeaderNavList__item">
        Для дітей
      </Link>
    </nav>
  );
};
