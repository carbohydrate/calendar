import { type FC, type ReactNode } from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  header: {
    height: 90,
    flexDirection: 'row',
  },
  monthTitle: {
    fontSize: 32,
    fontWeight: 200,
    textTransform: 'uppercase',
    letterSpacing: 4,
  },
  right: {
    flexDirection: 'row',
    gap: 12,
    marginLeft: 'auto',
  },
});

interface MonthHeaderProps {
  title?: string;
  children?: ReactNode;
}

export const MonthHeader: FC<MonthHeaderProps> = (props) => {
  const { title, children } = props;

  return (
    <View style={styles.header}>
      {title && <Text style={styles.monthTitle}>{title}</Text>}
      <View style={styles.right}>{children}</View>
    </View>
  );
};
