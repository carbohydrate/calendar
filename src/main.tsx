import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app.tsx';
import { Font, PDFViewer } from '@react-pdf/renderer';

Font.register({
  family: 'League Spartan',
  fonts: [
    { src: '/fonts/League_Spartan/static/LeagueSpartan-Thin.ttf', fontWeight: 100 },
    { src: '/fonts/League_Spartan/static/LeagueSpartan-ExtraLight.ttf', fontWeight: 200 },
    { src: '/fonts/League_Spartan/static/LeagueSpartan-Light.ttf', fontWeight: 300 },
    { src: '/fonts/League_Spartan/static/LeagueSpartan-Regular.ttf', fontWeight: 400 },
    { src: '/fonts/League_Spartan/static/LeagueSpartan-Medium.ttf', fontWeight: 500 },
    { src: '/fonts/League_Spartan/static/LeagueSpartan-SemiBold.ttf', fontWeight: 600 },
    { src: '/fonts/League_Spartan/static/LeagueSpartan-Bold.ttf', fontWeight: 700 },
    { src: '/fonts/League_Spartan/static/LeagueSpartan-ExtraBold.ttf', fontWeight: 800 },
    { src: '/fonts/League_Spartan/static/LeagueSpartan-Black.ttf', fontWeight: 900 },
  ],
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PDFViewer width='100%' height='100%'>
      <App />
    </PDFViewer>
  </StrictMode>,
);
