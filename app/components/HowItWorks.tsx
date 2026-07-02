"use client";

const steps = [
  { num: "01", title: "Request Your Build", desc: "Fill in the configurator or message us directly. Tell us your budget and what you play." },
  { num: "02", title: "We Confirm & Quote", desc: "We get back to you within 24 hours with a full parts list and final price. No surprises." },
  { num: "03", title: "Pay Safely", desc: "Pay via PayPal (buyer protected) or bank transfer — only after you've approved the quote." },
  { num: "04", title: "Built, Tested & Shipped", desc: "We build and stress-test your PC, then ship it straight to your door." },
];

export default function HowItWorks() {
  return (
    <section className="section reveal">
      <div className="header">
        <p className="eyebrow">THE PROCESS</p>
        <h2>How It Works</h2>
        <p className="sub">Simple, transparent, and safe from start to finish.</p>
      </div>

      <div className="steps reveal-stagger">
        {steps.map((s) => (
          <div key={s.num} className="step">
            <p className="num">{s.num}</p>
            <h3>{s.title}</h3>
            <p className="desc">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="payNote">
        <span className="lock">🔒</span>
        <p>Payment is only requested <strong>after</strong> you approve your quote. We accept <strong>PayPal</strong> (with buyer protection) and <strong>bank transfer</strong>. No card details are ever stored on this site.</p>
      </div>

      <style jsx>{`
        .section { padding: 72px 5%; }

        .header { text-align: center; margin-bottom: 40px; }

        .eyebrow {
          font-size: 10px; font-weight: 600; color: #333;
          letter-spacing: 4px; margin-bottom: 12px;
        }

        h2 {
          font-size: 34px; font-weight: 900;
          letter-spacing: -1px; margin-bottom: 10px;
        }

        .sub { color: #555; font-size: 14px; }

        .steps {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          margin-bottom: 28px;
        }

        .step {
          padding: 24px 20px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .num {
          font-size: 11px; font-weight: 700;
          color: #222; letter-spacing: 2px;
        }

        h3 { font-size: 16px; font-weight: 800; }

        .desc { font-size: 13px; color: #444; line-height: 1.55; }

        .payNote {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 20px 22px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 14px;
        }

        .lock { font-size: 20px; flex-shrink: 0; margin-top: 2px; }

        .payNote p {
          font-size: 13px;
          color: #555;
          line-height: 1.6;
        }

        .payNote strong { color: #aaa; font-weight: 600; }

        @media (min-width: 768px) {
          .section { padding: 100px 8%; }
          .steps { grid-template-columns: repeat(4, 1fr); gap: 14px; }
          h2 { font-size: 44px; letter-spacing: -1.5px; }
          h3 { font-size: 17px; }
        }
      `}</style>
    </section>
  );
}
