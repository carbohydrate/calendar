const TEST_PHOTO = '/images/test.jpg';

const monthPhotos = import.meta.glob('/images/**/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const birthdayPhotos = import.meta.glob('/images/birthdays/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

export const getMonthPhoto = (month: number, index: number): string => {
  const match = Object.keys(monthPhotos).find((path) =>
    path.startsWith(`/images/${month}/${index}.`),
  );

  return match ? monthPhotos[match] : TEST_PHOTO;
};

export const getBirthdayPhoto = (name: string): string => {
  const match = Object.keys(birthdayPhotos).find((path) =>
    path.startsWith(`/images/birthdays/${name}.`),
  );

  return match ? birthdayPhotos[match] : TEST_PHOTO;
};
