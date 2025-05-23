"use client"
import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Star, Quote } from "lucide-react"
import {Testimonial} from "@/lib/HomePage";



export default function TestimonialsSection({props, description}: { props: Testimonial[], description: string}) {
    const ref = useRef<HTMLElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: false, amount: 0.2 })
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [hoverCard, setHoverCard] = useState<number | null>(null)

    const calculateRotation = (index: number) => {
        if (!containerRef.current || hoverCard !== index) return { x: 0, y: 0 }

        const rect = containerRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const rotateY = ((mousePosition.x - centerX) / (rect.width / 2)) * 5
        const rotateX = ((centerY - mousePosition.y) / (rect.height / 2)) * 5

        return { x: rotateX, y: rotateY }
    }

    return (
        <section ref={ref} className="py-32 bg-black relative overflow-hidden">
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
                        {description}
                    </p>
                </motion.div>

                {/* Innovative 3D testimonial wall */}
                <div ref={containerRef} className="relative min-h-[600px] perspective-1000">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {props.map((testimonial, index) => {
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
                                            src={process.env.API_URL+testimonial.background_image}
                                            alt={`${testimonial.category}'s project`}
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
                                                {testimonial.category}
                                            </div>
                                        </div>

                                        {/* Quote */}
                                        <div className="flex-grow flex flex-col justify-center">
                                            <Quote className="h-8 w-8 text-gold/30 mb-4" />
                                            <p className="text-white/90 leading-relaxed line-clamp-6 group-hover:line-clamp-none transition-all duration-300">
                                                {testimonial.review}
                                            </p>
                                        </div>

                                        {/* Client info */}
                                        <div className="mt-6 pt-6 border-t border-gold/10 flex items-center">
                                            <div className="relative w-14 h-14 rounded-full overflow-hidden border border-gold/20 mr-4">
                                                <Image
                                                    src={process.env.API_URL+testimonial.icon}
                                                    alt={'alt'}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-gold text-sm font-medium">{testimonial.fullname}</h3>
                                                <p className="text-white/60 text-xs">{testimonial.position}</p>
                                                <div className="flex mt-1">
                                                    {[...Array(testimonial.stars)].map((_, i) => (
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
