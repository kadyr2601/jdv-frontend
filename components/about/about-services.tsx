"use client"
import {useRef, useState} from "react"
import {motion, useInView, AnimatePresence} from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {ArrowRight} from "lucide-react"

interface ServiceProps {
    services_section_title: string;
    services_section_description: string;
    interior_design_service_description: string;
    interior_design_service_image: string;
    fit_out_service_description: string;
    fit_out_service_image: string;
    architecture_service_description: string;
    architecture_service_image: string;
}
interface Props {
    props: ServiceProps;
}

export default function AboutServices({props}: Props) {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: false, amount: 0.2})
    const [hoveredService, setHoveredService] = useState<number | null>(null)

    const services = [
        {
            title: "Interior Design Services",
            description: props.interior_design_service_description,
            image: process.env.API_URL+props.interior_design_service_image,
            link: "/services/interior-design",
        },
        {
            title: "Fit-Out Services",
            description: props.fit_out_service_description,
            image: process.env.API_URL+props.fit_out_service_image,
            link: "/services/fit-out",
        },
        {
            title: "Architecture",
            description: props.architecture_service_description,
            image: process.env.API_URL+props.architecture_service_image,
            link: "/services/architecture",
        },
    ]

    return (
        <section ref={ref} className="py-32 bg-black relative overflow-hidden">
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
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                    transition={{duration: 0.8}}
                    className="text-center mb-16"
                >
                    <div className="inline-block mb-4">
                        <span className="text-gold uppercase text-sm tracking-[0.2em] font-light">Best Services</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-light mb-4">
                        {props.services_section_title}
                    </h2>

                    <p className="text-white/70 max-w-2xl mx-auto">
                        {props.services_section_description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 50}}
                            animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                            transition={{duration: 1, delay: index * 0.2, ease: [0.25, 1, 0.5, 1]}}
                            className="group relative"
                            onMouseEnter={() => setHoveredService(index)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            <div className="relative overflow-hidden h-[500px] perspective-1000">
                                {/* Background image with parallax effect */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={service.image || "/placeholder.svg"}
                                        alt={service.title}
                                        fill
                                        className={`object-cover transition-all duration-1000 ${
                                            hoveredService === index ? "scale-110 filter brightness-75" : "scale-100"
                                        }`}
                                    />

                                    {/* Overlay gradient */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                </div>

                                {/* Content container */}
                                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                                    {/* Service title with animated underline */}
                                    <h3 className="text-2xl font-light text-gold mb-4 relative inline-block">
                                        {service.title}
                                        <motion.div
                                            className="absolute bottom-0 left-0 h-px bg-gold"
                                            initial={{width: 0}}
                                            animate={hoveredService === index ? {width: "100%"} : {width: 0}}
                                            transition={{duration: 0.5}}
                                        />
                                    </h3>

                                    {/* Description with animated reveal */}
                                    <div className="overflow-hidden">
                                        <motion.p
                                            className="text-white/80 mb-6"
                                            initial={{y: 20, opacity: 0}}
                                            animate={hoveredService === index ? {y: 0, opacity: 1} : {
                                                y: 20,
                                                opacity: 0
                                            }}
                                            transition={{duration: 0.5}}
                                        >
                                            {service.description}
                                        </motion.p>
                                    </div>

                                    {/* CTA link */}
                                    <Link
                                        href={service.link}
                                        className="inline-flex items-center text-gold group-hover:text-gold/80 transition-colors duration-300"
                                    >
                    <span className="mr-2 relative">
                      Discover More
                      <span
                          className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300"></span>
                    </span>
                                        <ArrowRight
                                            className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300"/>
                                    </Link>
                                </div>

                                {/* Animated border */}
                                <AnimatePresence>
                                    {hoveredService === index && (
                                        <>
                                            {/* Top border */}
                                            <motion.div
                                                className="absolute top-0 left-0 right-0 h-px bg-gold/50 z-20"
                                                initial={{scaleX: 0}}
                                                animate={{scaleX: 1}}
                                                exit={{scaleX: 0}}
                                                transition={{duration: 0.5}}
                                            />

                                            {/* Right border */}
                                            <motion.div
                                                className="absolute top-0 right-0 bottom-0 w-px bg-gold/50 z-20"
                                                initial={{scaleY: 0}}
                                                animate={{scaleY: 1}}
                                                exit={{scaleY: 0}}
                                                transition={{duration: 0.5, delay: 0.1}}
                                            />

                                            {/* Bottom border */}
                                            <motion.div
                                                className="absolute bottom-0 left-0 right-0 h-px bg-gold/50 z-20"
                                                initial={{scaleX: 0}}
                                                animate={{scaleX: 1}}
                                                exit={{scaleX: 0}}
                                                transition={{duration: 0.5, delay: 0.2}}
                                            />

                                            {/* Left border */}
                                            <motion.div
                                                className="absolute top-0 left-0 bottom-0 w-px bg-gold/50 z-20"
                                                initial={{scaleY: 0}}
                                                animate={{scaleY: 1}}
                                                exit={{scaleY: 0}}
                                                transition={{duration: 0.5, delay: 0.3}}
                                            />
                                        </>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
