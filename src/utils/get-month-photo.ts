const photos = import.meta.glob('/images/**/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const TEST_PHOTO = '/images/test.jpg';

export function getMonthPhoto(month: number, index: number): string {
  const match = Object.keys(photos).find((path) =>
    path.startsWith(`/images/${month}/${index}.`),
  );

  return match ? photos[match] : TEST_PHOTO;
}
