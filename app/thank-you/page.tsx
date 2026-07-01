"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main className="page">
        <div className="box">
          <div className="check">✓</div>
          <p className="eyebrow">REQUEST RECEIVED</p>
          <h1>We&apos;ll be in touch soon.</h1>
          <p className="desc">
            Your custom PC request has been sent. We&apos;ll review it and get
            back to you within 24 hours with a quote and any questions.
          </p>

          <div className="actions">
            <Link href="/builds" className="primaryBtn">Browse All Builds</Link>
            <Link href="/" className="secondaryBtn">Back to Home</Link>
          </div>
        </div>
      </main>

      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 24px 80px;
        }

        .box {
          max-width: 480px;
          width: 100%;
          text-align: center;
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both;
        }

        .check {
          width: 56px;
          height: 56px;
          background: #fff;
          color: #000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          font-weight: 900;
          margin: 0 auto 24px;
        }

        .eyebrow {
          font-size: 10px;
          color: #333;
          letter-spacing: 4px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        h1 {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 900;
          letter-spacing: -1.5px;
          margin-bottom: 16px;
        }

        .desc {
          color: #555;
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 40px;
        }

        .actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .primaryBtn {
          padding: 13px 26px;
          background: #fff;
          color: #000;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 700;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .primaryBtn:hover {
          opacity: 0.85;
          transform: translateY(-2px);
        }

        .secondaryBtn {
          padding: 13px 26px;
          background: transparent;
          color: #555;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          transition: color 0.2s ease, border-color 0.2s ease;
        }

        .secondaryBtn:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.25);
        }
      `}</style>
    </>
  );
}
