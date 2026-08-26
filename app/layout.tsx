import type { Metadata,Viewport } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

import { Analytics } from '@vercel/analytics/react';
import WhatsAppButton from "@/components/WhatsAppButton";
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pacifichotel.cm"),

  title: {
    default: "Pacific Hotel | Hôtel à Obala, Cameroun",
    template: "%s | Pacific Hotel",
  },

  description:
    "Découvrez Pacific Hotel à Obala, près de Yaoundé. Chambres confortables, restaurant et services adaptés à vos séjours au Cameroun.",
   

  keywords: [
    "Pacific Hotel",
    "hôtel Obala",
    "hôtel à Obala",
    "hôtel Cameroun",
    "hôtel près de Yaoundé",
  ],

  openGraph: {
    title: "Pacific Hotel | Hôtel à Obala",
    description:
      "Découvrez Pacific Hotel à Obala, près de Yaoundé.",
    url: "https://www.pacifichotel.cm",
    siteName: "Pacific Hotel",
    type: "website",
    locale: "fr_CM",
  },

  robots: {
    index: true,
    follow: true,
  },
};
export const viewport: Viewport = {
  themeColor: "#E5B83F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${openSans.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
     <WhatsAppButton/>
        <Analytics /> 
      </body>
    </html>
  );
}
