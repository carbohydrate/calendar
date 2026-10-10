import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app.tsx';
import { PDFViewer } from '@react-pdf/renderer';
import { registerFonts } from './fonts';

registerFonts('/fonts');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PDFViewer width='100%' height='100%'>
      <App />
    </PDFViewer>
  </StrictMode>,
);
