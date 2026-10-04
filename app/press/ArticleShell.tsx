import Navbar from "../components/Navbar";
import Link from "next/link";
import { Newsreader } from "next/font/google";
import type { ReactNode } from "react";
import styles from "./press.module.css";
import { articles } from "./articles";

const serif = Newsreader({ subsets: ["latin"], display: "optional", style: ["normal", "italic"] });

const TIKTOK_URL = "https://www.tiktok.com/@weestech";

type Props = {
  href: string;
  section: string;
  kicker: string;
  title: string;
  standfirst: string;
  byline: string;
  readTime: string;
  children: ReactNode;
};

export default function ArticleShell({ href, section, kicker, title, standfirst, byline, readTime, children }: Props) {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <header className={styles.masthead}>
          <Link href="/press" className={styles.mastName}>THE WES PCS NEWSROOM</Link>
          <div className={styles.mastRule}>
            <span>{section}</span>
            <span>October 2026</span>
          </div>
        </header>

        <section className={styles.lead}>
          <p className={styles.kicker}>{kicker}</p>
          <h1 className={serif.className}>{title}</h1>
          <p className={`${styles.standfirst} ${serif.className}`}>{standfirst}</p>
          <div className={styles.byline}>
            <span>{byline}</span>
            <span className={styles.dot}>·</span>
            <span>{readTime}</span>
          </div>
        </section>

        <div className={styles.layout}>
          <article className={`${styles.body} ${serif.className}`}>
            {children}
            <p className={styles.endmark}>■</p>
          </article>

          <aside className={styles.sidebar}>
            <div className={styles.card}>
              <p className={styles.cardLabel}>MORE FROM THE NEWSROOM</p>
              <MoreArticles current={href} />
            </div>
            <div className={styles.card}>
              <p className={styles.cardLabel}>WATCH THE BUILDS</p>
              <p className={styles.cardText}>New builds, breakdowns and comment replies on TikTok.</p>
              <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className={styles.tiktokBtn}>
                @weestech on TikTok →
              </a>
            </div>
          </aside>
        </div>

        <section className={styles.enquiries}>
          <p className={styles.kicker}>FOR JOURNALISTS &amp; CREATORS</p>
          <h2 className={serif.className}>Press &amp; media enquiries</h2>
          <p className={styles.enqSub}>
            Interviews, quotes, collaborations and photos are available on request.
          </p>
          <div className={styles.enqBtns}>
            <a href="mailto:thomasbaratti2@gmail.com?subject=Press%20enquiry%20%E2%80%94%20%40weestech" className={styles.primaryBtn}>
              Email the press desk
            </a>
            <Link href="/builds" className={styles.ghostBtn}>See the builds</Link>
          </div>
        </section>
      </main>
    </>
  );
}

export function MoreArticles({ current }: { current: string }) {
  return (
    <ul className={styles.more}>
      {articles
        .filter((a) => a.href !== current)
        .map((a) => (
          <li key={a.href}>
            <Link href={a.href}>
              <span className={styles.moreTag}>{a.tag}</span>
              <span className={styles.moreTitle}>{a.title}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
}
