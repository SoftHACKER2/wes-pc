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
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
