"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export default function AboutSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const [activeTab, setActiveTab] = useState(0)

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const tabs = [
    { id: 0, label: "Our Story" },
    { id: 1, label: "Philosophy" },
    { id: 2, label: "Expertise" },
  ]

  const tabContent = [
    {
      title: "The Art of Living Beautifully",
      content:
        'Founded on the principle of bringing the "joy of living" into every space, Joie De Vivre has established itself as Dubai\'s premier luxury interior design studio. We blend timeless elegance with contemporary innovation to create extraordinary environments that reflect the unique personality and lifestyle of our discerning clientele.',
    },
    {
      title: "Elevating Everyday Experiences",
      content:
        "Our design philosophy centers on creating spaces that not only captivate visually but also enhance the quality of life for those who inhabit them. We believe that true luxury lies in the perfect balance of aesthetics and functionality, creating environments that inspire and delight.",
    },
    {
      title: "Uncompromising Excellence",
      content:
        "With expertise spanning residential, commercial, and hospitality design, our team of world-class designers approaches each project with meticulous attention to detail and a commitment to excellence. We pride ourselves on our ability to transform visions into extraordinary realities.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-32 bg-black relative overflow-hidden">
      {/* Luxury marble texture background */}
      {/*<div className="absolute inset-0 bg-[url('/about-2.png')] bg-cover bg-center opacity-[0.03]"></div>*/}

      {/* Gold accent lines */}
      <div className="absolute top-0 left-[10%] w-px h-32 bg-gradient-to-b from-transparent via-gold/30 to-transparent"></div>
      <div className="absolute bottom-0 right-[10%] w-px h-32 bg-gradient-to-t from-transparent via-gold/30 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent via-gold/50 to-gold/20"></div>

            <span className="text-gold uppercase text-sm tracking-[0.2em] font-light">About Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-extralight mt-6 mb-4 tracking-tight text-center"
          >
            Joie De <span className="text-gold font-light">Vivre</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-px w-24 bg-gradient-to-r from-transparent via-gold/70 to-transparent origin-center"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left column - Unique image presentation */}
          <div className="lg:col-span-5 relative h-[600px]">
            {/* Main image with parallax */}
            <motion.div style={{ y: y1 }} className="absolute top-0 left-0 w-[85%] h-[70%] z-10">
              <div className="relative w-full h-full overflow-hidden">
                <Image src="/home-about1.jpg" alt="Luxury Interior Design" fill className="object-cover" />

                {/* Gold gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent mix-blend-overlay"></div>

                {/* Elegant frame */}
                <div className="absolute inset-0 border border-gold/20"></div>
              </div>
            </motion.div>

            {/* Secondary image with different parallax rate */}
            <motion.div style={{ y: y2 }} className="absolute bottom-0 right-0 w-[70%] h-[60%]">
              <div className="relative w-full h-full overflow-hidden">
                <Image src="/home-about2.jpg" alt="Luxury Interior Details" fill className="object-cover" />

                {/* Elegant frame */}
                <div className="absolute inset-0 border border-gold/20"></div>
              </div>
            </motion.div>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-gold/10 z-0"
            ></motion.div>
          </div>

          {/* Right column - Premium content presentation */}
          <div className="lg:col-span-7">
            {/* Tabs navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex space-x-8 mb-12 border-b border-gold/10 pb-4"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative pb-2 text-sm tracking-wide ${
                    activeTab === tab.id ? "text-gold" : "text-gray-400 hover:text-gray-300"
                  } transition-colors`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-px bg-gold"
                    ></motion.div>
                  )}
                </button>
              ))}
            </motion.div>

            {/* Tab content with animations */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h3 className="text-3xl font-light mb-6 text-gold">{tabContent[activeTab].title}</h3>
              <p className="text-gray-300 leading-relaxed text-lg">{tabContent[activeTab].content}</p>
            </motion.div>

            {/* Stats with premium presentation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-8 mb-12"
            >
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t border-l border-gold/30"></div>
                <div className="text-gold text-4xl font-extralight mb-2">250+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>

              <div className="relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t border-l border-gold/30"></div>
                <div className="text-gold text-4xl font-extralight mb-2">18</div>
                <div className="text-gray-400 text-sm">Design Awards</div>
              </div>

              <div className="relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t border-l border-gold/30"></div>
                <div className="text-gold text-4xl font-extralight mb-2">95%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/about" className="group inline-flex items-center">
                <span className="relative overflow-hidden">
                  <span className="text-gold text-lg relative z-10 pr-2">Discover Our Story</span>
                  <span className="absolute bottom-0 left-0 w-full h-px bg-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                </span>
                <ArrowUpRight className="h-5 w-5 text-gold transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
