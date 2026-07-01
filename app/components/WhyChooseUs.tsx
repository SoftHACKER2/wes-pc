"use client";

const reasons = [
  { icon: "⚡", title: "High Performance", desc: "Every build is tested under full load before shipping. No thermal throttling, no instability." },
  { icon: "🛠", title: "Clean Builds", desc: "Cable management and airflow treated as seriously as specs. Your PC will look as good as it runs." },
  { icon: "🎮", title: "Gaming Optimised", desc: "Parts picked for real gaming performance — not just benchmark numbers. Tuned for your titles." },
  { icon: "🚚", title: "Fast UK Delivery", desc: "UK-based with fully insured shipping. Most builds dispatched within 5–7 business days." },
];

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className="header reveal">
        <p className="eyebrow">WHY WES PCS</p>
        <h2>Built Different</h2>
        <p className="sub">We don&apos;t just assemble parts — we build machines you&apos;ll rely on for years.</p>
      </div>

      <div className="grid reveal-stagger">
        {reasons.map((r) => (
          <div key={r.title} className="card">
            <div className="iconBox">{r.icon}</div>
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        /* ── Mobile base ─────────────────────── */
        .section { padding: 72px 5%; }

        .header { text-align: center; margin-bottom: 40px; }

        .eyebrow {
          font-size: 10px; font-weight: 600; color: #333;
          letter-spacing: 4px; margin-bottom: 12px;
        }

        h2 {
          font-size: 34px; font-weight: 900;
          letter-spacing: -1px; margin-bottom: 12px;
        }

        .sub {
          color: #555; font-size: 14px; line-height: 1.65;
          max-width: 340px; margin: 0 auto;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          padding: 24px 20px;
          border-radius: 16px;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .card:active { transform: scale(0.99); }

        .iconBox {
          font-size: 22px;
          width: 44px; height: 44px;
          background: rgba(255,255,255,0.05);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 14px;
        }

        h3 { font-size: 16px; font-weight: 700; margin-bottom: 8px; }

        p { color: #555; font-size: 13px; line-height: 1.65; }

        /* ── Tablet ──────────────────────────── */
        @media (min-width: 600px) {
          .grid { grid-template-columns: 1fr 1fr; gap: 14px; }
        }

        /* ── Desktop ─────────────────────────── */
        @media (min-width: 1024px) {
          .section { padding: 120px 8%; }
          .grid { grid-template-columns: repeat(4, 1fr); }
          h2 { font-size: 44px; letter-spacing: -1.5px; }
          .card:hover { transform: translateY(-5px); border-color: rgba(255,255,255,0.14); }
        }
      `}</style>
    </section>
  );
}
