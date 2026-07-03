import Navbar from "../../components/Navbar";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Budget Gaming PC in the UK (2025) — WES PCS",
  description: "You don't need £1,500 to play Fortnite at 100+ FPS. Here's exactly what you get for £799 and why it's more than enough.",
};

export default function Post() {
  return (
    <>
      <Navbar />
      <article className="article">
        <div className="meta">
          <Link href="/blog" className="back">← Blog</Link>
          <span className="tag">Builds</span>
        </div>

        <h1>Best Budget Gaming PC in the UK (2025)</h1>
        <p className="byline">By Wes · June 2025 · 4 min read</p>

        <p>The most common question I get is: <em>"How little can I spend and still have a good gaming PC?"</em></p>

        <p>The honest answer in 2025 is £799. And no, that's not a compromise build — it's a genuinely capable machine that plays every major title at 1080p with frames to spare.</p>

        <h2>What you actually need for 1080p gaming</h2>

        <p>A lot of people massively overthink this. You don't need an RTX 4090 to play Fortnite. You need:</p>

        <ul>
          <li>A CPU that doesn't bottleneck your GPU</li>
          <li>A GPU that can push 1080p at high settings</li>
          <li>Enough RAM to stop the system from stuttering</li>
          <li>A fast SSD so load times aren't painful</li>
        </ul>

        <p>That's it. Everything else is nice-to-have.</p>

        <h2>The Budget Killer — £799</h2>

        <p>This is the build I put together for anyone who wants real gaming performance without spending more than they need to:</p>

        <ul>
          <li><strong>CPU:</strong> AMD Ryzen 5 5500</li>
          <li><strong>GPU:</strong> RX 7600 8GB</li>
          <li><strong>RAM:</strong> 16GB DDR4 3200MHz</li>
          <li><strong>Storage:</strong> 512GB NVMe SSD</li>
          <li><strong>Cooling:</strong> Stock Air Cooler</li>
        </ul>

        <p>The RX 7600 is one of the best value cards available right now in the UK. At 1080p high settings you're looking at 100–140 FPS in Fortnite, 110–140 FPS in Warzone, and 90–120 FPS in GTA V.</p>

        <p>The Ryzen 5 5500 pairs perfectly with it — no bottleneck, consistent frame times, and it handles multitasking without complaint. 16GB of DDR4 is the sweet spot for modern gaming; 8GB will cause stutters in some titles, and 32GB is overkill unless you're streaming.</p>

        <h2>What about prebuilts from Currys or PC World?</h2>

        <p>I've seen £900 prebuilts at major UK retailers with specs that would embarrass a 2018 PC. GTX 1650s, slow HDDs, 8GB of RAM. They're banking on the fact that most people don't know what they're buying.</p>

        <p>When I build your PC, every part is chosen to work together properly. No filler, no cheap corners cut on the parts you can't see.</p>

        <h2>Is £799 the minimum?</h2>

        <p>In terms of building something that will actually satisfy you for the next 3–4 years? Yes. You could spend less, but you'd be cutting corners that matter — slower GPU, slower RAM, less storage. It's false economy.</p>

        <p>If £799 is tight, I'd rather you saved a bit longer and got the right machine than spent £500 on something that frustrates you within a year.</p>

        <div className="cta">
          <p>Ready to order the Budget Killer?</p>
          <Link href="/builds/budget" className="ctaBtn">See Full Specs & Order →</Link>
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

        .tag {
          font-size: 9px; font-weight: 700; letter-spacing: 2px; color: #333;
          background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 20px;
        }

        h1 {
          font-size: clamp(28px, 5vw, 44px); font-weight: 900;
          letter-spacing: -1.5px; line-height: 1.1; margin-bottom: 14px;
        }

        .byline { font-size: 12px; color: #333; margin-bottom: 36px; }

        p { color: #666; font-size: 15px; line-height: 1.8; margin-bottom: 20px; }
        em { color: #888; font-style: italic; }

        h2 {
          font-size: 22px; font-weight: 800; letter-spacing: -0.5px;
          margin: 36px 0 14px; color: #fff;
        }

        ul { color: #666; font-size: 15px; line-height: 1.8; padding-left: 20px; margin-bottom: 20px; }
        li { margin-bottom: 6px; }
        strong { color: #aaa; font-weight: 700; }

        .cta {
          margin-top: 48px; padding: 28px 24px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px; text-align: center;
        }

        .cta p { margin-bottom: 14px; }

        .ctaBtn {
          display: inline-block; padding: 12px 24px;
          background: #fff; color: #000;
          border-radius: 10px; font-size: 14px; font-weight: 700;
          transition: opacity 0.2s ease;
        }

        .ctaBtn:hover { opacity: 0.85; }
      `}</style>
    </>
  );
}
