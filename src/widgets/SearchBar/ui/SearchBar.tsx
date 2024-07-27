import { SearchEvent } from '../../../features/SearchEvent';
import { FiltersBox } from './components/FiltersBox/FiltersBox';
import './SearchBar.scss';

export const SearchBar = () => {
  return (
    <div className="SearchBar">
      <SearchEvent />

      <FiltersBox />
    </div>
  );
};
