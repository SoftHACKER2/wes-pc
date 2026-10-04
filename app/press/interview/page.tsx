import type { Metadata } from "next";
import ArticleShell from "../ArticleShell";
import styles from "../press.module.css";

export const metadata: Metadata = {
  title: "Interview: Wes on building PCs at 18 | WES PCS Newsroom",
  description:
    "A conversation with Wes, the 18-year-old behind WES PCS and @weestech, on honest builds, TikTok, and running a business before most people finish school.",
};

export default function InterviewPage() {
  return (
    <ArticleShell
      href="/press/interview"
      section="Interview"
      kicker="Q&A · THE FOUNDER"
      title="“If I wouldn't use it, it doesn't ship” — Wes on building PCs at 18"
      standfirst="He's been taking computers apart since he was eleven. Now he builds them for a living and films the whole thing. We sat down with the person behind @weestech."
      byline="Interview by the WES PCS Newsroom"
      readTime="6 min read"
    >
      <p className={styles.dropcap}>
        Wes doesn&apos;t talk like a salesman. Ask him which graphics card to buy and he&apos;ll first ask what you
        play, then tell you what you can skip. It&apos;s the same voice on his TikTok, @weestech, and the same one
        that answers the WES PCS WhatsApp line. This conversation has been lightly edited for length.
      </p>

      <p className={styles.q}>Let&apos;s start at the beginning. How did this all start?</p>
      <p>
        Honestly, curiosity. I was eleven and I wanted to know what was inside a computer, so I opened one up. Then I
        wanted to know why some PCs were fast and some were rubbish, and that question kind of never went away.
      </p>

      <p className={styles.q}>When did it turn into a business?</p>
      <p>
        When I realised how many people were getting ripped off. Friends and family would show me PCs they&apos;d
        bought and I&apos;d look at the parts and think, you paid what for this? I started building for people I
        knew, and it grew from there into WES PCS.
      </p>

      <blockquote className={styles.pull}>
        <p>&ldquo;Anyone can make a PC turn on. I want it to still be running perfectly when you upgrade it years later.&rdquo;</p>
        <cite>— Wes</cite>
      </blockquote>

      <p className={styles.q}>Why put it on TikTok?</p>
      <p>
        Because people don&apos;t trust what they can&apos;t see. If I just posted photos of finished PCs, you&apos;d
        have no idea how they were put together. On TikTok you see the whole thing: the parts, the cable
        management, the testing. It&apos;s the most honest advert I could make.
      </p>

      <p className={styles.q}>What do people ask you most in the comments?</p>
      <p>
        &ldquo;Is this a good deal?&rdquo; Every single day. Someone will send a screenshot of a prebuilt and ask
        if they should buy it. Sometimes it&apos;s fine. A lot of the time it isn&apos;t, and I&apos;ll explain
        why. I don&apos;t mind if they don&apos;t buy from me. I just don&apos;t want them wasting money.
      </p>

      <p className={styles.q}>What&apos;s the one thing you never compromise on?</p>
      <p>
        Testing. Every build gets stress-tested before it leaves. Cable management is a close second. It&apos;s not
        just about looking clean — good cable routing helps airflow, and airflow is what keeps a PC quiet and lasting
        a long time.
      </p>

      <p className={styles.q}>Does your age ever work against you?</p>
      <p>
        Sometimes people are surprised at first. But once they see the builds, or we&apos;ve chatted for a few
        minutes, it stops mattering. If anything it helps — a lot of my customers are gamers around my age, or
        parents buying for them, and I know exactly what they want out of a PC.
      </p>

      <p className={styles.q}>Which of your builds would you buy yourself?</p>
      <p>
        Depends on the budget, which is kind of the point. The £799 Budget Killer is the one I&apos;m proudest of,
        because it shows how much you can get if nobody&apos;s padding the price. But the £1,200 build is the one
        most people end up choosing, and for good reason.
      </p>

      <p className={styles.q}>What&apos;s next for you and the channel?</p>
      <p>
        More builds, more comparisons, more answering questions. I want @weestech to be the place people check
        before they spend money on a PC. If I can save someone a few hundred quid or stop them buying a bad machine,
        that&apos;s a good day.
      </p>

      <p className={styles.q}>Last one. Any advice for someone wanting to get into PC building?</p>
      <p>
        Just start. Watch a few builds, take your time, and don&apos;t be scared of breaking something — you
        probably won&apos;t. And if you get stuck, message me. I mean that.
      </p>
    </ArticleShell>
  );
}
