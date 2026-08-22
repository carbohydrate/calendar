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
  },
  cellContent: {
    flex: 1,
    padding: 8,
  },
  cellNumber: {
    fontSize: 12,
  },
  noRightBorder: {
    borderRightWidth: 0,
  },
  noBottomBorder: {
    borderBottomWidth: 0,
  },
  splitStack: {
    flex: 1,
    flexDirection: 'column',
  },
  splitBottom: {
    borderTopWidth: 0.5,
    borderTopColor: '#E0E0E0',
  },
});

interface DayProps {
  day: DayCell;
  overflowDay?: DayCell;
  showRightBorder?: boolean;
  showBottomBorder?: boolean;
}

export const Day: FC<DayProps> = (props) => {
  const { day, overflowDay, showRightBorder = true, showBottomBorder = true } = props;

  return (
    <View
      style={[
        styles.cell,
        showRightBorder ? undefined : styles.noRightBorder,
        showBottomBorder ? undefined : styles.noBottomBorder,
      ]}
    >
      {overflowDay ? (
        <View style={styles.splitStack}>
          <View style={styles.cellContent}>
            <Text style={styles.cellNumber}>{day?.day}</Text>
          </View>
          <View style={[styles.cellContent, styles.splitBottom]}>
            <Text style={styles.cellNumber}>{overflowDay.day}</Text>
          </View>
        </View>
      ) : (
        day && (
          <View style={styles.cellContent}>
            <Text style={styles.cellNumber}>{day.day}</Text>
          </View>
        )
      )}
    </View>
  );
};
