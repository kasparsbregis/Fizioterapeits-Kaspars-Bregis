import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const DMSans = localFont({
  src: "./fonts/DMSansVF.ttf",
  variable: "--font-dm-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Breģis Kaspars - fizioterapeita prakse",
  description:
    "Fizioterapeits Siguldā. Piedāvāju ārstniecisko vingrošanu, masāžu un kinezioloģisko teipošanu. Atrodos Siguldā, Pils ielā 13a. Zvani +371 26779084.",
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
    title: "Breģis Kaspars - fizioterapeita prakse | Sigulda",
    description:
      "Fizioterapeits Siguldā. Piedāvāju ārstniecisko vingrošanu, masāžu un kinezioloģisko teipošanu. Atrodos Siguldā, Pils ielā 13a.",
    url: "https://www.fiziokaspars.lv",
    siteName: "Breģis Kaspars - fizioterapeita prakse",
    images: [
      {
        url: "https://www.fiziokaspars.lv/assets/og-logo.png",
        width: 1355,
        height: 300,
        alt: "Fizioterapija Siguldā - Breģis Kaspars",
      },
    ],
    locale: "lv_LV",
    type: "website",
  },
  alternates: {
    canonical: "https://www.fiziokaspars.lv",
    languages: {
      "lv-LV": "https://www.fiziokaspars.lv",
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Breģis Kaspars - fizioterapeita prakse",
              telephone: "+371 26779084",
              url: "https://www.fiziokaspars.lv",
              image: "https://www.fiziokaspars.lv/assets/og-image.png",
            }),
          }}
        />
      </Head>
      <body className={`${DMSans.className}  bg-[#ceecea] antialiased`}>
        {children}
      </body>
    </html>
  );
}
