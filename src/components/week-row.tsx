import { type FC } from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import { Day } from './day';
import type { MonthGridWeek } from '../utils/get-month-weeks';

const styles = StyleSheet.create({
  weekRow: {
    flexDirection: 'row',
    flexGrow: 1,
    flexBasis: 0,
  },
});

interface WeekRowProps {
  days: MonthGridWeek;
  hideLastBorder?: boolean;
  hideBottomBorder?: boolean;
}

export const WeekRow: FC<WeekRowProps> = (props) => {
  const { days, hideLastBorder, hideBottomBorder } = props;

  return (
    <View style={styles.weekRow}>
      {days.map((cell, j) => (
        <Day
          key={j}
          day={cell?.day ?? null}
          overflowDay={cell?.overflowDay ?? null}
          showRightBorder={!hideLastBorder || j !== days.length - 1}
          showBottomBorder={!hideBottomBorder}
        />
      ))}
    </View>
  );
};
