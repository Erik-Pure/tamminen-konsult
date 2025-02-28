import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tamminen Konsult",
  description:
    "Erfarna konsulter inom brandskydd, fuktsäkerhet och bygg- och projektledning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="./favicon/apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="./favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="./favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </head>
      <body className={`${figtree}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
