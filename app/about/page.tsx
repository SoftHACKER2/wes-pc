"use client";

import Navbar from "../components/Navbar";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="page">

        <div className="hero">
          <div className="heroText">
            <p className="eyebrow">ABOUT WES PCS</p>
            <h1>Built by someone who actually knows what they&apos;re doing</h1>
            <p className="desc">
              Hi, I&apos;m Wes — a 16 year old PC builder with 5 years of hands-on experience. What started as a passion for understanding how computers work has turned into a small business built on one simple idea: everyone deserves a great PC at a fair price, built by someone who genuinely cares.
            </p>
          </div>
        </div>

        <div className="blocks reveal-stagger">
          <div className="block">
            <p className="blockNum">01</p>
            <h3>Why I started</h3>
            <p>I got into PC building at 11 years old and quickly realised how badly most people get ripped off — either buying overpriced prebuilts with cheap parts, or getting lost trying to build their own. I started WES PCS to fix that.</p>
          </div>
          <div className="block">
            <p className="blockNum">02</p>
            <h3>How I work</h3>
            <p>Every PC I build gets hand-assembled, properly cable managed, and stress-tested before it ships. I don&apos;t rush. I don&apos;t cut corners. If I wouldn&apos;t be happy using it myself, it doesn&apos;t leave my hands.</p>
          </div>
          <div className="block">
            <p className="blockNum">03</p>
            <h3>What you get</h3>
            <p>A PC built by someone who&apos;s passionate about the craft — not a warehouse worker on a production line. You also get my personal WhatsApp for any questions before, during, or after your order.</p>
          </div>
        </div>

        <div className="stats reveal-stagger">
          {[
            { val: "5+", label: "Years Building" },
            { val: "50+", label: "Builds Completed" },
            { val: "100%", label: "Tested Before Shipping" },
            { val: "24h", label: "Support Response" },
          ].map((s) => (
            <div key={s.val} className="stat">
              <p className="statVal">{s.val}</p>
              <p className="statLabel">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="contact reveal">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>Talk to me directly</h2>
          <p className="contactSub">No forms, no waiting rooms. Message me on WhatsApp or Instagram and I&apos;ll get back to you personally.</p>
          <div className="contactBtns">
            <a href="https://wa.me/447395530395" target="_blank" rel="noopener noreferrer" className="waBtn">WhatsApp →</a>
            <a href="https://instagram.com/thomas.brt32" target="_blank" rel="noopener noreferrer" className="igBtn">Instagram →</a>
            <Link href="/configurator" className="configBtn">Request a Build</Link>
          </div>
        </div>

      </main>

      <style jsx>{`
        .page { min-height: 100vh; padding: 110px 5% 80px; }

        .hero {
          max-width: 700px;
          margin-bottom: 64px;
          animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.05s both;
        }

        .eyebrow { font-size: 10px; font-weight: 600; color: #333; letter-spacing: 4px; margin-bottom: 16px; }

        h1 {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 900; letter-spacing: -2px; line-height: 1.05;
          margin-bottom: 20px;
        }

        .desc { color: #555; font-size: 15px; line-height: 1.75; }

        .blocks {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          margin-bottom: 48px;
        }

        .block {
          padding: 28px 24px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .blockNum { font-size: 11px; color: #222; font-weight: 700; letter-spacing: 2px; }

        h3 { font-size: 17px; font-weight: 800; }

        .block p:last-child { font-size: 14px; color: #555; line-height: 1.7; }

        .stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 64px;
        }

        .stat {
          padding: 28px 20px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          text-align: center;
        }

        .statVal { font-size: 36px; font-weight: 900; letter-spacing: -1.5px; margin-bottom: 6px; }
        .statLabel { font-size: 12px; color: #444; }

        .contact {
          text-align: center;
          padding: 48px 24px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
        }

        h2 { font-size: 28px; font-weight: 900; letter-spacing: -1px; margin-bottom: 10px; }

        .contactSub { color: #555; font-size: 14px; max-width: 360px; margin: 0 auto 28px; line-height: 1.6; }

        .contactBtns { display: flex; flex-direction: column; gap: 10px; max-width: 280px; margin: 0 auto; }

        .waBtn, .igBtn, .configBtn {
          display: block; padding: 14px 24px;
          border-radius: 12px; font-size: 14px; font-weight: 700;
          text-align: center; transition: opacity 0.2s ease;
        }

        .waBtn { background: #fff; color: #000; }
        .waBtn:hover { opacity: 0.85; }

        .igBtn {
          background: transparent; color: #aaa;
          border: 1px solid rgba(255,255,255,0.12);
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .igBtn:hover { color: #fff; border-color: rgba(255,255,255,0.25); }

        .configBtn {
          background: transparent; color: #555;
          border: 1px solid rgba(255,255,255,0.07);
        }
        .configBtn:hover { color: #fff; }

        @media (min-width: 769px) {
          .page { padding: 120px 8% 100px; }
          .blocks { grid-template-columns: repeat(3, 1fr); }
          .stats { grid-template-columns: repeat(4, 1fr); gap: 14px; }
          .contactBtns { flex-direction: row; max-width: none; justify-content: center; }
          .statVal { font-size: 44px; }
        }
      `}</style>
    </>
  );
}
