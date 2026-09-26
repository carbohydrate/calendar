import { type FC } from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import { DayHeaderText } from './day-header-text';
import { CELL_BORDER_WIDTH } from '../../constants';
import { Colors } from '../colors';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomWidth: CELL_BORDER_WIDTH,
    borderBottomColor: Colors.primary,
    paddingTop: 6,
    paddingBottom: 4,
  },
  cell: {
    width: '100%',
  },
});

interface DaysHeaderRowProps {
  days: string[];
}

export const DaysHeaderRow: FC<DaysHeaderRowProps> = (props) => {
  const { days } = props;

  return (
    <View style={styles.row}>
      {days.map((day) => (
        <View key={day} style={styles.cell}>
          <DayHeaderText text={day} />
        </View>
      ))}
    </View>
  );
};
