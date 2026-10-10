import { type FC } from 'react';
import { StyleSheet, Text } from '@react-pdf/renderer';
import type { DateTime } from 'luxon';
import { Colors } from './colors';
import { getHoliday } from '../holidays';
import { getBirthday } from '../birthdays';

const styles = StyleSheet.create({
  label: {
    // pushes the label to the bottom of the cell
    marginTop: 'auto',
    color: Colors.primary,
    fontSize: 7,
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  // birthday cells are filled with a photo
  onPhoto: {
    color: Colors.white,
  },
});

interface HolidayLabelProps {
  day: DateTime<true>;
}

export const HolidayLabel: FC<HolidayLabelProps> = (props) => {
  const { day } = props;

  const holiday = getHoliday(day.month, day.day);
  if (!holiday) return null;

  const onPhoto = getBirthday(day.month, day.day) !== undefined;

  return <Text style={[styles.label, onPhoto ? styles.onPhoto : undefined]}>{holiday.name}</Text>;
};
