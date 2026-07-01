"use client";

import Link from "next/link";
import { builds } from "../data/builds";

export default function FeaturedBuilds() {
  return (
    <section className="section reveal">
      <div className="header">
        <p className="eyebrow">OUR LINEUP</p>
        <h2>Featured Builds</h2>
        <p className="sub">Four tiers, every budget. All hand-assembled in the UK.</p>
      </div>

      <div className="grid reveal-stagger">
        {builds.map((b, i) => (
          <Link key={b.id} href={`/builds/${b.id}`} className={`card ${b.badge === "Most Popular" ? "featured" : ""}`}>
            {b.badge === "Most Popular" && <div className="badge">★ Most Popular</div>}

            <p className="num">0{i + 1}</p>
            <h3>{b.name}</h3>
            <p className="tag">{b.tagline}</p>

            <div className="specs">
              <span>{b.gpu}</span>
              <span>{b.cpu}</span>
            </div>

            <div className="foot">
              <span className="price">{b.price}</span>
              <span className="arr">View →</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="more reveal">
        <Link href="/builds" className="moreBtn">See All Builds & Full Specs →</Link>
      </div>

      <style jsx>{`
        /* ── Mobile base ─────────────────────── */
        .section { padding: 72px 5%; }

        .header { text-align: center; margin-bottom: 36px; }

        .eyebrow {
          font-size: 10px; font-weight: 600; color: #333;
          letter-spacing: 4px; margin-bottom: 12px;
        }

        h2 {
          font-size: 34px; font-weight: 900;
          letter-spacing: -1px; margin-bottom: 10px;
        }

        .sub { color: #555; font-size: 14px; line-height: 1.6; }

        .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          margin-bottom: 20px;
        }

        .card {
          display: flex; flex-direction: column; gap: 8px;
          padding: 22px 18px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          color: white;
          position: relative;
          transition: border-color 0.3s ease, transform 0.3s ease;
          margin-top: 8px;
        }

        .card:active { transform: scale(0.99); }

        .featured {
          border-color: rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.035);
        }

        .badge {
          position: absolute; top: -11px; left: 18px;
          background: #fff; color: #000;
          font-size: 9px; font-weight: 800; letter-spacing: 1px;
          padding: 4px 10px; border-radius: 20px;
        }

        .num { font-size: 11px; color: #222; font-weight: 700; letter-spacing: 2px; }

        h3 { font-size: 18px; font-weight: 900; letter-spacing: -0.3px; }

        .tag { font-size: 12px; color: #444; }

        .specs {
          display: flex; flex-direction: column; gap: 2px;
          padding: 10px 0;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .specs span { font-size: 12px; color: #666; }

        .foot {
          display: flex; justify-content: space-between; align-items: center;
          padding-top: 10px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .price { font-size: 22px; font-weight: 900; letter-spacing: -0.5px; }
        .arr { font-size: 12px; color: #333; }

        .more { text-align: center; margin-top: 16px; }

        .moreBtn {
          display: inline-block;
          font-size: 13px; color: #555;
          border: 1px solid rgba(255,255,255,0.08);
          padding: 12px 22px; border-radius: 12px;
          transition: color 0.2s ease, border-color 0.2s ease;
        }

        /* ── Tablet ──────────────────────────── */
        @media (min-width: 600px) {
          .grid { grid-template-columns: 1fr 1fr; gap: 14px; }
        }

        /* ── Desktop ─────────────────────────── */
        @media (min-width: 1024px) {
          .section { padding: 120px 8%; }
          .grid { grid-template-columns: repeat(4, 1fr); }
          h2 { font-size: 44px; letter-spacing: -1.5px; }
          .card:hover { transform: translateY(-5px); border-color: rgba(255,255,255,0.16); }
          .card:hover .arr { color: #fff; }
          .moreBtn:hover { color: #fff; border-color: rgba(255,255,255,0.2); }
        }
      `}</style>
    </section>
  );
}
