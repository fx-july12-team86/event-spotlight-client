import { useEffect, useState } from 'react';
import cn from 'classnames';

import './DateRangePicker.scss';
import { DAY_OF_WEEK, MONTHS, PERIODS } from '../consts/calendar';
import { Day } from '../types';
import { MyButtonLarge } from '../../../shared/ui/MyButtonLarge/MyButtonLarge';
import { isSelected } from '../helpers/isSelected';
import { selectRange } from '../helpers/selectRange';
import { changeMonth } from '../helpers/changeMonth';
import { changeRange } from '../helpers/changeRange';
import { useRenderCalendar } from '../hooks/useRenderCalendar';
import { useSearchParams } from 'react-router-dom';
import { getSearchParamsWith } from '../../../shared/helpers/getSearchParamsWith';
import { formatDate } from '../helpers/formatDate';

type Range = Day[];

type Props = {
  clear: () => void;
};

export const DateRangePicker: React.FC<Props> = ({ clear }) => {
  const [daysOfMonth, setDaysOfMonth] = useState<Day[]>([]);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentYear, setCurrentYear] = useState(2024);
  const [range, setRange] = useState<Range>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedPeriod, setSelectedPeriod] = useState('');

  useRenderCalendar(
    daysOfMonth,
    setCurrentYear,
    setCurrentMonth,
    setDaysOfMonth,
    currentYear,
    currentMonth
  );

  useEffect(() => {
    let from: string | null = '';
    let to: string | null = '';

    if (!range.length) {
      from = to = null;
    }

    if (range.length === 1) {
      from = formatDate(range[0].fullDate);
      to = from;
    }

    if (range.length === 2) {
      from = formatDate(range[0].fullDate);
      to = formatDate(range[1].fullDate);
    }

    const newParams = getSearchParamsWith({ from, to }, searchParams);
    setSearchParams(newParams);
  }, [range]);

  useEffect(() => {
    const from = searchParams.get('from');

    if (!from) {
      setRange([]);
      setSelectedPeriod('');
    }
  }, [searchParams]);

  function clearFilters() {
    setRange([]);
    setSelectedPeriod('');
    clear();
  }

  return (
    <div className="DateRangePicker">
      <div className="DateRangePicker__calendar">
        <div className="DateRangePicker__calendar-top">
          <img
            src="icons/arrow_left.svg"
            alt="previous month"
            className="DateRangePicker__arrow"
            height={24}
            width={24}
            id="prev"
            onClick={(e) =>
              changeMonth(
                e,
                currentMonth,
                currentYear,
                setCurrentMonth,
                setCurrentYear
              )
            }
          />

          <p className="DateRangePicker__currentDate">
            {`${MONTHS[currentMonth]} ${currentYear}`}
          </p>

          <img
            src="icons/arrow_right.svg"
            alt="next month"
            className="DateRangePicker__arrow"
            height={24}
            width={24}
            id="next"
            onClick={(e) =>
              changeMonth(
                e,
                currentMonth,
                currentYear,
                setCurrentMonth,
                setCurrentYear
              )
            }
          />
        </div>

        <ul className="DateRangePicker__calendar-weeks">
          {DAY_OF_WEEK.map((day) => (
            <li key={day} className="DateRangePicker__calendar-weeks-day">
              {day}
            </li>
          ))}
        </ul>

        <ul className="DateRangePicker__calendar-days">
          {daysOfMonth.map((day) => (
            <li
              key={Math.random()}
              className={cn('DateRangePicker__calendar-weeks-day', {
                'DateRangePicker__calendar-weeks-day--inactive': !day.active,
                'DateRangePicker__calendar-weeks-day--today': day.isToday,
                'DateRangePicker__calendar-weeks-day--selected': isSelected(
                  day,
                  range
                ),
              })}
              onClick={() => changeRange(day, range, setRange)}
            >
              {day.date}
            </li>
          ))}
        </ul>

        <div className="DateRangePicker__buttons">
          <MyButtonLarge className="DateRangePicker__btn-select">
            Вибрати
          </MyButtonLarge>

          <MyButtonLarge
            className="DateRangePicker__btn-clear"
            onClick={clearFilters}
          >
            Очістити
          </MyButtonLarge>
        </div>
      </div>

      <div className="DateRangePicker__periods">
        {PERIODS.map((p) => (
          <button
            className={cn('DateRangePicker__period', {
              'DateRangePicker__period--selected': p === selectedPeriod,
            })}
            key={p}
            onClick={() => {
              setSelectedPeriod(p);
              selectRange(p, daysOfMonth, setRange, currentYear, currentMonth);
            }}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
};
