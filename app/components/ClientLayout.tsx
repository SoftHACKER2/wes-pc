"use client";

import { CartProvider } from "../context/CartContext";
import Footer from "./Footer";
import { ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
      <Footer />
    </CartProvider>
  );
}
