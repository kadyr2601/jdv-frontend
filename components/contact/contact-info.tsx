"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Instagram, Linkedin, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function ContactInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const contactItems = [
    {
      icon: MapPin,
      title: "Visit Our Studio",
      content: (
        <div>
          Dubai Design District (d3)
          <br />
          Building 7, Suite 403
          <br />
          Dubai, UAE
        </div>
      ),
    },
    {
      icon: Phone,
      title: "Call Us",
      content: <Link href="tel:+97141234567">+971 4 123 4567</Link>,
    },
    {
      icon: Mail,
      title: "Email Us",
      content: <Link href="mailto:info@luxuryinteriors.ae">info@luxuryinteriors.ae</Link>,
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: (
        <div>
          Sunday - Thursday: 9:00 AM - 6:00 PM
          <br />
          Friday - Saturday: By appointment only
        </div>
      ),
    },
  ]

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/joiedevivre",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/company/joiedevivre",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/971412345678",
    },
  ]

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
            How to <span className="text-gold">Reach Us</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're always available to discuss your project, answer your questions, or schedule a consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-[#0a0a0a] p-8 rounded-sm border border-[#222222] hover:border-gold/30 transition-colors duration-500 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-black border border-gold/30 flex items-center justify-center mb-6 group-hover:border-gold/60 transition-colors duration-500">
                  <item.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-light text-gold mb-3">{item.title}</h3>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                  {item.content}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-light text-gold mb-6">Connect With Us</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-[#0a0a0a] border border-[#222222] hover:border-gold/30 rounded-full transition-all duration-300 group"
              >
                <social.icon className="h-5 w-5 text-gold" />
                <span className="text-gray-400 group-hover:text-gold transition-colors duration-300">
                  {social.label}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
