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
  metadataBase: new URL("https://desafiocoredefine.com.br"),
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
    url: "https://desafiocoredefine.com.br",
    title: "Desafio Core Define – Transforme seu corpo e bem-estar",
    description: "Fortaleça seu core, autoestima e bem-estar com um método que já transformou centenas de mulheres. Entre na lista e seja a próxima.",
    siteName: "Desafio Core Define",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Desafio Core Define - Transforme seu corpo e bem-estar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desafio Core Define – Transforme seu corpo e bem-estar",
    description: "Fortaleça seu core, autoestima e bem-estar com um método exclusivo para mulheres.",
    images: ["/images/twitter-image.jpg"],
    creator: "@coredefine",
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
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Desafio Core Define",
              "url": "https://desafiocoredefine.com.br",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://desafiocoredefine.com.br/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "sameAs": [
                "https://www.instagram.com/coredefine",
                "https://www.facebook.com/coredefine",
                "https://www.youtube.com/coredefine"
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
