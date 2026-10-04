import type { Metadata } from "next";
import ArticleShell from "../ArticleShell";
import styles from "../press.module.css";

export const metadata: Metadata = {
  title: "Opinion: The next tech brands are being built on TikTok | WES PCS Newsroom",
  description:
    "Wes, founder of WES PCS and @weestech, on why trust in tech now comes from showing the process — and why small builders can win.",
};

export default function OpinionPage() {
  return (
    <ArticleShell
      href="/press/opinion"
      section="Opinion"
      kicker="OPINION · BY WES"
      title="Tech brands used to be built on billboards. The next ones are being built on TikTok"
      standfirst="Big retailers have the budget. Small builders have something better: nothing to hide. The founder of WES PCS on why showing your work is the new marketing."
      byline="By Wes, founder of WES PCS"
      readTime="5 min read"
    >
      <p className={styles.dropcap}>
        When I was younger, the way you found out about a computer was an advert. A shiny photo, a list of specs
        most people didn&apos;t understand, and a price with a 9 on the end. You trusted the brand because it was big
        enough to afford the advert. That&apos;s changing, and I think it&apos;s changing for the better.
      </p>

      <h2>People trust process, not polish</h2>
      <p>
        The people watching my videos don&apos;t want a perfect advert. They want to see what goes inside the box.
        They want to see the cables being tied down and the temperatures during a stress test. They want to know
        why I picked one part over another. When you show all of that, you don&apos;t need to convince anyone —
        they can judge it for themselves.
      </p>
      <p>
        That&apos;s something a big prebuilt brand will never do, because their process doesn&apos;t look good on
        camera. If you showed someone a £900 PC with a few hundred pounds of parts inside, they wouldn&apos;t buy it.
      </p>

      <blockquote className={styles.pull}>
        <p>&ldquo;The best advert I can make is just turning the camera on while I work.&rdquo;</p>
        <cite>— Wes</cite>
      </blockquote>

      <h2>Small is an advantage now</h2>
      <p>
        For a long time, being small meant being invisible. You couldn&apos;t compete with a high-street shop&apos;s
        marketing budget. On TikTok, that matters a lot less. A video from a bedroom workbench can reach the same
        people as a video from a massive company, and if it&apos;s more useful, it often does better.
      </p>
      <p>
        Being small also means I can do things big companies can&apos;t. I can reply to comments. I can give
        someone my WhatsApp. I can tell a viewer not to buy something, even if it would make me money, because my
        reputation is the whole business.
      </p>

      <h2>Honesty compounds</h2>
      <p>
        Every time I tell someone the cheaper option is fine, I lose a bit of money on that sale. But that person
        remembers. They come back when they upgrade, they send their mates, and they trust the next video. Over
        time, that&apos;s worth far more than one bigger sale.
      </p>
      <p>
        I think the creators and brands that last will be the ones that treat their audience like that — like
        people they&apos;ll be talking to again, not people to sell to once.
      </p>

      <h2>What I&apos;d tell other young founders</h2>
      <p>
        You don&apos;t need permission to start. You don&apos;t need an office, investors or an ad budget. You need
        a skill people value, a phone to film it, and the patience to keep showing up. Your age isn&apos;t a
        weakness either — you understand your generation better than any marketing department does.
      </p>
      <p>
        Show your work. Be honest about what&apos;s good and what isn&apos;t. Answer the questions. The rest builds
        itself — one video, one customer and one PC at a time.
      </p>
    </ArticleShell>
  );
}
