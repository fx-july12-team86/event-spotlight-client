import { useState } from 'react';
import { MyEventTypeFilter } from '../../../../../../shared/ui/MyEventTypeFilter/MyEventTypeFilter';
import { MySelectedFilter } from '../../../../../../shared/ui/MySelectedFilter/MySelectedFilter';
import { DateRangePicker } from '../../../../../DataRangePicker';
import { EVENT_TYPES } from '../../../../consts';
import './FiltersBox.scss';
import { useSearchParams } from 'react-router-dom';
import { toggleEventFilter } from '../helpers/toggleEventFilter';
import { useSetRangeFilter } from '../hooks/useSetRangeFilter';

type Props = {
  showFilters: boolean;
  setShowFilters: (v: boolean) => void;
};

export const FiltersBox: React.FC<Props> = ({
  showFilters,
  setShowFilters,
}) => {
  const [filters, setFilters] = useState<string[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useSetRangeFilter(searchParams, filters, setFilters);

  return (
    <div className="FiltersBox">
      <div className="FiltersBox__selected">
        <div className="FiltersBox__title">
          <p className="FiltersBox__title-name">ФІЛЬТРИ</p>

          <p className="FiltersBox__title-counter">{`(${filters.length})`}</p>
        </div>

        <ul className="FiltersBox__selectedList">
          {filters.map((filter) => (
            <MySelectedFilter
              key={filter}
              filter={filter}
              addFilter={() =>
                toggleEventFilter(
                  filter,
                  filters,
                  setFilters,
                  searchParams,
                  setSearchParams
                )
              }
            />
          ))}
        </ul>
      </div>

      <div
        className="FiltersBox__drop"
        style={{ height: showFilters ? '950px' : '0' }}
      >
        <div
          className="FiltersBox__filters"
          style={{
            transform: showFilters ? 'translateY(0)' : 'translateY(-100%)',
          }}
        >
          <img
            src="icons/close_black.svg"
            alt="close filters"
            height={14}
            width={14}
            className="FiltersBox__icon-close"
            onClick={() => setShowFilters(false)}
          />

          <div className="FiltersBox__filters-top">
            <p className="FiltersBox__title--sm">Тип події</p>

            <ul className="FiltersBox__event-list">
              {EVENT_TYPES.map((ev) => (
                <MyEventTypeFilter
                  isSelected={filters.includes(ev)}
                  filter={ev}
                  key={ev}
                  addFilter={() =>
                    toggleEventFilter(
                      ev,
                      filters,
                      setFilters,
                      searchParams,
                      setSearchParams
                    )
                  }
                />
              ))}
            </ul>
          </div>

          <div className="FiltersBox__filters__bottom">
            <p className="FiltersBox__title--sm">Дата</p>

            <div className="FiltersBox__calendar">
              <div className="FilterBox__calendar-left">
                <DateRangePicker clear={() => setFilters([])} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
