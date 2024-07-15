import { useSearchParams } from 'react-router-dom';
import './MySearch.scss';
import { getSearchParamsWith } from '../../helpers/getSearchParamsWith';

export const MySearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newSearch = getSearchParamsWith(
      { query: e.target.value || null },
      searchParams
    );

    setSearchParams(newSearch);
  }

  function clearSearch() {
    const newSearch = getSearchParamsWith({ query: null }, searchParams);

    setSearchParams(newSearch);
  }

  return (
    <div className="MySearch">
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
