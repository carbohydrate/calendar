import { type FC } from 'react';
import type { DateTime } from 'luxon';
import { Month1 } from './month-1';
import { Month2 } from './month-2';
import { capWeeksAtFive, getMonthWeeks } from '../utils/get-month-weeks';
import { YEAR } from '../constants';

interface MonthProps {
  month: DateTime<true>;
}

export const Month: FC<MonthProps> = (props) => {
  const { month } = props;

  const weeks = capWeeksAtFive(getMonthWeeks(month));
  const title = `${month.monthLong} ${YEAR}`;
  const previousMonth = month.minus({ months: 1 });
  const nextMonth = month.plus({ months: 1 });

  return (
    <>
      <Month1 title={title} weeks={weeks} />
      <Month2 weeks={weeks} previousMonth={previousMonth} nextMonth={nextMonth} />
    </>
  );
};
