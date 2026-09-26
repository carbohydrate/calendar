import { type FC } from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import type { DayCell } from '../utils/get-month-weeks';
import { CELL_BORDER_COLOR, CELL_BORDER_WIDTH } from '../constants';
import { DayNumber } from './day-number';

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    borderRightWidth: CELL_BORDER_WIDTH,
    borderRightColor: CELL_BORDER_COLOR,
    borderBottomWidth: CELL_BORDER_WIDTH,
    borderBottomColor: CELL_BORDER_COLOR,
  },
  cellContent: {
    flex: 1,
    padding: 8,
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
    borderTopWidth: CELL_BORDER_WIDTH,
    borderTopColor: CELL_BORDER_COLOR,
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
            {day && <DayNumber day={day} />}
          </View>
          <View style={[styles.cellContent, styles.splitBottom]}>
            <DayNumber day={overflowDay} />
          </View>
        </View>
      ) : (
        day && (
          <View style={styles.cellContent}>
            <DayNumber day={day} />
          </View>
        )
      )}
    </View>
  );
};
