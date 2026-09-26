import type { Birthday } from './birthdays';

// Example data. Copy to src/private/birthdays.ts (gitignored) and fill in real birthdays.
// `name` also matches the photo at images/birthdays/<name>.jpg.
export const BIRTHDAYS: Birthday[] = [
  {
    name: 'alice',
    month: 3,
    day: 14,
  },
  {
    name: 'bob',
    month: 7,
    day: 4,
  },
  {
    name: 'carol',
    month: 10,
    day: 31,
  },
];
