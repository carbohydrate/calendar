import { DateTime } from 'luxon';

export type DayCell = DateTime<true> | null;
export type MonthWeek = DayCell[];

export interface GridDayCell {
  day: DateTime<true>;
  overflowDay?: DateTime<true>;
}

export type MonthGridWeek = (GridDayCell | null)[];

const MAX_ROWS = 5;

// Builds full Sun-Sat week rows for a month, padded with nulls on either end
export const getMonthWeeks = (month: DateTime<true>): MonthWeek[] => {
  const daysInMonth = month.daysInMonth;
  const startingWeekday = month.weekday % 7;

  const days: DayCell[] = [
    ...Array.from({ length: startingWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => {
      const day = month.set({ day: i + 1 });
      return day.isValid ? day : null;
    }),
  ];

  while (days.length % 7 !== 0) {
    days.push(null);
  }

  const weeks: MonthWeek[] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return weeks;
};

// caps a month at 5 rows
export const capWeeksAtFive = (weeks: MonthWeek[]): MonthGridWeek[] => {
  const gridWeeks: MonthGridWeek[] = weeks
    .slice(0, MAX_ROWS)
    .map((week) => week.map((day): GridDayCell | null => (day ? { day } : null)));

  const lastRow = gridWeeks[MAX_ROWS - 1];

  for (const overflowWeek of weeks.slice(MAX_ROWS)) {
    overflowWeek.forEach((day, col) => {
      const cell = lastRow?.[col];
      if (day && cell) cell.overflowDay = day;
    });
  }

  return gridWeeks;
};
