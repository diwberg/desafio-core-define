import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Política de Privacidade | Desafio Core Define",
  description: "Nossa política de privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais no Desafio Core Define.",
  alternates: {
    canonical: "/privacidade",
  },
  openGraph: {
    title: "Política de Privacidade | Desafio Core Define",
    description: "Nossa política de privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais no Desafio Core Define.",
    url: "https://lista.cuidandodemim.org/privacidade",
    type: "article",
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
  },
  twitter: {
    card: "summary",
    title: "Política de Privacidade | Desafio Core Define",
    description: "Saiba como protegemos seus dados no Desafio Core Define.",
  },
};

export default function PrivacidadeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="privacy-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Política de Privacidade | Desafio Core Define",
            "description": "Nossa política de privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais.",
            "publisher": {
              "@type": "Organization",
              "name": "Desafio Core Define",
              "logo": {
                "@type": "ImageObject",
                "url": "https://lista.cuidandodemim.org/logo.png"
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
                  "item": "https://lista.cuidandodemim.org"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Política de Privacidade",
                  "item": "https://lista.cuidandodemim.org/privacidade"
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