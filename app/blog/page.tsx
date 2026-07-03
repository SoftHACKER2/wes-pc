import Navbar from "../components/Navbar";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — WES PCS | Custom Gaming PC Tips & Guides",
  description: "Gaming PC tips, build guides, and advice from Wes. Learn how to pick the right PC for your budget and games.",
};

const posts = [
  {
    slug: "best-budget-gaming-pc-uk-2025",
    title: "Best Budget Gaming PC in the UK (2025)",
    excerpt: "You don't need to spend £1,500 to play Fortnite at 100+ FPS. Here's exactly what you get for £799 — and why it's enough.",
    date: "June 2025",
    readTime: "4 min read",
    tag: "Builds",
  },
  {
    slug: "rtx-5060-ti-vs-rx-9060-xt",
    title: "RTX 5060 Ti vs RX 9060 XT — Which Should You Buy?",
    excerpt: "Both cards sit around the £400–450 mark in the UK. One has DLSS 4 and Multi Frame Generation. The other has 16GB VRAM. Here's the real answer.",
    date: "June 2025",
    readTime: "5 min read",
    tag: "GPU Guide",
  },
  {
    slug: "why-custom-pc-beats-prebuilt",
    title: "Why a Custom PC Beats a Prebuilt Every Time",
    excerpt: "Currys and PC World sell prebuilts with £150 worth of parts for £900. Here's what you actually get when someone who cares builds your PC.",
    date: "May 2025",
    readTime: "3 min read",
    tag: "Advice",
  },
  {
    slug: "how-much-ram-do-you-need-gaming",
    title: "How Much RAM Do You Actually Need for Gaming in 2025?",
    excerpt: "8GB, 16GB, 32GB — what's the real difference? The answer might surprise you. Spoiler: it depends what you're running alongside your game.",
    date: "May 2025",
    readTime: "3 min read",
    tag: "Tips",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="page">
        <div className="header">
          <p className="eyebrow">THE WES PCS BLOG</p>
          <h1>Guides & Tips</h1>
          <p className="sub">Honest advice on gaming PCs — no sponsored opinions, no fluff.</p>
        </div>

        <div className="grid">
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card">
              <span className="tag">{post.tag}</span>
              <h2>{post.title}</h2>
              <p className="excerpt">{post.excerpt}</p>
              <div className="meta">
                <span>{post.date}</span>
                <span className="dot">·</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <style jsx>{`
        .page { padding: 100px 5% 80px; min-height: 100vh; animation: fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both; }

        .header { margin-bottom: 40px; }
        .eyebrow { font-size: 10px; font-weight: 600; color: #333; letter-spacing: 4px; margin-bottom: 12px; }
        h1 { font-size: clamp(32px, 5vw, 52px); font-weight: 900; letter-spacing: -2px; margin-bottom: 10px; }
        .sub { color: #555; font-size: 14px; line-height: 1.6; }

        .grid { display: grid; grid-template-columns: 1fr; gap: 16px; }

        .card {
          display: block;
          padding: 24px 22px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px;
          color: white;
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .card:hover { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.14); }

        .tag {
          display: inline-block;
          font-size: 9px; font-weight: 700; letter-spacing: 2px;
          color: #333; background: rgba(255,255,255,0.05);
          padding: 4px 10px; border-radius: 20px; margin-bottom: 14px;
        }

        h2 { font-size: 18px; font-weight: 800; letter-spacing: -0.3px; margin-bottom: 10px; line-height: 1.25; }

        .excerpt { color: #555; font-size: 13px; line-height: 1.65; margin-bottom: 16px; }

        .meta { font-size: 11px; color: #333; display: flex; gap: 6px; align-items: center; }
        .dot { color: #222; }

        @media (min-width: 640px) { .grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1100px) {
          .page { padding: 110px 8% 100px; }
          h2 { font-size: 20px; }
        }
      `}</style>
    </>
  );
}
