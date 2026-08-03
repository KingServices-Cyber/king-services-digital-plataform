import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import { CookieConsentBanner, GeoLocationModal, KingAssistant } from "@/components/ui";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
  localBusinessJsonLd,
  webSiteJsonLd,
} from "@/lib/seo";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon",
  },
};

export const viewport: Viewport = {
  themeColor: "#7C3AED",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = [localBusinessJsonLd(), webSiteJsonLd()];

  return (
    <html lang="pt-BR" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-body text-text bg-white antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <GeoLocationModal />
        <CookieConsentBanner />
        <KingAssistant />
      </body>
    </html>
  );
}
