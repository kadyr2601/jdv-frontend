"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AboutFaq() {
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
            Ready to <span className="text-gold">Transform</span> Your Space?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's collaborate to create a space that reflects your unique style and enhances your lifestyle.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center px-8 py-4 bg-[#0a0a0a] border border-gold/30 hover:bg-gold/10 transition-all duration-300 text-gold"
            >
              <span>Explore Our Projects</span>
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-gold/90 transition-all duration-300 text-black"
            >
              <span>Contact Us</span>
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <p className="mt-12 text-gray-500 text-sm">
            Have questions? Feel free to{" "}
            <Link href="/contact" className="text-gold hover:underline">
              reach out to us
            </Link>{" "}
            or call us at{" "}
            <Link href="tel:+97141234567" className="text-gold hover:underline">
              +971 4 123 4567
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </section>
  )
}
