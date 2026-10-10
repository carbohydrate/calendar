import { StyleSheet } from '@react-pdf/renderer';

// Side padding for month pages. The header uses it too, so the title lines up with the grid.
export const MONTH_PAGE_PADDING = 26;

// Padding on the bound edge, with room for the punch holes and wire. 0.625", like the
// reference planner.
export const MONTH_GUTTER_PADDING = 45;

export const monthSharedStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: MONTH_PAGE_PADDING,
    paddingBottom: MONTH_PAGE_PADDING,
    paddingLeft: MONTH_PAGE_PADDING,
  },
  // the left page of a spread is bound on its right edge
  leftPage: {
    paddingRight: MONTH_GUTTER_PADDING,
  },
  // the right page of a spread is bound on its left edge
  rightPage: {
    paddingLeft: MONTH_GUTTER_PADDING,
  },
});
