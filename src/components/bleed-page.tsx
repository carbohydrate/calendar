import { type FC, type ReactNode } from 'react';
import { Page, StyleSheet, View } from '@react-pdf/renderer';
import { PAGE_HEIGHT, PAGE_WIDTH } from '../constants';

export const DEFAULT_PAGE_PADDING = 18;

const styles = StyleSheet.create({
  page: {
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
    fontFamily: 'League Spartan',
  },
  content: {
    paddingBottom: 18,
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
      <View style={styles.content}>{children}</View>
    </Page>
  );
};
