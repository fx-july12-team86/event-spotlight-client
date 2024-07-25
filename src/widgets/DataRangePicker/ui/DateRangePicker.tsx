import { da } from 'date-fns/locale';
import './DateRangePicker.scss';
import { useEffect, useState } from 'react';

const daysOfWeek = ['пт', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'];

export const DateRangePicker = () => {
  const [days, setDays] = useState<number[]>([]);

  useEffect(() => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(i);

      setDays(days);
    }
  }, []);
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
          />

          <p className="DateRangePicker__currentDate">ЛИПЕНЬ 2024</p>

          <img
            src="icons/arrow_right.svg"
            alt="next month"
            className="DateRangePicker__arrow"
            height={24}
            width={24}
          />
        </div>

        <ul className="DateRangePicker__calendar-weeks">
          {daysOfWeek.map((day) => (
            <li key={day} className="DateRangePicker__calendar-weeks-day">
              {day}
            </li>
          ))}
        </ul>

        <ul className="DateRangePicker__calendar-days">
          {days.map((day) => (
            <li key={day} className="DateRangePicker__calendar-weeks-day">
              {day}
            </li>
          ))}
        </ul>
      </div>

      <div className="DateRangePicker__periods"></div>
    </div>
  );
};
