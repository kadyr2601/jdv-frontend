"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  position: string
  quote: string
  rating: number
  image: string
  projectType: string
}

export default function InteriorDesignTestimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sheikh Mohammed Al Maktoum",
      position: "Property Developer",
      quote:
        "Their attention to detail and commitment to excellence transformed our vision into a breathtaking reality. The finest interior design firm in Dubai, without question.",
      rating: 5,
      image: "/middle-eastern-businessman.png",
      projectType: "Residential Villa",
    },
    {
      id: 2,
      name: "Sophia Williams",
      position: "Luxury Hotel Owner",
      quote:
        "Working with this team was an absolute pleasure. They understood our brand ethos perfectly and delivered a design that exceeds all expectations. Truly world-class.",
      rating: 5,
      image: "/professional-businesswoman-portrait.png",
      projectType: "Hotel Lobby",
    },
    {
      id: 3,
      name: "Elena Petrova",
      position: "Art Collector",
      quote:
        "Their ability to blend artistic vision with functional design is remarkable. My residence is now both a home and a gallery for my collection. Exceptional work.",
      rating: 5,
      image: "/placeholder-2hdxb.png",
      projectType: "Penthouse Apartment",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="py-32 bg-[#030303] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder-luxury-texture.png')] bg-cover bg-center opacity-[0.03]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-gold uppercase text-sm tracking-[0.2em] font-light">Client Testimonials</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light mb-4">
            What Our <span className="text-gold">Clients Say</span>
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto">
            Discover what our distinguished clientele have to say about their experience working with our interior
            design team.
          </p>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden bg-black/40 backdrop-blur-sm border border-gold/10 p-8 md:p-12">
            {/* Decorative quote mark */}
            <div className="absolute top-6 left-6 text-gold/20 text-8xl font-serif">"</div>

            {/* Testimonial content */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Client image */}
                <div className="flex-shrink-0">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gold/30">
                    <Image
                      src={testimonials[activeIndex].image || "/placeholder.svg"}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Testimonial text */}
                <div className="flex-grow">
                  <div className="flex mb-4">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold mr-1" />
                    ))}
                  </div>

                  <p className="text-white/90 text-lg italic mb-6">{testimonials[activeIndex].quote}</p>

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                      <h3 className="text-gold font-light text-xl">{testimonials[activeIndex].name}</h3>
                      <p className="text-white/60 text-sm">{testimonials[activeIndex].position}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-white/60 text-sm">
                      Project: {testimonials[activeIndex].projectType}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Closing quote mark */}
            <div className="absolute bottom-6 right-6 text-gold/20 text-8xl font-serif">"</div>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Pagination dots */}
            <div className="flex items-center space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "bg-gold w-8" : "bg-gold/20 hover:bg-gold/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
