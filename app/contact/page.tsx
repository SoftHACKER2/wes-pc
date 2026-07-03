"use client";

import Navbar from "../components/Navbar";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    setSending(false);
    if (res.ok) setSent(true);
    else setError("Something went wrong. Email us directly at thomasbaratti2@gmail.com");
  }

  return (
    <>
      <Navbar />
      <main className="page">
        <div className="header">
          <p className="eyebrow">CONTACT</p>
          <h1>Get in Touch</h1>
          <p className="sub">Questions, custom requests, or just want to chat about your next build — we&apos;re here.</p>
        </div>

        <div className="layout">
          {/* Contact methods */}
          <div className="methods">
            <a href="https://wa.me/447395530395?text=Hi%20Wes!" target="_blank" rel="noopener noreferrer" className="method">
              <div className="methodIcon waIcon">
                <svg viewBox="0 0 32 32" fill="none" width="22" height="22">
                  <path d="M16 2C8.268 2 2 8.268 2 16c0 2.462.664 4.769 1.822 6.756L2 30l7.438-1.793A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#25D366"/>
                  <path d="M22.5 19.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01s-.52.07-.79.37c-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" fill="#fff"/>
                </svg>
              </div>
              <div>
                <p className="methodTitle">WhatsApp</p>
                <p className="methodSub">Fastest response — usually within the hour</p>
              </div>
              <span className="arrow">→</span>
            </a>

            <a href="https://instagram.com/thomas.brt32" target="_blank" rel="noopener noreferrer" className="method">
              <div className="methodIcon igIcon">
                <svg viewBox="0 0 24 24" fill="none" width="22" height="22" stroke="#fff" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none"/>
                </svg>
              </div>
              <div>
                <p className="methodTitle">Instagram</p>
                <p className="methodSub">@thomas.brt32 — DM us anytime</p>
              </div>
              <span className="arrow">→</span>
            </a>

            <a href="mailto:thomasbaratti2@gmail.com" className="method">
              <div className="methodIcon emailIcon">
                <svg viewBox="0 0 24 24" fill="none" width="22" height="22" stroke="#fff" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="3"/>
                  <path d="M2 7l10 7 10-7"/>
                </svg>
              </div>
              <div>
                <p className="methodTitle">Email</p>
                <p className="methodSub">thomasbaratti2@gmail.com</p>
              </div>
              <span className="arrow">→</span>
            </a>
          </div>

          {/* Form */}
          <div className="formWrap">
            {sent ? (
              <div className="success">
                <div className="check">✓</div>
                <h2>Message sent!</h2>
                <p>We&apos;ll get back to you within 24 hours. For faster replies, message on WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="form">
                <p className="formTitle">SEND A MESSAGE</p>

                <div className="field">
                  <label>Your Name</label>
                  <input type="text" placeholder="John Smith" value={name} onChange={e => setName(e.target.value)} required />
                </div>

                <div className="field">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
                </div>

                <div className="field">
                  <label>Message</label>
                  <textarea placeholder="Tell us what you need — budget, games you play, any questions..." value={message} onChange={e => setMessage(e.target.value)} rows={5} required />
                </div>

                {error && <p className="errorMsg">{error}</p>}

                <button type="submit" className="submitBtn" disabled={sending}>
                  {sending ? "Sending..." : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <style jsx>{`
        .page { min-height: 100vh; padding: 110px 5% 80px; animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.05s both; }

        .header { margin-bottom: 48px; }
        .eyebrow { font-size: 10px; font-weight: 600; color: #333; letter-spacing: 4px; margin-bottom: 12px; }
        h1 { font-size: clamp(32px, 5vw, 52px); font-weight: 900; letter-spacing: -2px; margin-bottom: 12px; }
        .sub { color: #555; font-size: 14px; line-height: 1.65; max-width: 480px; }

        .layout { display: grid; grid-template-columns: 1fr; gap: 32px; }

        .methods { display: flex; flex-direction: column; gap: 10px; }

        .method {
          display: flex; align-items: center; gap: 16px;
          padding: 18px 20px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          color: white;
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .method:hover { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.14); }

        .methodIcon {
          width: 44px; height: 44px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .waIcon { background: rgba(37,211,102,0.15); }
        .igIcon { background: rgba(131,58,180,0.15); }
        .emailIcon { background: rgba(255,255,255,0.06); }

        .methodTitle { font-size: 14px; font-weight: 700; margin-bottom: 2px; }
        .methodSub { font-size: 12px; color: #444; }

        .arrow { color: #333; font-size: 16px; margin-left: auto; }

        .formWrap {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 28px 24px;
        }

        .formTitle { font-size: 10px; color: #333; letter-spacing: 3px; font-weight: 600; margin-bottom: 24px; }

        .form { display: flex; flex-direction: column; gap: 18px; }

        .field { display: flex; flex-direction: column; gap: 8px; }

        label { font-size: 12px; color: #555; font-weight: 500; }

        input, textarea {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 13px 16px;
          color: white;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.2s ease;
          resize: vertical;
        }

        input:focus, textarea:focus { outline: none; border-color: rgba(255,255,255,0.3); }
        input::placeholder, textarea::placeholder { color: #333; }

        .submitBtn {
          padding: 14px; background: #fff; color: #000;
          border: none; border-radius: 12px;
          font-size: 14px; font-weight: 700;
          cursor: pointer; font-family: inherit;
          transition: opacity 0.2s ease;
        }

        .submitBtn:hover:not(:disabled) { opacity: 0.85; }
        .submitBtn:disabled { opacity: 0.3; cursor: not-allowed; }

        .errorMsg { color: #ff6b6b; font-size: 13px; }

        .success { text-align: center; padding: 40px 20px; }
        .check {
          width: 56px; height: 56px; background: #fff; color: #000;
          border-radius: 50%; display: flex; align-items: center;
          justify-content: center; font-size: 22px; font-weight: 900;
          margin: 0 auto 20px;
        }
        h2 { font-size: 24px; font-weight: 900; letter-spacing: -0.5px; margin-bottom: 10px; }
        .success p { color: #555; font-size: 14px; line-height: 1.6; }

        @media (min-width: 900px) {
          .page { padding: 120px 8% 100px; }
          .layout { grid-template-columns: 1fr 1fr; align-items: start; }
        }
      `}</style>
    </>
  );
}
