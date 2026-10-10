import { Document } from '@react-pdf/renderer';
import { type FC } from 'react';
import { Month } from './components/month';
import { SHOW_BLANK_FIRST_PAGE, YEAR } from './constants';
import { BlankPage } from './components/blank-page';
import { OverviewPage } from './components/overview-page';
import { HolidaysPage } from './components/holidays-page';
import { getMonthsInYear } from './utils/get-months-in-year';

export const App: FC = () => {
  const months = getMonthsInYear(YEAR);

  return (
    <Document pageLayout='twoPageLeft'>
      {SHOW_BLANK_FIRST_PAGE && <BlankPage />}
      <OverviewPage year={YEAR} />
      <HolidaysPage />
      {months.map((month, i) => {
        return <Month key={i} month={month} />;
      })}
      <OverviewPage year={YEAR + 1} />
    </Document>
  );
};
