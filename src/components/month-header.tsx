import { type FC, type ReactNode } from 'react';
import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import { Colors } from './colors';
import { MONTH_PAGE_PADDING } from './month-shared-styles';
import { getMonthPhoto } from '../utils/photo-utils';
import type { DateTime } from 'luxon';

// Fixed so the photos sit in the same place every month. Fits "SEPTEMBER", the longest name.
const TITLE_WIDTH = 200;

const styles = StyleSheet.create({
  header: {
    height: 120,
    // paddingTop: MONTH_PAGE_PADDING,
    paddingRight: MONTH_PAGE_PADDING,
    // paddingBottom: MONTH_PAGE_PADDING,
    paddingLeft: MONTH_PAGE_PADDING,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
  },
  title: {
    width: TITLE_WIDTH,
    color: Colors.white,
    textTransform: 'uppercase',
  },
  titleMonth: {
    fontSize: 36,
    fontWeight: 500,
    letterSpacing: 2,
  },
  titleYear: {
    fontSize: 15,
    fontWeight: 400,
    letterSpacing: 6,
  },
  right: {
    flexDirection: 'row',
    gap: 12,
    marginLeft: 'auto',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  image: {
    height: 100,
    width: 130,
    objectFit: 'cover',
    borderRadius: 6,
  },
});

interface MonthHeaderProps {
  month: DateTime<true>;
  showTitle?: boolean;
  children?: ReactNode;
}

export const MonthHeader: FC<MonthHeaderProps> = (props) => {
  const { month, showTitle, children } = props;

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        {showTitle && (
          <View style={styles.title}>
            <Text style={styles.titleMonth}>{month.monthLong}</Text>
            <Text style={styles.titleYear}>{month.year}</Text>
          </View>
        )}
        <View style={styles.imageContainer}>
          {showTitle ? (
            <>
              <Image src={getMonthPhoto(month.month, 1)} style={styles.image} />
              <Image src={getMonthPhoto(month.month, 2)} style={styles.image} />
            </>
          ) : (
            <>
              <Image src={getMonthPhoto(month.month, 3)} style={styles.image} />
              <Image src={getMonthPhoto(month.month, 4)} style={styles.image} />
            </>
          )}
        </View>
        <View style={styles.right}>{children}</View>
      </View>
    </View>
  );
};
