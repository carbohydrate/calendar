import { BIRTHDAYS as EXAMPLE_BIRTHDAYS } from './birthdays.example';

export interface Birthday {
  name: string;
  month: number;
  day: number;
}

// Real birthdays live in src/private/birthdays.ts, which is gitignored. Falls back to the
// example data when that file doesn't exist.
const privateModules = import.meta.glob<{ BIRTHDAYS: Birthday[] }>('./private/birthdays.ts', {
  eager: true,
});

const BIRTHDAYS = privateModules['./private/birthdays.ts']?.BIRTHDAYS ?? EXAMPLE_BIRTHDAYS;

export const getBirthday = (month: number, day: number): Birthday | undefined => {
  return BIRTHDAYS.find((b) => b.month === month && b.day === day);
};
