import { Day } from '../types';

export function changeRange(
  day: Day,
  range: Day[],
  setRange: (v: Day[]) => void
) {
  const selectedDay = day;

  if (range[0] === undefined) {
    setRange([selectedDay]);

    return;
  }

  const newRange = [range[0], selectedDay].sort(
    (a, b) => a.fullDate.getTime() - b.fullDate.getTime()
  );

  setRange(newRange);
}
