import { type FC } from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import type { DateTime } from 'luxon';
import { BleedPage } from './bleed-page';
import { MonthHeader } from './month-header';
import { MiniMonth } from './mini-month';
import { DaysHeaderRow } from './day-header/days-header-row';
import { WeekRow } from './week-row';
import { NotesColumn } from './notes-column';
import type { MonthGridWeek } from '../utils/get-month-weeks';
import { monthSharedStyles } from './month-shared-styles';

const DAYS_OF_WEEK = ['Thu', 'Fri', 'Sat', 'Notes'];

const styles = StyleSheet.create({
  gridRow: {
    flexDirection: 'row',
    flexGrow: 1,
    flexBasis: 0,
  },
  daysColumn: {
    flexDirection: 'column',
    flex: 3,
  },
});

interface Month2Props {
  month: DateTime<true>;
  weeks: MonthGridWeek[];
}

export const Month2: FC<Month2Props> = (props) => {
  const { month, weeks } = props;

  const previousMonth = month.minus({ months: 1 });
  const nextMonth = month.plus({ months: 1 });

  return (
    <BleedPage>
      <MonthHeader month={month}>
        <MiniMonth month={previousMonth} />
        <MiniMonth month={nextMonth} />
      </MonthHeader>

      <View style={monthSharedStyles.container}>
        <DaysHeaderRow days={DAYS_OF_WEEK} />

        <View style={styles.gridRow}>
          <View style={styles.daysColumn}>
            {weeks.map((week, i) => (
              <WeekRow
                key={i}
                days={week.slice(4, 7)}
                hideLastBorder
                hideBottomBorder={i === weeks.length - 1}
              />
            ))}
          </View>

          <NotesColumn />
        </View>
      </View>
    </BleedPage>
  );
};
