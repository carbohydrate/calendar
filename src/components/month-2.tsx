import { type FC } from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import { BleedPage } from './bleed-page';
import { MonthHeader } from './month-header';
import { DaysHeaderRow } from './day-header/days-header-row';
import { WeekRow } from './week-row';
import { NotesColumn } from './notes-column';
import type { MonthWeek } from '../utils/get-month-weeks';

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
  weeks: MonthWeek[];
}

export const Month2: FC<Month2Props> = (props) => {
  const { weeks } = props;

  return (
    <BleedPage>
      <MonthHeader />

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
    </BleedPage>
  );
};
