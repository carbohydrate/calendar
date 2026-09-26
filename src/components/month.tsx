import { type FC } from 'react';
import type { DateTime } from 'luxon';
import { Month1 } from './month-1';
import { Month2 } from './month-2';
import { capWeeksAtFive, getMonthWeeks } from '../utils/get-month-weeks';

interface MonthProps {
  month: DateTime<true>;
}

export const Month: FC<MonthProps> = (props) => {
  const { month } = props;

  const weeks = capWeeksAtFive(getMonthWeeks(month));

  return (
    <>
      <Month1 month={month} weeks={weeks} />
      <Month2 month={month} weeks={weeks} />
    </>
  );
};
