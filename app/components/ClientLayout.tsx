"use client";

import { CartProvider } from "../context/CartContext";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import PageTransition from "./PageTransition";
import CookieBanner from "./CookieBanner";
import { ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <PageTransition>
        {children}
      </PageTransition>
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
    </CartProvider>
  );
}
