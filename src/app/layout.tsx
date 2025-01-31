import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.scss";

export const metadata: Metadata = {
  title:
    "Pixel Box | Criação de Sites Responsivos e Personalizados com SEO e Suporte",
  description:
    "Criação de sites personalizados e responsivos para empresas de todos os tamanhos. Oferecemos design moderno, SEO otimizado, entrega rápida e suporte contínuo. Aumente sua presença online conosco.",
};

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <html lang="pt-br">
      {isProduction && (
        <Script id="tagmanager">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
   new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
   'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
   })(window,document,'script','dataLayer','GTM-KTT277H4');`}
        </Script>
      )}

      <body className={poppins.className}>{children}</body>
    </html>
  );
}
