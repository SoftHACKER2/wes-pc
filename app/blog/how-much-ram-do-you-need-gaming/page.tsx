import Navbar from "../../components/Navbar";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much RAM Do You Need for Gaming in 2025? — WES PCS",
  description: "8GB, 16GB, or 32GB? Here's the real answer on RAM for gaming in 2025.",
};

export default function Post() {
  return (
    <>
      <Navbar />
      <article className="article">
        <div className="meta">
          <Link href="/blog" className="back">← Blog</Link>
          <span className="tag">Tips</span>
        </div>

        <h1>How Much RAM Do You Actually Need for Gaming in 2025?</h1>
        <p className="byline">By Wes · May 2025 · 3 min read</p>

        <p>Short answer: 16GB minimum, 32GB if you do anything else alongside gaming. Here's why.</p>

        <h2>8GB — Don't do it</h2>

        <p>Some prebuilts still ship with 8GB of RAM in 2025. This is borderline dishonest. Modern games regularly use 8–10GB of RAM by themselves. Add Chrome with a few tabs and Discord in the background, and you're stuttering.</p>

        <p>8GB was fine in 2018. It's not fine now. If a PC you're considering has 8GB, it's cutting corners.</p>

        <h2>16GB — The gaming sweet spot</h2>

        <p>For pure gaming, 16GB DDR4 at 3200MHz is the sweet spot. Every game runs smoothly, you can have Spotify, Discord, and a browser open at the same time, and you're not paying for RAM you don't need.</p>

        <p>This is what I put in the Budget Killer (£799) — it's the right call at that price point.</p>

        <h2>32GB — Worth it if you do more than just game</h2>

        <p>If you stream your gameplay, do video editing, use Photoshop, or just habitually have 40 browser tabs open — get 32GB. It's not that much more expensive, especially in DDR4, and the difference when multitasking is noticeable.</p>

        <p>All of the mid-to-high WES PCS builds ship with 32GB for this reason. Most customers use their gaming PC for everything, not just games.</p>

        <h2>64GB — Only for professionals</h2>

        <p>Unless you're running a video editing suite, doing 3D rendering, or working with very large datasets, 64GB is overkill for gaming. Don't let anyone sell you 64GB for a gaming machine — it's a waste of money that could go into a better GPU.</p>

        <h2>DDR4 vs DDR5 — does it matter?</h2>

        <p>For gaming specifically, the difference between DDR4 and DDR5 is much smaller than the marketing suggests. On the Ryzen 5000 platform (our Budget Killer and Best Price builds), DDR4 is the right choice — DDR5 isn't supported. On AM5 (our Gaming Beast and Ultimate Machine), DDR5 is standard and worth it at the higher speeds we configure.</p>

        <div className="cta">
          <p>Want to know which build is right for you?</p>
          <Link href="/quiz" className="ctaBtn">Take the 3-question quiz →</Link>
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
        h2 { font-size: 22px; font-weight: 800; letter-spacing: -0.5px; margin: 36px 0 14px; color: #fff; }
        .cta { margin-top: 48px; padding: 28px 24px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; text-align: center; }
        .cta p { margin-bottom: 14px; }
        .ctaBtn { display: inline-block; padding: 12px 24px; background: #fff; color: #000; border-radius: 10px; font-size: 14px; font-weight: 700; transition: opacity 0.2s ease; }
        .ctaBtn:hover { opacity: 0.85; }
      `}</style>
    </>
  );
}
