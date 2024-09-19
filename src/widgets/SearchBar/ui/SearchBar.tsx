import { useState } from 'react';
import { SearchEvent } from '../../../features/SearchEvent';
import { FiltersBox } from './components/FiltersBox/ui/FiltersBox';
import './SearchBar.scss';

export const SearchBar = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="SearchBar">
      <SearchEvent
        setShowFilters={setShowFilters}
        showFilters={showFilters}
        style={{ marginBottom: showFilters ? '24px' : '0' }}
      />

      <FiltersBox setShowFilters={setShowFilters} showFilters={showFilters} />
    </div>
  );
};
