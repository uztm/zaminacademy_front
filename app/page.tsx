"use client";

import AnimatedBackground from "@/components/animated-background";
import Navbar from "@/components/layout/navbar";
import { AboutSection } from "@/components/pages/about";
import {
  HeroBadge,
  HeroImage,
  HeroHeading,
  HeroSubheading,
  HeroCTA,
  PartnersSection,
} from "@/components/pages/hero";

export default function Home() {
  return (
    <div className="min-h-screen from-slate-50 via-white to-slate-50 font-sans relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 min-h-[calc(100vh-100px)] text-center">
        <div className="max-w-5xl w-full">
          <AnimatedBackground />
          <HeroBadge />
          <HeroImage />
          <HeroHeading />
          <HeroSubheading />
          <HeroCTA />
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />

      <AboutSection />
    </div>
  );
}
