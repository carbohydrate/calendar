import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app.tsx';
import { PDFViewer } from '@react-pdf/renderer';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PDFViewer width={1920} height={1080}>
      <App />
    </PDFViewer>
  </StrictMode>,
);
