const TEST_PHOTO = '/private/images/test.jpg';

const monthPhotos = import.meta.glob('/private/images/**/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const birthdayPhotos = import.meta.glob('/private/images/birthdays/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

// When exporting (`npm run export`), react-pdf reads photos from disk, so use a file path
// relative to the project root instead of the dev server URL.
const toSrc = (path: string, url: string): string => {
  const src = import.meta.env.SSR ? `.${path}` : url;

  return src;
};

export const getMonthPhoto = (month: number, index: number): string => {
  const match = Object.keys(monthPhotos).find((path) =>
    path.startsWith(`/private/images/${month}/${index}.`),
  );

  return match ? toSrc(match, monthPhotos[match]) : toSrc(TEST_PHOTO, TEST_PHOTO);
};

export const getBirthdayPhoto = (name: string): string => {
  const match = Object.keys(birthdayPhotos).find((path) =>
    path.startsWith(`/private/images/birthdays/${name}.`),
  );

  return match ? toSrc(match, birthdayPhotos[match]) : toSrc(TEST_PHOTO, TEST_PHOTO);
};
