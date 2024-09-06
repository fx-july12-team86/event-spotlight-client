import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../../shared/lib/hooks/reduxHooks';
import './BreadcrumbsCatalog.scss';

export const BreadcrumbsCatalog = () => {
  const [bcLength, setBcLength] = useState(2);
  const { location } = useAppSelector((state) => state.user);
  const category = localStorage.getItem('category') || '';

  useEffect(() => {
    if (bcLength !== 2) {
      localStorage.removeItem('category');
    }
  }, [bcLength]);

  return (
    <nav className="BreadcrumbsCatalog">
      <button
        className="BreadcrumbsCatalog__item"
        onClick={() => setBcLength(0)}
      >
        Всі подіі
      </button>

      {bcLength >= 1 && (
        <button
          className="BreadcrumbsCatalog__item"
          onClick={() => setBcLength(1)}
        >
          Подіі {location}
        </button>
      )}

      {bcLength === 2 && (
        <button
          className="BreadcrumbsCatalog__item"
          onClick={() => setBcLength(2)}
        >
          {category}
        </button>
      )}
    </nav>
  );
};
