"use client";

import Navbar from "../components/Navbar";
import Link from "next/link";
import { builds } from "../data/builds";

const rows = [
  { label: "Price", key: "price" },
  { label: "CPU", key: "cpu" },
  { label: "GPU", key: "gpu" },
  { label: "RAM", key: "ram" },
  { label: "Storage", key: "storage" },
  { label: "Cooling", key: "cooling" },
  { label: "Best Resolution", key: "resolution" },
  { label: "Fortnite FPS", key: "fortnite" },
  { label: "Warzone FPS", key: "warzone" },
  { label: "GTA V FPS", key: "gta" },
];

function getVal(b: typeof builds[0], key: string) {
  if (key === "fortnite") return b.fps.fortnite;
  if (key === "warzone") return b.fps.warzone;
  if (key === "gta") return b.fps.gta;
  return (b as Record<string, unknown>)[key] as string;
}

export default function ComparePage() {
  return (
    <>
      <Navbar />
      <main className="page">
        <div className="header">
          <p className="eyebrow">COMPARE BUILDS</p>
          <h1>Side by Side</h1>
          <p className="sub">All four builds, every spec — so you can pick the right one with confidence.</p>
        </div>

        <div className="tableWrap">
          <table className="table">
            <thead>
              <tr>
                <th className="labelCol" />
                {builds.map(b => (
                  <th key={b.id} className={b.badge === "Most Popular" ? "popular" : ""}>
                    {b.badge === "Most Popular" && <span className="popBadge">★ Most Popular</span>}
                    <span className="buildName">{b.name}</span>
                    <span className="buildPrice">{b.price}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.key} className={i % 2 === 0 ? "even" : ""}>
                  <td className="rowLabel">{row.label}</td>
                  {builds.map(b => (
                    <td key={b.id} className={`cell ${b.badge === "Most Popular" ? "popularCell" : ""}`}>
                      {row.key === "price"
                        ? <strong className="priceCell">{getVal(b, row.key)}</strong>
                        : getVal(b, row.key)
                      }
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="ctaRow">
                <td className="rowLabel" />
                {builds.map(b => (
                  <td key={b.id} className={b.badge === "Most Popular" ? "popularCell" : ""}>
                    <Link href={`/builds/${b.id}`} className={`btn ${b.badge === "Most Popular" ? "btnPop" : "btnSec"}`}>
                      View Build →
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile card view */}
        <div className="mobileCards">
          {builds.map(b => (
            <div key={b.id} className={`mCard ${b.badge === "Most Popular" ? "mCardPop" : ""}`}>
              {b.badge === "Most Popular" && <span className="mPopBadge">★ Most Popular</span>}
              {b.badge === "Top Tier" && <span className="mTopBadge">Top Tier</span>}
              <div className="mHead">
                <p className="mName">{b.name}</p>
                <p className="mPrice">{b.price}</p>
              </div>
              {rows.filter(r => r.key !== "price").map(row => (
                <div key={row.key} className="mRow">
                  <span className="mLabel">{row.label}</span>
                  <span className="mVal">{getVal(b, row.key)}</span>
                </div>
              ))}
              <Link href={`/builds/${b.id}`} className={`btn ${b.badge === "Most Popular" ? "btnPop" : "btnSec"}`} style={{ display: "block", textAlign: "center", marginTop: "14px" }}>
                View Build →
              </Link>
            </div>
          ))}
        </div>

        <div className="quizCta">
          <p>Not sure which is right for you?</p>
          <Link href="/quiz" className="quizBtn">Take the 3-question quiz →</Link>
        </div>
      </main>

      <style jsx>{`
        .page { padding: 100px 4% 80px; min-height: 100vh; animation: fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both; }

        .header { text-align: center; margin-bottom: 40px; }
        .eyebrow { font-size: 10px; font-weight: 600; color: #333; letter-spacing: 4px; margin-bottom: 12px; }
        h1 { font-size: clamp(32px, 5vw, 52px); font-weight: 900; letter-spacing: -2px; margin-bottom: 10px; }
        .sub { color: #555; font-size: 14px; line-height: 1.6; max-width: 440px; margin: 0 auto; }

        /* Desktop table */
        .tableWrap { display: none; overflow-x: auto; border-radius: 20px; border: 1px solid rgba(255,255,255,0.08); }

        .table { width: 100%; border-collapse: collapse; }

        th {
          padding: 20px 16px 16px;
          text-align: left;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          vertical-align: bottom;
          background: rgba(255,255,255,0.01);
        }

        th.popular { background: rgba(255,255,255,0.04); }

        .labelCol { width: 140px; }

        .popBadge {
          display: block; font-size: 9px; font-weight: 800;
          background: #fff; color: #000; padding: 3px 8px;
          border-radius: 20px; width: fit-content; margin-bottom: 8px;
          letter-spacing: 0.5px;
        }

        .buildName { display: block; font-size: 13px; font-weight: 800; color: #fff; margin-bottom: 4px; }
        .buildPrice { display: block; font-size: 20px; font-weight: 900; letter-spacing: -0.5px; }

        td {
          padding: 13px 16px;
          font-size: 12px;
          color: #666;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          vertical-align: top;
        }

        td.even, th { background: rgba(255,255,255,0.01); }
        .even { background: rgba(255,255,255,0.01); }

        .popularCell { background: rgba(255,255,255,0.025) !important; }

        .rowLabel {
          font-size: 11px; font-weight: 600; color: #333;
          white-space: nowrap;
        }

        .priceCell { font-size: 14px; font-weight: 900; color: #fff; }

        .ctaRow td { padding: 16px; }

        .btn {
          display: inline-block; padding: 10px 16px;
          border-radius: 10px; font-size: 12px; font-weight: 700;
          transition: opacity 0.2s ease;
        }

        .btnPop { background: #fff; color: #000; }
        .btnSec {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #666;
        }

        .btnPop:hover { opacity: 0.85; }
        .btnSec:hover { color: #fff; }

        /* Mobile cards */
        .mobileCards { display: flex; flex-direction: column; gap: 16px; }

        .mCard {
          position: relative;
          padding: 20px 18px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          margin-top: 10px;
        }

        .mCardPop { border-color: rgba(255,255,255,0.2); background: rgba(255,255,255,0.04); }

        .mPopBadge {
          position: absolute; top: -10px; left: 16px;
          font-size: 9px; font-weight: 800;
          background: #fff; color: #000; padding: 3px 10px;
          border-radius: 20px;
        }

        .mTopBadge {
          position: absolute; top: -10px; left: 16px;
          font-size: 9px; font-weight: 800;
          background: rgba(255,255,255,0.08); color: #888;
          border: 1px solid rgba(255,255,255,0.14);
          padding: 3px 10px; border-radius: 20px;
        }

        .mHead { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
        .mName { font-size: 16px; font-weight: 900; }
        .mPrice { font-size: 20px; font-weight: 900; }

        .mRow {
          display: flex; justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          font-size: 12px;
        }

        .mLabel { color: #333; font-weight: 500; }
        .mVal { color: #777; font-weight: 600; text-align: right; max-width: 55%; }

        .quizCta {
          margin-top: 48px; text-align: center;
        }

        .quizCta p { color: #444; font-size: 14px; margin-bottom: 12px; }

        .quizBtn {
          display: inline-block; padding: 12px 24px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px; color: #777;
          font-size: 14px; font-weight: 700;
          transition: color 0.2s ease, border-color 0.2s ease;
        }

        .quizBtn:hover { color: #fff; border-color: rgba(255,255,255,0.25); }

        @media (min-width: 900px) {
          .tableWrap { display: block; }
          .mobileCards { display: none; }
          .page { padding: 110px 5% 100px; }
        }
      `}</style>
    </>
  );
}
