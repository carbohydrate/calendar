import { type FC } from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';
import type { DateTime } from 'luxon';
import { BleedPage } from './bleed-page';

const styles = StyleSheet.create({
  header: {
    marginBottom: 15,
  },
  monthTitle: {
    fontSize: 28,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1A1A',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  // gridContainer: {
  //   width: '100%',
  //   flexDirection: 'column',
  // },
  // daysHeaderRow: {
  //   flexDirection: 'row',
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#333333',
  //   paddingBottom: 6,
  //   marginBottom: 4,
  // },
  // dayHeaderCell: {
  //   width: '14.28%', // 100% / 7 columns
  //   textAlign: 'center',
  //   fontSize: 10,
  //   fontFamily: 'Helvetica-Bold',
  //   color: '#555555',
  //   textTransform: 'uppercase',
  // },
  // gridBody: {
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   borderLeftWidth: 0.5,
  //   borderLeftColor: '#E0E0E0',
  //   borderTopWidth: 0.5,
  //   borderTopColor: '#E0E0E0',
  // },
  // cell: {
  //   width: '14.28%', // Exact 1/7th width per column
  //   height: 85, // Adjust height to fit your page layout
  //   borderRightWidth: 0.5,
  //   borderRightColor: '#E0E0E0',
  //   borderBottomWidth: 0.5,
  //   borderBottomColor: '#E0E0E0',
  //   padding: 4,
  // },
  // cellNumber: {
  //   fontSize: 10,
  //   fontFamily: 'Helvetica-Bold',
  //   color: '#333333',
  // },
  // emptyCell: {
  //   backgroundColor: '#FAFAFA',
  // },
});

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

interface MonthProps {
  month: DateTime;
}

export const Month: FC<MonthProps> = (props) => {
  const { month } = props;

  console.log('name:', name);

  return (
    <BleedPage>
      <View style={styles.header}>
        <Text style={styles.monthTitle}>{month.monthLong}</Text>
      </View>

      {/* <View style={styles.gridContainer}>
        <View style={styles.daysHeaderRow}>
          {DAYS_OF_WEEK.map((day) => (
            <Text key={day} style={styles.dayHeaderCell}>
              {day}
            </Text>
          ))}
        </View>

        <View style={styles.gridBody}>
          {monthDays.map((cell, index) => (
            <View key={index} style={[styles.cell, !cell.dayNumber && styles.emptyCell]}>
              {cell.dayNumber && <Text style={styles.cellNumber}>{cell.dayNumber}</Text>}
            </View>
          ))}
        </View>
      </View> */}
    </BleedPage>
  );
};
