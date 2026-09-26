import { type FC, type ReactNode } from 'react';
import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import { Colors } from './colors';
import { DEFAULT_PAGE_PADDING } from './bleed-page';
import { getMonthPhoto } from '../utils/photo-utils';
import type { DateTime } from 'luxon';

const styles = StyleSheet.create({
  header: {
    height: 120,
    // paddingTop: DEFAULT_PAGE_PADDING,
    paddingRight: DEFAULT_PAGE_PADDING,
    // paddingBottom: DEFAULT_PAGE_PADDING,
    paddingLeft: DEFAULT_PAGE_PADDING,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
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
  title?: string;
  children?: ReactNode;
}

export const MonthHeader: FC<MonthHeaderProps> = (props) => {
  const { month, title, children } = props;

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        {title && <Text style={styles.monthTitle}>{title}</Text>}
        <View style={styles.imageContainer}>
          {title ? (
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
