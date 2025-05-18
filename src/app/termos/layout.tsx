import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Termos de Uso | Desafio Core Define",
  description: "Termos e condições de uso do programa Desafio Core Define. Leia atentamente antes de participar do programa.",
  alternates: {
    canonical: "/termos",
  },
  openGraph: {
    title: "Termos de Uso | Desafio Core Define",
    description: "Termos e condições de uso do programa Desafio Core Define. Leia atentamente antes de participar do programa.",
    url: "https://desafiocoredefine.com.br/termos",
    type: "article",
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
  },
  twitter: {
    card: "summary",
    title: "Termos de Uso | Desafio Core Define",
    description: "Termos e condições de uso do programa Desafio Core Define.",
  },
};

export default function TermosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="terms-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Termos de Uso | Desafio Core Define",
            "description": "Termos e condições de uso do programa Desafio Core Define.",
            "publisher": {
              "@type": "Organization",
              "name": "Desafio Core Define",
              "logo": {
                "@type": "ImageObject",
                "url": "https://desafiocoredefine.com.br/logo.png"
              }
            },
            "datePublished": new Date().toISOString(),
            "dateModified": new Date().toISOString(),
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Início",
                  "item": "https://desafiocoredefine.com.br"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Termos de Uso",
                  "item": "https://desafiocoredefine.com.br/termos"
                }
              ]
            }
          })
        }}
      />
      {children}
    </>
  );
} 