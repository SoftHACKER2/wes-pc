"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="glow" aria-hidden="true" />

      <div className="content">
        <p className="tag">PREMIUM CUSTOM GAMING PCS · UK BUILT</p>

        <h1>
          Built for<br />
          <span className="accent">Performance</span>
        </h1>

        <p className="desc">
          Hand-assembled custom PCs designed for smooth gameplay, clean builds,
          and long-term reliability. Every machine is tested before it ships.
        </p>

        <div className="buttons">
          <Link href="/builds" className="primary">Explore Builds</Link>
          <Link href="/configurator" className="secondary">Custom Build →</Link>
        </div>

        <p className="trust">50+ builds · UK based · Fast shipping</p>
      </div>

      <style jsx>{`
        /* ── Mobile base ─────────────────────── */
        .hero {
          min-height: 100svh; /* svh = safe viewport height on iOS */
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          padding: 80px 24px 48px;
          background: #080808;
        }

        .glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 80% 50% at 50% 20%,
            rgba(120, 120, 255, 0.06) 0%,
            transparent 70%
          );
          animation: floatGlow 14s ease-in-out infinite;
          pointer-events: none;
        }

        .content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          width: 100%;
          max-width: 760px;
        }

        .tag {
          font-size: 9px;
          font-weight: 600;
          color: #444;
          letter-spacing: 3px;
          margin-bottom: 20px;
          animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.05s both;
        }

        h1 {
          font-size: 48px;
          font-weight: 900;
          line-height: 1.0;
          letter-spacing: -2px;
          margin-bottom: 20px;
          animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.16s both;
        }

        .accent {
          background: linear-gradient(135deg, #fff 30%, #666 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .desc {
          color: #666;
          font-size: 15px;
          line-height: 1.7;
          max-width: 320px;
          margin-bottom: 32px;
          animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.28s both;
        }

        .buttons {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
          max-width: 280px;
          margin-bottom: 28px;
          animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.40s both;
        }

        .primary, .secondary {
          display: block;
          width: 100%;
          padding: 15px 24px;
          border-radius: 13px;
          font-size: 15px;
          font-weight: 700;
          text-align: center;
          border: none;
          cursor: pointer;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .primary { background: #fff; color: #000; }
        .secondary {
          background: rgba(255,255,255,0.06);
          color: #bbb;
          border: 1px solid rgba(255,255,255,0.12);
        }

        .primary:active, .secondary:active { opacity: 0.8; transform: scale(0.98); }

        .trust {
          font-size: 11px;
          color: #333;
          letter-spacing: 0.5px;
          animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.52s both;
        }

        /* ── Desktop overrides ───────────────── */
        @media (min-width: 769px) {
          .hero { padding: 100px 24px 60px; }

          h1 { font-size: clamp(60px, 8vw, 90px); letter-spacing: -3px; }

          .tag { font-size: 10px; letter-spacing: 4px; }

          .desc { font-size: 17px; max-width: 480px; margin-bottom: 40px; }

          .buttons {
            flex-direction: row;
            justify-content: center;
            max-width: none;
            width: auto;
          }

          .primary, .secondary {
            width: auto;
            padding: 14px 28px;
          }

          .primary:hover { transform: translateY(-3px); box-shadow: 0 8px 30px rgba(255,255,255,0.12); }
          .secondary:hover { transform: translateY(-3px); color: #fff; border-color: rgba(255,255,255,0.25); }
        }
      `}</style>
    </section>
  );
}
