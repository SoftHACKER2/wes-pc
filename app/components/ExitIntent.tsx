"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ExitIntent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("exit_seen")) return;

    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 5) {
        setVisible(true);
        sessionStorage.setItem("exit_seen", "1");
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    }

    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="overlay" onClick={() => setVisible(false)}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="close" onClick={() => setVisible(false)} aria-label="Close">✕</button>

        <p className="eyebrow">BEFORE YOU GO</p>
        <h2>Not sure which build to get?</h2>
        <p className="sub">Take our 3-question quiz and we&apos;ll tell you exactly which PC matches your budget and the games you play.</p>

        <Link href="/quiz" className="primary" onClick={() => setVisible(false)}>
          Find My Perfect Build →
        </Link>

        <p className="or">or</p>

        <a href="https://wa.me/447395530395?text=Hi%20Wes!" target="_blank" rel="noopener noreferrer" className="wa">
          <svg viewBox="0 0 32 32" fill="none" width="16" height="16">
            <path d="M16 2C8.268 2 2 8.268 2 16c0 2.462.664 4.769 1.822 6.756L2 30l7.438-1.793A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#25D366"/>
            <path d="M22.5 19.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01s-.52.07-.79.37c-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" fill="#fff"/>
          </svg>
          Message Wes directly on WhatsApp
        </a>
      </div>

      <style jsx>{`
        .overlay {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(0,0,0,0.75);
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
          animation: fadeIn 0.2s ease both;
          backdrop-filter: blur(4px);
        }

        .modal {
          position: relative;
          width: 100%; max-width: 440px;
          background: #111;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          padding: 36px 28px;
          text-align: center;
          animation: fadeUp 0.3s cubic-bezier(0.16,1,0.3,1) both;
        }

        .close {
          position: absolute; top: 16px; right: 16px;
          background: none; border: none; color: #333;
          font-size: 16px; cursor: pointer;
          transition: color 0.2s ease;
        }

        .close:hover { color: #fff; }

        .eyebrow { font-size: 9px; color: #333; letter-spacing: 4px; font-weight: 700; margin-bottom: 16px; }

        h2 { font-size: 26px; font-weight: 900; letter-spacing: -1px; margin-bottom: 12px; line-height: 1.1; }

        .sub { color: #555; font-size: 14px; line-height: 1.65; margin-bottom: 24px; }

        .primary {
          display: block; padding: 15px;
          background: #fff; color: #000;
          border-radius: 12px; font-size: 15px; font-weight: 700;
          transition: opacity 0.2s ease; margin-bottom: 12px;
        }

        .primary:hover { opacity: 0.85; }

        .or { font-size: 12px; color: #2a2a2a; margin-bottom: 12px; }

        .wa {
          display: flex; align-items: center; justify-content: center;
          gap: 8px; padding: 13px;
          background: rgba(37,211,102,0.08);
          border: 1px solid rgba(37,211,102,0.15);
          border-radius: 12px; color: #25D366;
          font-size: 13px; font-weight: 600;
          transition: background 0.2s ease;
        }

        .wa:hover { background: rgba(37,211,102,0.14); }
      `}</style>
    </div>
  );
}
