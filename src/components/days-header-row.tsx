import { type FC } from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  daysHeaderRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    paddingBottom: 6,
    marginBottom: 4,
  },
  dayHeaderCell: {
    width: '25%',
    textAlign: 'center',
    fontSize: 10,
    textTransform: 'uppercase',
  },
});

interface DaysHeaderRowProps {
  days: string[];
}

export const DaysHeaderRow: FC<DaysHeaderRowProps> = (props) => {
  const { days } = props;

  return (
    <View style={styles.daysHeaderRow}>
      {days.map((day) => (
        <Text key={day} style={styles.dayHeaderCell}>
          {day}
        </Text>
      ))}
    </View>
  );
};
