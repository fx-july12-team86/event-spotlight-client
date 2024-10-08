import { Period } from '../types';

const DAY_OF_WEEK = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'];
const MONTHS = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
];

const PERIODS: Period[] = [
  'На сьогодні',
  'На завтра',
  'На вихідні',
  'На тиждень',
  'На місяць',
];

const REGEXP_DAY_RANGE =
  /^(\d{2})\.(\d{2})\.(\d{4})-(\d{2})\.(\d{2})\.(\d{4})$/;

export { DAY_OF_WEEK, MONTHS, PERIODS, REGEXP_DAY_RANGE };
