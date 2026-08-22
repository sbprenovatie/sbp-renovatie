import './globals.css';

export const metadata = {
  title: 'SBP Renovatie — Pleister-, tegel- en schilderwerk in Vlaanderen',
  description: 'SBP Renovatie: pleisterwerk, tegelwerken en schilderwerk met maatvoering. Antwerpen & heel Vlaanderen. Vraag je gratis plaatsbezoek aan.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
