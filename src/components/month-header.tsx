import { type FC } from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  header: {
    marginBottom: 15,
    height: 60,
  },
  monthTitle: {
    fontSize: 32,
    fontWeight: 200,
    textTransform: 'uppercase',
    letterSpacing: 4,
  },
});

interface MonthHeaderProps {
  title?: string;
}

export const MonthHeader: FC<MonthHeaderProps> = (props) => {
  const { title } = props;

  return (
    <View style={styles.header}>{title && <Text style={styles.monthTitle}>{title}</Text>}</View>
  );
};
