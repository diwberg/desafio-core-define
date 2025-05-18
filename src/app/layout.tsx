import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Desafio Core Define – Lista de Espera Oficial",
  description: "Fortaleça seu core, autoestima e bem-estar com um método que já transformou centenas de mulheres. Entre na lista e seja a próxima.",
  keywords: "core, definição, mulheres, fitness, saúde, bem-estar, desafio, treino feminino, definição abdominal",
  authors: [{ name: "Equipe Core Define" }],
  creator: "Equipe Core Define",
  publisher: "Core Define",
  metadataBase: new URL("https://lista.cuidandodemim.org"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://lista.cuidandodemim.org",
    title: "Desafio Core Define – Fortaleça seu Corpo e Mente",
    description: "Método exclusivo para mulheres que transformou centenas de vidas. Entre na lista de espera e seja a próxima!",
    siteName: "Desafio Core Define",
    images: [
      {
        url: "/images/og-image-new.jpg",
        width: 1200,
        height: 630,
        alt: "Desafio Core Define - Transforme seu corpo e bem-estar",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#8A2BE2",
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:alt": "Desafio Core Define - Transforme seu corpo e bem-estar",
    "og:image:type": "image/png",
    "theme-color": "#8A2BE2",
    "msapplication-TileColor": "#8A2BE2",
    "msapplication-TileImage": "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta property="og:image" content="https://lista.cuidandodemim.org/images/og-image-new.jpg" />
        <meta property="og:image:secure_url" content="https://lista.cuidandodemim.org/images/og-image-new.jpg" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Desafio Core Define - Transforme seu corpo e bem-estar" />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Desafio Core Define",
              "url": "https://lista.cuidandodemim.org",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://lista.cuidandodemim.org/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "sameAs": [
                "https://www.instagram.com/amandha1/",
                "https://www.facebook.com/share/r/18WnyXGDAq/",
              ]
            })
          }}
        />
        <meta name="theme-color" content="#8A2BE2" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
