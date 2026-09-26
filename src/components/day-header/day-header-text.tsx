import { StyleSheet, Text } from '@react-pdf/renderer';
import { type FC } from 'react';
import { Colors } from '../colors';

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: Colors.primary,
  },
});

interface DayHeaderTextProps {
  text: string;
}

export const DayHeaderText: FC<DayHeaderTextProps> = (props) => {
  const { text } = props;

  return <Text style={styles.text}>{text}</Text>;
};
