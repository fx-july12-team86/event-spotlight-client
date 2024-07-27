import { Day } from '../types';

export function isSelected(day: Day, range: Day[]) {
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
