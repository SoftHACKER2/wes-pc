import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Why a Custom PC Beats a Prebuilt Every Time — WES PCS",
  description: "Currys and PC World sell prebuilts with £150 worth of parts for £900. Here's what you actually get when someone who cares builds your PC.",
};

export default function Page() {
  return <Content />;
}
