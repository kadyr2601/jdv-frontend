"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Interior Design",
    description:
      "Bespoke interior design solutions that transform spaces into extraordinary environments, reflecting your unique style and vision.",
    image: "/home-service1.jpg",
    link: "/services/interior-design",
  },
  {
    id: 2,
    title: "Fit Out",
    description:
      "Comprehensive fit-out services delivering turnkey solutions from concept to completion with meticulous attention to detail.",
    image: "/home-service2.jpg",
    link: "/services/fit-out",
  },
  {
    id: 3,
    title: "Architecture",
    description:
      "Innovative architectural designs that push boundaries while maintaining functionality, creating iconic structures that stand the test of time.",
    image: "/home-service3.jpg",
    link: "/services/architecture",
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section ref={ref} className="py-24 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-10" />

      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-32 h-32 border border-gold/20 rounded-full" />
      <div className="absolute bottom-20 right-10 w-48 h-48 border border-gold/10 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-gold/5 rounded-full" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative z-20"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center">
              <div className="h-px w-8 bg-gold/50 mr-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Our <span className="text-gold">Premium</span> Services
              </h2>
              <div className="h-px w-8 bg-gold/50 ml-4"></div>
            </div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Delivering exceptional design solutions tailored to exceed the expectations of our discerning clientele.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-20"
        >
          {services.map((service, index) => (
            <motion.div key={service.id} variants={itemVariants} className="group relative">
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold opacity-70"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold opacity-70"></div>

              <div className="p-8 bg-gradient-to-br from-[#0a0a0a] to-[#111111] h-full">
                <div className="relative mb-8 overflow-hidden">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-gold/10 rounded-full blur-xl"></div>
                  <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-dark-brown/20 rounded-full blur-xl"></div>

                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-black border border-gold/30 mb-4 group-hover:scale-110 transition-transform duration-500">
                      <span className="text-gold text-4xl font-light">{index + 1}</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-center text-gold">{service.title}</h3>

                  <div className="h-px w-16 bg-gold/30 mx-auto mb-6"></div>

                  <p className="text-gray-300 mb-8 text-center">{service.description}</p>

                  <div className="flex justify-center">
                    <Link
                      href={service.link}
                      className="group/button relative inline-flex items-center overflow-hidden rounded-full border border-gold/50 px-6 py-2 transition-all duration-300 hover:bg-gold/10"
                    >
                      <span className="relative z-10 text-gold group-hover/button:text-gold transition-colors">
                        Discover More
                      </span>
                      <span className="absolute inset-0 z-0 bg-gradient-to-r from-gold/0 via-gold/0 to-gold/0 opacity-0 group-hover/button:opacity-20 transition-opacity duration-500"></span>
                      <ArrowRight className="ml-2 h-4 w-4 text-gold transition-transform duration-300 group-hover/button:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 border border-gold/0 opacity-0 group-hover:opacity-100 group-hover:border-gold/30 transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
