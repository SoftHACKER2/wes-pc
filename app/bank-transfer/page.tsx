"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function BankTransferPage() {
  const { cart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");

    const itemsList = cart.map((item) => `- ${item.name}: £${item.price.toLocaleString()}`).join("\n");

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        message: `BANK TRANSFER REQUEST\n\nOrder:\n${itemsList}\n\nTotal: £${total.toLocaleString()}\n\nPhone: ${phone || "Not provided"}\n\nPlease send your bank details to complete this order.`,
      }),
    });

    setSending(false);

    if (res.ok) {
      clearCart();
      setSent(true);
    } else {
      setError("Something went wrong. Please email us directly at thomasbaratti2@gmail.com");
    }
  }

  if (sent) {
    return (
      <>
        <Navbar />
        <div className="successPage">
          <div className="successBox">
            <div className="check">✓</div>
            <h1>Request Received!</h1>
            <p>We&apos;ll send our bank details to your email within a few hours. Once you&apos;ve transferred the payment we&apos;ll start building your PC.</p>
            <Link href="/" className="homeBtn">Back to Home</Link>
          </div>
          <style jsx>{`
            .successPage {
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 24px;
            }
            .successBox {
              max-width: 440px;
              width: 100%;
              text-align: center;
              padding: 56px 40px;
              background: rgba(255,255,255,0.03);
              border: 1px solid rgba(255,255,255,0.1);
              border-radius: 24px;
              animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both;
            }
            .check {
              width: 60px; height: 60px;
              background: #fff; color: #000;
              border-radius: 50%;
              display: flex; align-items: center; justify-content: center;
              font-size: 24px; font-weight: 900;
              margin: 0 auto 24px;
            }
            h1 { font-size: 28px; font-weight: 900; letter-spacing: -1px; margin-bottom: 14px; }
            p { color: #555; font-size: 14px; line-height: 1.65; margin-bottom: 32px; }
            .homeBtn {
              display: inline-block; padding: 12px 28px;
              background: #fff; color: #000;
              border-radius: 12px; font-size: 14px; font-weight: 700;
            }
          `}</style>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="page">
        <div className="header">
          <p className="eyebrow">SECURE PAYMENT</p>
          <h1>Bank Transfer</h1>
          <p className="sub">Enter your details below. We&apos;ll email you our bank details and confirm your order before you transfer anything.</p>
        </div>

        <div className="layout">
          {/* Form */}
          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="John Smith"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label>Phone Number <span className="opt">(optional)</span></label>
              <input
                type="tel"
                placeholder="+44 7700 000000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="infoBox">
              <p className="infoTitle">HOW IT WORKS</p>
              <div className="infoRow"><span className="dot">1</span><p>Submit this form</p></div>
              <div className="infoRow"><span className="dot">2</span><p>We email you our bank details within a few hours</p></div>
              <div className="infoRow"><span className="dot">3</span><p>You transfer the payment</p></div>
              <div className="infoRow"><span className="dot">4</span><p>We confirm receipt and start building your PC</p></div>
            </div>

            {error && <p className="errorMsg">{error}</p>}

            <button
              type="submit"
              className="submitBtn"
              disabled={sending || !name || !email || cart.length === 0}
            >
              {sending ? "Sending..." : "Submit Bank Transfer Request →"}
            </button>

            {cart.length === 0 && (
              <p className="emptyNote">Your cart is empty. <Link href="/builds" className="link">Browse builds →</Link></p>
            )}
          </form>

          {/* Order summary */}
          <div className="summary">
            <p className="summaryTitle">ORDER SUMMARY</p>

            {cart.length === 0 ? (
              <p className="emptyCart">No items in cart</p>
            ) : (
              <>
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
              </>
            )}

            <p className="safeNote">🔒 No payment taken online. We contact you first.</p>
          </div>
        </div>
      </main>

      <style jsx>{`
        .page {
          min-height: 100vh;
          padding: 110px 8% 80px;
          animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.05s both;
        }

        .header {
          max-width: 560px;
          margin-bottom: 48px;
        }

        .eyebrow {
          font-size: 10px; font-weight: 600; color: #333;
          letter-spacing: 4px; margin-bottom: 12px;
        }

        h1 {
          font-size: clamp(36px, 5vw, 52px);
          font-weight: 900; letter-spacing: -2px; margin-bottom: 12px;
        }

        .sub { color: #555; font-size: 14px; line-height: 1.65; }

        .layout {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 32px;
          align-items: start;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        label { font-size: 12px; color: #555; font-weight: 500; }

        .opt { color: #333; }

        input {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 13px 16px;
          color: white;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.2s ease;
        }

        input:focus {
          outline: none;
          border-color: rgba(255,255,255,0.3);
        }

        input::placeholder { color: #333; }

        .infoBox {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .infoTitle {
          font-size: 10px; color: #333;
          letter-spacing: 3px; font-weight: 600;
          margin-bottom: 4px;
        }

        .infoRow {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .dot {
          width: 24px; height: 24px;
          background: rgba(255,255,255,0.06);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 700;
          flex-shrink: 0;
        }

        .infoRow p { font-size: 13px; color: #555; }

        .submitBtn {
          padding: 15px;
          background: #fff; color: #000;
          border: none; border-radius: 12px;
          font-size: 14px; font-weight: 700;
          cursor: pointer; font-family: inherit;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .submitBtn:hover:not(:disabled) { opacity: 0.85; transform: translateY(-2px); }
        .submitBtn:disabled { opacity: 0.3; cursor: not-allowed; }

        .errorMsg { color: #ff6b6b; font-size: 13px; }

        .emptyNote { font-size: 13px; color: #444; text-align: center; }
        .link { color: #aaa; text-decoration: underline; }

        /* Summary */
        .summary {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 18px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          position: sticky;
          top: 88px;
        }

        .summaryTitle {
          font-size: 10px; color: #333;
          letter-spacing: 3px; font-weight: 600;
        }

        .summaryRow {
          display: flex;
          justify-content: space-between;
          font-size: 13px; color: #555;
        }

        .summaryRow span:last-child { color: #aaa; }

        .divider { height: 1px; background: rgba(255,255,255,0.06); }

        .totalRow {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          font-size: 14px; font-weight: 600;
        }

        .totalNum {
          font-size: 26px; font-weight: 900; letter-spacing: -1px;
        }

        .safeNote {
          font-size: 11px; color: #333; line-height: 1.6;
        }

        .emptyCart { font-size: 13px; color: #444; }

        @media (max-width: 760px) {
          .layout { grid-template-columns: 1fr; }
          .summary { position: static; }
        }

        @media (max-width: 480px) {
          .page { padding: 90px 5% 60px; }
        }
      `}</style>
    </>
  );
}
