import React, {useRef} from "react";
import {motion, useMotionValue} from "framer-motion";
import Image from "next/image";
import {ArrowUpRight} from "lucide-react";
import {ProjectDTO} from "@/lib/PojectsPage";

interface ProjectCardProps {
    project: ProjectDTO
    index: number
    isHovered: boolean
    onHover: () => void
    onLeave: () => void
    onClick: () => void
}

export default function ProjectCard({project, index, isHovered, onHover, onLeave, onClick}: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)

    // Card tilt effect
    const rotateX = useMotionValue(0)
    const rotateY = useMotionValue(0)

    // Handle mouse move for tilt effect
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return

        const rect = cardRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateXValue = (y - centerY) / 20
        const rotateYValue = (centerX - x) / 20

        rotateX.set(rotateXValue)
        rotateY.set(rotateYValue)
    }

    // Reset rotation when mouse leaves
    const handleMouseLeave = () => {
        rotateX.set(0)
        rotateY.set(0)
        onLeave()
    }

    // Animation variants for card assembly
    const cardVariants = {
        hidden: {opacity: 0, y: 50},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.1,
            },
        },
    }

    const imageVariants = {
        hidden: {opacity: 0, scale: 1.2},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.7,
                delay: index * 0.1 + 0.1,
            },
        },
    }

    const categoryVariants = {
        hidden: {opacity: 0, x: -20},
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.1 + 0.2,
            },
        },
    }

    const iconVariants = {
        hidden: {opacity: 0, scale: 0},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: index * 0.1 + 0.3,
            },
        },
    }

    const titleVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.1 + 0.4,
            },
        },
    }

    const metaVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: index * 0.1 + 0.5,
            },
        },
    }

    const descriptionVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 0, // Start with 0 opacity, will be controlled by hover
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.1 + 0.6,
            },
        },
    }

    return (
        <motion.div
            ref={cardRef}
            className="group relative h-[450px] bg-[#0a0a0a] overflow-hidden rounded-2xl"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            onMouseMove={handleMouseMove}
            onMouseEnter={onHover}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 1000,
            }}
            whileHover={{z: 10}}
        >
            {/* Card content */}
            <motion.div className="absolute inset-0 z-10" variants={imageVariants} initial="hidden" animate="visible">
                <Image
                    src={process.env.API_URL+project.cardImage}
                    alt={project.name}
                    fill
                    className={`rounded-2xl object-cover transition-all duration-700 ${
                        isHovered ? "scale-110 brightness-90" : "scale-100 brightness-75"
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"/>
            </motion.div>

            {/* Card border */}
            <div
                className="absolute inset-0 z-20 border border-transparent transition-colors duration-500 group-hover:border-gold/30 rounded-2xl"/>

            {/* Card content */}
            <div className="absolute inset-0 z-30 p-6 flex flex-col">
                {/* Top content */}
                <div className="flex justify-between items-start">
                    <motion.div
                        className="px-3 py-1 bg-black/50 backdrop-blur-sm border border-gold/20 text-gold text-xs uppercase tracking-wider rounded-full"
                        variants={categoryVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {project.category}
                    </motion.div>

                    <motion.div
                        className="w-10 h-10 rounded-full bg-gold/0 border border-gold/0 flex items-center justify-center"
                        variants={iconVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{scale: 1.1}}
                    >
                        <ArrowUpRight
                            size={16}
                            className="text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    </motion.div>
                </div>

                {/* Bottom content */}
                <div className="mt-auto">
                    <motion.div
                        className="transform-gpu"
                        animate={{
                            y: isHovered ? -10 : 0,
                            transition: {duration: 0.3},
                        }}
                    >
                        <motion.h3
                            className="text-2xl font-light text-white mb-2"
                            variants={titleVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {project.name}
                        </motion.h3>

                        <motion.div
                            className="flex items-center space-x-3 text-xs text-white/70 mb-4"
                            variants={metaVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <span>{project.year}</span>
                            <span>•</span>
                            <span>{project.location}</span>
                        </motion.div>
                    </motion.div>

                    <motion.p
                        className="text-white/80 text-sm line-clamp-3 transform-gpu"
                        variants={descriptionVariants}
                        initial="hidden"
                        animate="visible"
                        style={{
                            opacity: isHovered ? 1 : 0,
                            y: isHovered ? 0 : 20,
                        }}
                        transition={{duration: 0.3}}
                    >
                        {project.description}
                    </motion.p>
                </div>
            </div>

            {/* Hover effect - corner accents */}
            <div
                className="absolute top-0 left-0 w-12 h-12 z-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                    className="absolute top-0 left-0 w-px h-full bg-gold/50 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100"></div>
                <div
                    className="absolute top-0 left-0 w-full h-px bg-gold/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
            </div>

            <div
                className="absolute bottom-0 right-0 w-12 h-12 z-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                    className="absolute bottom-0 right-0 w-px h-full bg-gold/50 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100"></div>
                <div
                    className="absolute bottom-0 right-0 w-full h-px bg-gold/50 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
            </div>
        </motion.div>
    )
}
