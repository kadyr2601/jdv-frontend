"use client"
import {useRef, useState, useEffect} from "react"
import Image from "next/image"
import {motion, useInView, useMotionValue, useScroll, useTransform, AnimatePresence} from "framer-motion"
import {StrategySectionDTO} from "@/lib/HomePage"


export default function StrategySection({features, description}: { features: StrategySectionDTO[], description: string }) {
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, {once: false, amount: 0.2})
    const [activeFeature, setActiveFeature] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -50])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -150])

    // Custom cursor
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16)
            cursorY.set(e.clientY - 16)
        }

        window.addEventListener("mousemove", moveCursor)
        return () => {
            window.removeEventListener("mousemove", moveCursor)
        }
    }, [cursorX, cursorY])

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isTransitioning) {
                setIsTransitioning(true)
                setActiveFeature((prev) => (prev + 1) % features.length)
            }
        }, 7000)
        return () => clearInterval(interval)
    }, [isTransitioning])

    const handleTransitionComplete = () => {
        setIsTransitioning(false)
    }

    const imageVariants = {
        enter: {
            opacity: 0,
            scale: 1.05,
        },
        center: {
            opacity: 1,
            scale: 1,
            transition: {
                opacity: {duration: 1.2, ease: [0.16, 1, 0.3, 1]},
                scale: {duration: 1.5, ease: [0.16, 1, 0.3, 1]},
            },
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            transition: {
                opacity: {duration: 1.2, ease: [0.16, 1, 0.3, 1]},
                scale: {duration: 1.5, ease: [0.16, 1, 0.3, 1]},
            },
        },
    }

    const contentVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3,
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    }

    return (
        <section ref={ref} className="py-32 bg-[#0a0a0a] relative overflow-hidden">
            {/* Custom cursor - only show on desktop */}
            <div className="hidden md:block">
                <motion.div
                    className="fixed top-0 left-0 rounded-full pointer-events-none z-50 flex items-center justify-center text-xs font-light text-gold"
                />
            </div>

            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center opacity-5"/>

            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-gold/30"
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            opacity: Math.random() * 0.5 + 0.3,
                        }}
                        animate={{
                            y: [null, Math.random() * -200 - 100],
                            opacity: [null, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                        style={{width: Math.random() * 3 + 1, height: Math.random() * 3 + 1}}
                    />
                ))}
            </div>

            {/* Decorative elements */}
            <motion.div style={{y: y1}}
                        className="absolute top-20 right-20 w-64 h-64 border border-gold/5 rounded-full"/>
            <motion.div
                style={{y: y2}}
                className="absolute bottom-40 left-10 w-32 h-32 border border-gold/10 rounded-full"
            />

            {/* Diagonal lines */}
            <div
                className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent transform -rotate-12 origin-top"/>
            <div
                className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent transform rotate-12 origin-top"/>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                        transition={{duration: 0.8}}
                        className="inline-block"
                    >
            <span
                className="text-gold uppercase text-sm tracking-widest font-light px-6 py-2 border border-gold/20 rounded-full backdrop-blur-sm">
              Our Approach
            </span>
                    </motion.div>

                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                        transition={{duration: 0.8, delay: 0.2}}
                        className="text-5xl md:text-6xl font-extralight mt-8 mb-6 tracking-tight"
                    >
                        Strategy-Led <span className="text-gold">Interior Design</span>
                    </motion.h2>

                    <motion.div
                        initial={{scaleX: 0}}
                        animate={isInView ? {scaleX: 1} : {scaleX: 0}}
                        transition={{duration: 0.8, delay: 0.4}}
                        className="h-px w-24 bg-gradient-to-r from-transparent via-gold/70 to-transparent mx-auto"
                    />

                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                        transition={{duration: 0.8, delay: 0.6}}
                        className="text-gray-300 text-lg leading-relaxed mt-8 max-w-3xl mx-auto"
                    >
                        {description}
                    </motion.p>
                </div>

                {/* Main feature showcase */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
                    {/* Left column - Feature tabs */}
                    <div className="lg:col-span-4 flex flex-col justify-center">
                        <motion.div
                            initial={{opacity: 0, x: -50}}
                            animate={isInView ? {opacity: 1, x: 0} : {opacity: 0, x: -50}}
                            transition={{duration: 0.8}}
                            className="space-y-8"
                        >
                            {features.map((feature, index) => (
                                <div
                                    key={feature.id}
                                    className={`relative cursor-pointer group transition-all duration-500 ${
                                        activeFeature === index ? "pl-6" : "pl-4"
                                    }`}
                                    onClick={() => {
                                        if (!isTransitioning) {
                                            setIsTransitioning(true)
                                            setActiveFeature(index)
                                        }
                                    }}
                                >
                                    {/* Active indicator */}
                                    <div
                                        className={`absolute left-0 top-0 bottom-0 w-1 bg-gold transition-all duration-500 ${
                                            activeFeature === index ? "opacity-100" : "opacity-0"
                                        }`}
                                    />

                                    <div className="mb-2 flex items-center">
                                        <h3
                                            className={`text-xl font-light transition-colors duration-300 ${
                                                activeFeature === index ? "text-gold" : "text-white group-hover:text-gold/80"
                                            }`}
                                        >
                                            {feature.title}
                                        </h3>
                                    </div>

                                    <p
                                        className={`text-sm leading-relaxed transition-colors duration-300 ${
                                            activeFeature === index ? "text-gray-300" : "text-gray-500 group-hover:text-gray-400"
                                        }`}
                                    >
                                        {feature.description}
                                    </p>

                                    {/* Animated line */}
                                    <div
                                        className={`h-px bg-gold/50 mt-4 transition-all duration-700 ease-out ${
                                            activeFeature === index ? "w-full" : "w-0 group-hover:w-1/2"
                                        }`}
                                    />
                                </div>
                            ))}

                        </motion.div>
                    </div>

                    {/* Right column - Feature showcase with enhanced transitions */}
                    <div className="lg:col-span-8 relative">
                        <motion.div
                            initial={{opacity: 0, scale: 0.9}}
                            animate={isInView ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.9}}
                            transition={{duration: 0.8}}
                            className="relative h-[500px] md:h-[600px] perspective-1000"
                        >
                            {/* Progress indicator */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gold/10 z-20">
                                <motion.div
                                    className="h-full bg-gold"
                                    initial={{width: "0%"}}
                                    animate={{width: `${((activeFeature + 1) / features.length) * 100}%`}}
                                    transition={{duration: 0.5, ease: "easeInOut"}}
                                />
                            </div>

                            {/* Image transitions with AnimatePresence for smooth fades */}
                            <div className="absolute inset-0 border border-gold/20 overflow-hidden">
                                <AnimatePresence initial={false} onExitComplete={handleTransitionComplete}>
                                    <motion.div
                                        key={`image-${activeFeature}`}
                                        variants={imageVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={process.env.API_URL+features[activeFeature].image || "/placeholder.svg"}
                                            alt={features[activeFeature].title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent"/>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-gold/30"/>
                            <div
                                className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-gold/30"/>

                            {/* Feature content overlay with AnimatePresence for smooth transitions */}
                            <div
                                className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`content-${activeFeature}`}
                                        variants={contentVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                    >
                                        <h3 className="text-2xl font-light text-gold mb-4">{features[activeFeature].title}</h3>
                                        <p className="text-white/80 mb-6">{features[activeFeature].description}</p>

                                        <div className="flex space-x-8">
                                            {features[activeFeature].stats.map((stat, i) => (
                                                <div key={i}>
                                                    <p className="text-gold text-3xl font-light">{stat.value}</p>
                                                    <p className="text-white/60 text-sm">{stat.label}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <motion.div
                                style={{y: y3}}
                                className="absolute -top-8 -right-8 bg-black/80 backdrop-blur-md border border-gold/20 p-6 z-20"
                            >
                                <p className="text-gold text-4xl font-extralight">15+</p>
                                <p className="text-white/70 text-sm">Years of Excellence</p>
                            </motion.div>
                        </motion.div>

                        {/* Navigation dots */}
                        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3">
                            {features.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        if (!isTransitioning) {
                                            setIsTransitioning(true)
                                            setActiveFeature(index)
                                        }
                                    }}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                        activeFeature === index ? "bg-gold w-8" : "bg-gold/20 hover:bg-gold/40"
                                    }`}
                                    aria-label={`Go to feature ${index + 1}`}
                                    disabled={isTransitioning}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Process steps */}
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                    transition={{duration: 0.8, delay: 0.4}}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
                >
                    {/* Connecting line */}
                    <div className="absolute top-12 left-0 right-0 h-px bg-gold/20 hidden md:block"/>

                    {[
                        {
                            number: "01",
                            title: "Discover",
                            description: "In-depth consultation to understand your vision and needs",
                        },
                        {
                            number: "02",
                            title: "Design",
                            description: "Creative conceptualization and detailed planning"
                        },
                        {
                            number: "03",
                            title: "Deliver",
                            description: "Flawless execution and meticulous implementation"
                        },
                    ].map((step, index) => (
                        <div key={index} className="relative">
                            {/* Step number */}
                            <div
                                className="w-24 h-24 rounded-full bg-black border border-gold/30 flex items-center justify-center mx-auto mb-8 relative z-10">
                                <span className="text-gold text-3xl font-light">{step.number}</span>
                            </div>

                            <h3 className="text-xl font-light text-gold text-center mb-4">{step.title}</h3>
                            <p className="text-gray-400 text-center">{step.description}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
