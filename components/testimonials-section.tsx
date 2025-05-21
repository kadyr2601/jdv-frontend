"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { Star, Quote } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  quote: string
  rating: number
  image: string
  projectType: string
  projectImage: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sheikh Mohammed Al Maktoum",
    position: "Property Developer",
    company: "Royal Estates",
    quote:
      "Their attention to detail and commitment to excellence transformed our vision into a breathtaking reality. The finest interior design firm in Dubai, without question.",
    rating: 5,
    image: "/01.jpg",
    projectType: "Residential Villa",
    projectImage: "/home-project2.jpg",
  },
  {
    id: 2,
    name: "Sophia Williams",
    position: "Luxury Hotel Owner",
    company: "Celestial Hospitality",
    quote:
      "Working with this team was an absolute pleasure. They understood our brand ethos perfectly and delivered a design that exceeds all expectations. Truly world-class.",
    rating: 5,
    image: "/02.jpg",
    projectType: "Hotel Lobby",
    projectImage: "/home-project5.jpg",
  },
  {
    id: 3,
    name: "Ahmed Al Falasi",
    position: "Real Estate Investor",
    company: "Falcon Properties",
    quote:
      "From concept to completion, their professionalism and creativity were unmatched. The finished project has significantly increased the property value beyond our projections.",
    rating: 5,
    image: "/03.jpg",
    projectType: "Commercial Office",
    projectImage: "/home-project1.jpg",
  },
  {
    id: 4,
    name: "Elena Petrova",
    position: "Art Collector",
    company: "Private Client",
    quote:
      "Their ability to blend artistic vision with functional design is remarkable. My residence is now both a home and a gallery for my collection. Exceptional work.",
    rating: 5,
    image: "/04.jpg",
    projectType: "Penthouse Apartment",
    projectImage: "/home-project6.jpg",
  },
]

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [activeIndex, setActiveIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoverCard, setHoverCard] = useState<number | null>(null)

  // Custom cursor
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", moveCursor)
    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [cursorX, cursorY])

  const cursorVariants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: "rgba(205, 162, 116, 0)",
      border: "1px solid rgba(205, 162, 116, 0.3)",
      x: cursorXSpring,
      y: cursorYSpring,
    },
    button: {
      width: 60,
      height: 60,
      backgroundColor: "rgba(205, 162, 116, 0.2)",
      border: "1px solid rgba(205, 162, 116, 0.7)",
      x: cursorXSpring,
      y: cursorYSpring,
    },
  }

  // Calculate 3D rotation based on mouse position
  const calculateRotation = (index: number) => {
    if (!containerRef.current || hoverCard !== index) return { x: 0, y: 0 }

    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate rotation (limited to a small range for subtle effect)
    const rotateY = ((mousePosition.x - centerX) / (rect.width / 2)) * 5
    const rotateX = ((centerY - mousePosition.y) / (rect.height / 2)) * 5

    return { x: rotateX, y: rotateY }
  }

  return (
    <section ref={ref} className="py-32 bg-black relative overflow-hidden">
      {/* Custom cursor - only show on desktop */}
      <div className="hidden md:block">
        <motion.div
          className="fixed top-0 left-0 rounded-full pointer-events-none z-50 flex items-center justify-center text-xs font-light text-gold"
        />
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/placeholder-luxury-texture.png')] bg-cover bg-center opacity-5" />

      {/* Animated background grid */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10">
        {Array.from({ length: 144 }).map((_, i) => (
          <motion.div
            key={i}
            className="border border-gold/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: Math.random() }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center mb-6">
            <div className="h-px w-12 bg-gold/50 mr-4"></div>
            <span className="text-gold uppercase text-sm tracking-widest font-light">Testimonials</span>
            <div className="h-px w-12 bg-gold/50 ml-4"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Client <span className="text-gold">Experiences</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover what our distinguished clientele have to say about their journey with Dubai's premier luxury design
            studio.
          </p>
        </motion.div>

        {/* Innovative 3D testimonial wall */}
        <div ref={containerRef} className="relative min-h-[600px] perspective-1000">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => {
              // Calculate 3D rotation
              const rotation = calculateRotation(index)

              return (
                <motion.div
                  key={testimonial.id}
                  className="relative h-[500px] bg-black/40 backdrop-blur-md border border-gold/10 overflow-hidden group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotateX: rotation.x,
                    rotateY: rotation.y,
                    z: hoverCard === index ? 50 : 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                  }}
                  onMouseEnter={() => {
                    setHoverCard(index)
                  }}
                  onMouseLeave={() => {
                    setHoverCard(null)
                  }}
                >
                  {/* Project image background */}
                  <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-700">
                    <Image
                      src={testimonial.projectImage || "/placeholder.svg"}
                      alt={`${testimonial.name}'s project`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full p-6">
                    {/* Top section */}
                    <div className="mb-6">
                      <div className="backdrop-blur-md bg-black/30 border border-gold/20 px-4 py-2 text-xs text-gold inline-block">
                        {testimonial.projectType}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="flex-grow flex flex-col justify-center">
                      <Quote className="h-8 w-8 text-gold/30 mb-4" />
                      <p className="text-white/90 leading-relaxed line-clamp-6 group-hover:line-clamp-none transition-all duration-300">
                        {testimonial.quote}
                      </p>
                    </div>

                    {/* Client info */}
                    <div className="mt-6 pt-6 border-t border-gold/10 flex items-center">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border border-gold/20 mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-gold text-sm font-medium">{testimonial.name}</h3>
                        <p className="text-white/60 text-xs">{testimonial.position}</p>
                        <div className="flex mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-gold text-gold" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      animate={{
                        opacity: hoverCard === index ? 0.2 : 0,
                      }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
