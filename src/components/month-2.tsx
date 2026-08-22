import { type FC } from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import { BleedPage } from './bleed-page';
import { MonthHeader } from './month-header';
import { DaysHeaderRow } from './days-header-row';
import { WeekRow } from './week-row';
import type { MonthWeek } from '../utils/get-month-weeks';

const DAYS_OF_WEEK = ['Thu', 'Fri', 'Sat', 'Notes'];

const styles = StyleSheet.create({
  notesCell: {
    width: '25%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#E0E0E0',
    padding: 4,
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

      {weeks.map((week, i) => (
        <WeekRow key={i} days={week.slice(4, 7)} trailingCell={<View style={styles.notesCell} />} />
      ))}
    </BleedPage>
  );
};
