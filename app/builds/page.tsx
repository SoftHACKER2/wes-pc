"use client";

import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { builds } from "../data/builds";
import useScrollReveal from "../components/useScrollReveal";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function BuildsPage() {
  useScrollReveal();
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  function handleAdd(b: typeof builds[0]) {
    addToCart({ name: b.name, price: b.priceNum });
    setAddedId(b.id);
    setTimeout(() => setAddedId(null), 2000);
  }

  return (
    <>
      <Navbar />
      <main className="page">

        {/* Header */}
        <div className="header">
          <p className="eyebrow">OUR BUILDS</p>
          <h1>Find Your Build</h1>
          <p className="sub">
            Four tiers, every budget. Hand-assembled and tested in the UK
            before shipping to your door.
          </p>
        </div>

        {/* Cards */}
        <div className="list reveal-stagger">
          {builds.map((b, i) => (
            <div key={b.id} className={`card ${b.badge === "Most Popular" ? "featured" : ""}`}>

              {b.badge === "Most Popular" && <div className="popularBadge">★ Most Popular</div>}
              {b.badge === "Top Tier" && <div className="topBadge">Top Tier</div>}

              {/* Image */}
              {b.image && (
                <div className="imgWrap">
                  <Image src={b.image} alt={b.name} fill style={{ objectFit: "contain" }} />
                </div>
              )}

              {/* Top row: name + price */}
              <div className="cardHead">
                <div>
                  <p className="tierNum">0{i + 1}</p>
                  <h2>{b.name}</h2>
                  <p className="tagline">{b.tagline}</p>
                </div>
                <p className="price">{b.price}</p>
              </div>

              {/* Specs */}
              <div className="specs">
                {[
                  ["CPU", b.cpu],
                  ["GPU", b.gpu],
                  ["RAM", b.ram],
                  ["Storage", b.storage],
                  ["Cooling", b.cooling],
                  ["Best For", b.resolution],
                ].map(([k, v]) => (
                  <div key={k} className="specRow">
                    <span className="sk">{k}</span>
                    <span className="sv">{v}</span>
                  </div>
                ))}
              </div>

              {/* FPS */}
              <div className="fps">
                <p className="fpsTitle">Expected FPS</p>
                <div className="fpsGrid">
                  <div className="fpsItem">
                    <p className="fg">Fortnite</p>
                    <p className="fn">{b.fps.fortnite}</p>
                  </div>
                  <div className="fpsItem">
                    <p className="fg">Warzone</p>
                    <p className="fn">{b.fps.warzone}</p>
                  </div>
                  <div className="fpsItem">
                    <p className="fg">GTA V</p>
                    <p className="fn">{b.fps.gta}</p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="btns">
                <button
                  className={`btnCart ${addedId === b.id ? "btnAdded" : ""}`}
                  onClick={() => handleAdd(b)}
                >
                  {addedId === b.id ? "✓ Added" : "Add to Cart"}
                </button>
                <Link href={`/builds/${b.id}`} className="btnDetails">
                  Full Details
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="cta reveal">
          <p className="ctaEye">NOT SURE WHICH TO PICK?</p>
          <h3>Let us help you decide</h3>
          <p className="ctaSub">Tell us your budget and what you play — we&apos;ll find the perfect build.</p>
          <Link href="/configurator" className="ctaBtn">Use the Configurator →</Link>
        </div>

      </main>

      <style jsx>{`
        /* ── Mobile base ─────────────────────── */
        .page { padding: 76px 5% 60px; min-height: 100vh; }

        .header {
          text-align: center; margin-bottom: 36px;
          animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.05s both;
        }

        .eyebrow {
          font-size: 10px; font-weight: 600; color: #333;
          letter-spacing: 4px; margin-bottom: 12px;
        }

        h1 {
          font-size: 36px; font-weight: 900;
          letter-spacing: -1.5px; margin-bottom: 12px;
        }

        .sub { color: #555; font-size: 14px; line-height: 1.65; }

        /* List = single column stacked cards on mobile */
        .list {
          display: flex; flex-direction: column;
          gap: 20px; margin-bottom: 48px;
        }

        .imgWrap {
          position: relative;
          width: 100%;
          height: 160px;
          border-radius: 10px;
          overflow: hidden;
          background: #fff;
        }

        /* Card */
        .card {
          position: relative;
          padding: 22px 18px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 18px;
          display: flex; flex-direction: column; gap: 16px;
          margin-top: 12px;
          transition: border-color 0.3s ease;
        }

        .featured {
          border-color: rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.04);
        }

        /* Badges */
        .popularBadge, .topBadge {
          position: absolute; top: -12px; left: 18px;
          font-size: 10px; font-weight: 800;
          padding: 4px 12px; border-radius: 20px;
          letter-spacing: 1px;
        }

        .popularBadge { background: #fff; color: #000; }
        .topBadge {
          background: rgba(255,255,255,0.08); color: #888;
          border: 1px solid rgba(255,255,255,0.14);
        }

        /* Card head */
        .cardHead {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
        }

        .tierNum {
          font-size: 10px; font-weight: 700; color: #222;
          letter-spacing: 2px; margin-bottom: 4px;
        }

        h2 { font-size: 20px; font-weight: 900; letter-spacing: -0.4px; margin-bottom: 4px; }

        .tagline { font-size: 12px; color: #444; line-height: 1.45; }

        .price {
          font-size: 22px; font-weight: 900;
          letter-spacing: -0.5px; flex-shrink: 0;
          padding-top: 2px;
        }

        /* Specs */
        .specs {
          display: flex; flex-direction: column; gap: 8px;
          padding: 14px 0;
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .specRow { display: flex; justify-content: space-between; gap: 8px; }

        .sk { font-size: 12px; color: #333; font-weight: 500; flex-shrink: 0; }
        .sv { font-size: 12px; font-weight: 600; color: #aaa; text-align: right; }

        /* FPS */
        .fps { display: flex; flex-direction: column; gap: 10px; }

        .fpsTitle {
          font-size: 10px; font-weight: 600; color: #2a2a2a; letter-spacing: 3px;
        }

        .fpsGrid { display: grid; grid-template-columns: repeat(3,1fr); gap: 6px; }

        .fpsItem {
          background: rgba(255,255,255,0.03);
          border-radius: 10px; padding: 12px 6px; text-align: center;
        }

        .fg { font-size: 10px; color: #333; margin-bottom: 5px; }
        .fn { font-size: 12px; font-weight: 700; color: #aaa; }

        /* Buttons */
        .btns { display: flex; flex-direction: column; gap: 8px; }

        .btnCart {
          display: block; width: 100%; padding: 15px;
          border-radius: 12px; background: #fff; color: #000;
          font-size: 15px; font-weight: 700; border: none;
          cursor: pointer; font-family: inherit;
          transition: opacity 0.2s ease;
        }

        .btnCart:active { opacity: 0.8; }

        .btnAdded {
          background: #1a1a1a !important;
          color: #4caf50 !important;
          border: 1px solid #4caf50 !important;
        }

        .btnDetails {
          display: block; text-align: center; padding: 14px;
          border-radius: 12px; background: transparent; color: #555;
          font-size: 14px; font-weight: 600;
          border: 1px solid rgba(255,255,255,0.08);
          transition: color 0.2s ease, border-color 0.2s ease;
        }

        .btnDetails:active { color: #fff; }

        /* Bottom CTA */
        .cta {
          text-align: center; padding: 48px 20px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
        }

        .ctaEye {
          font-size: 10px; color: #333; letter-spacing: 4px;
          font-weight: 600; margin-bottom: 12px;
        }

        h3 {
          font-size: 26px; font-weight: 900;
          letter-spacing: -1px; margin-bottom: 10px;
        }

        .ctaSub {
          color: #555; font-size: 14px; max-width: 300px;
          margin: 0 auto 24px; line-height: 1.6;
        }

        .ctaBtn {
          display: inline-block; padding: 14px 26px;
          background: #fff; color: #000;
          border-radius: 12px; font-size: 14px; font-weight: 700;
          transition: opacity 0.2s ease;
        }

        .ctaBtn:active { opacity: 0.8; }

        /* ── Tablet (2 columns) ──────────────── */
        @media (min-width: 640px) {
          .list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }

          .card { margin-top: 14px; }
        }

        /* ── Desktop (4 columns) ─────────────── */
        @media (min-width: 1100px) {
          .page { padding: 110px 5% 80px; }
          h1 { font-size: 58px; letter-spacing: -2px; }

          .list {
            grid-template-columns: repeat(4, 1fr);
            gap: 14px;
          }

          .btnCart:hover { opacity: 0.85; transform: translateY(-2px); }
          .btnDetails:hover { color: #fff; border-color: rgba(255,255,255,0.18); }
          .card:hover { border-color: rgba(255,255,255,0.18); transform: translateY(-5px); }

          h3 { font-size: 30px; }
          .ctaBtn:hover { opacity: 0.85; transform: translateY(-2px); }
        }
      `}</style>
    </>
  );
}
