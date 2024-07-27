export function changeMonth(
  e: React.MouseEvent,
  currentMonth: number,
  currentYear: number,
  setCurrentMonth: (v: number) => void,
  setCurrentYear: (v: number) => void
) {
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
