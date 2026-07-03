import Navbar from "../components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "After You Order — WES PCS",
  description: "What happens after you order your custom PC from WES PCS. Build timeline, delivery, and support.",
};

const steps = [
  {
    n: "01",
    title: "Wes confirms your order",
    time: "Within 2–4 hours",
    body: "As soon as your order comes through, Wes will message you on WhatsApp (or by email) to confirm everything — the build, the price, and answer any questions before we start.",
  },
  {
    n: "02",
    title: "Parts are ordered",
    time: "Day 1–2",
    body: "Once you've confirmed, all the parts for your build are ordered. We buy fresh parts for every machine — nothing sitting in a dusty warehouse.",
  },
  {
    n: "03",
    title: "Your PC is assembled",
    time: "Day 3–5",
    body: "Parts arrive and assembly begins. We'll cable manage everything properly, apply thermal paste, and make sure it looks as good as it performs. You might even get a progress photo on WhatsApp.",
  },
  {
    n: "04",
    title: "Testing under load",
    time: "Day 5–6",
    body: "Before anything ships, we run the machine through its paces — benchmarks, stress tests, a few hours of gaming. If anything's not right, we fix it before it leaves the workshop.",
  },
  {
    n: "05",
    title: "It ships to your door",
    time: "Day 6–7",
    body: "Your PC is carefully packed, insured, and sent via tracked courier delivery. You'll get tracking info so you know exactly when to expect it.",
  },
  {
    n: "06",
    title: "We're here after delivery",
    time: "Ongoing",
    body: "Got a question once it arrives? Need help setting something up? Message Wes on WhatsApp anytime. We're not a faceless company — you'll always get a real response.",
  },
];

export default function AfterOrderPage() {
  return (
    <>
      <Navbar />
      <main className="page">
        <div className="header">
          <p className="eyebrow">WHAT HAPPENS NEXT</p>
          <h1>After You Order</h1>
          <p className="sub">Here&apos;s exactly what to expect from the moment you place your order to the day your PC arrives.</p>
        </div>

        <div className="timeline">
          {steps.map((s, i) => (
            <div key={i} className="step">
              <div className="stepLeft">
                <div className="num">{s.n}</div>
                {i < steps.length - 1 && <div className="line" />}
              </div>
              <div className="stepRight">
                <div className="stepHead">
                  <p className="stepTitle">{s.title}</p>
                  <span className="pill">{s.time}</span>
                </div>
                <p className="stepBody">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="total">
          <div className="totalInner">
            <p className="totalLabel">TOTAL BUILD TIME</p>
            <p className="totalVal">5–7 days</p>
            <p className="totalSub">From payment to your door. Rush orders possible — ask Wes.</p>
          </div>
        </div>

        <div className="wa">
          <p>Questions? Wes is on WhatsApp and usually replies within the hour.</p>
          <a href="https://wa.me/447395530395?text=Hi%20Wes!" target="_blank" rel="noopener noreferrer" className="waBtn">
            <svg viewBox="0 0 32 32" fill="none" width="18" height="18">
              <path d="M16 2C8.268 2 2 8.268 2 16c0 2.462.664 4.769 1.822 6.756L2 30l7.438-1.793A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#25D366"/>
              <path d="M22.5 19.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01s-.52.07-.79.37c-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" fill="#fff"/>
            </svg>
            Message Wes on WhatsApp
          </a>
        </div>
      </main>

      <style jsx>{`
        .page { padding: 100px 5% 80px; min-height: 100vh; animation: fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both; }

        .header { margin-bottom: 48px; }
        .eyebrow { font-size: 10px; font-weight: 600; color: #333; letter-spacing: 4px; margin-bottom: 12px; }
        h1 { font-size: clamp(32px, 5vw, 52px); font-weight: 900; letter-spacing: -2px; margin-bottom: 10px; }
        .sub { color: #555; font-size: 14px; line-height: 1.65; max-width: 480px; }

        .timeline { display: flex; flex-direction: column; margin-bottom: 48px; }

        .step { display: flex; gap: 20px; }

        .stepLeft { display: flex; flex-direction: column; align-items: center; }

        .num {
          width: 40px; height: 40px; flex-shrink: 0;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 800; color: #444;
        }

        .line {
          width: 1px; flex: 1; min-height: 20px;
          background: rgba(255,255,255,0.06);
          margin: 6px 0;
        }

        .stepRight { padding-bottom: 32px; flex: 1; }

        .stepHead { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 8px; margin-top: 8px; }

        .stepTitle { font-size: 15px; font-weight: 800; }

        .pill {
          font-size: 10px; color: #444;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          padding: 3px 8px; border-radius: 20px;
          white-space: nowrap;
        }

        .stepBody { color: #555; font-size: 13px; line-height: 1.7; }

        .total {
          margin-bottom: 40px;
          padding: 28px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px; text-align: center;
        }

        .totalLabel { font-size: 10px; color: #333; letter-spacing: 4px; font-weight: 700; margin-bottom: 8px; }
        .totalVal { font-size: 48px; font-weight: 900; letter-spacing: -2px; margin-bottom: 8px; }
        .totalSub { color: #555; font-size: 13px; }

        .wa { text-align: center; }
        .wa p { color: #444; font-size: 14px; margin-bottom: 14px; }

        .waBtn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 24px;
          background: rgba(37,211,102,0.08);
          border: 1px solid rgba(37,211,102,0.2);
          border-radius: 14px; color: #25D366;
          font-size: 14px; font-weight: 700;
          transition: background 0.2s ease;
        }

        .waBtn:hover { background: rgba(37,211,102,0.14); }

        @media (min-width: 769px) {
          .page { padding: 110px 10% 100px; }
        }
      `}</style>
    </>
  );
}
