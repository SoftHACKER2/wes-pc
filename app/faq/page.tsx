"use client";

import Navbar from "../components/Navbar";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "How long does it take to build and deliver my PC?",
    a: "Most builds are completed within 5–7 days. Once your PC is built and stress-tested, we ship it with UK insured delivery which typically takes 1–2 working days.",
  },
  {
    q: "Is Windows included?",
    a: "Yes — every build comes with Windows 11 Home pre-installed and activated. Your PC is ready to use straight out of the box.",
  },
  {
    q: "What warranty do I get?",
    a: "Every build comes with a 1 year parts warranty. If anything goes wrong within the first year, we'll sort it. We also provide after-sales support via WhatsApp so you're never left on your own.",
  },
  {
    q: "How does payment work?",
    a: "We accept PayPal (with buyer protection) and bank transfer. Payment is only requested after you've approved your quote — we never take money before confirming everything with you first.",
  },
  {
    q: "Can I customise a build?",
    a: "Absolutely. Use our PC Configurator to tell us your budget and what you use your PC for, and we'll put together a custom quote within 24 hours. You can also message us directly on WhatsApp.",
  },
  {
    q: "Do you ship outside the UK?",
    a: "Currently we only ship within the UK. We use fully insured couriers to make sure your PC arrives safely.",
  },
  {
    q: "What if my PC arrives damaged?",
    a: "All our shipments are fully insured. In the extremely unlikely event of damage during transit, we'll replace or repair it at no cost to you.",
  },
  {
    q: "Can I see the PC before it ships?",
    a: "Yes — we send photos and a short video of your completed build running before it ships, so you can see exactly what you're getting.",
  },
  {
    q: "Why buy from WES PCS instead of a big retailer?",
    a: "Because you're buying from a real person who cares. Every build is hand-assembled, cable managed, and stress-tested by Wes personally. You get a better machine, better value, and actual support — not a chatbot.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main className="page">
        <div className="header">
          <p className="eyebrow">FAQ</p>
          <h1>Frequently Asked Questions</h1>
          <p className="sub">Everything you need to know before ordering. Still have questions? <a href="https://wa.me/447395530395" target="_blank" rel="noopener noreferrer" className="waLink">Message us on WhatsApp →</a></p>
        </div>

        <div className="list">
          {faqs.map((f, i) => (
            <div key={i} className={`item ${open === i ? "itemOpen" : ""}`}>
              <button className="question" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <span className="icon">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="answer">{f.a}</p>}
            </div>
          ))}
        </div>

        <div className="cta reveal">
          <p className="ctaEye">STILL UNSURE?</p>
          <h2>Talk to Wes directly</h2>
          <p className="ctaSub">Message on WhatsApp and get a reply within hours — no bots, no wait times.</p>
          <div className="ctaBtns">
            <a href="https://wa.me/447395530395" target="_blank" rel="noopener noreferrer" className="waBtn">WhatsApp Us →</a>
            <Link href="/configurator" className="configBtn">Use the Configurator</Link>
          </div>
        </div>
      </main>

      <style jsx>{`
        .page { min-height: 100vh; padding: 110px 5% 80px; max-width: 760px; margin: 0 auto; }

        .header {
          margin-bottom: 48px;
          animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.05s both;
        }

        .eyebrow { font-size: 10px; font-weight: 600; color: #333; letter-spacing: 4px; margin-bottom: 12px; }

        h1 { font-size: clamp(32px, 5vw, 52px); font-weight: 900; letter-spacing: -2px; margin-bottom: 12px; }

        .sub { color: #555; font-size: 14px; line-height: 1.65; }

        .waLink { color: #aaa; text-decoration: underline; transition: color 0.2s ease; }
        .waLink:hover { color: #fff; }

        .list {
          display: flex; flex-direction: column; gap: 0;
          margin-bottom: 64px;
          animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s both;
        }

        .item {
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .question {
          display: flex; justify-content: space-between; align-items: center;
          width: 100%; padding: 20px 0;
          background: transparent; border: none; color: #fff;
          font-size: 15px; font-weight: 600; text-align: left;
          cursor: pointer; font-family: inherit; gap: 16px;
          transition: color 0.2s ease;
        }

        .question:hover { color: #aaa; }

        .itemOpen .question { color: #fff; }

        .icon { font-size: 20px; color: #444; flex-shrink: 0; }

        .answer {
          padding: 0 0 20px;
          font-size: 14px; color: #555; line-height: 1.75;
        }

        .cta {
          text-align: center; padding: 48px 24px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
        }

        .ctaEye { font-size: 10px; color: #333; letter-spacing: 4px; font-weight: 600; margin-bottom: 12px; }

        h2 { font-size: 28px; font-weight: 900; letter-spacing: -1px; margin-bottom: 10px; }

        .ctaSub { color: #555; font-size: 14px; max-width: 340px; margin: 0 auto 28px; line-height: 1.6; }

        .ctaBtns { display: flex; flex-direction: column; gap: 10px; max-width: 280px; margin: 0 auto; }

        .waBtn {
          display: block; padding: 14px 24px;
          background: #fff; color: #000;
          border-radius: 12px; font-size: 14px; font-weight: 700;
          transition: opacity 0.2s ease;
        }

        .waBtn:hover { opacity: 0.85; }

        .configBtn {
          display: block; padding: 14px 24px;
          background: transparent; color: #555;
          border-radius: 12px; font-size: 14px; font-weight: 600;
          border: 1px solid rgba(255,255,255,0.08);
          transition: color 0.2s ease;
        }

        .configBtn:hover { color: #fff; }

        @media (min-width: 769px) {
          .page { padding: 120px 8% 100px; }
          .ctaBtns { flex-direction: row; max-width: none; justify-content: center; }
        }
      `}</style>
    </>
  );
}
