import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "../ArticleShell";
import styles from "../press.module.css";

export const metadata: Metadata = {
  title: "Behind the Build: following one WES PCS order | WES PCS Newsroom",
  description:
    "What actually happens between sending a message and a hand-built gaming PC arriving at your door. A step-by-step look inside a WES PCS order.",
};

export default function BehindTheBuildPage() {
  return (
    <ArticleShell
      href="/press/behind-the-build"
      section="Behind the Build"
      kicker="INSIDE THE PROCESS"
      title="From WhatsApp message to front door: following one WES PCS order"
      standfirst="Most PC companies show you the finished product. Here's everything that happens before it — the conversations, the parts, the cables and the hours of testing nobody films. Except Wes does."
      byline="By the WES PCS Newsroom"
      readTime="7 min read"
    >
      <p className={styles.dropcap}>
        Every WES PCS build starts the same way: not with a checkout button, but with a conversation. Someone has a
        budget, a list of games, and usually a question they&apos;re slightly embarrassed to ask. What happens next
        is the part of the business you see in pieces on @weestech — put together here, start to finish.
      </p>

      <div className={styles.step}>
        <span className={styles.stepNum}>01</span>
        <h2>The first message</h2>
      </div>
      <p>
        Orders usually begin on WhatsApp, through the configurator, or from someone who saw a build on TikTok and
        wants one like it. The first questions are simple. What do you play? What monitor do you have? Do you stream
        or edit? What&apos;s the most you want to spend — and what would you rather not spend?
      </p>
      <p>
        That last one matters. A lot of buyers come in expecting to be upsold. Instead, they&apos;re often told the
        cheaper option will do the job. A 1080p Fortnite player doesn&apos;t need the same machine as someone
        editing 4K video, and pretending otherwise is how people end up overpaying.
      </p>

      <div className={styles.step}>
        <span className={styles.stepNum}>02</span>
        <h2>Choosing the parts</h2>
      </div>
      <p>
        WES PCS has four core builds, from the £799 Budget Killer to the £2,400 Ultimate, and most orders start from
        one of them. From there, parts get swapped to suit the buyer. The rule is balance: no graphics card held back
        by a weak processor, no flashy component bought at the expense of the power supply.
      </p>
      <p>
        Everything uses standard parts. No proprietary motherboards, no locked-in power supplies. If the owner wants
        to upgrade in two years, they can — and Wes will tell them what to upgrade first.
      </p>

      <blockquote className={styles.pull}>
        <p>&ldquo;The parts list is where you can tell if a builder is being honest. Cheap power supplies are where people hide savings.&rdquo;</p>
        <cite>— Wes</cite>
      </blockquote>

      <div className={styles.step}>
        <span className={styles.stepNum}>03</span>
        <h2>The build itself</h2>
      </div>
      <p>
        This is the part TikTok sees most of. Motherboard prepped outside the case, processor and memory seated,
        cooler mounted, then everything lowered in and connected. It looks quick in a one-minute video. In reality
        it&apos;s slow and careful, because rushing is how pins get bent and cables get pinched.
      </p>
      <p>
        Cable management takes longer than most people expect. Every cable is routed behind the motherboard tray and
        tied down. It&apos;s partly about looks, but mostly about airflow: a clean case runs cooler, and a cooler PC
        runs quieter and lasts longer.
      </p>

      <div className={styles.step}>
        <span className={styles.stepNum}>04</span>
        <h2>Testing — the part nobody films</h2>
      </div>
      <p>
        Once it powers on, the real work starts. Windows is installed clean, with no bloatware. Drivers are updated.
        Then the machine is put under heavy load to make sure temperatures stay in check and nothing crashes. If
        anything looks wrong, it gets fixed before it goes anywhere.
      </p>
      <p>
        It&apos;s the least exciting step to watch and the most important one to do. Every WES PCS build is tested
        before it ships — no exceptions.
      </p>

      <div className={styles.step}>
        <span className={styles.stepNum}>05</span>
        <h2>Packing and shipping</h2>
      </div>
      <p>
        The PC is packed to survive the trip, with the inside secured so nothing shifts in transit, and shipped
        across the UK with fully insured delivery. Payments go through PayPal, so buyers are protected from the
        moment they pay.
      </p>

      <div className={styles.step}>
        <span className={styles.stepNum}>06</span>
        <h2>After it arrives</h2>
      </div>
      <p>
        This is where a one-person business has an edge over a big retailer. There&apos;s no ticket system and no
        call centre. If something&apos;s confusing, or a game isn&apos;t running how it should, buyers message the
        same person who built their PC. Most questions get answered the same day.
      </p>

      <p className={styles.note}>
        Want to see what happens after you order in more detail? Read the{" "}
        <Link href="/after-order">After You Order</Link> guide, or start your own build in the{" "}
        <Link href="/configurator">configurator</Link>.
      </p>
    </ArticleShell>
  );
}
