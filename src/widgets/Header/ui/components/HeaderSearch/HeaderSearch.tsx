import { useState } from 'react';
import { MySearch } from '../../../../../shared/ui';
import './HeaderSearch.scss';

export const HeaderSearch = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="HeaderSearch">
      {showSearch ? (
        <MySearch setShowSearch={setShowSearch} />
      ) : (
        <img
          src="icons/search.svg"
          alt="calendar"
          className="HeaderSearch__icon"
          onClick={() => setShowSearch(!showSearch)}
          height={64}
          width={64}
        />
      )}
    </div>
  );
};
