import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Blog — WES PCS | Custom Gaming PC Tips & Guides",
  description: "Gaming PC tips, build guides, and advice from Wes. Learn how to pick the right PC for your budget and games.",
};

export default function Page() {
  return <Content />;
}
