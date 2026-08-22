import { type FC } from 'react';
import { BleedPage } from './bleed-page';
import { MonthHeader } from './month-header';
import { DaysHeaderRow } from './day-header/days-header-row';
import { WeekRow } from './week-row';
import type { MonthWeek } from '../utils/get-month-weeks';

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed'];

interface Month1Props {
  title: string;
  weeks: MonthWeek[];
}

export const Month1: FC<Month1Props> = (props) => {
  const { title, weeks } = props;

  return (
    <BleedPage>
      <MonthHeader title={title} />

      <DaysHeaderRow days={DAYS_OF_WEEK} />

      {weeks.map((week, i) => (
        <WeekRow
          key={i}
          days={week.slice(0, 4)}
          hideLastBorder
          hideBottomBorder={i === weeks.length - 1}
        />
      ))}
    </BleedPage>
  );
};
