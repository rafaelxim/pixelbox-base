import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Pixel Box | Criação de Landing Pages Profissionais | Atraia Mais Clientes e Venda Mais ",
  description:
    "Criamos landing pages personalizadas, rápidas e otimizadas para conversão. Atraia mais clientes e aumente suas vendas com um site profissional.",
};

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
