import { type FC } from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';
import type { DateTime } from 'luxon';
import { getMonthWeeks } from '../utils/get-month-weeks';

const WEEKDAY_LABELS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const CELL_WIDTH = 15;
const CELL_GAP = 2;
const GRID_WIDTH = CELL_WIDTH * 7 + CELL_GAP * 6;

const styles = StyleSheet.create({
  container: {
    width: GRID_WIDTH,
    flexDirection: 'column',
    gap: 2,
  },
  label: {
    width: '100%',
    fontSize: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 600,
  },
  row: {
    flexDirection: 'row',
    gap: CELL_GAP,
  },
  cell: {
    width: CELL_WIDTH,
    textAlign: 'center',
  },
  weekdayText: {
    fontSize: 9,
    fontWeight: 600,
  },
  dayText: {
    fontSize: 9,
    fontWeight: 400,
  },
});

interface MiniMonthProps {
  month: DateTime<true>;
}

export const MiniMonth: FC<MiniMonthProps> = (props) => {
  const { month } = props;

  const weeks = getMonthWeeks(month);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{month.monthShort}</Text>

      <View style={styles.row}>
        {WEEKDAY_LABELS.map((label, i) => (
          <Text key={i} style={[styles.cell, styles.weekdayText]}>
            {label}
          </Text>
        ))}
      </View>

      {weeks.map((week, i) => (
        <View key={i} style={styles.row}>
          {week.map((day, j) => (
            <Text key={j} style={[styles.cell, styles.dayText]}>
              {day ? day.day : ''}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};
