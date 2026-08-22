import { type FC } from 'react';
import type { DateTime } from 'luxon';
import { Month1 } from './month-1';
import { Month2 } from './month-2';
import { getMonthWeeks } from '../utils/get-month-weeks';
import { YEAR } from '../constants';

interface MonthProps {
  month: DateTime<true>;
}

export const Month: FC<MonthProps> = (props) => {
  const { month } = props;

  const weeks = getMonthWeeks(month);
  const title = `${month.monthLong} ${YEAR}`;

  return (
    <>
      <Month1 title={title} weeks={weeks} />
      <Month2 weeks={weeks} />
    </>
  );
};
