import './CatalogPage.scss';
import { SearchBar } from '../../../widgets/SearchBar';
import { useAppSelector } from '../../../shared/hooks/reduxHooks';
import { useEffect, useState } from 'react';

export const CatalogPage = () => {
  const [bcLength, setBcLength] = useState(2);
  const { location } = useAppSelector((state) => state.user);
  const category = localStorage.getItem('category') || '';

  useEffect(() => {
    if (bcLength !== 2) {
      localStorage.removeItem('category');
    }
  }, [bcLength]);

  return (
    <div className="CatalogPage">
      <div className="CatalogPage__breadcrumbs">
        <nav className="MyBreadCrumbs">
          <button
            className="MyBreadCrumbs__item"
            onClick={() => setBcLength(0)}
          >
            Всі подіі
          </button>

          {bcLength >= 1 && (
            <button
              className="MyBreadCrumbs__item"
              onClick={() => setBcLength(1)}
            >
              Подіі {location}
            </button>
          )}

          {bcLength === 2 && (
            <button
              className="MyBreadCrumbs__item"
              onClick={() => setBcLength(2)}
            >
              {category}
            </button>
          )}
        </nav>
      </div>

      <SearchBar />
    </div>
  );
};
