"use client"

import {useRef, useState} from "react"
import {motion, useInView, useScroll, useTransform} from "framer-motion"
import Image from "next/image"

interface AboutPhilosophyProps {
    id: number;
    title: string;
    content: string;
    image: string;
}

export default function AboutPhilosophy({tabs, desc, title}: {tabs: AboutPhilosophyProps[], desc: string, title: string}) {
    const ref = useRef(null)
    const containerRef = useRef(null)
    const isInView = useInView(ref, {once: false, amount: 0.2})
    const [activeTab, setActiveTab] = useState(0)

    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

    return (
        <section ref={containerRef} className="py-32 bg-[#030303] relative overflow-hidden">
            <div
                className="absolute inset-0 bg-[url('/placeholder-luxury-texture.png')] bg-cover bg-center opacity-[0.03]"></div>

            {/* Animated background elements */}
            <motion.div style={{y: y1, opacity}} className="absolute inset-0">
                <Image src="/placeholder-pattern.png" alt="Luxury Pattern" fill className="object-cover opacity-5"/>
            </motion.div>

            {/* Diagonal lines */}
            <div
                className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent transform rotate-12 origin-top"/>
            <div
                className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/5 to-transparent transform -rotate-12 origin-top"/>

            <div ref={ref} className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                    transition={{duration: 0.8}}
                    className="text-center mb-16"
                >
                    <div className="inline-block mb-4">
                        <span className="text-gold uppercase text-sm tracking-[0.2em] font-light">Our Essence</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-light mb-4 text-gold">
                        {title}
                    </h2>

                    <p className="text-white/70 max-w-2xl mx-auto">
                        {desc}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Left column - Interactive tabs */}
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={isInView ? {opacity: 1, x: 0} : {opacity: 0, x: -50}}
                        transition={{duration: 1, ease: [0.25, 1, 0.5, 1]}}
                        className="lg:col-span-5"
                    >
                        <div className="space-y-8">
                            {tabs.map((tab, index) => (
                                <div key={index} className="relative">
                                    <button
                                        onClick={() => setActiveTab(index)}
                                        className={`flex items-center w-full text-left transition-all duration-500 ${
                                            activeTab === index ? "pl-6" : "pl-4"
                                        }`}
                                    >
                                        {/* Active indicator */}
                                        <div
                                            className={`absolute left-0 top-0 bottom-0 w-1 bg-gold transition-all duration-500 ${
                                                activeTab === index ? "opacity-100" : "opacity-0"
                                            }`}
                                        />

                                        <h3
                                            className={`text-2xl font-light transition-colors duration-300 ${
                                                activeTab === index ? "text-gold" : "text-white hover:text-gold/80"
                                            }`}
                                        >
                                            {tab.title}
                                        </h3>
                                    </button>

                                    {/* Animated line */}
                                    <div
                                        className={`h-px bg-gold/50 mt-4 transition-all duration-700 ease-out ${
                                            activeTab === index ? "w-full" : "w-0"
                                        }`}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Tab content */}
                        <div className="mt-12">
                            {tabs.map((tab, index) => (
                                <div
                                    key={index}
                                    className={`transition-all duration-500 ${
                                        activeTab === index ? "opacity-100" : "opacity-0 absolute pointer-events-none"
                                    }`}
                                    style={{
                                        transform: activeTab === index ? "translateY(0)" : "translateY(20px)",
                                        position: activeTab === index ? "relative" : "absolute",
                                    }}
                                >
                                    <p className="text-white/70 text-lg">{tab.content}</p>
                                </div>
                            ))}
                        </div>

                        {/* Stats with animated progress bars */}
                        <div className="grid grid-cols-3 gap-8 mt-16">
                            {[
                                {value: "75%", label: "Interior Designer"},
                                {value: "80%", label: "Architecture"},
                                {value: "95%", label: "Best UIX Design"},
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0, y: 20}}
                                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                                    transition={{duration: 0.5, delay: index * 0.1 + 0.5}}
                                >
                                    <div className="text-gold text-3xl font-light mb-2">{stat.value}</div>
                                    <div className="text-white/60 text-sm">{stat.label}</div>
                                    <div className="mt-2 h-1 bg-[#222] overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gold"
                                            initial={{width: 0}}
                                            animate={isInView ? {width: stat.value} : {width: 0}}
                                            transition={{
                                                duration: 1.5,
                                                delay: index * 0.2 + 0.8,
                                                ease: [0.25, 1, 0.5, 1]
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right column - Animated image showcase */}
                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        animate={isInView ? {opacity: 1, x: 0} : {opacity: 0, x: 50}}
                        transition={{duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.3}}
                        className="lg:col-span-7 relative"
                    >
                        <div className="relative aspect-video overflow-hidden">
                            {tabs.map((tab, index) => (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0}}
                                    animate={{opacity: activeTab === index ? 1 : 0}}
                                    transition={{duration: 0.8}}
                                    className="absolute inset-0"
                                    style={{zIndex: activeTab === index ? 10 : 0}}
                                >
                                    <Image src={process.env.API_URL + tab.image} alt={tab.title} fill
                                           className="object-cover"/>

                                    {/* Overlay gradient */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent"></div>

                                    {/* Border */}
                                    <div className="absolute inset-0 border border-gold/20"></div>
                                </motion.div>
                            ))}

                            {/* Animated corner elements */}
                            <div
                                className="absolute top-0 left-0 w-16 h-16 border-t border-l border-gold/40 z-20"></div>
                            <div
                                className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-gold/40 z-20"></div>

                            {/* Tab indicator */}
                            <div className="absolute bottom-8 left-8 z-20 flex items-center space-x-3">
                                {tabs.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTab(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            activeTab === index ? "bg-gold w-8" : "bg-white/40 hover:bg-white/60"
                                        }`}
                                        aria-label={`View ${tabs[index].title}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
