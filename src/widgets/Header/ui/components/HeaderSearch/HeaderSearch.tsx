import { useState } from 'react';
import { MySearch } from '../../../../../shared/ui';
import './HeaderSearch.scss';

export const HeaderSearch = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="HeaderSearch">
      {showSearch ? (
        <MySearch />
      ) : (
        <img
          src="icons/search.svg"
          alt="calendar"
          className="HeaderSearch__icon"
          onClick={() => setShowSearch(!showSearch)}
        />
      )}
    </div>
  );
};
