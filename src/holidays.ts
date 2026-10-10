import { DateTime } from 'luxon';
import { YEAR } from './constants';

export interface Holiday {
  name: string;
  date: DateTime;
}

// luxon weekdays
const MONDAY = 1;
const THURSDAY = 4;
const SUNDAY = 7;

// The nth weekday of a month, e.g. the 3rd Monday of January
const nthWeekday = (year: number, month: number, weekday: number, n: number): DateTime => {
  const first = DateTime.local(year, month, 1);
  const offset = (weekday - first.weekday + 7) % 7;
  return first.plus({ days: offset + (n - 1) * 7 });
};

const lastWeekday = (year: number, month: number, weekday: number): DateTime => {
  const last = DateTime.local(year, month, 1).endOf('month').startOf('day');
  const offset = (last.weekday - weekday + 7) % 7;
  return last.minus({ days: offset });
};

// Western Easter, via the anonymous Gregorian algorithm (Meeus/Jones/Butcher)
const easterSunday = (year: number): DateTime => {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return DateTime.local(year, month, day);
};

const getHolidays = (year: number): Holiday[] => {
  const date = (month: number, day: number) => DateTime.local(year, month, day);
  const easter = easterSunday(year);
  const laborDay = nthWeekday(year, 9, MONDAY, 1);

  const holidays: Holiday[] = [
    // major
    { name: "New Year's Day", date: date(1, 1) },
    { name: 'Easter Sunday', date: easter },
    { name: 'Memorial Day', date: lastWeekday(year, 5, MONDAY) },
    { name: 'Independence Day', date: date(7, 4) },
    { name: 'Labor Day', date: laborDay },
    { name: 'Thanksgiving', date: nthWeekday(year, 11, THURSDAY, 4) },
    { name: 'Christmas Eve', date: date(12, 24) },
    { name: 'Christmas Day', date: date(12, 25) },
    { name: "New Year's Eve", date: date(12, 31) },

    // family / fun
    { name: 'Groundhog Day', date: date(2, 2) },
    { name: "Valentine's Day", date: date(2, 14) },
    { name: "St. Patrick's Day", date: date(3, 17) },
    { name: "April Fools' Day", date: date(4, 1) },
    { name: 'Cinco de Mayo', date: date(5, 5) },
    { name: "Mother's Day", date: nthWeekday(year, 5, SUNDAY, 2) },
    { name: "Father's Day", date: nthWeekday(year, 6, SUNDAY, 3) },
    { name: "Grandparents' Day", date: laborDay.plus({ days: 6 }) },
    { name: 'Halloween', date: date(10, 31) },

    // federal
    { name: 'Martin Luther King Jr. Day', date: nthWeekday(year, 1, MONDAY, 3) },
    { name: "Presidents' Day", date: nthWeekday(year, 2, MONDAY, 3) },
    { name: 'Juneteenth', date: date(6, 19) },
    { name: 'Columbus Day', date: nthWeekday(year, 10, MONDAY, 2) },
    { name: 'Veterans Day', date: date(11, 11) },

    // Christian
    { name: 'Ash Wednesday', date: easter.minus({ days: 46 }) },
    { name: 'Palm Sunday', date: easter.minus({ days: 7 }) },
    { name: 'Good Friday', date: easter.minus({ days: 2 }) },
  ];

  return holidays.sort((a, b) => a.date.toMillis() - b.date.toMillis());
};

export const HOLIDAYS = getHolidays(YEAR);

export const getHoliday = (month: number, day: number): Holiday | undefined => {
  return HOLIDAYS.find((h) => h.date.month === month && h.date.day === day);
};
