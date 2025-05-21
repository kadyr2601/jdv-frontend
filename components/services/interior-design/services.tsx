"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"

interface ServiceItem {
  title: string
  description: string
  image: string
  features: string[]
}

export default function InteriorDesignServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [activeService, setActiveService] = useState(0)

  const services: ServiceItem[] = [
    {
      title: "Residential Design",
      description:
        "Transform your home into a sanctuary that reflects your personality and enhances your lifestyle. Our residential design services cover everything from single rooms to entire homes.",
      image: "/placeholder-tyizb.png",
      features: [
        "Space planning and layout optimization",
        "Custom furniture design and selection",
        "Material and finish specifications",
        "Lighting design and planning",
        "Art and accessory curation",
      ],
    },
    {
      title: "Commercial Design",
      description:
        "Create inspiring workspaces that boost productivity, impress clients, and reflect your brand identity. Our commercial design services are tailored to your business needs.",
      image: "/placeholder-office.png",
      features: [
        "Brand-aligned design concepts",
        "Ergonomic workspace planning",
        "Custom millwork and fixtures",
        "Acoustic solutions",
        "Technology integration",
      ],
    },
    {
      title: "Hospitality Design",
      description:
        "Craft memorable experiences for your guests with our hospitality design services. We create spaces that combine luxury, comfort, and functionality.",
      image: "/placeholder-hotel.png",
      features: [
        "Concept development and storytelling",
        "Guest experience optimization",
        "Custom FF&E specification",
        "Operational efficiency planning",
        "Mood and ambiance creation",
      ],
    },
  ]

  return (
    <section ref={ref} className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder-pattern.png')] bg-repeat opacity-5"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-gold uppercase text-sm tracking-[0.2em] font-light">Our Expertise</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Interior Design <span className="text-gold">Services</span>
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto">
            We offer a comprehensive range of interior design services tailored to meet the unique needs of each client
            and project.
          </p>
        </motion.div>

        {/* Service tabs */}
        <div className="flex flex-wrap justify-center mb-16 gap-2 md:gap-4">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                activeService === index
                  ? "bg-gold text-black font-medium"
                  : "bg-black/50 text-white border border-gold/20 hover:border-gold/50"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Service content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={services[activeService].image || "/placeholder.svg"}
                  alt={services[activeService].title}
                  fill
                  className="object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/30 to-transparent"></div>

                {/* Border */}
                <div className="absolute inset-0 border border-gold/20"></div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl font-light text-gold mb-6">{services[activeService].title}</h3>
                <p className="text-white/80 text-lg mb-8">{services[activeService].description}</p>

                <div className="space-y-4">
                  <h4 className="text-xl font-light text-white mb-4">Our Approach Includes:</h4>
                  <ul className="space-y-3">
                    {services[activeService].features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gold/10 flex items-center justify-center mt-0.5 mr-3">
                          <div className="h-1.5 w-1.5 rounded-full bg-gold"></div>
                        </div>
                        <span className="text-white/80">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
