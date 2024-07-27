import { useEffect } from 'react';
import { renderDayOfMonth } from '../helpers/renderDayOfMonth';
import { Day } from '../types';

export function useRenderCalendar(
  daysOfMonth: Day[],
  setCurrentYear: (v: number) => void,
  setCurrentMonth: (v: number) => void,
  setDaysOfMonth: (v: ReturnType<typeof renderDayOfMonth>) => void,
  currentYear: number,
  currentMonth: number
) {
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
}
