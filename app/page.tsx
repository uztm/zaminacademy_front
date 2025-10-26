"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/animated-background";
import Navbar from "@/components/layout/navbar";
import Partners from "@/components/core/partners";

export default function Home() {
  return (
    <div className="min-h-screen pt-[80px] sm:pt-[100px] bg-gradient-to-br from-slate-50 via-white to-slate-50 font-sans relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 min-h-[calc(100vh-100px)] text-center">
        <div className="max-w-5xl w-full">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-100 border border-slate-200 mb-6 sm:mb-8 text-xs sm:text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="font-medium text-slate-700">
              Now Enrolling for 2025
            </span>
          </motion.div>

          {/* Hero Image */}
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            src="/images/hero_image.png"
            alt="Hero"
            className="mx-auto mt-4 sm:mt-8 w-[90%] sm:w-[65%] md:w-[50%] lg:w-[40%] max-w-2xl"
          />

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight"
          >
            Master the Future of{" "}
            <span className="text-yellow-400 bg-clip-text text-transparent">
              HR Leadership
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-xs sm:text-sm md:text-base text-slate-600 mt-4 sm:mt-6 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Transform your HR career with cutting-edge skills in talent
            management, organizational psychology, and people analytics. Learn
            directly from industry experts shaping the future of work.
          </motion.p>

          {/* CTA Buttons */}
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
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative w-full overflow-hidden py-8">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-gray-200/50 pointer-events-none" />

        <h2 className="text-center text-2xl font-semibold mb-8 text-gray-800">
          Our Partners
        </h2>

        <div className="overflow-hidden relative">
          {/* Animation container */}
          <div className="flex w-max animate-scroll whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex">
                {[
                  "/images/main_logo.png",
                  "/images/main_logo.png",
                  "/images/main_logo.png",
                  "/images/main_logo.png",
                  "/images/main_logo.png",
                  "/images/main_logo.png",
                ].map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`partner-${index}`}
                    className="w-[150px] mx-8 grayscale hover:grayscale-0 hover:cursor-pointer transition duration-300"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
