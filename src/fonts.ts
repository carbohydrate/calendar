import { Font } from '@react-pdf/renderer';

const LEAGUE_SPARTAN_WEIGHTS: [number, string][] = [
  [100, 'Thin'],
  [200, 'ExtraLight'],
  [300, 'Light'],
  [400, 'Regular'],
  [500, 'Medium'],
  [600, 'SemiBold'],
  [700, 'Bold'],
  [800, 'ExtraBold'],
  [900, 'Black'],
];

// `fontsDir` is a URL in the browser ('/fonts') and a file path when exporting
export const registerFonts = (fontsDir: string) => {
  const fonts = LEAGUE_SPARTAN_WEIGHTS.map(([fontWeight, name]) => ({
    src: `${fontsDir}/League_Spartan/static/LeagueSpartan-${name}.ttf`,
    fontWeight,
  }));

  Font.register({ family: 'League Spartan', fonts });
};
