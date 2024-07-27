import { Day, Period } from '../types';

export function selectRange(
  period: Period,
  daysOfMonth: Day[],
  setRange: (v: Day[]) => void,
  currentYear: number,
  currentMonth: number
) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const todayIndex = daysOfMonth.findIndex(
    (day) => day.fullDate.getTime() === today.getTime()
  );

  switch (period) {
    case 'На сьогодні': {
      const currentDay = daysOfMonth[todayIndex];

      if (currentDay) {
        setRange([currentDay]);
      }

      break;
    }

    case 'На завтра': {
      const currentDate = today.getDate();
      today.setDate(currentDate + 1);
      const tomorowTimestamp = today.getTime();

      const day = daysOfMonth.find(
        (el) => el.fullDate.getTime() === tomorowTimestamp
      );

      if (day) {
        setRange([day]);
      }

      break;
    }

    case 'На вихідні': {
      const nextSaturday = daysOfMonth.find((day, i) => {
        if (i < todayIndex) {
          return false;
        }

        const dayOfWeek = day.fullDate.getDay();

        return dayOfWeek === 6;
      });

      const nextSanday = daysOfMonth.find((day, i) => {
        if (i < todayIndex) {
          return false;
        }

        const dayOfWeek = day.fullDate.getDay();

        return dayOfWeek === 0;
      });

      if (nextSanday && nextSaturday) {
        setRange([nextSaturday, nextSanday]);
      }

      break;
    }

    case 'На тиждень': {
      const today = daysOfMonth[todayIndex];
      const toDayDate = today.fullDate.getDate();
      const lastDayOfPeriod = new Date(
        currentYear,
        currentMonth,
        toDayDate + 6
      );

      const index = daysOfMonth.findIndex(
        (el) => el.fullDate.getTime() === lastDayOfPeriod.getTime()
      );

      setRange([today, daysOfMonth[index]]);

      break;
    }

    case 'На місяць': {
      const today = daysOfMonth[todayIndex];
      const toDayDate = today.fullDate.getDate();
      const lastDayOfPeriod = new Date(
        currentYear,
        currentMonth + 1,
        toDayDate
      );

      const index = daysOfMonth.findIndex(
        (el) => el.fullDate.getTime() === lastDayOfPeriod.getTime()
      );

      if (index >= 0) {
        setRange([today, daysOfMonth[index]]);
      } else {
        setRange([
          today,
          {
            fullDate: lastDayOfPeriod,
            date: lastDayOfPeriod.getDate(),
            active: true,
            isToday: false,
          },
        ]);
      }
    }
  }
}
