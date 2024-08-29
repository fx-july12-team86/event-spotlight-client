import { useSearchParams } from 'react-router-dom';
import debounce from 'lodash.debounce';

import './MySearch.scss';
import { getSearchParamsWith } from '../../helpers/getSearchParamsWith';
import { useCallback, useEffect, useState } from 'react';

type Props = {
  setShowSearch?: (v: boolean) => void;
  height?: string;
};

export const MySearch: React.FC<Props> = ({
  setShowSearch = () => {},
  height,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const appliedQuery = searchParams.get('query') || '';

  useEffect(() => {}, []);

  const setAppliedSearch = useCallback(
    debounce((value) => {
      const newSearch = getSearchParamsWith(
        { query: value || null },
        searchParams
      );

      setSearchParams(newSearch);
    }, 1000),
    []
  );

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setAppliedSearch(e.target.value);
  }

  function clearSearch() {
    if (appliedQuery) {
      const newSearch = getSearchParamsWith({ query: null }, searchParams);

      setSearchParams(newSearch);
      setQuery('');
      return;
    }

    setShowSearch(false);
  }

  return (
    <div className="MySearch" style={{ height }}>
      <img src="icons/search_dark.svg" alt="search icon" />

      <input
        value={query}
        type="text"
        className="MySearch__input"
        placeholder="Пошук"
        onChange={handleOnChange}
      />

      <img
        src="icons/xmark.svg"
        alt="clear search"
        className="MySearch__clear"
        onClick={() => clearSearch()}
      />
    </div>
  );
};
