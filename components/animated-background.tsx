"use client"

import { motion } from "framer-motion"

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-blue-100 rounded-full blur-3xl opacity-30"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, 40, -60, 0],
          scale: [1, 1.1, 0.95, 1],
          rotate: [0, 90, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-200 to-emerald-100 rounded-full blur-3xl opacity-30"
        animate={{
          x: [0, -80, 40, 0],
          y: [0, -50, 70, 0],
          scale: [1, 0.9, 1.15, 1],
          rotate: [360, 180, 90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-40 right-1/4 w-80 h-80 bg-gradient-to-br from-slate-200 to-slate-100 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, 50, -70, 0],
          y: [0, 80, -40, 0],
          scale: [1, 1.05, 0.98, 1],
          rotate: [0, -90, -180, -360],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/4 right-1/3 w-60 h-60 bg-gradient-to-br from-blue-300 to-blue-200 rounded-full blur-3xl opacity-15"
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 30, -50, 0],
          scale: [1, 1.08, 0.92, 1],
        }}
        transition={{
          duration: 22,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-emerald-300 to-emerald-200 rounded-full blur-3xl opacity-15"
        animate={{
          x: [0, 70, -50, 0],
          y: [0, -40, 60, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 28,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Animated grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5" width="100%" height="100%">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-slate-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 5 + i * 0.8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="absolute top-0 left-1/4 w-px h-1/2 bg-gradient-to-b from-blue-300 to-transparent opacity-10"
        animate={{
          opacity: [0.05, 0.15, 0.05],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-1/3 h-px bg-gradient-to-r from-emerald-300 to-transparent opacity-10"
        animate={{
          opacity: [0.05, 0.15, 0.05],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
