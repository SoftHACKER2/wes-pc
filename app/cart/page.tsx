"use client";

import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Navbar />
      <main className="page">
        <div className="header">
          <p className="eyebrow">CHECKOUT</p>
          <h1>Your Cart</h1>
        </div>

        {cart.length === 0 ? (
          <div className="empty">
            <p className="emptyIcon">🛒</p>
            <h2>Your cart is empty</h2>
            <p className="emptyDesc">
              Browse our builds and add one to get started.
            </p>
            <Link href="/builds" className="browseBtn">Browse Builds →</Link>
          </div>
        ) : (
          <div className="content">
            <div className="items">
              {cart.map((item, i) => (
                <div key={i} className="item">
                  <div>
                    <p className="itemName">{item.name}</p>
                    <p className="itemPrice">£{item.price.toLocaleString()}</p>
                  </div>
                  <button className="removeBtn" onClick={() => removeFromCart(i)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="sidebar">
              <div className="summary">
                <p className="summaryTitle">ORDER SUMMARY</p>

                {cart.map((item, i) => (
                  <div key={i} className="summaryRow">
                    <span>{item.name}</span>
                    <span>£{item.price.toLocaleString()}</span>
                  </div>
                ))}

                <div className="divider" />

                <div className="totalRow">
                  <span>Total</span>
                  <span className="totalNum">£{total.toLocaleString()}</span>
                </div>

                <a
                  href={`https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=thomasbaratti2%40gmail.com&amount=${total}&currency_code=GBP&item_name=${encodeURIComponent("WES PCS — Custom Gaming PC")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="checkoutBtn"
                >
                  Pay via PayPal 🔒
                </a>

                <p className="payNote">🔒 Secure checkout · Buyer protected via PayPal</p>

                <button className="clearBtn" onClick={clearCart}>
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <style jsx>{`
        .page {
          min-height: 100vh;
          padding: 110px 8% 80px;
        }

        .header {
          margin-bottom: 48px;
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both;
        }

        .eyebrow {
          font-size: 10px;
          color: #333;
          letter-spacing: 4px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        h1 {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 900;
          letter-spacing: -2px;
        }

        /* Empty state */
        .empty {
          text-align: center;
          padding: 80px 24px;
          animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
        }

        .emptyIcon {
          font-size: 48px;
          margin-bottom: 20px;
          opacity: 0.4;
        }

        h2 {
          font-size: 24px;
          font-weight: 800;
          letter-spacing: -0.5px;
          margin-bottom: 10px;
        }

        .emptyDesc {
          color: #555;
          font-size: 14px;
          margin-bottom: 28px;
        }

        .browseBtn {
          display: inline-block;
          padding: 13px 26px;
          background: #fff;
          color: #000;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 700;
          transition: opacity 0.2s ease;
        }

        .browseBtn:hover { opacity: 0.85; }

        /* Content */
        .content {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 32px;
          align-items: start;
          animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
        }

        .items {
          display: flex;
          flex-direction: column;
          gap: 0;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px;
          overflow: hidden;
        }

        .item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 22px 24px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: background 0.2s ease;
        }

        .item:last-child {
          border-bottom: none;
        }

        .item:hover {
          background: rgba(255,255,255,0.02);
        }

        .itemName {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .itemPrice {
          font-size: 13px;
          color: #555;
        }

        .removeBtn {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          color: #555;
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 12px;
          cursor: pointer;
          font-family: inherit;
          transition: color 0.2s ease, border-color 0.2s ease;
        }

        .removeBtn:hover {
          color: #ff6b6b;
          border-color: rgba(255, 107, 107, 0.3);
        }

        /* Sidebar */
        .summary {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 18px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          position: sticky;
          top: 88px;
        }

        .summaryTitle {
          font-size: 10px;
          color: #333;
          letter-spacing: 3px;
          font-weight: 600;
        }

        .summaryRow {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          color: #555;
        }

        .summaryRow span:last-child { color: #aaa; }

        .divider {
          height: 1px;
          background: rgba(255,255,255,0.06);
        }

        .totalRow {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          font-size: 14px;
          font-weight: 600;
        }

        .totalNum {
          font-size: 26px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .checkoutBtn {
          display: block;
          text-align: center;
          padding: 14px;
          background: #fff;
          color: #000;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 700;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .checkoutBtn:hover {
          opacity: 0.85;
          transform: translateY(-2px);
        }

        .payNote {
          font-size: 11px;
          color: #333;
          line-height: 1.6;
          text-align: center;
        }

        .clearBtn {
          background: transparent;
          border: none;
          color: #333;
          font-size: 13px;
          cursor: pointer;
          font-family: inherit;
          padding: 8px 0;
          text-align: center;
          transition: color 0.2s ease;
          width: 100%;
        }

        .clearBtn:hover { color: #fff; }

        @media (max-width: 760px) {
          .content { grid-template-columns: 1fr; }
          .summary { position: static; }
        }

        @media (max-width: 480px) {
          .page { padding: 90px 5% 60px; }
          h1 { font-size: 36px; }
        }
      `}</style>
    </>
  );
}
