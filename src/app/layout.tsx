import { GlobalStateProvider } from "@/context/GlobalStateContext";
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

      {isProduction && (
        <Script id="pixelMeta">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1459820958423868');
fbq('track', 'PageView');
`}</Script>
      )}

      <body className={poppins.className}>
        <GlobalStateProvider>{children}</GlobalStateProvider>
      </body>
    </html>
  );
}
