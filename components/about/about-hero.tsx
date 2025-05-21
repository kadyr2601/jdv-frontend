"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function AboutHero() {
  const ref = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  // Track mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Set loaded state after initial render
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(timer)
    }
  }, [])

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Initial loading animation */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-gold text-2xl font-light"
            >
              Joie De Vivre
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background layers with parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main background image */}
        <motion.div
          style={{
            scale,
            y,
            x: mousePosition.x * -30,
          }}
          className="absolute inset-0"
        >
          <Image
            src="/about-us-banner.png"
            alt="Luxury Texture"
            fill
            className="object-cover opacity-20"
            priority
          />
        </motion.div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>

        {/* Animated gold particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gold/30"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                scale: Math.random() * 0.5 + 0.5,
                opacity: Math.random() * 0.3 + 0.1,
              }}
              animate={{
                y: [null, Math.random() * 100 + "%"],
                opacity: [null, Math.random() * 0.3 + 0.1],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                width: Math.random() * 6 + 2,
                height: Math.random() * 6 + 2,
                filter: "blur(1px)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center items-center">
        <motion.div style={{ opacity }} className="text-center max-w-4xl mx-auto">
          {/* Animated reveal of title */}
          <div className="overflow-hidden mb-6">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
            >
              <span className="inline-block text-gold uppercase text-sm tracking-[0.3em] font-light px-6 py-2 border border-gold/20 rounded-full backdrop-blur-sm">
                Our Story
              </span>
            </motion.div>
          </div>

          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.25, 1, 0.5, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight"
            >
              Bringing Your <span className="text-gold">Dreams</span> to Life
            </motion.h1>
          </div>

          {/* Animated line */}
          <div className="relative h-px w-40 mx-auto mb-8 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-gold to-transparent origin-left"
            />
          </div>

          <div className="overflow-hidden">
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.25, 1, 0.5, 1] }}
              className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
            >
              At Joie de Vivre, we believe that the spaces we inhabit have the power to shape our lives. Our Dubai-based
              interior design company is dedicated to transforming your vision into reality.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 left-0 right-0 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <div className="text-white/50 text-sm mb-2">Discover Our World</div>
          <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}
