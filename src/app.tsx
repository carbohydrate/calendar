import { Document } from '@react-pdf/renderer';
import { type FC } from 'react';
import { Month } from './components/month';
import { DateTime } from 'luxon';
import { YEAR } from './constants';

const getMonthsInYear = () => {
  const months = Array.from({ length: 12 }, (_, i) => {
    return DateTime.local(YEAR, i + 1, 1);
  }).filter((d): d is DateTime<true> => d.isValid);

  return months;
};

export const App: FC = () => {
  const months = getMonthsInYear();

  return (
    <Document pageLayout='twoPageLeft'>
      {months.map((month, i) => {
        return <Month key={i} month={month} />;
      })}
    </Document>
  );
};
