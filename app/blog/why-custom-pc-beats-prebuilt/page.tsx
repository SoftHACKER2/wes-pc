import Navbar from "../../components/Navbar";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why a Custom PC Beats a Prebuilt Every Time — WES PCS",
  description: "Currys and PC World sell prebuilts with £150 worth of parts for £900. Here's what you actually get when someone who cares builds your PC.",
};

export default function Post() {
  return (
    <>
      <Navbar />
      <article className="article">
        <div className="meta">
          <Link href="/blog" className="back">← Blog</Link>
          <span className="tag">Advice</span>
        </div>

        <h1>Why a Custom PC Beats a Prebuilt Every Time</h1>
        <p className="byline">By Wes · May 2025 · 3 min read</p>

        <p>Last month, someone sent me a screenshot of a PC they were about to buy from Currys for £899. It had a GTX 1650, 8GB of RAM, and a spinning hard drive. That's a machine I'd have been embarrassed by in 2019.</p>

        <p>This stuff genuinely annoys me — so let me explain exactly what's happening and why custom wins every time.</p>

        <h2>Why prebuilts are bad value</h2>

        <p>Prebuilt manufacturers buy parts in bulk, which sounds like it should make things cheaper. But they also:</p>

        <ul>
          <li>Use proprietary motherboards and PSUs you can't upgrade later</li>
          <li>Install cheap branded RAM and storage that looks good on spec sheets but performs poorly</li>
          <li>Pair GPUs with CPUs that bottleneck them</li>
          <li>Add bloatware and crapware to your Windows install</li>
          <li>Charge a premium for their brand name</li>
        </ul>

        <p>The result: you pay £900 for a machine worth £350 in parts, that's harder to upgrade, and performs worse than it should.</p>

        <h2>What you get with a custom build from WES PCS</h2>

        <p>Every part in your PC is chosen specifically for <em>your</em> use case and budget. I don't add filler parts to make the spec sheet look longer. I don't use proprietary components that lock you in. And I don't charge you for a brand name — the money goes into the machine.</p>

        <p>Every build is:</p>

        <ul>
          <li>Assembled by hand, with proper cable management</li>
          <li>Tested under load before it ships</li>
          <li>Running a clean Windows install — no bloatware</li>
          <li>Ready to upgrade in the future (standard ATX components throughout)</li>
        </ul>

        <h2>But isn't it risky buying from an individual?</h2>

        <p>Less risky than you might think. All payments go through PayPal, which means full buyer protection on every order. If something goes wrong, you're covered.</p>

        <p>And because it's me building your machine — not a factory worker on a production line — I actually care about what ships. My reputation depends on every build being right.</p>

        <div className="cta">
          <p>See what £799 actually buys you when someone builds it properly.</p>
          <Link href="/builds" className="ctaBtn">View All Builds →</Link>
        </div>
      </article>

      <style jsx>{`
        .article { max-width: 680px; margin: 0 auto; padding: 100px 5% 80px; animation: fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both; }
        .meta { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
        .back { font-size: 13px; color: #444; transition: color 0.2s ease; }
        .back:hover { color: #fff; }
        .tag { font-size: 9px; font-weight: 700; letter-spacing: 2px; color: #333; background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 20px; }
        h1 { font-size: clamp(26px, 5vw, 42px); font-weight: 900; letter-spacing: -1.5px; line-height: 1.1; margin-bottom: 14px; }
        .byline { font-size: 12px; color: #333; margin-bottom: 36px; }
        p { color: #666; font-size: 15px; line-height: 1.8; margin-bottom: 20px; }
        em { color: #888; }
        h2 { font-size: 22px; font-weight: 800; letter-spacing: -0.5px; margin: 36px 0 14px; color: #fff; }
        ul { color: #666; font-size: 15px; line-height: 1.8; padding-left: 20px; margin-bottom: 20px; }
        li { margin-bottom: 6px; }
        .cta { margin-top: 48px; padding: 28px 24px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; text-align: center; }
        .cta p { margin-bottom: 14px; }
        .ctaBtn { display: inline-block; padding: 12px 24px; background: #fff; color: #000; border-radius: 10px; font-size: 14px; font-weight: 700; transition: opacity 0.2s ease; }
        .ctaBtn:hover { opacity: 0.85; }
      `}</style>
    </>
  );
}
