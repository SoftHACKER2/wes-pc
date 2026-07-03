"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Stats from "./components/Stats";
import FeaturedBuilds from "./components/FeaturedBuilds";
import HowItWorks from "./components/HowItWorks";
import TrustBadges from "./components/TrustBadges";
import Testimonials from "./components/Testimonials";
import CurrentlyBuilding from "./components/CurrentlyBuilding";
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
      <CurrentlyBuilding />
      <Testimonials />
      <HowItWorks />
      <TrustBadges />
    </>
  );
}