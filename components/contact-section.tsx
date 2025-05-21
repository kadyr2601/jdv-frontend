"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section ref={ref} id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="text-gold">Us</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Begin your journey towards extraordinary spaces. Our team of experts is ready to bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gold">Get in Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Visit Our Studio</h4>
                  <p className="text-gray-400 mt-1">
                    Dubai Design District (d3)
                    <br />
                    Building 7, Suite 403
                    <br />
                    Dubai, UAE
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Call Us</h4>
                  <p className="text-gray-400 mt-1">+971 4 123 4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Email Us</h4>
                  <p className="text-gray-400 mt-1">info@luxuryinteriors.ae</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center mr-4">
                  <Clock className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Working Hours</h4>
                  <p className="text-gray-400 mt-1">
                    Sunday - Thursday: 9:00 AM - 6:00 PM
                    <br />
                    Friday - Saturday: By appointment only
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8 }}
            className="bg-[#111111] p-8 rounded-lg border border-[#222222]"
          >
            <h3 className="text-2xl font-bold text-gold mb-6">Send Us a Message</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-[#1a1a1a] border-[#333333] focus:border-gold text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-[#1a1a1a] border-[#333333] focus:border-gold text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-300">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  placeholder="Your phone number"
                  className="bg-[#1a1a1a] border-[#333333] focus:border-gold text-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-gray-300">
                  Service of Interest
                </label>
                <select
                  id="service"
                  className="w-full rounded-md border border-[#333333] bg-[#1a1a1a] px-3 py-2 text-white focus:border-gold focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="interior-design">Interior Design</option>
                  <option value="fit-out">Fit Out</option>
                  <option value="architecture">Architecture</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project"
                  className="bg-[#1a1a1a] border-[#333333] focus:border-gold text-white min-h-[120px]"
                />
              </div>

              <Button className="w-full bg-gold hover:bg-gold/90 text-black">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
