import { type FC } from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import type { DateTime } from 'luxon';
import { BleedPage } from './bleed-page';
import { FrontPageTitle } from './front-page-title';
import { MiniMonth } from './mini-month';
import { Colors } from './colors';
import { YEAR } from '../constants';

const MONTHS_PER_ROW = 3;
// space between months. Down is a bit smaller than across so they look equal: 5-week
// months leave an empty row, and the month labels add space above.
const GAP_ACROSS = 36;
const GAP_DOWN = 28;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    gap: GAP_DOWN,
    marginTop: 10,
    // the mini months inherit this
    color: Colors.primary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: GAP_ACROSS,
  },
});

interface OverviewPageProps {
  months: DateTime<true>[];
}

export const OverviewPage: FC<OverviewPageProps> = (props) => {
  const { months } = props;

  const rows: DateTime<true>[][] = [];
  for (let i = 0; i < months.length; i += MONTHS_PER_ROW) {
    rows.push(months.slice(i, i + MONTHS_PER_ROW));
  }

  return (
    <BleedPage>
      <View style={styles.content}>
        <FrontPageTitle title={`${YEAR} Overview`} />

        <View style={styles.grid}>
          {rows.map((row, i) => (
            <View key={i} style={styles.row}>
              {row.map((month) => (
                <MiniMonth key={month.month} month={month} />
              ))}
            </View>
          ))}
        </View>
      </View>
    </BleedPage>
  );
};
