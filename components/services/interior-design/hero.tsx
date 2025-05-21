"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

export default function InteriorDesignHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Background image with parallax effect */}
      <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
        <Image
          src="/placeholder-0l4zf.png"
          alt="Luxury Interior Design"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute inset-0 z-10">
        {/* Gold accent lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent"></div>

        {/* Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-gold/10 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-gold/5 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 h-full flex flex-col justify-center items-center">
        <motion.div style={{ y, opacity }} className="text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 inline-block"
          >
            <span className="text-gold uppercase text-sm tracking-[0.2em] font-light px-6 py-2 border border-gold/20 rounded-full backdrop-blur-sm">
              Our Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-extralight mb-6 tracking-tight"
          >
            Interior <span className="text-gold">Design</span>
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
            className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Transform your space into an extraordinary environment that reflects your unique style and enhances your
            lifestyle. Our bespoke interior design services blend artistry with functionality to create spaces that
            inspire and delight.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-0 right-0 flex justify-center z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <div className="text-white/50 text-sm mb-2">Scroll to explore</div>
          <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}
