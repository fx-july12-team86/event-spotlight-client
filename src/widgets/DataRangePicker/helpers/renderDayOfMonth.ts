import { Day } from "../types";

export function renderDayOfMonth(currentYear: number, currentMonth: number) {
  const days: Day[] = [];

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getUTCDay();

  const lastDateOfMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  const lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getUTCDay();

  const lastDateOfLastMonth = new Date(
    currentYear,
    currentMonth,
    0
  ).getDate();

  for (let i = firstDayOfMonth; i > 0; i--) {
    days.push({
      fullDate: new Date(currentYear, currentMonth - 1, lastDateOfLastMonth - i + 1),
      date: lastDateOfLastMonth - i + 1,
      active: false,
    });
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    const currentDate = new Date();

    const isToday =
      i === currentDate.getDate() &&
      currentDate.getFullYear() === currentYear &&
      currentDate.getMonth() === currentMonth;

    days.push({ fullDate: new Date(currentYear, currentMonth, i), date: i, active: true, isToday });
  }

  for (let i = lastDayOfMonth; i < 6; i++) {
    days.push({
      fullDate: new Date(currentYear, currentMonth + 1, i - lastDayOfMonth + 1),
      date: i - lastDayOfMonth + 1,
      active: false,
    });
  }

  return days;
}
