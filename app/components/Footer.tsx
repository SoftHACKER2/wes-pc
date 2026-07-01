"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="inner">
        <div className="brand">
          <p className="logo">WES PCS</p>
          <p className="tagline">Custom gaming PCs, hand-built in the UK.</p>
          <a href="mailto:wespcs@gmail.com" className="email">wespcs@gmail.com</a>
        </div>

        <div className="cols">
          <div className="col">
            <p className="heading">Builds</p>
            <Link href="/builds/budget">Budget Killer — £799</Link>
            <Link href="/builds/mid">Best Price — £1,200</Link>
            <Link href="/builds/high">Gaming Beast — £1,600</Link>
            <Link href="/builds/extreme">Ultimate — £2,400</Link>
          </div>

          <div className="col">
            <p className="heading">Pages</p>
            <Link href="/configurator">PC Configurator</Link>
            <Link href="/cart">Your Cart</Link>
          </div>
        </div>
      </div>

      <div className="bottom">
        <p>© {new Date().getFullYear()} WES PCS. All rights reserved.</p>
        <p className="right">UK Based · Fully Insured Shipping</p>
      </div>

      <style jsx>{`
        /* ── Mobile base ─────────────────────── */
        .footer {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 52px 5% 28px;
        }

        .inner { display: flex; flex-direction: column; gap: 36px; margin-bottom: 40px; }

        .logo { font-weight: 900; font-size: 15px; letter-spacing: 3px; margin-bottom: 8px; }
        .tagline { color: #444; font-size: 13px; margin-bottom: 10px; line-height: 1.5; }
        .email { color: #444; font-size: 13px; transition: color 0.2s ease; }
        .email:active { color: #fff; }

        .cols { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }

        .col { display: flex; flex-direction: column; gap: 10px; }

        .heading {
          font-size: 10px; letter-spacing: 3px; color: #2e2e2e;
          font-weight: 600; margin-bottom: 2px;
        }

        .col a { color: #444; font-size: 13px; transition: color 0.2s ease; }
        .col a:active { color: #fff; }

        .bottom {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 22px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .bottom p { color: #2e2e2e; font-size: 11px; }

        /* ── Desktop ─────────────────────────── */
        @media (min-width: 769px) {
          .footer { padding: 72px 8% 32px; }
          .inner { flex-direction: row; gap: 60px; align-items: flex-start; }
          .brand { flex: 2; }
          .cols { flex: 3; grid-template-columns: 1fr 1fr; gap: 40px; }
          .bottom { flex-direction: row; justify-content: space-between; }
          .email:hover { color: #fff; }
          .col a:hover { color: #fff; }
        }
      `}</style>
    </footer>
  );
}
