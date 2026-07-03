import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";
import type { Metadata, Viewport } from "next";

const inter = Inter({ subsets: ["latin"], display: "optional" });

export const metadata: Metadata = {
  title: "WES PCS — Custom Gaming PCs, Built in the UK",
  description: "Hand-built custom gaming PCs for every budget. Built, tested and shipped across the UK by Wes — a passionate PC builder with 5 years experience. PayPal protected payments.",
  keywords: "custom gaming PC UK, custom PC builder UK, gaming PC cheap UK, custom built PC, budget gaming PC UK, WES PCS",
  openGraph: {
    title: "WES PCS — Custom Gaming PCs, Built in the UK",
    description: "Hand-built custom gaming PCs for every budget. Built, tested and shipped across the UK.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0MLXFXP4JH" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-0MLXFXP4JH');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "WES PCS",
              "description": "Hand-built custom gaming PCs for every budget. Built, tested and shipped across the UK.",
              "url": "https://wes-pc.vercel.app",
              "telephone": "+447395530395",
              "email": "thomasbaratti2@gmail.com",
              "address": { "@type": "PostalAddress", "addressCountry": "GB" },
              "priceRange": "£799 – £2,400",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "50"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
