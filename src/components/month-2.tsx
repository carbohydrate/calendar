import { type FC } from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import { BleedPage } from './bleed-page';
import { Day } from './day';
import type { WeekRow } from '../utils/get-month-weeks';
import { MonthHeader } from './month-header';
import { DaysHeaderRow } from './days-header-row';

const DAYS_OF_WEEK = ['Thu', 'Fri', 'Sat', 'Notes'];

const styles = StyleSheet.create({
  weekRow: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  notesCell: {
    width: '25%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#E0E0E0',
    padding: 4,
  },
});

interface Month2Props {
  weeks: WeekRow[];
}

export const Month2: FC<Month2Props> = (props) => {
  const { weeks } = props;

  return (
    <BleedPage>
      <MonthHeader />

      <DaysHeaderRow days={DAYS_OF_WEEK} />

      {weeks.map((week, i) => (
        <View key={i} style={styles.weekRow}>
          {week.slice(4, 7).map((day, j) => (
            <Day key={j} day={day} />
          ))}
          <View style={styles.notesCell} />
        </View>
      ))}
    </BleedPage>
  );
};
