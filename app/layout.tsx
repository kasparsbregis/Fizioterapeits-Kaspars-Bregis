import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const DMSans = localFont({
  src: "./fonts/DMSansVF.ttf",
  variable: "--font-dm-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fiziokaspars.lv'),
  title: {
    default: "Breģis Kaspars - fizioterapeita prakse",
    template: `%s | Breģis Kaspars - fizioterapeita prakse`
  },
  icons: {
    icon: "https://www.fiziokaspars.lv/favicon.ico",
  },
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
    title: "Breģis Kaspars - fizioterapeita prakse",
    description:
      "Fizioterapeits Siguldā. Piedāvāju ārstniecisko vingrošanu, masāžu un kinezioloģisko teipošanu. Atrodos Siguldā, Pils ielā 13a.",
    url: "https://www.fiziokaspars.lv",
    siteName: "Breģis Kaspars - fizioterapeita prakse",
    images: [
      {
        url: "https://www.fiziokaspars.lv/assets/og-logo.png",
        width: 1355,
        height: 300,
        alt: "Fizioterapeits Siguldā - Breģis Kaspars",
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
      <body className={`${DMSans.className}  bg-[#ceecea] antialiased`}>
        {children}
      </body>
    </html>
  );
}
