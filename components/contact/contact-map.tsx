"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function ContactMap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 bg-[#030303] relative">
      <div className="absolute inset-0 bg-[url('/placeholder-luxury-texture.png')] bg-cover bg-center opacity-[0.03]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Our <span className="text-gold">Location</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Visit our design studio in the heart of Dubai Design District, where creativity and luxury converge.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[16/9] max-w-5xl mx-auto overflow-hidden"
        >
          {/* Map image - in a real implementation, this would be replaced with an actual map component */}
          <div className="relative w-full h-full border border-[#222222]">
            {/*<Image src="/bg.png" alt="Map of our location" fill className="object-cover" />*/}

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.723667342036!2d55.1372983759725!3d25.03255387782364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b173e6e8dd7%3A0x26448ae7f0ed728f!2sDiscovery%20Gardens%2C%20Jebel%20Ali%20Village%2C%20Dubai!5e0!3m2!1sen!2sae!4v1715686420005!5m2!1sen!2sae"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
            ></iframe>

            {/* Map overlay with location pin */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Location pin */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>
              <div className="w-px h-10 bg-gold absolute -bottom-10 left-1/2 transform -translate-x-1/2"></div>
            </motion.div>

            {/* Location label */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm border border-gold/30 px-6 py-3 text-center">
              <p className="text-gold font-light">Joie De Vivre Design Studio</p>
              <p className="text-white/80 text-sm">1807- Business Central Tower B Dubai Internet City, Dubai.</p>
            </div>
          </div>
        </motion.div>

        {/* Visit info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            We welcome visitors by appointment. Please contact us to schedule a visit to our studio.
          </p>

          <div className="mt-8 inline-block">
            <a
              href="https://maps.google.com/?q=Dubai+Design+District"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#0a0a0a] border border-gold/30 hover:bg-gold/10 rounded-full transition-all duration-300 text-gold"
            >
              <span>Get Directions</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 3h6v6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 14L21 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
