import { StyleSheet } from '@react-pdf/renderer';

// Side padding for month pages. The header uses it too, so the title lines up with the grid.
export const MONTH_PAGE_PADDING = 26;

export const monthSharedStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: MONTH_PAGE_PADDING,
    paddingBottom: MONTH_PAGE_PADDING,
    paddingLeft: MONTH_PAGE_PADDING,
  },
});
