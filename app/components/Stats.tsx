"use client";

const stats = [
  { value: "50+",  label: "Builds Completed", live: false },
  { value: "100%", label: "Tested Before Shipping", live: false },
  { value: "5–7d", label: "Build Turnaround", live: false },
  { value: "3",    label: "Builds In Progress", live: true },
];

export default function Stats() {
  return (
    <section className="section">
      <div className="grid reveal-stagger">
        {stats.map((s) => (
          <div key={s.label} className={`card ${s.live ? "cardLive" : ""}`}>
            {s.live && <span className="liveDot" />}
            <p className="val">{s.value}</p>
            <p className="lbl">{s.label}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .section { padding: 0 5% 72px; }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .card {
          position: relative;
          padding: 28px 16px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          text-align: center;
        }

        .cardLive {
          border-color: rgba(37,211,102,0.2);
          background: rgba(37,211,102,0.03);
        }

        .liveDot {
          position: absolute;
          top: 12px; right: 12px;
          width: 7px; height: 7px;
          background: #25D366;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.4); }
        }

        .val {
          font-size: 36px; font-weight: 900;
          letter-spacing: -1.5px; margin-bottom: 6px;
        }

        .lbl { color: #444; font-size: 12px; line-height: 1.4; }

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
