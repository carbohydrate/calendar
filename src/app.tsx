import { Document } from '@react-pdf/renderer';
import { type FC } from 'react';
import { Month } from './components/month';
import { SHOW_BLANK_FIRST_PAGE, YEAR } from './constants';
import { BlankPage } from './components/blank-page';
import { OverviewPage } from './components/overview-page';
import { HolidaysPage } from './components/holidays-page';
import { getMonthsInYear } from './utils/get-months-in-year';

interface AppProps {
  // the print version, see `npm run export`
  print?: boolean;
}

export const App: FC<AppProps> = (props) => {
  const { print } = props;

  const months = getMonthsInYear(YEAR);

  return (
    <Document pageLayout='twoPageLeft'>
      {(print || SHOW_BLANK_FIRST_PAGE) && <BlankPage />}
      <OverviewPage year={YEAR} />
      <HolidaysPage />
      {months.map((month, i) => {
        return <Month key={i} month={month} />;
      })}
      <OverviewPage year={YEAR + 1} />
    </Document>
  );
};
