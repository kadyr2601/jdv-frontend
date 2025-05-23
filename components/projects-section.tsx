"use client"
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useTransform, useScroll } from "framer-motion"
import { ArrowUpRight } from "lucide-react"


interface Project {
    id: number
    name: string
    category: string
    description: string
    cardImage: string
    slug: string
    year: string
    location: string
    size: "normal" | "wide" | "tall"
}

export default function ProjectsSection({projects, description}:{projects: Project[], description: string}) {
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, { once: false, amount: 0.1 })
    const [hoveredProject, setHoveredProject] = useState<number | null>(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

    return (
        <section ref={ref} className="py-32 bg-[#0a0a0a] relative overflow-hidden">

            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center opacity-10"
            ></motion.div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>

            <div className="absolute inset-0 grid grid-cols-6 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-full border-l border-gold/5"></div>
                ))}
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
                        <div className="max-w-xl">
                            <div className="inline-flex items-center mb-6">
                                <div className="h-px w-12 bg-gold/50 mr-4"></div>
                                <span className="text-gold uppercase text-sm tracking-widest font-light">Our Work</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                                Featured <span className="text-gold">Portfolio</span>
                            </h2>

                            <p className="text-gray-400 leading-relaxed">
                                {description}
                            </p>
                        </div>

                        <Link href="/projects" className="group inline-flex items-center mt-6 md:mt-0">
              <span className="text-gold mr-2 relative">
                View All Projects
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300"></span>
              </span>
                            <ArrowUpRight className="h-4 w-4 text-gold transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </Link>
                    </div>
                </motion.div>

                {/* Projects grid with mixed layouts - exactly 3 small, 2 wide, 1 tall */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[300px]"
                >
                    {projects.map((project, index) => {
                        // Determine grid span based on project size
                        let classes = ""

                        if (project.size === "normal") {
                            classes = "md:col-span-2" // Small cards take 2 of 6 columns
                        } else if (project.size === "wide") {
                            classes = "md:col-span-4" // Wide cards take 4 of 6 columns
                        } else if (project.size === "tall") {
                            classes = "md:col-span-2 md:row-span-2" // Tall cards take 2 of 6 columns and 2 rows
                        }

                        return (
                            <motion.div
                                key={index}
                                className={`group relative ${classes} transition-all duration-500`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onMouseEnter={() => {
                                    setHoveredProject(project.id)
                                }}
                                onMouseLeave={() => {
                                    setHoveredProject(null)
                                }}
                            >
                                <Link href={`/projects/${project.slug}`} className="block h-full">
                                    <div className="relative overflow-hidden h-full">
                                        {/* Project image with parallax effect */}
                                        <div className="absolute inset-0 scale-[1.15] transition-transform duration-[2s] group-hover:scale-100">
                                            <Image
                                                src={process.env.API_URL+project.cardImage}
                                                alt={project.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Glass overlay */}
                                        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] transition-all duration-500 group-hover:backdrop-blur-0 group-hover:bg-black/20"></div>

                                        {/* Content overlay */}
                                        <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                            {/* Top content */}
                                            <div className="flex justify-between items-start">
                                                <div className="backdrop-blur-md bg-black/30 border border-gold/20 px-4 py-2 text-xs text-gold">
                                                    {project.category}
                                                </div>

                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{
                                                        opacity: hoveredProject === project.id ? 1 : 0,
                                                        scale: hoveredProject === project.id ? 1 : 0.8,
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                    className="w-10 h-10 rounded-full bg-gold flex items-center justify-center"
                                                >
                                                    <ArrowUpRight className="h-5 w-5 text-black" />
                                                </motion.div>
                                            </div>

                                            {/* Bottom content */}
                                            <div>
                                                <h3 className="text-xl font-light mb-2 text-white group-hover:text-gold transition-colors duration-300">
                                                    {project.name}
                                                </h3>

                                                <div className="flex items-center space-x-4 text-xs text-white/70 mb-2">
                                                    <span>{project.year}</span>
                                                    <span>{project.location}</span>
                                                </div>

                                                <motion.p
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{
                                                        opacity: hoveredProject === project.id ? 1 : 0,
                                                        height: hoveredProject === project.id ? "auto" : 0,
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                    className="text-gray-300 text-sm line-clamp-2 overflow-hidden"
                                                >
                                                    {project.description}
                                                </motion.p>
                                            </div>
                                        </div>

                                        {/* Border effect */}
                                        <div className="absolute inset-0 border border-transparent group-hover:border-gold/20 transition-colors duration-500"></div>

                                        {/* Hover glow effect */}
                                        <div className="absolute -inset-px opacity-0 group-hover:opacity-100 bg-gradient-to-br from-gold/10 via-transparent to-transparent transition-opacity duration-700 pointer-events-none"></div>
                                    </div>
                                </Link>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
