import { useEffect } from 'react';
import { REGEXP_DAY_RANGE } from '../../../../../DataRangePicker/consts/calendar';

export function useSetRangeFilter(
  searchParams: URLSearchParams,
  filters: string[],
  setFilters: (v: string[]) => void
) {
  useEffect(() => {
    const from = searchParams.get('from');
    const to = searchParams.get('to');

    if (from) {
      const newFilters = filters.map((el) => {
        return el.match(REGEXP_DAY_RANGE) ? `${from}-${to}` : el;
      });

      if (!newFilters.length) {
        newFilters.push(`${from}-${to}`);
      }

      setFilters(newFilters);
    }
  }, [searchParams]);
}
