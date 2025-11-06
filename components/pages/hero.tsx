"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

/* ------------------ HERO BADGE ------------------ */
export const HeroBadge = memo(() => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.1 }}
    className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-100 border border-slate-200 mb-6 sm:mb-8 text-xs sm:text-sm"
  >
    <span className="w-2 h-2 rounded-full bg-emerald-500" />
    <span className="font-medium text-slate-700">Now Enrolling for 2025</span>
  </motion.div>
));
HeroBadge.displayName = "HeroBadge";

/* ------------------ HERO IMAGE ------------------ */
export const HeroImage = memo(() => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.15 }}
    className="mx-auto mt-4 sm:mt-8 w-[90%] sm:w-[65%] md:w-[50%] lg:w-[40%] max-w-2xl relative"
  >
    <Image
      src="/images/hero_image.png"
      alt="Hero"
      width={800}
      height={600}
      priority
      quality={90}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
      className="w-full h-auto"
    />
  </motion.div>
));
HeroImage.displayName = "HeroImage";

/* ------------------ HERO HEADING ------------------ */
export const HeroHeading = memo(() => (
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.25 }}
    className="mt-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight"
  >
    Master the Future of{" "}
    <span className="text-yellow-400">HR Leadership</span>
  </motion.h1>
));
HeroHeading.displayName = "HeroHeading";

/* ------------------ HERO SUBHEADING ------------------ */
export const HeroSubheading = memo(() => (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.35 }}
    className="text-xs sm:text-sm md:text-base text-slate-600 mt-4 sm:mt-6 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
  >
    Transform your HR career with cutting-edge skills in talent management,
    organizational psychology, and people analytics. Learn directly from
    industry experts shaping the future of work.
  </motion.p>
));
HeroSubheading.displayName = "HeroSubheading";

/* ------------------ HERO CTA ------------------ */
export const HeroCTA = memo(() => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.45 }}
    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16"
  >
    <Button
      variant="outline"
      className="rounded-full px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-semibold border-slate-300 hover:border-yellow-400 bg-transparent hover:cursor-pointer transition-colors"
    >
      Explore Courses
    </Button>
  </motion.div>
));
HeroCTA.displayName = "HeroCTA";

/* ------------------ PARTNERS SECTION ------------------ */
export const PartnersSection = memo(() => {
  const partners = Array(6).fill("/images/main_logo.png");

  return (
    <section className="relative w-full overflow-hidden py-8 bg-white">
      <h2 className="text-center text-2xl font-semibold mb-8 text-gray-800">
        Our Partners
      </h2>

      <div className="relative overflow-hidden">
        <div className="flex animate-scroll">
          {partners.concat(partners).map((src, index) => (
            <div key={index} className="flex-shrink-0 px-8">
              <Image
                src={src}
                alt={`Partner ${index + 1}`}
                width={150}
                height={60}
                className="w-[150px] h-auto grayscale hover:grayscale-0 transition-all duration-300 hover:cursor-pointer"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
PartnersSection.displayName = "PartnersSection";
