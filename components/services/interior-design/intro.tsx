"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export default function InteriorDesignIntro() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section ref={ref} className="py-32 bg-[#030303] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder-luxury-texture.png')] bg-cover bg-center opacity-[0.03]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center mb-6">
              <div className="h-px w-12 bg-gold/50 mr-4"></div>
              <span className="text-gold uppercase text-sm tracking-widest font-light">The Art of Design</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-tight">
              Crafting <span className="text-gold">Extraordinary</span> Spaces
            </h2>

            <div className="space-y-6 text-gray-300">
              <p>
                At Joie De Vivre, we believe that interior design is more than just arranging furniture and selecting
                colors. It's about creating environments that evoke emotions, enhance functionality, and reflect the
                unique personality and lifestyle of our clients.
              </p>

              <p>
                Our approach to interior design is holistic and client-centered. We begin by understanding your vision,
                preferences, and requirements, then transform these insights into thoughtfully designed spaces that
                exceed your expectations.
              </p>

              <p>
                Whether you're looking to redesign a single room or undertake a complete home transformation, our team
                of experienced designers will guide you through every step of the process, ensuring a seamless and
                enjoyable experience from concept to completion.
              </p>
            </div>

            {/* Key benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {[
                { label: "Personalized", value: "Tailored to your lifestyle" },
                { label: "Innovative", value: "Creative design solutions" },
                { label: "Comprehensive", value: "End-to-end service" },
                { label: "Timeless", value: "Enduring elegance" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-gold/30"></div>
                  <div className="text-gold text-lg font-light mb-1">{item.label}</div>
                  <div className="text-gray-400 text-sm">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Image gallery */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image src="/placeholder-interior-art.png" alt="Luxury Interior Design" fill className="object-cover" />

              {/* Elegant frame */}
              <div className="absolute inset-0 border border-gold/20"></div>

              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/40"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/40"></div>
            </div>

            {/* Floating element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -left-8 bg-black/80 backdrop-blur-md border border-gold/20 p-6 z-10"
            >
              <p className="text-gold text-4xl font-extralight">15+</p>
              <p className="text-white/70 text-sm">Years of Excellence</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
