import path from 'node:path';
import { renderToFile } from '@react-pdf/renderer';
import { App } from '../src/app';
import { registerFonts } from '../src/fonts';
import { YEAR } from '../src/constants';

export const exportPdf = async (root: string, outDir: string): Promise<string> => {
  registerFonts(path.join(root, 'public', 'fonts'));

  const outPath = path.join(outDir, `calendar-${YEAR}.pdf`);
  await renderToFile(<App print />, outPath);

  return outPath;
};
