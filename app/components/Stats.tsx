"use client";

const stats = [
  { value: "50+",  label: "Builds Completed" },
  { value: "100%", label: "Tested Before Shipping" },
  { value: "5–7d", label: "Build Turnaround" },
  { value: "UK",   label: "Based & Insured" },
];

export default function Stats() {
  return (
    <section className="section">
      <div className="grid reveal-stagger">
        {stats.map((s) => (
          <div key={s.value} className="card">
            <p className="val">{s.value}</p>
            <p className="lbl">{s.label}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        /* ── Mobile base ─────────────────────── */
        .section { padding: 0 5% 72px; }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .card {
          padding: 28px 16px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          text-align: center;
        }

        .val {
          font-size: 36px; font-weight: 900;
          letter-spacing: -1.5px; margin-bottom: 6px;
        }

        .lbl { color: #444; font-size: 12px; line-height: 1.4; }

        /* ── Desktop ─────────────────────────── */
        @media (min-width: 1024px) {
          .section { padding: 0 8% 120px; }
          .grid { grid-template-columns: repeat(4, 1fr); gap: 16px; }
          .val { font-size: 44px; }
          .lbl { font-size: 13px; }
        }
      `}</style>
    </section>
  );
}
