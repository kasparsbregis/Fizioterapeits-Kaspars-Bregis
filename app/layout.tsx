import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const DMSans = localFont({
  src: "./fonts/DMSansVF.ttf",
  variable: "--font-dm-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Fizioterapeits Kaspars Breģis",
  description: "Sertificēts fizioterapeits Siguldā",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${DMSans.className}  bg-[#ceecea] antialiased`}>
        {children}
      </body>
    </html>
  );
}
