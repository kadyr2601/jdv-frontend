"use client"

import { useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function AboutStory() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [activeImage, setActiveImage] = useState(0)

  // Parallax effect for images
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150])

  // Gallery images
  const images = ["/about-2.png"]

  return (
    <section ref={containerRef} className="py-32 bg-[#030303] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center opacity-[0.03]"></div>

      {/* Animated background elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-64 h-64 border border-gold/5 rounded-full opacity-30"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-40 right-10 w-96 h-96 border border-gold/10 rounded-full opacity-20"
      />

      {/* Diagonal lines */}
      <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent transform -rotate-12 origin-top" />
      <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-gold/5 to-transparent transform rotate-12 origin-top" />

      <div ref={ref} className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left column - Immersive gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-square overflow-hidden">
              {/* Main image with parallax effect */}
              <motion.div style={{ y: y3 }} className="absolute inset-0 z-10">
                <Image
                  src={images[activeImage] || "/placeholder.svg"}
                  alt="Luxury Interior Design"
                  fill
                  className="object-cover transition-opacity duration-1000"
                />

                {/* Gold gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent mix-blend-overlay"></div>

                {/* Elegant frame */}
                <div className="absolute inset-0 border border-gold/20"></div>
              </motion.div>

              {/* Floating decorative elements */}
              <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-gold/40 z-20"></div>
              <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-gold/40 z-20"></div>
            </div>

            {/* Image selector */}
            <div className="flex justify-center mt-8 space-x-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeImage === index ? "bg-gold w-8" : "bg-gold/20 hover:bg-gold/40"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right column - Story content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center mb-6">
              <div className="h-px w-12 bg-gold/50 mr-4"></div>
              <span className="text-gold uppercase text-sm tracking-[0.2em] font-light">Welcome to JDV</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
              Joie De <span className="text-gold">Vivre</span>
            </h2>

            <div className="space-y-6 text-white/80">
              <p className="text-lg">
                We're not just designing interiors; we're crafting experiences. Join us on a journey to transform your
                living or working space into something extraordinary. Let's bring your dreams to life in the vibrant
                city of Dubai.
              </p>

              <p>
                At JDV, we believe in the beauty of individuality. We understand that each client is unique, with their
                own style, preferences, and aspirations. That's why we take the time to work closely with every client,
                listening attentively to their ideas and desires.
              </p>

              <p>
                Our team of talented professionals is dedicated to delivering excellence in every aspect of our work.
                From concept to completion, we are committed to craftsmanship, creativity, and attention to detail.
              </p>
            </div>

            {/* Company values with animated reveal */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              {[
                { label: "Creativity", value: "Innovative design solutions" },
                { label: "Quality", value: "Premium materials & finishes" },
                { label: "Integrity", value: "Transparent client relationships" },
                { label: "Passion", value: "Dedication to excellence" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -top-3 -left-3 w-8 h-8 border-t border-l border-gold/40"></div>
                  <div className="text-gold text-xl font-light mb-2">{item.label}</div>
                  <div className="text-white/60">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
