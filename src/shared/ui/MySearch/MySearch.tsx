import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import debounce from 'lodash.debounce';

import './MySearch.scss';
import { getSearchParamsWith } from 'src/shared/lib/helpers/getSearchParamsWith';

type Props = {
  setShowSearch?: (v: boolean) => void;
  style?: { [key: string]: string };
};

export const MySearch: React.FC<Props> = (props) => {
  const { setShowSearch = () => {}, ...otherProps } = props;
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
    <div className="MySearch" {...otherProps}>
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
