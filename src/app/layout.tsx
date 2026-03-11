import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "QuickSecure - Safer Schools Start Here",
  description:
    "The unified K-12 platform combining emergency response, daily operations, hardware, and integrations into one system.",
  openGraph: {
    title: "QuickSecure - Safer Schools Start Here",
    description:
      "The unified K-12 platform combining emergency response, daily operations, hardware, and integrations into one system.",
    siteName: "QuickSecure",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickSecure - Safer Schools Start Here",
    description:
      "The unified K-12 platform combining emergency response, daily operations, hardware, and integrations into one system.",
  },
  icons: {
    icon: "/brand/Icon-quicksecure-logo.svg",
  },
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
          rel="preload"
          as="font"
          href="/fonts/Satoshi-Variable.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
