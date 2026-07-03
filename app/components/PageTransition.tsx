"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 20);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transition: "opacity 0.3s ease",
    }}>
      {children}
    </div>
  );
}
