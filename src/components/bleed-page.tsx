import { type FC, type ReactNode } from 'react';
import { Page, StyleSheet, View } from '@react-pdf/renderer';
import { PAGE_HEIGHT, PAGE_WIDTH } from '../constants';

const styles = StyleSheet.create({
  page: {
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
  },
  trim: {
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 9,
    paddingRight: 9,
    flex: 1,
  },
  content: {
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 18,
    paddingRight: 18,
    borderWidth: 1,
    borderStyle: 'dashed',
    flex: 1,
  },
});

interface BleedPageProps {
  children: ReactNode;
}

export const BleedPage: FC<BleedPageProps> = (props) => {
  const { children } = props;

  return (
    <Page size={[PAGE_WIDTH, PAGE_HEIGHT]} style={styles.page}>
      <View style={styles.trim}>
        <View style={styles.content}>{children}</View>
      </View>
    </Page>
  );
};
