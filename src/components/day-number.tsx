import { type FC } from 'react';
import { Image, StyleSheet, Text } from '@react-pdf/renderer';
import type { DateTime } from 'luxon';
import { Colors } from './colors';
import { getBirthday } from '../birthdays';
import { getBirthdayPhoto } from '../utils/photo-utils';

const styles = StyleSheet.create({
  cellNumber: {
    color: Colors.primary,
    fontSize: 16,
  },
  birthdayNumber: {
    color: Colors.white,
  },
  birthdayPhoto: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    objectFit: 'cover',
  },
});

interface DayNumberProps {
  day: DateTime<true>;
}

export const DayNumber: FC<DayNumberProps> = (props: DayNumberProps) => {
  const { day } = props;

  const birthday = getBirthday(day.month, day.day);

  if (!birthday) {
    return <Text style={styles.cellNumber}>{day.day}</Text>;
  }

  return (
    <>
      <Image src={getBirthdayPhoto(birthday.name)} style={styles.birthdayPhoto} />
      <Text style={[styles.cellNumber, styles.birthdayNumber]}>{day.day}</Text>
    </>
  );
};
