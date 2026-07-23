import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "King Services — Parceira Autorizada Vivo Empresas",
  description:
    "King Services — Parceira Autorizada Vivo Empresas. Conectividade e tecnologia para empresas que não podem parar: telefonia móvel, internet empresarial, PABX, cloud e segurança digital.",
};

export const viewport: Viewport = {
  themeColor: "#2A1240",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-body text-graphite bg-white antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
