import { type FC } from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import { DayHeaderText } from './day-header-text';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
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
