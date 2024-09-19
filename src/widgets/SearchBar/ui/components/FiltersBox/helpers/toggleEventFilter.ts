import { getSearchParamsWith } from '../../../../../../shared/lib/helpers/getSearchParamsWith';
import { REGEXP_DAY_RANGE } from '../../../../../DataRangePicker/consts/calendar';

export function toggleEventFilter(
  event: string,
  filters: string[],
  setFilters: (v: string[]) => void,
  searchParams: URLSearchParams,
  setSearchParams: (v: string) => void
) {
  if (filters.includes(event)) {
    const newFilters = filters.filter((ev: string) => ev !== event);
    setFilters(newFilters);

    if (event.match(REGEXP_DAY_RANGE)) {
      const newSearch = getSearchParamsWith(
        { from: null, to: null },
        searchParams
      );
      setSearchParams(newSearch);
    }
  } else {
    const newFilters = [...filters, event];
    setFilters(newFilters);
  }
}
