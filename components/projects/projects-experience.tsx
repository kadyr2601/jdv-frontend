"use client"
import type React from "react"
import {useRef, useState, useEffect} from "react"
import {useRouter} from "next/navigation"
import Image from "next/image"
import {motion, useTransform, useScroll} from "framer-motion"
import {useMobile} from "@/hooks/use-mobile"
import {ProjectsPageDTO, ProjectDTO} from "@/lib/PojectsPage";
import ProjectCard from "@/components/projects/project-card";


interface ProjectsExperienceProps {
    projects: ProjectDTO[]
    page: ProjectsPageDTO
}

export default function ProjectsExperience({projects, page}: ProjectsExperienceProps) {
    const router = useRouter()
    const containerRef = useRef<HTMLDivElement>(null)
    const bannerRef = useRef<HTMLDivElement>(null)
    const [hoveredCard, setHoveredCard] = useState<number | null>(null)
    const isMobile = useMobile()

    // For parallax banner effect
    const {scrollYProgress} = useScroll({
        target: bannerRef,
        offset: ["start start", "end start"],
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 300])
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

    // For text scramble effect
    const [scrambledText, setScrambledText] = useState("Portfolio")

    useEffect(() => {
        const originalText = page.banner_title || "Portfolio"
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        let interval: NodeJS.Timeout | undefined = undefined

        if (!isMobile) {
            let iteration = 0

            // Don't clear interval before it's defined

            interval = setInterval(() => {
                setScrambledText(
                    originalText
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return originalText[index]
                            }

                            return characters[Math.floor(Math.random() * characters.length)]
                        })
                        .join(""),
                )

                if (iteration >= originalText.length) {
                    if (interval) clearInterval(interval)
                }

                iteration += 1 / 3
            }, 30)
        } else {
            setScrambledText(originalText)
        }

        return () => {
            if (interval) clearInterval(interval)
        }
    }, [isMobile, page.banner_title])

    const handleProjectClick = (slug: string) => {
        router.push(`/projects/${slug}`)
    }

    const generateAnimatedLines = () => {
        return [...Array(5)].map((_, i) => {
            const randomYOffset = Math.random() * 200 - 100
            const y = useTransform(scrollYProgress, [0, 1], [0, randomYOffset])
            return (
                <motion.div
                    key={i}
                    className="absolute bg-gold/10 h-px"
                    style={{
                        width: `${100 + Math.random() * 300}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        y: y,
                        rotate: Math.random() * 360,
                    }}
                />
            )
        })
    }

    return (
        <div ref={containerRef} className="relative min-h-screen bg-[#030303]">
            {/*Innovative Banner */}
            <div ref={bannerRef} className="relative h-screen w-full overflow-hidden">
                <motion.div className="absolute inset-0 bg-black" style={{y: y1, scale}}>
                    <Image
                        src={process.env.API_URL+page.banner_image}
                        alt="Luxury texture"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                </motion.div>

                {/* Floating elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-64 h-64 border border-gold/10 rounded-full"
                        style={{y: y2, x: useTransform(scrollYProgress, [0, 1], [0, -50])}}
                    />

                    <motion.div
                        className="absolute bottom-1/3 right-1/3 w-96 h-96 border border-gold/5 rounded-full"
                        style={{y: y3, x: useTransform(scrollYProgress, [0, 1], [0, 100])}}
                    />

                    {/* Animated lines */}
                    {generateAnimatedLines()}
                </div>

                {/* Content */}
                <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                    style={{opacity, y: useTransform(scrollYProgress, [0, 1], [0, 50])}}
                >
                    {/* Animated text reveal */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                        className="overflow-hidden relative mb-4"
                    >
                        <div className="text-gold text-xl uppercase tracking-[0.2em] relative z-10">{page.banner_slogan}</div>
                        <motion.div
                            className="absolute bottom-0 left-0 h-[1px] bg-gold/50 w-full"
                            initial={{scaleX: 0}}
                            animate={{scaleX: 1}}
                            transition={{duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1]}}
                        />
                    </motion.div>

                    {/* Main title with text scramble effect */}
                    <motion.h1
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1, delay: 0.5}}
                        className="text-6xl md:text-8xl lg:text-9xl font-extralight text-white mb-8 tracking-tight"
                    >
                        <span className="text-gold">{scrambledText}</span>
                    </motion.h1>

                    {/* Animated description */}
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.8}}
                        className="max-w-xl text-white/70 text-lg md:text-xl mb-12"
                    >
                        {page.banner_description}
                    </motion.p>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.8, delay: 1.2}}
                        className="absolute bottom-12 left-0 right-0 flex justify-center"
                    >
                        <motion.div
                            className="flex flex-col items-center"
                            animate={{y: [0, 10, 0]}}
                            transition={{duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut"}}
                        >
                            <div className="text-white/50 text-sm mb-2">Scroll to explore</div>
                            <div className="w-px h-10 bg-gradient-to-b from-gold/50 to-transparent"></div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Projects Grid Section */}
            <div className="relative z-10 px-4 md:px-8 py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                isHovered={hoveredCard === index}
                                onHover={() => setHoveredCard(index)}
                                onLeave={() => setHoveredCard(null)}
                                onClick={() => handleProjectClick(project.slug)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

