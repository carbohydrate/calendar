import { type FC } from 'react';
import { StyleSheet, Text } from '@react-pdf/renderer';
import { Colors } from './colors';

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 600,
    letterSpacing: 4,
    textTransform: 'uppercase',
    color: Colors.primary,
  },
});

interface FrontPageTitleProps {
  title: string;
}

export const FrontPageTitle: FC<FrontPageTitleProps> = (props) => {
  const { title } = props;

  return <Text style={styles.title}>{title}</Text>;
};
