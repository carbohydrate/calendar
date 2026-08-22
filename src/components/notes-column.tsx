import { type FC } from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import { NotesHeader } from './day-header/notes-header';

const styles = StyleSheet.create({
  notesColumn: {
    flex: 1,
    flexDirection: 'column',
  },
});

export const NotesColumn: FC = () => {
  return (
    <View style={styles.notesColumn}>
      <NotesHeader />
    </View>
  );
};
