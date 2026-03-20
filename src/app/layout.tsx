import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tamminen Konsult AB",
  legalName: "Tamminen Konsult AB",
  url: "https://tamminenab.se",
  logo: "https://tamminenab.se/brand/tamminen-logo.svg",
  image: "https://tamminenab.se/brand/startpage-hero.png",
  telephone: "+46 70-277 17 40",
  email: "rebecka@tamminenab.se",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Utsiktsvägen 6",
    postalCode: "605 70",
    addressLocality: "Svartinge",
    addressCountry: "SE",
  },
  sameAs: ["https://www.linkedin.com/in/rebecka-tamminen-240b02a5/"],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tamminenab.se"),
  title: {
    default: "Tamminen Konsult AB",
    template: "%s | Tamminen Konsult AB",
  },
  description:
    "Bygg- och projektledning med fuktsäkerhet i fokus. Tamminen Konsult AB drivs av Rebecka Tamminen.",
  applicationName: "Tamminen Konsult AB",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon/favicon.ico"],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "/",
    siteName: "Tamminen Konsult AB",
    title: "Tamminen Konsult AB",
    description:
      "Bygg- och projektledning med fuktsäkerhet i fokus. Tamminen Konsult AB drivs av Rebecka Tamminen.",
    images: [
      {
        url: "/brand/startpage-hero.png",
        width: 1200,
        height: 630,
        alt: "Tamminen Konsult AB",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tamminen Konsult AB",
    description:
      "Bygg- och projektledning med fuktsäkerhet i fokus. Tamminen Konsult AB drivs av Rebecka Tamminen.",
    images: ["/brand/startpage-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
