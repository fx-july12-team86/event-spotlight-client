import { useState } from 'react';
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

type Range = Day[];

export const DateRangePicker = () => {
  const [daysOfMonth, setDaysOfMonth] = useState<Day[]>([]);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentYear, setCurrentYear] = useState(2024);
  const [range, setRange] = useState<Range>([]);

  useRenderCalendar(
    daysOfMonth,
    setCurrentYear,
    setCurrentMonth,
    setDaysOfMonth,
    currentYear,
    currentMonth
  );

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
            onClick={() => setRange([])}
          >
            Очістити
          </MyButtonLarge>
        </div>
      </div>

      <div className="DateRangePicker__periods">
        {PERIODS.map((p) => (
          <button
            className="DateRangePicker__period"
            key={p}
            onClick={() =>
              selectRange(p, daysOfMonth, setRange, currentYear, currentMonth)
            }
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
};
