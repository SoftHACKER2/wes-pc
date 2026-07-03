"use client";

import { builds } from "../../data/builds";
import Navbar from "../../components/Navbar";
import useScrollReveal from "../../components/useScrollReveal";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../../context/CartContext";
import { use, useState } from "react";

export default function BuildPage({ params }: { params: Promise<{ id: string }> }) {
  useScrollReveal();
  const { id } = use(params);
  const build = builds.find((b) => b.id === id);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    addToCart({ name: build!.name, price: build!.priceNum });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  if (!build) {
    return (
      <>
        <Navbar />
        <div className="notFound">
          <h1>Build not found</h1>
          <Link href="/builds">← Back to builds</Link>
          <style jsx>{`
            .notFound {
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 16px;
            }
            h1 { font-size: 32px; font-weight: 900; }
            a { color: #555; font-size: 14px; transition: color 0.2s ease; }
            a:hover { color: #fff; }
          `}</style>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="page">

        {/* ─── Hero ──────────────────────────── */}
        <div className="hero">
          <div className="heroLeft">
            {build.badge && <div className="badge">{build.badge}</div>}
            <p className="eyebrow">TIER {builds.indexOf(build) + 1} OF 4</p>
            <h1>{build.name}</h1>
            <p className="desc">{build.description}</p>
          </div>

          <div className="heroRight">
            {build.image && (
              <div className="buildImg">
                <Image src={build.image} alt={build.name} fill style={{ objectFit: "contain" }} />
              </div>
            )}
            <div className="priceBox">
              <p className="priceLabel">Starting from</p>
              <p className="price">{build.price}</p>
              <p className="priceNote">Fully built, tested & shipped to your door.</p>

              <button
                className={`btnPrimary ${added ? "btnAdded" : ""}`}
                onClick={handleAddToCart}
              >
                {added ? "✓ Added to Cart" : "Add to Cart"}
              </button>
              <Link href="/configurator" className="btnSecondary">
                Request Custom Build
              </Link>
            </div>
          </div>
        </div>

        {/* ─── Specs ─────────────────────────── */}
        <div className="block reveal">
          <p className="blockLabel">FULL SPECIFICATIONS</p>
          <div className="specGrid reveal-stagger">
            {[
              { label: "CPU", value: build.cpu },
              { label: "GPU", value: build.gpu },
              { label: "RAM", value: build.ram },
              { label: "Storage", value: build.storage },
              { label: "Cooling", value: build.cooling },
              { label: "Best For", value: build.resolution },
            ].map((s) => (
              <div key={s.label} className="specBox">
                <p className="specLabel">{s.label}</p>
                <p className="specVal">{s.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── FPS ───────────────────────────── */}
        <div className="block reveal">
          <p className="blockLabel">EXPECTED FPS — HIGH / ULTRA SETTINGS</p>
          <div className="fpsGrid reveal-stagger">
            {[
              { game: "Fortnite", fps: build.fps.fortnite },
              { game: "Warzone", fps: build.fps.warzone },
              { game: "GTA V", fps: build.fps.gta },
            ].map((f) => (
              <div key={f.game} className="fpsBox">
                <p className="fpsGame">{f.game}</p>
                <p className="fpsVal">{f.fps}</p>
                <p className="fpsRes">{build.resolution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── What's included ────────────────── */}
        <div className="block reveal">
          <p className="blockLabel">WHAT&apos;S INCLUDED</p>
          <div className="includeGrid reveal-stagger">
            {[
              { icon: "✓", text: "Full assembly & cable management" },
              { icon: "✓", text: "Load tested before shipping" },
              { icon: "✓", text: "Windows 11 pre-installed" },
              { icon: "✓", text: "UK insured shipping" },
              { icon: "✓", text: "After-sales support" },
              { icon: "✓", text: "1 year parts warranty" },
            ].map((item) => (
              <div key={item.text} className="includeBox">
                <span className="checkIcon">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Other builds ───────────────────── */}
        <div className="block reveal">
          <p className="blockLabel">COMPARE OTHER BUILDS</p>
          <div className="otherGrid reveal-stagger">
            {builds
              .filter((b) => b.id !== build.id)
              .map((b) => (
                <Link key={b.id} href={`/builds/${b.id}`} className="otherCard">
                  <div>
                    <p className="otherName">{b.name}</p>
                    <p className="otherTagline">{b.tagline}</p>
                  </div>
                  <p className="otherPrice">{b.price} →</p>
                </Link>
              ))}
          </div>
        </div>

      </main>

      <style jsx>{`
        .page {
          padding: 110px 8% 80px;
          min-height: 100vh;
        }

        /* Hero */
        .hero {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 48px;
          align-items: start;
          margin-bottom: 96px;
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.08s both;
        }

        .badge {
          display: inline-block;
          background: #fff;
          color: #000;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
          padding: 5px 12px;
          border-radius: 20px;
          margin-bottom: 16px;
        }

        .eyebrow {
          font-size: 10px;
          color: #333;
          letter-spacing: 4px;
          font-weight: 600;
          margin-bottom: 14px;
        }

        h1 {
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 900;
          letter-spacing: -2px;
          line-height: 1.0;
          margin-bottom: 20px;
        }

        .desc {
          color: #555;
          font-size: 15px;
          line-height: 1.75;
          max-width: 520px;
        }

        .buildImg {
          position: relative;
          width: 100%;
          height: 260px;
          border-radius: 16px;
          overflow: hidden;
          background: #fff;
          margin-bottom: 16px;
        }

        /* Price box */
        .priceBox {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          position: sticky;
          top: 88px;
        }

        .priceLabel {
          font-size: 11px;
          color: #444;
          letter-spacing: 2px;
        }

        .price {
          font-size: 42px;
          font-weight: 900;
          letter-spacing: -2px;
        }

        .priceNote {
          font-size: 12px;
          color: #444;
          line-height: 1.5;
          padding-bottom: 4px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .btnPrimary {
          display: block;
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          background: #fff;
          color: #000;
          font-size: 14px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          text-align: center;
          transition: opacity 0.2s ease, transform 0.2s ease, background 0.3s ease;
          font-family: inherit;
        }

        .btnPrimary:hover { opacity: 0.85; transform: translateY(-2px); }

        .btnAdded {
          background: #1a1a1a;
          color: #4caf50;
          border: 1px solid #4caf50;
        }

        .btnSecondary {
          display: block;
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          background: transparent;
          color: #555;
          font-size: 14px;
          font-weight: 600;
          border: 1px solid rgba(255,255,255,0.08);
          text-align: center;
          transition: color 0.2s ease, border-color 0.2s ease;
        }

        .btnSecondary:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.2);
        }

        /* Blocks */
        .block {
          margin-bottom: 72px;
        }

        .blockLabel {
          font-size: 10px;
          color: #333;
          letter-spacing: 4px;
          font-weight: 600;
          margin-bottom: 22px;
        }

        /* Specs */
        .specGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .specBox {
          padding: 22px 20px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          transition: background 0.3s ease, border-color 0.3s ease;
        }

        .specBox:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.12);
        }

        .specLabel {
          font-size: 10px;
          color: #444;
          letter-spacing: 2px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .specVal {
          font-size: 14px;
          font-weight: 700;
          color: #ddd;
        }

        /* FPS */
        .fpsGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .fpsBox {
          padding: 28px 24px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          text-align: center;
          transition: background 0.3s ease, border-color 0.3s ease;
        }

        .fpsBox:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.12);
        }

        .fpsGame {
          font-size: 12px;
          color: #444;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .fpsVal {
          font-size: 24px;
          font-weight: 900;
          letter-spacing: -0.5px;
          margin-bottom: 6px;
        }

        .fpsRes {
          font-size: 10px;
          color: #333;
          letter-spacing: 1px;
        }

        /* Included */
        .includeGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .includeBox {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 18px 20px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          font-size: 13px;
          color: #aaa;
          transition: background 0.3s ease;
        }

        .includeBox:hover {
          background: rgba(255,255,255,0.04);
        }

        .checkIcon {
          color: #fff;
          font-weight: 900;
          font-size: 14px;
          flex-shrink: 0;
        }

        /* Other builds */
        .otherGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .otherCard {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding: 20px 22px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          color: white;
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }

        .otherCard:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.14);
          transform: translateY(-3px);
        }

        .otherName {
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .otherTagline {
          font-size: 11px;
          color: #444;
        }

        .otherPrice {
          font-size: 14px;
          font-weight: 800;
          color: #888;
          white-space: nowrap;
        }

        @media (max-width: 960px) {
          .hero {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .priceBox { position: static; }

          .specGrid,
          .fpsGrid,
          .includeGrid,
          .otherGrid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .page { padding: 90px 5% 60px; }
          h1 { font-size: 34px; letter-spacing: -1px; }
          .price { font-size: 28px; }

          .specGrid,
          .fpsGrid,
          .includeGrid,
          .otherGrid {
            grid-template-columns: 1fr;
          }

          .otherCard {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
        }
      `}</style>
    </>
  );
}
