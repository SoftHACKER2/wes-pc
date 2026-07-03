"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <nav className="nav">
        <Link href="/" className="logo" onClick={close}>WES PCS</Link>

        {/* Desktop centre links */}
        <div className="links">
          <Link href="/" className="link">Home</Link>
          <Link href="/builds" className="link">Builds</Link>
          <Link href="/configurator" className="link">Configurator</Link>
          <Link href="/about" className="link">About</Link>
          <Link href="/faq" className="link">FAQ</Link>
          <Link href="/contact" className="link">Contact</Link>
        </div>

        {/* Desktop right */}
        <div className="right">
          <Link href="/cart" className="cartLink">
            Cart{cart.length > 0 && <span className="badge">{cart.length}</span>}
          </Link>
          <Link href="/configurator" className="cta">Request Build</Link>
        </div>

        {/* Mobile hamburger */}
        <button className="burger" onClick={() => setOpen(v => !v)} aria-label="Menu">
          <span className={open ? "b1 bOpen" : "b1"} />
          <span className={open ? "b2 bOpen" : "b2"} />
          <span className={open ? "b3 bOpen" : "b3"} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="drawer" onClick={close}>
          <div className="drawerBody" onClick={e => e.stopPropagation()}>
            <Link href="/" className="dLink" onClick={close}>Home</Link>
            <Link href="/builds" className="dLink" onClick={close}>Builds</Link>
            <Link href="/configurator" className="dLink" onClick={close}>Configurator</Link>
            <Link href="/about" className="dLink" onClick={close}>About</Link>
            <Link href="/faq" className="dLink" onClick={close}>FAQ</Link>
            <Link href="/contact" className="dLink" onClick={close}>Contact</Link>
            <Link href="/cart" className="dLink" onClick={close}>
              Cart {cart.length > 0 && <span className="dBadge">{cart.length}</span>}
            </Link>
            <Link href="/configurator" className="dCta" onClick={close}>Request a Build</Link>

            <div className="socials">
              <a href="https://wa.me/447395530395" target="_blank" rel="noopener noreferrer" className="social">
                <svg viewBox="0 0 32 32" fill="none" width="20" height="20"><path d="M16 2C8.268 2 2 8.268 2 16c0 2.462.664 4.769 1.822 6.756L2 30l7.438-1.793A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#25D366"/><path d="M22.5 19.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01s-.52.07-.79.37c-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" fill="#fff"/></svg>
                WhatsApp
              </a>
              <a href="https://instagram.com/thomas.brt32" target="_blank" rel="noopener noreferrer" className="social">
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20" stroke="#fff" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none"/></svg>
                @thomas.brt32
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          /* Safe solid fallback for Android browsers */
          background: rgba(8, 8, 8, 0.96);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          z-index: 1000;
          animation: fadeIn 0.5s ease both;
        }

        /* Apply blur only where it's supported */
        @supports (backdrop-filter: blur(1px)) {
          .nav {
            background: rgba(8, 8, 8, 0.82);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
          }
        }

        .logo {
          font-weight: 900;
          font-size: 15px;
          letter-spacing: 3px;
          color: #fff;
          position: relative;
          z-index: 1;
        }

        /* Desktop centre links — hidden on mobile */
        .links {
          display: none;
        }

        /* Desktop right — hidden on mobile */
        .right {
          display: none;
        }

        /* Hamburger — visible on mobile */
        .burger {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          z-index: 1001;
        }

        .b1, .b2, .b3 {
          display: block;
          width: 22px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }

        .b1.bOpen { transform: translateY(7px) rotate(45deg); }
        .b2.bOpen { opacity: 0; }
        .b3.bOpen { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile drawer */
        .drawer {
          position: fixed;
          inset: 60px 0 0 0;
          background: rgba(8,8,8,0.98);
          z-index: 999;
          animation: fadeIn 0.18s ease both;
        }

        .drawerBody {
          display: flex;
          flex-direction: column;
          padding: 24px 20px;
          gap: 2px;
        }

        .dLink {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 18px 4px;
          font-size: 24px;
          font-weight: 800;
          color: #666;
          letter-spacing: -0.5px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: color 0.15s ease;
        }

        .dLink:active { color: #fff; }

        .dBadge {
          background: #fff;
          color: #000;
          font-size: 11px;
          font-weight: 800;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .socials {
          display: flex;
          gap: 10px;
          margin-top: 16px;
        }

        .social {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          color: #555;
          font-size: 13px;
          font-weight: 500;
          flex: 1;
          justify-content: center;
          transition: color 0.2s ease;
        }

        .social:active { color: #fff; }

        .dCta {
          display: block;
          margin-top: 20px;
          padding: 18px;
          background: #fff;
          color: #000;
          border-radius: 14px;
          font-size: 16px;
          font-weight: 800;
          text-align: center;
        }

        /* ── Desktop overrides ─────────────── */
        @media (min-width: 769px) {
          .nav {
            padding: 0 48px;
            height: 64px;
          }

          .links {
            display: flex;
            gap: 32px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }

          .link {
            color: #555;
            font-size: 13px;
            font-weight: 500;
            transition: color 0.2s ease;
          }

          .link:hover { color: #fff; }

          .right {
            display: flex;
            align-items: center;
            gap: 20px;
          }

          .cartLink {
            display: flex;
            align-items: center;
            gap: 6px;
            color: #555;
            font-size: 13px;
            font-weight: 500;
            transition: color 0.2s ease;
          }

          .cartLink:hover { color: #fff; }

          .badge {
            background: #fff;
            color: #000;
            font-size: 10px;
            font-weight: 800;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }

          .cta {
            padding: 8px 16px;
            border-radius: 8px;
            background: #fff;
            color: #000;
            font-size: 12px;
            font-weight: 700;
            transition: opacity 0.2s ease, transform 0.2s ease;
          }

          .cta:hover { opacity: 0.85; transform: translateY(-1px); }

          .burger { display: none; }
          .drawer { display: none; }
        }
      `}</style>
    </>
  );
}
