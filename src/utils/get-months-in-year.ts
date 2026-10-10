import { DateTime } from 'luxon';

// The first day of each month in a year
export const getMonthsInYear = (year: number): DateTime<true>[] => {
  const months = Array.from({ length: 12 }, (_, i) => {
    return DateTime.local(year, i + 1, 1);
  }).filter((d): d is DateTime<true> => d.isValid);

  return months;
};
