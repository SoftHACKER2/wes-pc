"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie_ok")) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie_ok", "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="banner">
      <p className="text">
        We use cookies to improve your experience. By continuing to browse, you agree to our use of cookies.
      </p>
      <div className="actions">
        <button onClick={accept} className="btn">Got it</button>
      </div>

      <style jsx>{`
        .banner {
          position: fixed;
          bottom: 80px;
          left: 16px;
          right: 16px;
          z-index: 9000;
          background: rgba(20,20,20,0.97);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 16px 18px;
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          animation: fadeUp 0.4s cubic-bezier(0.16,1,0.3,1) both;
          backdrop-filter: blur(12px);
        }

        .text {
          font-size: 12px;
          color: #555;
          line-height: 1.55;
          flex: 1;
          min-width: 200px;
        }

        .actions { display: flex; gap: 8px; flex-shrink: 0; }

        .btn {
          padding: 9px 18px;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
          border: none;
          background: #fff;
          color: #000;
          transition: opacity 0.2s ease;
        }

        .btn:hover { opacity: 0.85; }

        @media (min-width: 769px) {
          .banner {
            bottom: 24px;
            left: 24px;
            right: auto;
            max-width: 480px;
          }
        }
      `}</style>
    </div>
  );
}
