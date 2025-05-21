"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function AboutStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      question: "How does your interior design company contribute to enriching lifestyles?",
      answer:
        "At our interior design company, we sculpt enriched lifestyles by crafting interior spaces that harmoniously blend aesthetics and functionality. We create environments that reflect our clients' unique tastes and needs, providing them with not only visually appealing spaces but also ones that enhance their daily lives.",
    },
    {
      question:
        "Can you describe a memorable project that exemplifies how your company sculpts enriched lifestyles through interior design?",
      answer:
        "One of our most memorable projects was a family villa in Palm Jumeirah where we transformed a standard property into a personalized sanctuary. By incorporating elements that reflected the family's travels, creating multi-functional spaces for their children, and designing a seamless indoor-outdoor living area, we created a home that not only looked beautiful but truly enhanced how they lived, entertained, and connected as a family.",
    },
    {
      question: "What sets your interior design company apart from others in the industry?",
      answer:
        "What distinguishes us is our deeply personalized approach and unwavering commitment to understanding our clients' lifestyles before designing. We combine technical expertise with artistic vision, employing a collaborative process that keeps clients involved throughout. Our designs are not just aesthetically pleasing but practical and sustainable, creating spaces that evolve with our clients' needs while maintaining timeless elegance.",
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-[url('/placeholder-pattern.png')] bg-repeat opacity-5"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Image and stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image src="/placeholder-interior-art.png" alt="Luxury Interior Design" fill className="object-cover" />
              <div className="absolute inset-0 border border-gold/20"></div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-light text-gold mb-8">We Sculpt Enriched Lifestyles</h3>
              <p className="text-gray-300 mb-8">
                At our interior design company, we sculpt enriched lifestyles through inspired design. We believe that
                the spaces you inhabit should reflect your aspirations and enhance your daily experiences. Let us
                transform your vision into a harmonious and captivating reality, where every detail is thoughtfully
                crafted to enrich your life.
              </p>

              <div className="grid grid-cols-3 gap-8">
                {[
                  { value: "75%", label: "Interior Designer" },
                  { value: "80%", label: "Architecture" },
                  { value: "95%", label: "Best UIX Design" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  >
                    <div className="text-gold text-3xl font-light mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                    <div className="mt-2 h-1 bg-[#222]">
                      <motion.div
                        className="h-full bg-gold"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: stat.value } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 + 0.8 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column - FAQ tabs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="bg-[#0a0a0a] p-8 border border-[#222]"
          >
            <div className="space-y-6">
              {tabs.map((tab, index) => (
                <div key={index} className="border-b border-[#222] last:border-b-0 pb-6 last:pb-0">
                  <button
                    onClick={() => setActiveTab(index)}
                    className={`flex justify-between items-center w-full text-left transition-colors duration-300 ${
                      activeTab === index ? "text-gold" : "text-white hover:text-gold/80"
                    }`}
                  >
                    <span className="text-lg font-light pr-4">{tab.question}</span>
                    <span
                      className={`transform transition-transform duration-300 ${
                        activeTab === index ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={activeTab === index ? "text-gold" : "text-white/50"}
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`mt-4 text-gray-400 transition-all duration-500 overflow-hidden ${
                      activeTab === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p>{tab.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
