// Writes the print-ready PDF to private/export/. Run with `npm run export`.
import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { createServer } from 'vite';

const root = process.cwd();

// Load the app through Vite so TSX and import.meta.glob work like in the browser
const server = await createServer({
  root,
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

try {
  const { exportPdf } = await server.ssrLoadModule('/scripts/render-pdf.tsx');
  const outDir = path.join(root, 'private', 'export');
  mkdirSync(outDir, { recursive: true });

  const outPath = await exportPdf(root, outDir);
  console.log(`Wrote ${path.relative(root, outPath)}`);
} finally {
  await server.close();
}
