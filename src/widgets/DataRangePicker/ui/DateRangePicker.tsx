import { useEffect, useState } from 'react';
import cn from 'classnames';

import './DateRangePicker.scss';
import { DAY_OF_WEEK, MONTHS } from '../consts/calendar';
import { Day } from '../types';
import { renderDayOfMonth } from '../helpers/renderDayOfMonth';

type Range = Day[];

export const DateRangePicker = () => {
  const [daysOfMonth, setDaysOfMonth] = useState<Day[]>([]);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentYear, setCurrentYear] = useState(2024);
  const [range, setRange] = useState<Range>([]);

  function changeMonth(e: React.MouseEvent) {
    const id = (e.target as HTMLImageElement).id;
    const newMonth = id === 'prev' ? currentMonth - 1 : currentMonth + 1;

    if (newMonth < 0 || newMonth > 11) {
      const date = new Date(currentYear, newMonth);
      setCurrentYear(date.getFullYear());
      setCurrentMonth(date.getMonth());
    } else {
      setCurrentMonth(newMonth);
    }
  }

  function changeRange(day: Day) {
    const selectedDay = day;

    if (range[0] === undefined) {
      setRange([selectedDay]);
    } else {
      setRange((range) =>
        [range[0], selectedDay].sort(
          (a, b) => a.fullDate.getTime() - b.fullDate.getTime()
        )
      );
    }
  }

  function isSelected(day: Day) {
    if (!range.length) {
      return false;
    }

    const candidat = day.fullDate.getTime();
    const firstDay = range[0].fullDate.getTime();

    if (range.length === 1) {
      return candidat === firstDay;
    }

    const lastDay = range[1].fullDate.getTime();
    return firstDay <= candidat && lastDay >= candidat;
  }

  useEffect(() => {
    if (!daysOfMonth.length) {
      const currentDate = new Date();
      setCurrentYear(currentDate.getFullYear());
      setCurrentMonth(currentDate.getMonth());

      setDaysOfMonth(renderDayOfMonth(currentYear, currentMonth));

      return;
    }

    setDaysOfMonth(renderDayOfMonth(currentYear, currentMonth));
  }, [currentMonth]);

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
            onClick={changeMonth}
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
            onClick={changeMonth}
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
                'DateRangePicker__calendar-weeks-day--selected':
                  isSelected(day),
              })}
              onClick={() => changeRange(day)}
            >
              {day.date}
            </li>
          ))}
        </ul>
      </div>

      <div className="DateRangePicker__periods"></div>
    </div>
  );
};
