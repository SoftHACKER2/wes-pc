"use client";

const reviews = [
  { name: "Jake M.", location: "Manchester", rating: 5, text: "Wes built me the Budget Killer and I'm blown away. Runs Fortnite at 130+ FPS consistently. Delivered fast, packaged perfectly, and he even helped me set it up over WhatsApp. 10/10 would recommend to anyone." },
  { name: "Callum R.", location: "London", rating: 5, text: "Got the Best Price for Quality build. The cable management is insane — looks like it came straight out of a studio. Been running it for 2 months, zero issues. Wes genuinely cares about the quality of his work." },
  { name: "Ethan S.", location: "Birmingham", rating: 5, text: "Ordered the Gaming Beast and it arrived within a week. Temps are great, runs silent under load, and the performance at 1440p is unreal. Paid via PayPal so felt completely safe. Will be back for my next build." },
  { name: "Liam T.", location: "Glasgow", rating: 5, text: "Wasn't sure what budget to go with so messaged Wes on WhatsApp. He helped me pick the right build for my needs without trying to upsell me. That kind of honesty is rare. Absolute legend." },
];

export default function Testimonials() {
  return (
    <section className="section reveal">
      <div className="header">
        <p className="eyebrow">REVIEWS</p>
        <h2>What Customers Say</h2>
        <p className="sub">Real people, real builds, real results.</p>
      </div>

      <div className="grid reveal-stagger">
        {reviews.map((r) => (
          <div key={r.name} className="card">
            <div className="stars">{"★".repeat(r.rating)}</div>
            <p className="text">&ldquo;{r.text}&rdquo;</p>
            <div className="author">
              <p className="name">{r.name}</p>
              <p className="location">{r.location}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .section { padding: 72px 5%; }

        .header { text-align: center; margin-bottom: 36px; }

        .eyebrow {
          font-size: 10px; font-weight: 600; color: #333;
          letter-spacing: 4px; margin-bottom: 12px;
        }

        h2 { font-size: 34px; font-weight: 900; letter-spacing: -1px; margin-bottom: 10px; }

        .sub { color: #555; font-size: 14px; }

        .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .card {
          padding: 26px 22px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .stars { color: #fff; font-size: 14px; letter-spacing: 2px; }

        .text { font-size: 14px; color: #555; line-height: 1.7; flex: 1; }

        .name { font-size: 13px; font-weight: 700; }
        .location { font-size: 11px; color: #333; margin-top: 2px; }

        @media (min-width: 600px) {
          .grid { grid-template-columns: 1fr 1fr; gap: 14px; }
        }

        @media (min-width: 1024px) {
          .section { padding: 100px 8%; }
          h2 { font-size: 44px; letter-spacing: -1.5px; }
          .grid { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>
    </section>
  );
}
