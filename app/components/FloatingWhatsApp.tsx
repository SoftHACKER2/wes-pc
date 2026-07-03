"use client";

import { useState } from "react";

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://wa.me/447395530395?text=Hi%20Wes%2C%20I%27m%20interested%20in%20a%20custom%20PC%21"
      target="_blank"
      rel="noopener noreferrer"
      className="fab"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Chat on WhatsApp"
    >
      {hovered && <span className="label">Chat with Wes</span>}
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.462.664 4.769 1.822 6.756L2 30l7.438-1.793A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#25D366"/>
        <path d="M22.5 19.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01s-.52.07-.79.37c-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" fill="#fff"/>
      </svg>

      <style jsx>{`
        .fab {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 999;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #25D366;
          border-radius: 50px;
          padding: 12px;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease, padding 0.2s ease;
          text-decoration: none;
        }

        .fab:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(37, 211, 102, 0.45);
          padding: 12px 18px 12px 12px;
        }

        .icon { width: 28px; height: 28px; flex-shrink: 0; }

        .label {
          font-size: 13px;
          font-weight: 700;
          color: #fff;
          white-space: nowrap;
          animation: fadeIn 0.15s ease both;
        }

        @media (max-width: 480px) {
          .fab { bottom: 20px; right: 20px; }
        }
      `}</style>
    </a>
  );
}
