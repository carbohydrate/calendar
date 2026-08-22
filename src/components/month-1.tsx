import { type FC } from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import { BleedPage } from './bleed-page';
import { MonthHeader } from './month-header';
import { DaysHeaderRow } from './days-header-row';
import { Day } from './day';
import type { WeekRow } from '../utils/get-month-weeks';

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed'];

const styles = StyleSheet.create({
  weekRow: {
    flexDirection: 'row',
    flexGrow: 1,
  },
});

interface Month1Props {
  title: string;
  weeks: WeekRow[];
}

export const Month1: FC<Month1Props> = (props) => {
  const { title, weeks } = props;

  return (
    <BleedPage>
      <MonthHeader title={title} />

      <DaysHeaderRow days={DAYS_OF_WEEK} />

      {weeks.map((week, i) => (
        <View key={i} style={styles.weekRow}>
          {week.slice(0, 4).map((day, j) => (
            <Day key={j} day={day} />
          ))}
        </View>
      ))}
    </BleedPage>
  );
};
