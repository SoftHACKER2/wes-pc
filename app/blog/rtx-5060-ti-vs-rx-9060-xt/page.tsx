import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "RTX 5060 Ti vs RX 9060 XT — Which Should You Buy? — WES PCS",
  description: "Both sit around £400–450 in the UK. One has DLSS 4. The other has 16GB VRAM. Here's the real answer.",
};

export default function Page() {
  return <Content />;
}
