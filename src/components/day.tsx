import { type FC } from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';
import type { DayCell } from '../utils/get-month-weeks';

const styles = StyleSheet.create({
  cell: {
    width: '25%',
    borderRightWidth: 0.5,
    borderRightColor: '#E0E0E0',
    borderBottomWidth: 0.5,
    borderBottomColor: '#E0E0E0',
    padding: 4,
  },
  cellNumber: {
    fontSize: 10,
  },
});

interface DayProps {
  day: DayCell;
}

export const Day: FC<DayProps> = (props) => {
  const { day } = props;

  return <View style={styles.cell}>{day && <Text style={styles.cellNumber}>{day.day}</Text>}</View>;
};
