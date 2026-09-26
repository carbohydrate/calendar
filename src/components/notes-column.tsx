import { type FC } from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import { CELL_BORDER_COLOR, CELL_BORDER_WIDTH } from '../constants';

const styles = StyleSheet.create({
  notesColumn: {
    flex: 1,
    flexDirection: 'column',
    borderLeftWidth: CELL_BORDER_WIDTH,
    borderLeftColor: CELL_BORDER_COLOR,
  },
});

export const NotesColumn: FC = () => {
  return <View style={styles.notesColumn} />;
};
