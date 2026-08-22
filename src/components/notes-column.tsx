import { type FC } from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  notesColumn: {
    flex: 1,
    flexDirection: 'column',
    borderLeftWidth: 0.5,
    borderLeftColor: '#E0E0E0',
  },
});

export const NotesColumn: FC = () => {
  return <View style={styles.notesColumn} />;
};
