import type { Metadata } from "next";
import "./globals.css";
// import AnnouncementBanner from "@/components/layout/AnnouncementBanner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { organizationSchema, webSiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://quicksecure.com"),
  title: {
    default: "QuickSecure - Safer Schools Start Here",
    template: "%s | QuickSecure",
  },
  description:
    "The unified K-12 platform combining emergency response, daily operations, hardware, and integrations into one system.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  openGraph: {
    title: "QuickSecure - Safer Schools Start Here",
    description:
      "The unified K-12 platform combining emergency response, daily operations, hardware, and integrations into one system.",
    siteName: "QuickSecure",
    type: "website",
    locale: "en_US",
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
        <link
          rel="alternate"
          type="application/rss+xml"
          title="QuickSecure Blog"
          href="/feed.xml"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema()),
          }}
        />
      </head>
      <body className="antialiased">
        {/* <AnnouncementBanner /> */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
