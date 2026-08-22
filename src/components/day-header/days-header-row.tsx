import { type FC } from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import { DayHeaderText } from './day-header-text';
import { sharedHeaderStyles } from './shared-styles';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
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
    <View style={[styles.row, sharedHeaderStyles.cellStyle]}>
      {days.map((day) => (
        <View key={day} style={styles.cell}>
          <DayHeaderText text={day} />
        </View>
      ))}
    </View>
  );
};
