import { type FC } from 'react';
import { BleedPage } from './bleed-page';
import { MonthHeader } from './month-header';
import { DaysHeaderRow } from './day-header/days-header-row';
import { WeekRow } from './week-row';
import type { MonthGridWeek } from '../utils/get-month-weeks';
import type { DateTime } from 'luxon';
import { View } from '@react-pdf/renderer';
import { monthSharedStyles } from './month-shared-styles';

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed'];

interface Month1Props {
  month: DateTime<true>;
  weeks: MonthGridWeek[];
}

export const Month1: FC<Month1Props> = (props) => {
  const { month, weeks } = props;

  return (
    <BleedPage>
      <MonthHeader month={month} showTitle />

      <View style={monthSharedStyles.container}>
        <DaysHeaderRow days={DAYS_OF_WEEK} />

        {weeks.map((week, i) => (
          <WeekRow
            key={i}
            days={week.slice(0, 4)}
            hideLastBorder
            hideBottomBorder={i === weeks.length - 1}
          />
        ))}
      </View>
    </BleedPage>
  );
};
