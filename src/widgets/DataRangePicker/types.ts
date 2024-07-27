export type Day = {
  fullDate: Date;
  date: number;
  active: boolean;
  isToday?: boolean;
};

export type Period =
  | 'На сьогодні'
  | 'На завтра'
  | 'На вихідні'
  | 'На тиждень'
  | 'На місяць';
