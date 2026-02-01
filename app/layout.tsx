import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cavalcanti & Associados - Advocacia de Excelência em Fortaleza",
  description:
    "Escritório de advocacia premium especializado em Direito Civil, Empresarial, Trabalhista e Penal. Mais de 20 anos de experiência em Fortaleza, CE.",
  keywords:
    "advocacia, advogado Fortaleza, direito civil, direito empresarial, escritório de advocacia",
  authors: [{ name: "Cavalcanti & Associados" }],
  openGraph: {
    title: "Cavalcanti & Associados - Advocacia de Excelência",
    description: "Escritório de advocacia premium em Fortaleza, CE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
