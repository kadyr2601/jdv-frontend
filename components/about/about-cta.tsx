"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AboutCta() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  // Parallax effect for background
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section ref={containerRef} className="py-32 bg-[#030303] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder-luxury-texture.png')] bg-cover bg-center opacity-[0.03]"></div>

      {/* Animated background elements */}
      <motion.div style={{ y }} className="absolute inset-0 bg-[url('/placeholder-pattern.png')] bg-repeat opacity-5" />

      {/* Diagonal lines */}
      <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent transform -rotate-12 origin-top" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold/5 to-transparent transform rotate-12 origin-top" />

      <div ref={ref} className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Ready to <span className="text-gold">Transform</span> Your Space?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Let's collaborate to create a space that reflects your unique style and enhances your lifestyle.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {/* Animated buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link
              href="/projects"
              className="group relative overflow-hidden px-8 py-4 bg-transparent border border-gold/30 text-gold text-center"
            >
              <span className="relative z-10 flex items-center justify-center">
                Explore Our Projects
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>

              {/* Animated hover effect */}
              <motion.div
                className="absolute inset-0 bg-gold/10 -translate-x-full"
                initial={false}
                animate={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              />
            </Link>

            <Link href="/contact" className="group relative overflow-hidden px-8 py-4 bg-gold text-black text-center">
              <span className="relative z-10 flex items-center justify-center">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>

              {/* Animated hover effect */}
              <motion.div
                className="absolute inset-0 bg-white/20 -translate-x-full"
                initial={false}
                animate={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              />
            </Link>
          </div>

          {/* Animated contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-white/50 text-sm">
              Have questions? Feel free to{" "}
              <Link href="/contact" className="text-gold hover:text-gold/80 transition-colors">
                reach out to us
              </Link>{" "}
              or call us at{" "}
              <Link href="tel:+97141234567" className="text-gold hover:text-gold/80 transition-colors">
                +971 4 123 4567
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
