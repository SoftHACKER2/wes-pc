"use client";

const builds = [
  { name: "Best Price for Quality", for: "Jake — Manchester", progress: 80, stage: "Cable management" },
  { name: "Gaming Beast", for: "Ryan — Leeds", progress: 45, stage: "Parts arrived, assembly started" },
  { name: "Budget Killer", for: "Tom — Birmingham", progress: 15, stage: "Parts ordered" },
];

export default function CurrentlyBuilding() {
  return (
    <section className="section reveal">
      <p className="eyebrow">LIVE UPDATES</p>
      <h2>Currently Building</h2>
      <p className="sub">Real builds happening right now in the workshop.</p>

      <div className="cards">
        {builds.map((b, i) => (
          <div key={i} className="card">
            <div className="cardHead">
              <div>
                <p className="buildName">{b.name}</p>
                <p className="buildFor">For {b.for}</p>
              </div>
              <div className="stagePill">{b.stage}</div>
            </div>
            <div className="bar">
              <div className="fill" style={{ width: `${b.progress}%` }} />
            </div>
            <p className="pct">{b.progress}% complete</p>
          </div>
        ))}
      </div>

      <p className="note">Want yours added here? <a href="https://wa.me/447395530395?text=Hi%20Wes!" target="_blank" rel="noopener noreferrer" className="noteLink">Order your build →</a></p>

      <style jsx>{`
        .section {
          padding: 0 5% 80px;
        }

        .eyebrow {
          font-size: 10px; font-weight: 600; color: #333;
          letter-spacing: 4px; margin-bottom: 12px;
        }

        h2 {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 900; letter-spacing: -1.5px;
          margin-bottom: 8px;
        }

        .sub { color: #555; font-size: 14px; margin-bottom: 28px; }

        .cards { display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px; }

        .card {
          padding: 20px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
        }

        .cardHead {
          display: flex; justify-content: space-between;
          align-items: flex-start; gap: 12px; margin-bottom: 14px;
        }

        .buildName { font-size: 14px; font-weight: 800; margin-bottom: 3px; }
        .buildFor { font-size: 12px; color: #333; }

        .stagePill {
          font-size: 10px; font-weight: 600;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px; padding: 4px 10px;
          color: #555; white-space: nowrap; flex-shrink: 0;
        }

        .bar {
          height: 4px; background: rgba(255,255,255,0.06);
          border-radius: 4px; overflow: hidden; margin-bottom: 6px;
        }

        .fill {
          height: 100%; background: #fff;
          border-radius: 4px;
          transition: width 1s cubic-bezier(0.16,1,0.3,1);
        }

        .pct { font-size: 11px; color: #333; }

        .note { font-size: 13px; color: #333; }

        .noteLink { color: #fff; font-weight: 700; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 1px; transition: border-color 0.2s ease; }
        .noteLink:hover { border-color: rgba(255,255,255,0.5); }

        @media (min-width: 769px) {
          .section { padding: 0 8% 100px; }
          .cards { display: grid; grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </section>
  );
}
