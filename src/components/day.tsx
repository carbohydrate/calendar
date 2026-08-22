import { type FC } from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';
import type { DayCell } from '../utils/get-month-weeks';

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    borderRightWidth: 0.5,
    borderRightColor: '#E0E0E0',
    borderBottomWidth: 0.5,
    borderBottomColor: '#E0E0E0',
    padding: 4,
  },
  cellNumber: {
    fontSize: 10,
  },
  noRightBorder: {
    borderRightWidth: 0,
  },
  noBottomBorder: {
    borderBottomWidth: 0,
  },
});

interface DayProps {
  day: DayCell;
  showRightBorder?: boolean;
  showBottomBorder?: boolean;
}

export const Day: FC<DayProps> = (props) => {
  const { day, showRightBorder = true, showBottomBorder = true } = props;

  return (
    <View
      style={[
        styles.cell,
        showRightBorder ? undefined : styles.noRightBorder,
        showBottomBorder ? undefined : styles.noBottomBorder,
      ]}
    >
      {day && <Text style={styles.cellNumber}>{day.day}</Text>}
    </View>
  );
};
