import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./performance.css";
import Script from "next/script";

const DMSans = localFont({
  src: "./fonts/DMSansVF.ttf",
  variable: "--font-dm-sans",
  weight: "100 200 300 400 500 600 700 800 900",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fiziokaspars.lv"),
  title: {
    default: "Fizioterapeits Siguldā - Breģis Kaspars - fizioterapeita prakse",
    template: `%s | Fizioterapeits Siguldā - Breģis Kaspars - fizioterapeita prakse`,
  },
  alternates: {
    canonical: "https://www.fiziokaspars.lv",
  },
  icons: {
    icon: "https://www.fiziokaspars.lv/favicon.ico",
  },
  description:
    "Fizioterapeits Siguldā. Piedāvāju fizioterapeita konsultāciju, ārstniecisko vingrošanu, masāžu un kinezioloģisko teipošanu. Atrodos Siguldā, Pils ielā 13a.",
  keywords: [
    "fizioterapeits",
    "fizioterapeits Sigulda",
    "vingrošana",
    "vingrošana Sigulda",
    "masāža",
    "masāža Sigulda",
    "teipošana",
    "teipošana Sigulda",
  ],
  openGraph: {
    title: "Fizioterapeits Siguldā - Breģis Kaspars - fizioterapeita prakse",
    description:
      "Fizioterapeits Siguldā. Piedāvāju fizioterapeita konsultāciju, ārstniecisko vingrošanu, masāžu un kinezioloģisko teipošanu. Atrodos Siguldā, Pils ielā 13a.",
    url: "https://www.fiziokaspars.lv",
    siteName: "Fizioterapeits Siguldā - Breģis Kaspars - fizioterapeita prakse",
    images: [
      {
        url: "https://www.fiziokaspars.lv/assets/og-logo-fiziokaspars.png",
        width: 1200,
        height: 630,
        alt: "Fizioterapeits Siguldā - Breģis Kaspars - fizioterapeita prakse",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://tile.openstreetmap.org" />
        <link rel="dns-prefetch" href="https://tile.openstreetmap.org" />

        {/* Preload critical resources */}
        {/* <link
          rel="preload"
          href="/kasparsbregisfizioterapeits7.png"
          as="image"
        /> */}

        {/* Google Tag Manager - Deferred */}
        <Script
          id="google-tag-manager"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W72J6HPC');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${DMSans.className}  bg-[#ceecea] antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W72J6HPC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
