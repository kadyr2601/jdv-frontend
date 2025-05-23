"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function AboutFounder({img, words}: {img: string, words: string}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [isQuoteExpanded, setIsQuoteExpanded] = useState(false)

  return (
    <section ref={ref} className="py-32 bg-[#030303] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/placeholder-pattern.png')] bg-repeat opacity-5"></div>

      {/* Animated gold particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold/20"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * 100 + "%"],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="text-gold uppercase text-sm tracking-[0.2em] font-light px-6 py-2 border border-gold/20 rounded-full backdrop-blur-sm">
                Founder's Vision
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light mb-4">
              A <span className="text-gold">Passion</span> for Design
            </h2>

            <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold/70 to-transparent mx-auto"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row">
            {/* Left column - Founder image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
              className="w-full lg:w-1/3 mb-10 lg:mb-0"
            >
              <div className="relative mx-auto max-w-sm lg:max-w-full">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={process.env.API_URL+img}
                    alt="Mihaela Isachi - Founder & CEO"
                    fill
                    className="object-cover"
                    style={{objectPosition: 'center'}}
                    priority
                  />

                  {/* Gold overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                  {/* Name card */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/60 backdrop-blur-sm">
                    <h3 className="text-2xl font-light text-gold">Mihaela Isachi</h3>
                    <p className="text-white/80 text-sm">Founder & CEO</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-gold/50"></div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-gold/50"></div>
              </div>
            </motion.div>

            {/* Right column - Message */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
              className="w-full lg:w-2/3 lg:pl-16 flex items-center"
            >
              <div className="relative bg-black/40 backdrop-blur-sm p-8 lg:p-12 border-l-2 border-gold/50">
                {/* Quote mark */}
                <div className="absolute -top-4 -left-4 text-gold text-6xl opacity-20">"</div>

                <div className="space-y-6">
                  <p className="text-xl leading-relaxed text-white/90 font-light whitespace-pre-wrap">
                    {words}
                  </p>

                  {/*<AnimatePresence>*/}
                  {/*  {isQuoteExpanded ? (*/}
                  {/*    <motion.div*/}
                  {/*      initial={{ opacity: 0, height: 0 }}*/}
                  {/*      animate={{ opacity: 1, height: "auto" }}*/}
                  {/*      exit={{ opacity: 0, height: 0 }}*/}
                  {/*      transition={{ duration: 0.5 }}*/}
                  {/*      className="overflow-hidden"*/}
                  {/*    >*/}
                  {/*      <div className="space-y-6">*/}
                  {/*        <p className="leading-relaxed text-white/80 font-light">*/}
                  {/*          For me, interior design is not just a profession; it's a passion. There's nothing quite like*/}
                  {/*          the feeling of bringing a client's dream space to life. The joy and satisfaction that come*/}
                  {/*          from seeing their faces light up when they step into their newly designed environment are*/}
                  {/*          unparalleled.*/}
                  {/*        </p>*/}

                  {/*        <p className="leading-relaxed text-white/80 font-light">*/}
                  {/*          Thank you for considering JDV - Joie De Vivre for your interior design, fit-out, and*/}
                  {/*          architecture needs. We look forward to the opportunity to collaborate with you and bring*/}
                  {/*          your vision to life.*/}
                  {/*        </p>*/}
                  {/*      </div>*/}
                  {/*    </motion.div>*/}
                  {/*  ) : null}*/}
                  {/*</AnimatePresence>*/}

                  {/*<div>*/}
                  {/*  <button*/}
                  {/*    onClick={() => setIsQuoteExpanded(!isQuoteExpanded)}*/}
                  {/*    className="inline-flex items-center space-x-2 text-gold hover:text-gold/80 transition-colors border border-gold/30 px-4 py-2 rounded-sm hover:bg-gold/5"*/}
                  {/*  >*/}
                  {/*    <span>{isQuoteExpanded ? "Read Less" : "Read More"}</span>*/}
                  {/*    <svg*/}
                  {/*      width="16"*/}
                  {/*      height="16"*/}
                  {/*      viewBox="0 0 24 24"*/}
                  {/*      fill="none"*/}
                  {/*      xmlns="http://www.w3.org/2000/svg"*/}
                  {/*      className={`transform transition-transform duration-300 ${isQuoteExpanded ? "rotate-180" : ""}`}*/}
                  {/*    >*/}
                  {/*      <path*/}
                  {/*        d="M6 9l6 6 6-6"*/}
                  {/*        stroke="currentColor"*/}
                  {/*        strokeWidth="1.5"*/}
                  {/*        strokeLinecap="round"*/}
                  {/*        strokeLinejoin="round"*/}
                  {/*      />*/}
                  {/*    </svg>*/}
                  {/*  </button>*/}
                  {/*</div>*/}

                  <div className="pt-6 mt-6 border-t border-gold/10">
                    <div className="text-right">
                      <p className="text-gold font-light italic">Warm regards,</p>
                      <p className="text-white mt-2">Mihaela Isachi</p>
                      <p className="text-white/60 text-sm">Founder & CEO</p>
                    </div>
                  </div>
                </div>

                {/* Closing quote mark */}
                <div className="absolute -bottom-4 -right-4 text-gold text-6xl opacity-20">"</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
