"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function InteriorDesignProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "We begin with an in-depth consultation to understand your vision, preferences, lifestyle, and requirements. This foundational step allows us to align our design approach with your expectations.",
    },
    {
      number: "02",
      title: "Concept Development",
      description:
        "Based on our consultation, we create detailed design concepts that include space planning, material selections, color schemes, furniture layouts, and lighting plans tailored to your specific needs.",
    },
    {
      number: "03",
      title: "Design Refinement",
      description:
        "We present our concepts and collaborate with you to refine the design. This iterative process ensures that every detail meets your approval before moving to implementation.",
    },
    {
      number: "04",
      title: "Implementation",
      description:
        "Our team manages the entire implementation process, from procurement to installation, coordinating with contractors and vendors to ensure flawless execution of the design vision.",
    },
    {
      number: "05",
      title: "Final Styling",
      description:
        "The final stage involves styling and accessorizing your space, adding those perfect finishing touches that bring the design to life and create a cohesive, polished look.",
    },
  ]

  return (
    <section ref={ref} className="py-32 bg-[#030303] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder-luxury-texture.png')] bg-cover bg-center opacity-[0.03]"></div>

      {/* Diagonal lines */}
      <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent transform -rotate-12 origin-top" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold/5 to-transparent transform rotate-12 origin-top" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-gold uppercase text-sm tracking-[0.2em] font-light">Our Methodology</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light mb-4">
            The Design <span className="text-gold">Process</span>
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto">
            Our structured yet flexible design process ensures a seamless journey from concept to completion, delivering
            exceptional results that exceed expectations.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gold/20 hidden md:block"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-8"
              >
                {/* Step number */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-black border border-gold/30 flex items-center justify-center relative z-10">
                    <span className="text-gold text-xl font-light">{step.number}</span>
                  </div>
                </div>

                {/* Step content */}
                <div className="flex-grow pt-2">
                  <h3 className="text-2xl font-light text-gold mb-4">{step.title}</h3>
                  <p className="text-white/80 max-w-3xl">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
