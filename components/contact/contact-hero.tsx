"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ContactHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Background with luxury pattern */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[url('/placeholder-pattern.png')] bg-repeat opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/30"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{ width: Math.random() * 3 + 1, height: Math.random() * 3 + 1 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center">
        <motion.div style={{ opacity, y, scale }} className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 inline-block"
          >
            <span className="text-gold uppercase text-sm tracking-widest font-light px-6 py-2 border border-gold/20 rounded-full backdrop-blur-sm">
              Get In Touch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extralight mb-6 tracking-tight"
          >
            Contact <span className="text-gold">Us</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-px w-24 bg-gradient-to-r from-transparent via-gold/70 to-transparent mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Begin your journey towards extraordinary spaces. Our team of experts is ready to bring your vision to life.
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 w-32 h-32 border border-gold/10 rounded-full"></div>
      <div className="absolute top-20 right-20 w-48 h-48 border border-gold/5 rounded-full"></div>
    </section>
  )
}
