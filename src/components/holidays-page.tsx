import { type FC } from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { BleedPage } from './bleed-page';
import { Colors } from './colors';
import { MONTH_PAGE_PADDING } from './month-shared-styles';
import { HOLIDAYS } from '../holidays';
import { YEAR } from '../constants';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 600,
    letterSpacing: 4,
    textTransform: 'uppercase',
    color: Colors.primary,
  },
  list: {
    paddingHorizontal: MONTH_PAGE_PADDING * 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 22,
    fontSize: 11,
    color: Colors.primary,
  },
  text: {
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  leader: {
    flex: 1,
    marginHorizontal: 6,
    marginBottom: 4,
    borderBottomWidth: 1,
    borderBottomStyle: 'dotted',
    borderBottomColor: Colors.border,
  },
});

export const HolidaysPage: FC = () => {
  return (
    <BleedPage>
      <View style={styles.content}>
        <Text style={styles.title}>{YEAR} Holidays</Text>

        <View style={styles.list}>
          {HOLIDAYS.map((holiday) => (
            <View key={holiday.name} style={styles.row}>
              <Text style={styles.text}>{holiday.date.toFormat('LLLL d')}</Text>
              <View style={styles.leader} />
              <Text style={styles.text}>{holiday.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </BleedPage>
  );
};
