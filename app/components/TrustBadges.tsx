"use client";

const badges = [
  { icon: "🛡", title: "PayPal Protected", sub: "Buyer protection on every order" },
  { icon: "✓", title: "Tested Before Shipping", sub: "Every build runs stress tests" },
  { icon: "📍", title: "UK Based", sub: "You know where we are" },
  { icon: "💬", title: "No Payment Until Confirmed", sub: "We agree everything first" },
];

export default function TrustBadges() {
  return (
    <section className="section reveal">
      <div className="grid reveal-stagger">
        {badges.map((b) => (
          <div key={b.title} className="badge">
            <span className="icon">{b.icon}</span>
            <p className="title">{b.title}</p>
            <p className="sub">{b.sub}</p>
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

        .badge {
          padding: 24px 18px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .icon { font-size: 22px; }

        .title {
          font-size: 13px;
          font-weight: 700;
          line-height: 1.3;
        }

        .sub { font-size: 12px; color: #444; line-height: 1.4; }

        @media (min-width: 768px) {
          .section { padding: 0 8% 100px; }
          .grid { grid-template-columns: repeat(4, 1fr); gap: 14px; }
          .title { font-size: 14px; }
          .sub { font-size: 13px; }
        }
      `}</style>
    </section>
  );
}
