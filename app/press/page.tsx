import Navbar from "../components/Navbar";
import Link from "next/link";
import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import styles from "./press.module.css";

const serif = Newsreader({ subsets: ["latin"], display: "optional", style: ["normal", "italic"] });

const TIKTOK_URL = "https://www.tiktok.com/@weestech";

export const metadata: Metadata = {
  title: "Press — @weestech on TikTok | WES PCS Newsroom",
  description:
    "The story behind @weestech: how a 16-year-old UK PC builder turned a bedroom workbench into a TikTok channel about honest, hand-built gaming PCs.",
  openGraph: {
    title: "Inside @weestech — the teenage PC builder making tech feel human",
    description: "A feature from the WES PCS newsroom on the TikTok channel behind the builds.",
    type: "article",
  },
};

const timeline = [
  { year: "Age 11", text: "Takes apart his first computer to see how it works. It goes back together. Mostly." },
  { year: "Age 13", text: "Starts building machines for friends and family, learning on every mistake." },
  { year: "Age 15", text: "Launches WES PCS — hand-built gaming PCs, tested before they ship." },
  { year: "Age 16", text: "Takes the workbench public on TikTok as @weestech." },
];

const formats = [
  {
    tag: "The Build",
    title: "Start to finish, no cuts that matter",
    text: "A case goes on the desk, the parts come out of their boxes, and a few minutes later a working gaming PC powers on. The edit is fast, but the process isn't skipped.",
  },
  {
    tag: "The Breakdown",
    title: "What your money actually buys",
    text: "Short explainers on why a £900 prebuilt can hide £350 of parts, which GPU makes sense at which budget, and how much RAM you actually need.",
  },
  {
    tag: "The Bench",
    title: "Cable management, close up",
    text: "The slow, tidy, oddly satisfying part most channels leave out. It's also the part that tells you whether a builder cares.",
  },
  {
    tag: "The Reply",
    title: "Answering the comments",
    text: "Viewers ask, Wes answers on camera: budget builds, upgrade paths, and the occasional ‘is this a good deal?’ screenshot.",
  },
];

export default function PressPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        {/* Masthead */}
        <header className={styles.masthead}>
          <p className={styles.mastName}>THE WES PCS NEWSROOM</p>
          <div className={styles.mastRule}>
            <span>Feature</span>
            <span>Creator Profile</span>
            <span>October 2026</span>
          </div>
        </header>

        {/* Headline */}
        <section className={styles.lead}>
          <p className={styles.kicker}>TIKTOK · @WEESTECH</p>
          <h1 className={serif.className}>
            The bedroom workbench that&apos;s teaching TikTok how a PC should be built
          </h1>
          <p className={`${styles.standfirst} ${serif.className}`}>
            At 16, Wes has spent five years building computers. Now he&apos;s filming it — and making the case that
            good tech doesn&apos;t need hype, just someone who cares about getting it right.
          </p>
          <div className={styles.byline}>
            <span>By the WES PCS Newsroom</span>
            <span className={styles.dot}>·</span>
            <span>8 min read</span>
          </div>
        </section>

        {/* Hero card */}
        <figure className={styles.heroFig}>
          <div className={styles.heroArt} aria-hidden="true">
            <div className={styles.phone}>
              <div className={styles.phoneTop}>@weestech</div>
              <div className={styles.phoneGlow} />
              <div className={styles.phoneCaption}>
                <strong>Building a £799 gaming PC</strong>
                <span>part 1 — the parts nobody talks about</span>
              </div>
              <div className={styles.phoneIcons}>
                <span>♥</span>
                <span>💬</span>
                <span>↗</span>
              </div>
            </div>
          </div>
          <figcaption>
            Every video starts in the same place: a desk, a box of parts, and one rule — if Wes wouldn&apos;t use it
            himself, it doesn&apos;t ship.
          </figcaption>
        </figure>

        {/* Article body + sidebar */}
        <div className={styles.layout}>
          <article className={`${styles.body} ${serif.className}`}>
            <p className={styles.dropcap}>
              There is a particular sound a PC makes the first time it powers on properly. Not the roar people expect,
              but a soft click, a hum of fans settling, and then the quiet confidence of a machine that works. On
              @weestech, that moment is the punchline of almost every video — and the reason a lot of people keep
              watching.
            </p>

            <p>
              The channel belongs to Wes, a 16-year-old builder from the UK who runs WES PCS, a small business making
              custom gaming computers by hand. His TikTok isn&apos;t a studio operation. There&apos;s no warehouse in the
              background and no script on a teleprompter. It&apos;s a desk, a camera, good lighting when he can get it,
              and someone who clearly knows what he&apos;s doing.
            </p>

            <h2>It started with a screwdriver</h2>

            <p>
              Wes was eleven when he first opened up a computer. Like most people who end up doing this for a living,
              he wasn&apos;t trying to start anything — he just wanted to know what was inside. What he found was a
              puzzle he enjoyed solving, and a market that he felt wasn&apos;t treating people fairly.
            </p>

            <blockquote className={styles.pull}>
              <p>
                &ldquo;I kept seeing people pay £900 for a PC with a few hundred quid of parts in it. That&apos;s what
                got me going.&rdquo;
              </p>
              <cite>— Wes, founder of WES PCS</cite>
            </blockquote>

            <p>
              That frustration became WES PCS: four core builds from £799 to £2,400, a configurator for anything in
              between, and a personal WhatsApp line instead of a ticket queue. Fifty-plus builds later, the business
              has grown on word of mouth. TikTok is where that word of mouth found a much bigger room.
            </p>

            <h2>Why it works on a phone screen</h2>

            <p>
              Tech content online tends to fall into two camps. There are the giant review channels with lab-grade
              benchmarks, and there are the unboxing clips that are mostly about the unboxing. @weestech sits
              somewhere more useful: real builds, for real budgets, explained by someone close in age to a lot of the
              people watching.
            </p>

            <p>
              The tone does a lot of the work. Wes talks the way he&apos;d talk to a mate who asked for advice. If a
              graphics card is overpriced, he says so. If 16GB of RAM is plenty for what you play, he&apos;ll tell
              you not to spend more. It&apos;s simple, but in a corner of the internet full of affiliate links and
              upsells, simple reads as honest.
            </p>

            <div className={styles.inset}>
              <p className={styles.insetLabel}>WHAT YOU&apos;LL SEE ON THE CHANNEL</p>
              <div className={styles.formats}>
                {formats.map((f) => (
                  <div key={f.tag} className={styles.format}>
                    <span className={styles.formatTag}>{f.tag}</span>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <h2>The part most channels skip</h2>

            <p>
              Ask Wes what separates a good build from a bad one and he won&apos;t start with the graphics card.
              He&apos;ll talk about cable management, airflow, and stress testing — the unglamorous steps that decide
              whether a PC still runs cool and quiet two years from now.
            </p>

            <p>
              Those steps are on camera too. Some of the most-replayed moments on the channel are the slow ones:
              cables routed and tied behind the motherboard tray, a cooler seated just right, a build left running
              under load to make sure nothing gives. It turns out people like watching care being taken.
            </p>

            <blockquote className={styles.pull}>
              <p>
                &ldquo;Anyone can make a PC turn on. I want it to still be running perfectly when you upgrade it in
                three years.&rdquo;
              </p>
              <cite>— Wes</cite>
            </blockquote>

            <h2>A community that asks good questions</h2>

            <p>
              Spend a few minutes in the comments and a pattern shows up. People aren&apos;t just reacting — they&apos;re
              asking. Will this run Fortnite at high frame rates? Is a 5060 Ti worth it over a 9060 XT? My parents
              found this prebuilt, is it a rip-off?
            </p>

            <p>
              Wes answers a lot of them, sometimes in a reply, sometimes in a whole new video. That loop — question,
              answer, build — is what makes the channel feel less like a broadcast and more like a conversation. For
              a lot of viewers, he&apos;s the first person who explained PC parts without making them feel stupid for
              asking.
            </p>

            <h2>From the feed to the front door</h2>

            <p>
              The channel and the business are the same thing seen from two angles. The builds on TikTok are the
              builds customers receive: hand-assembled, cable-managed, tested, and shipped across the UK with
              PayPal-protected payments. When someone orders, they&apos;re getting the person they watched, not a
              faceless production line.
            </p>

            <p>
              That transparency is rare. Most companies show you the finished product. @weestech shows you the
              process, the reasoning, and occasionally the mistakes — and trusts that you&apos;ll value the
              honesty more than the polish.
            </p>

            <h2>What comes next</h2>

            <p>
              Wes is still sixteen, still building, and still figuring out what the channel becomes. More budget
              builds are on the way, more head-to-head part comparisons, and more of the behind-the-scenes work that
              goes into getting a PC out the door. The goal hasn&apos;t changed since he was eleven: help people get a
              great computer for a fair price.
            </p>

            <p>
              If you&apos;ve ever wondered what actually goes on inside the box under your desk — or whether you&apos;re
              being overcharged for it — the answer is probably already on his feed.
            </p>

            <p className={styles.endmark}>■</p>
          </article>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.card}>
              <p className={styles.cardLabel}>FACT FILE</p>
              <dl className={styles.facts}>
                <div><dt>Channel</dt><dd>@weestech</dd></div>
                <div><dt>Platform</dt><dd>TikTok</dd></div>
                <div><dt>Creator</dt><dd>Wes, 16</dd></div>
                <div><dt>Based</dt><dd>United Kingdom</dd></div>
                <div><dt>Building since</dt><dd>Age 11</dd></div>
                <div><dt>Builds completed</dt><dd>50+</dd></div>
                <div><dt>Business</dt><dd>WES PCS</dd></div>
              </dl>
              <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className={styles.tiktokBtn}>
                Watch on TikTok →
              </a>
            </div>

            <div className={styles.card}>
              <p className={styles.cardLabel}>TIMELINE</p>
              <ol className={styles.timeline}>
                {timeline.map((t) => (
                  <li key={t.year}>
                    <span className={styles.tlYear}>{t.year}</span>
                    <span className={styles.tlText}>{t.text}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>

        {/* Press enquiries */}
        <section className={styles.enquiries}>
          <p className={styles.kicker}>FOR JOURNALISTS &amp; CREATORS</p>
          <h2 className={serif.className}>Press &amp; media enquiries</h2>
          <p className={styles.enqSub}>
            Writing about young founders, UK tech, or the creator economy? Wes is happy to talk about building PCs,
            running a business at 16, and growing @weestech. Interviews, quotes, collaborations and photos are
            available on request.
          </p>
          <div className={styles.enqBtns}>
            <a href="mailto:thomasbaratti2@gmail.com?subject=Press%20enquiry%20%E2%80%94%20%40weestech" className={styles.primaryBtn}>
              Email the press desk
            </a>
            <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className={styles.ghostBtn}>
              @weestech on TikTok
            </a>
            <Link href="/about" className={styles.ghostBtn}>About Wes</Link>
          </div>
        </section>
      </main>
    </>
  );
}
