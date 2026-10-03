import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "After You Order — WES PCS",
  description: "What happens after you order your custom PC from WES PCS. Build timeline, delivery, and support.",
};

export default function Page() {
  return <Content />;
}
