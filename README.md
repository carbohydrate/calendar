# Calendar

A printable monthly photo calendar, built with React and [`@react-pdf/renderer`](https://react-pdf.org/). Each month is a two-page spread, with a year overview and a holiday list at the front.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the dev server with a live PDF preview in the browser |
| `npm run export` | Writes the print-ready PDF to `private/export/calendar-<year>.pdf` |
| `npm run build` | Type-checks and builds |
| `npm run lint` | Lints with oxlint |
| `npm run format` | Formats with oxfmt |

## Setup

- The year is `YEAR` in `src/constants.ts`.
- Photos and personal data live in `private/`, which is gitignored:

  ```
  private/
    birthdays.ts                 # same shape as src/birthdays.example.ts
    images/<month>/<1-4>.jpg     # header photos for each month
    images/birthdays/<name>.jpg  # photo for each birthday
    images/test.jpg              # placeholder when a photo is missing
  ```

  Without `private/birthdays.ts`, the example birthdays in `src/birthdays.example.ts` are used.

## Printing

`npm run export` produces the print version: it adds a blank first page, which the preview leaves out (see `SHOW_BLANK_FIRST_PAGE` in `src/constants.ts`). Pages are 8.5" × 11" with no bleed, meant for borderless printing.
