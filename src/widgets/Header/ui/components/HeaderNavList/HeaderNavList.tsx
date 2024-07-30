import { Link } from 'react-router-dom';
import './HeaderNavList.scss';

export const HeaderNavList = () => {
  return (
    <nav className="HeaderNavList">
      <Link
        to="catalog/concerts"
        onClick={() => localStorage.setItem('category', 'Концерти')}
        className="HeaderNavList__item"
      >
        Концерти
      </Link>

      <Link
        to="catalog?category=master"
        onClick={() => localStorage.setItem('category', 'Майстер-класи')}
        className="HeaderNavList__item"
      >
        Майстер-класи
      </Link>

      <Link
        to="catalog?category=festivals"
        onClick={() => localStorage.setItem('category', 'Фестивалі')}
        className="HeaderNavList__item"
      >
        Фестивалі
      </Link>

      <Link
        to="catalog?category=exhibitions"
        onClick={() => localStorage.setItem('category', 'Виставки')}
        className="HeaderNavList__item"
      >
        Виставки
      </Link>

      <Link
        to="catalog?category=children"
        onClick={() => localStorage.setItem('category', 'Для дітей')}
        className="HeaderNavList__item"
      >
        Для дітей
      </Link>
    </nav>
  );
};
