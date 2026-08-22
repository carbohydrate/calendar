import { type FC, type ReactNode } from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import { Day } from './day';
import type { DayCell } from '../utils/get-month-weeks';

const styles = StyleSheet.create({
  weekRow: {
    flexDirection: 'row',
    flexGrow: 1,
    flexBasis: 0,
  },
});

interface WeekRowProps {
  days: DayCell[];
  hideLastBorder?: boolean;
  trailingCell?: ReactNode;
}

export const WeekRow: FC<WeekRowProps> = (props) => {
  const { days, hideLastBorder, trailingCell } = props;

  return (
    <View style={styles.weekRow}>
      {days.map((day, j) => (
        <Day key={j} day={day} showRightBorder={!hideLastBorder || j !== days.length - 1} />
      ))}
      {trailingCell}
    </View>
  );
};
