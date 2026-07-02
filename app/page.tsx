"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Stats from "./components/Stats";
import FeaturedBuilds from "./components/FeaturedBuilds";
import HowItWorks from "./components/HowItWorks";
import TrustBadges from "./components/TrustBadges";
import useScrollReveal from "./components/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Stats />
      <FeaturedBuilds />
      <HowItWorks />
      <TrustBadges />
    </>
  );
}