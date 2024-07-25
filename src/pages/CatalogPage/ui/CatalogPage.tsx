import { MyBreadCrubms } from '../../../shared/ui/MyBreadCrumbs/MyBreadCrumbs';
import { SearchBar } from '../../../widgets/SearchBar';
import './CatalogPage.scss';

export const CatalogPage = () => {
  return (
    <div className="CatalogPage">
      <MyBreadCrubms />

      <SearchBar />
    </div>
  );
};
