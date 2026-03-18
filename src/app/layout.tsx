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
        {children}
      </body>
    </html>
  );
}
