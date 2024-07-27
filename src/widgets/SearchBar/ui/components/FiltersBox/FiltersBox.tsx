import { MyEventTypeFilter } from '../../../../../shared/ui/MyEventTypeFilter/MyEventTypeFilter';
import { MySelectedFilter } from '../../../../../shared/ui/MySelectedFilter/MySelectedFilter';
import { DateRangePicker } from '../../../../DataRangePicker';
import { EVENT_TYPES } from '../../../consts';
import './FiltersBox.scss';

const filters = [
  'Майстер-класи',
  'Конференції',
  'На сьогодні',
  '24.07.2024 - 26.07.2024',
];

export const FiltersBox = () => {
  return (
    <div className="FiltersBox">
      <div className="FiltersBox__selected">
        <div className="FiltersBox__title">
          <p className="FiltersBox__title-name">ФІЛЬТРИ</p>

          <p className="FiltersBox__title-counter">{`(4)`}</p>
        </div>

        <ul className="FiltersBox__selectedList">
          {filters.map((filter) => (
            <MySelectedFilter key={filter} filter={filter} />
          ))}
        </ul>
      </div>

      <div className="FiltersBox__filters">
        <div className="FiltersBox__filters-top">
          <p className="FiltersBox__title--sm">Тип події</p>

          <ul className="FiltersBox__event-list">
            {EVENT_TYPES.map((ev) => (
              <MyEventTypeFilter filter={ev} key={ev} />
            ))}
          </ul>
        </div>

        <div className="FiltersBox__filters__bottom">
          <p className="FiltersBox__title--sm">Дата</p>

          <div className="FiltersBox__calendar">
            <div className="FilterBox__calendar-left">
              <DateRangePicker />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
