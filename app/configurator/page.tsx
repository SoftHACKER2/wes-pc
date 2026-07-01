"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";

const budgets = [
  { value: "budget",  label: "Up to £799",    sub: "Entry level — 1080p gaming" },
  { value: "mid",     label: "Around £1,200", sub: "Best value — 1440p gaming" },
  { value: "high",    label: "Around £1,600", sub: "High performance — 1440p / 4K" },
  { value: "extreme", label: "£2,400+",       sub: "No limits — 4K max settings" },
  { value: "custom",  label: "Not sure yet",  sub: "Tell us more below and we'll advise" },
];

const usages = [
  { value: "gaming",    label: "Gaming",           icon: "🎮" },
  { value: "streaming", label: "Streaming",         icon: "📡" },
  { value: "editing",   label: "Video Editing",     icon: "🎬" },
  { value: "allround",  label: "All Round",         icon: "⚡" },
];

type Step = 1 | 2 | 3;

export default function ConfiguratorPage() {
  const [step, setStep] = useState<Step>(1);
  const [budget, setBudget] = useState("");
  const [usage, setUsage] = useState("");
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
      body: JSON.stringify({ name, email, message: `Budget: ${budget}\nUsage: ${usage}\n\n${message}` }),
    });

    setSending(false);

    if (res.ok) {
      setSent(true);
    } else {
      setError("Something went wrong. Please try again or email us directly.");
    }
  }

  if (sent) {
    return (
      <>
        <Navbar />
        <div className="successPage">
          <div className="successBox">
            <div className="checkCircle">✓</div>
            <h1>Request Sent!</h1>
            <p>
              Thanks {name ? name.split(" ")[0] : ""}! We&apos;ve received your
              request and will get back to you within 24 hours.
            </p>
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
              animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
            }

            .checkCircle {
              width: 60px;
              height: 60px;
              background: #fff;
              color: #000;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 24px;
              font-weight: 900;
              margin: 0 auto 24px;
            }

            h1 {
              font-size: 32px;
              font-weight: 900;
              letter-spacing: -1px;
              margin-bottom: 12px;
            }

            p {
              color: #555;
              font-size: 15px;
              line-height: 1.6;
              margin-bottom: 32px;
            }

            .homeBtn {
              display: inline-block;
              padding: 12px 28px;
              background: #fff;
              color: #000;
              border-radius: 12px;
              font-size: 14px;
              font-weight: 700;
              transition: opacity 0.2s ease;
            }

            .homeBtn:hover { opacity: 0.8; }
          `}</style>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="page">

        {/* Header */}
        <div className="header">
          <p className="eyebrow">BUILD CONFIGURATOR</p>
          <h1>Request Your Build</h1>
          <p className="sub">
            Tell us what you need — we&apos;ll put together the perfect PC for
            you and get back within 24 hours.
          </p>

          {/* Progress bar */}
          <div className="progress">
            {([1, 2, 3] as Step[]).map((s) => (
              <div key={s} className={`step ${step >= s ? "active" : ""} ${step === s ? "current" : ""}`}>
                <div className="stepDot">{step > s ? "✓" : s}</div>
                <p className="stepLabel">
                  {s === 1 ? "Budget" : s === 2 ? "Usage" : "Details"}
                </p>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="form">

          {/* Step 1 — Budget */}
          {step === 1 && (
            <div className="stepContent">
              <h2>What&apos;s your budget?</h2>
              <p className="stepSub">Pick the range that works best for you.</p>

              <div className="optionGrid">
                {budgets.map((b) => (
                  <button
                    key={b.value}
                    type="button"
                    className={`option ${budget === b.value ? "selected" : ""}`}
                    onClick={() => setBudget(b.value)}
                  >
                    <span className="optionLabel">{b.label}</span>
                    <span className="optionSub">{b.sub}</span>
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="nextBtn"
                disabled={!budget}
                onClick={() => setStep(2)}
              >
                Continue →
              </button>
            </div>
          )}

          {/* Step 2 — Usage */}
          {step === 2 && (
            <div className="stepContent">
              <h2>What will you mainly use it for?</h2>
              <p className="stepSub">Select everything that applies.</p>

              <div className="usageGrid">
                {usages.map((u) => (
                  <button
                    key={u.value}
                    type="button"
                    className={`usageOption ${usage === u.value ? "selected" : ""}`}
                    onClick={() => setUsage(u.value)}
                  >
                    <span className="usageIcon">{u.icon}</span>
                    <span className="usageLabel">{u.label}</span>
                  </button>
                ))}
              </div>

              <div className="navBtns">
                <button type="button" className="backBtn" onClick={() => setStep(1)}>
                  ← Back
                </button>
                <button
                  type="button"
                  className="nextBtn"
                  disabled={!usage}
                  onClick={() => setStep(3)}
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Step 3 — Details */}
          {step === 3 && (
            <div className="stepContent">
              <h2>Your details</h2>
              <p className="stepSub">
                We&apos;ll send your custom quote directly to your inbox.
              </p>

              <div className="fields">
                <div className="field">
                  <label>Your Name</label>
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

                <div className="field full">
                  <label>Anything else we should know? <span className="optional">(optional)</span></label>
                  <textarea
                    placeholder="Games you play, specific parts you want, colour preference, any questions..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="summary">
                <p className="summaryTitle">YOUR REQUEST SUMMARY</p>
                <div className="summaryRow">
                  <span>Budget</span>
                  <span>{budgets.find((b) => b.value === budget)?.label}</span>
                </div>
                <div className="summaryRow">
                  <span>Usage</span>
                  <span>{usages.find((u) => u.value === usage)?.label}</span>
                </div>
              </div>

              {error && <p className="errorMsg">{error}</p>}

              <div className="navBtns">
                <button type="button" className="backBtn" onClick={() => setStep(2)}>
                  ← Back
                </button>
                <button
                  type="submit"
                  className="submitBtn"
                  disabled={sending || !name || !email}
                >
                  {sending ? "Sending..." : "Send Request →"}
                </button>
              </div>
            </div>
          )}
        </form>
      </main>

      <style jsx>{`
        .page {
          min-height: 100vh;
          padding: 110px 8% 80px;
          max-width: 680px;
          margin: 0 auto;
        }

        /* Header */
        .header {
          text-align: center;
          margin-bottom: 56px;
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both;
        }

        .eyebrow {
          font-size: 10px;
          color: #333;
          letter-spacing: 4px;
          font-weight: 600;
          margin-bottom: 14px;
        }

        h1 {
          font-size: clamp(36px, 5vw, 52px);
          font-weight: 900;
          letter-spacing: -2px;
          margin-bottom: 14px;
        }

        .sub {
          color: #555;
          font-size: 15px;
          line-height: 1.65;
          max-width: 420px;
          margin: 0 auto 40px;
        }

        /* Progress */
        .progress {
          display: flex;
          justify-content: center;
          gap: 0;
        }

        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          position: relative;
          flex: 1;
          max-width: 120px;
        }

        .step:not(:last-child)::after {
          content: "";
          position: absolute;
          top: 15px;
          left: calc(50% + 16px);
          right: calc(-50% + 16px);
          height: 1px;
          background: rgba(255,255,255,0.1);
        }

        .step.active:not(:last-child)::after {
          background: rgba(255,255,255,0.3);
        }

        .stepDot {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          color: #444;
          background: rgba(255,255,255,0.03);
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .step.active .stepDot {
          border-color: rgba(255,255,255,0.5);
          color: #fff;
          background: rgba(255,255,255,0.08);
        }

        .step.current .stepDot {
          background: #fff;
          color: #000;
          border-color: #fff;
        }

        .stepLabel {
          font-size: 11px;
          color: #333;
          font-weight: 500;
        }

        .step.active .stepLabel { color: #666; }
        .step.current .stepLabel { color: #aaa; }

        /* Form */
        .form {
          animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
        }

        .stepContent {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        h2 {
          font-size: 26px;
          font-weight: 900;
          letter-spacing: -0.8px;
        }

        .stepSub {
          color: #555;
          font-size: 14px;
          margin-top: -14px;
        }

        /* Budget options */
        .optionGrid {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .option {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 22px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          cursor: pointer;
          text-align: left;
          transition: background 0.2s ease, border-color 0.2s ease;
          color: white;
          width: 100%;
        }

        .option:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.15);
        }

        .option.selected {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.35);
        }

        .optionLabel {
          font-size: 15px;
          font-weight: 700;
        }

        .optionSub {
          font-size: 12px;
          color: #555;
        }

        .option.selected .optionSub {
          color: #888;
        }

        /* Usage options */
        .usageGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .usageOption {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 28px 20px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          cursor: pointer;
          color: white;
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .usageOption:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.15);
        }

        .usageOption.selected {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.35);
        }

        .usageIcon {
          font-size: 28px;
        }

        .usageLabel {
          font-size: 14px;
          font-weight: 700;
        }

        /* Fields */
        .fields {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .field.full {
          grid-column: 1 / -1;
        }

        label {
          font-size: 12px;
          color: #555;
          font-weight: 500;
        }

        .optional {
          color: #333;
        }

        input,
        textarea {
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

        input:focus,
        textarea:focus {
          outline: none;
          border-color: rgba(255,255,255,0.3);
        }

        input::placeholder,
        textarea::placeholder {
          color: #333;
        }

        /* Summary */
        .summary {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 20px 22px;
        }

        .summaryTitle {
          font-size: 10px;
          color: #333;
          letter-spacing: 3px;
          font-weight: 600;
          margin-bottom: 14px;
        }

        .summaryRow {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          padding: 6px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          color: #888;
        }

        .summaryRow:last-child {
          border-bottom: none;
        }

        .summaryRow span:last-child {
          color: #fff;
          font-weight: 600;
        }

        .errorMsg {
          color: #ff6b6b;
          font-size: 13px;
        }

        /* Nav buttons */
        .navBtns {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          align-items: center;
        }

        .backBtn {
          background: transparent;
          border: none;
          color: #444;
          font-size: 14px;
          cursor: pointer;
          font-family: inherit;
          padding: 12px 0;
          transition: color 0.2s ease;
        }

        .backBtn:hover {
          color: #fff;
        }

        .nextBtn,
        .submitBtn {
          padding: 14px 28px;
          background: #fff;
          color: #000;
          border: none;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .nextBtn:hover:not(:disabled),
        .submitBtn:hover:not(:disabled) {
          opacity: 0.85;
          transform: translateY(-2px);
        }

        .nextBtn:disabled,
        .submitBtn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        @media (max-width: 560px) {
          .page {
            padding: 90px 5% 60px;
          }

          h1 { letter-spacing: -1.5px; }

          .fields {
            grid-template-columns: 1fr;
          }

          .usageGrid {
            grid-template-columns: 1fr 1fr;
          }

          .navBtns {
            flex-direction: column-reverse;
            gap: 8px;
          }

          .nextBtn,
          .submitBtn {
            width: 100%;
            text-align: center;
          }

          .backBtn {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
