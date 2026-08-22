import { type FC } from 'react';
import { DayHeaderText } from './day-header-text';
import { View } from '@react-pdf/renderer';
import { sharedHeaderStyles } from './shared-styles';

export const NotesHeader: FC = () => {
  return (
    <View style={sharedHeaderStyles.cellStyle}>
      <DayHeaderText text='Notes' />
    </View>
  );
};
