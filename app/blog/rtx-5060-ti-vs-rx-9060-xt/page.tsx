import Navbar from "../../components/Navbar";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RTX 5060 Ti vs RX 9060 XT — Which Should You Buy? — WES PCS",
  description: "Both sit around £400–450 in the UK. One has DLSS 4. The other has 16GB VRAM. Here's the real answer.",
};

export default function Post() {
  return (
    <>
      <Navbar />
      <article className="article">
        <div className="meta">
          <Link href="/blog" className="back">← Blog</Link>
          <span className="tag">GPU Guide</span>
        </div>

        <h1>RTX 5060 Ti vs RX 9060 XT — Which Should You Buy?</h1>
        <p className="byline">By Wes · June 2025 · 5 min read</p>

        <p>Both cards are sitting around the £400–450 mark in the UK right now, and they're the two most debated GPUs in this price bracket. I've built PCs with both, and here's my honest take.</p>

        <h2>The RTX 5060 Ti — The Case For Nvidia</h2>

        <p>The RTX 5060 Ti's killer feature is <strong>DLSS 4 with Multi Frame Generation</strong>. What this means in practice: the card can generate extra frames using AI, effectively doubling or tripling your FPS in supported titles. In Fortnite and Warzone, this is massive — you can easily push 180–240 FPS at 1440p with DLSS on.</p>

        <p>The downside? It only has 8GB of VRAM. In 2025, that's starting to feel tight. Some AAA titles are already recommending 12GB+ for ultra textures at 4K.</p>

        <p><strong>Best for:</strong> Competitive gaming, Fortnite, Warzone, Valorant, CS2 — titles where DLSS is supported and frame rates matter most.</p>

        <h2>The RX 9060 XT — The Case For AMD</h2>

        <p>AMD's answer is the RX 9060 XT 16GB. Twice the VRAM of the 5060 Ti. In raw rasterisation benchmarks it's roughly neck-and-neck with Nvidia's card, sometimes slightly behind in some titles, sometimes ahead in others.</p>

        <p>The 16GB buffer means this card is significantly more future-proof. As games get more demanding, you won't be hitting VRAM limits. It also runs cooler and quieter than the Nvidia equivalent in most configurations.</p>

        <p><strong>Best for:</strong> 1440p at ultra settings, future-proofing, open world games with heavy textures, anyone who plans to keep their GPU for 4+ years.</p>

        <h2>So which do I recommend?</h2>

        <p>It depends on what you play:</p>

        <ul>
          <li><strong>If you play Fortnite, Warzone, or other DLSS titles competitively</strong> → RTX 5060 Ti. DLSS 4 is genuinely transformative for FPS.</li>
          <li><strong>If you want the most capable card for the money long-term</strong> → RX 9060 XT 16GB. The extra VRAM matters more than people realise.</li>
          <li><strong>If you're gaming at 1080p</strong> → Either card will destroy 1080p. Get whichever is cheaper at the time you order.</li>
        </ul>

        <p>In the WES PCS Gaming Beast build, I use the RX 9060 XT 16GB because that machine is built for longevity — customers spending £1,600 generally want to keep their PC for 5+ years, and 16GB will age much better.</p>

        <p>In the Best Price for Quality build, I use the RTX 5060 Ti because most of those customers are competitive gamers who want maximum FPS today, and DLSS 4 delivers that.</p>

        <div className="cta">
          <p>Want one of these cards in your build?</p>
          <div className="ctaBtns">
            <Link href="/builds/mid" className="ctaBtn">RTX 5060 Ti Build — £1,200 →</Link>
            <Link href="/builds/high" className="ctaBtnSec">RX 9060 XT Build — £1,600 →</Link>
          </div>
        </div>
      </article>

      <style jsx>{`
        .article {
          max-width: 680px; margin: 0 auto;
          padding: 100px 5% 80px;
          animation: fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both;
        }

        .meta { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
        .back { font-size: 13px; color: #444; transition: color 0.2s ease; }
        .back:hover { color: #fff; }
        .tag { font-size: 9px; font-weight: 700; letter-spacing: 2px; color: #333; background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 20px; }

        h1 { font-size: clamp(26px, 5vw, 42px); font-weight: 900; letter-spacing: -1.5px; line-height: 1.1; margin-bottom: 14px; }
        .byline { font-size: 12px; color: #333; margin-bottom: 36px; }

        p { color: #666; font-size: 15px; line-height: 1.8; margin-bottom: 20px; }
        h2 { font-size: 22px; font-weight: 800; letter-spacing: -0.5px; margin: 36px 0 14px; color: #fff; }
        ul { color: #666; font-size: 15px; line-height: 1.8; padding-left: 20px; margin-bottom: 20px; }
        li { margin-bottom: 8px; }
        strong { color: #aaa; font-weight: 700; }

        .cta { margin-top: 48px; padding: 28px 24px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; text-align: center; }
        .cta p { margin-bottom: 16px; }
        .ctaBtns { display: flex; flex-direction: column; gap: 10px; }
        .ctaBtn { display: block; padding: 12px 24px; background: #fff; color: #000; border-radius: 10px; font-size: 14px; font-weight: 700; transition: opacity 0.2s ease; }
        .ctaBtnSec { display: block; padding: 12px 24px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #777; border-radius: 10px; font-size: 14px; font-weight: 700; transition: color 0.2s ease; }
        .ctaBtn:hover { opacity: 0.85; }
        .ctaBtnSec:hover { color: #fff; }

        @media (min-width: 640px) { .ctaBtns { flex-direction: row; justify-content: center; } }
      `}</style>
    </>
  );
}
