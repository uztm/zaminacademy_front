"use client";

import { memo } from "react";
import { motion } from "framer-motion";

// Reduced particle count for better performance
const PARTICLE_COUNT = 8;

const AnimatedBackground = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blue blob */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-400 to-emerald-200 rounded-full blur-2xl opacity-50"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, 40, -60, 0],
          scale: [1, 1.1, 0.95, 1],
          rotate: [0, 90, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Emerald blob */}
      <motion.div
        className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-200 rounded-full blur-2xl opacity-25"
        animate={{
          x: [0, -80, 40, 0],
          y: [0, -50, 70, 0],
          scale: [1, 0.9, 1.15, 1],
          rotate: [360, 180, 90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Slate blob */}
      <motion.div
        className="absolute -bottom-40 right-1/4 w-96 h-96 bg-gradient-to-br from-slate-300 to-slate-100 rounded-full blur-2xl opacity-35"
        animate={{
          x: [0, 50, -70, 0],
          y: [0, 80, -40, 0],
          scale: [1, 1.05, 0.98, 1],
          rotate: [0, -90, -180, -360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle accent blobs */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-72 h-72 bg-gradient-to-br from-blue-300 to-blue-200 rounded-full blur-2xl opacity-35"
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 30, -50, 0],
          scale: [1, 1.08, 0.92, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated grid overlay - static SVG for better performance */}
      <div 
        className="absolute inset-0 w-full h-full opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='rgb(71 85 105)' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Reduced floating particles with better performance */}
      {Array.from({ length: PARTICLE_COUNT }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-slate-500 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.3, 0.9, 0.3],
            scale: [0.5, 1.6, 0.5],
          }}
          transition={{
            duration: 5 + i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
});

AnimatedBackground.displayName = "AnimatedBackground";

export default AnimatedBackground;