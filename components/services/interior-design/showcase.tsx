"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  link: string
}

export default function InteriorDesignShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "Palm Jumeirah Villa",
      category: "Residential",
      description: "Luxurious beachfront villa with panoramic sea views and bespoke interior finishes.",
      image: "/placeholder-tyizb.png",
      link: "/projects/palm-jumeirah-villa",
    },
    {
      id: 2,
      title: "Downtown Penthouse",
      category: "Residential",
      description:
        "Contemporary penthouse overlooking the Burj Khalifa with custom-designed furniture and smart home integration.",
      image: "/placeholder-2mn51.png",
      link: "/projects/downtown-penthouse",
    },
    {
      id: 3,
      title: "Luxury Hotel Lobby",
      category: "Hospitality",
      description: "Opulent hotel entrance featuring custom chandeliers and hand-crafted marble details.",
      image: "/placeholder-hotel.png",
      link: "/projects/luxury-hotel",
    },
  ]

  return (
    <section ref={ref} className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder-pattern.png')] bg-repeat opacity-5"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16"
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center mb-6">
              <div className="h-px w-12 bg-gold/50 mr-4"></div>
              <span className="text-gold uppercase text-sm tracking-widest font-light">Our Work</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Featured <span className="text-gold">Projects</span>
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Explore a selection of our interior design projects that showcase our commitment to excellence,
              creativity, and attention to detail.
            </p>
          </div>

          <Link href="/projects" className="group inline-flex items-center mt-6 md:mt-0">
            <span className="text-gold mr-2 relative">
              View All Projects
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300"></span>
            </span>
            <ArrowUpRight className="h-4 w-4 text-gold transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative h-[450px] overflow-hidden"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    hoveredProject === project.id ? "scale-110 brightness-75" : "scale-100 brightness-50"
                  }`}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
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
                  <h3 className="text-2xl font-light mb-2 text-white group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>

                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                      height: hoveredProject === project.id ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 text-sm line-clamp-3 overflow-hidden"
                  >
                    {project.description}
                  </motion.p>

                  <Link href={project.link} className="absolute inset-0 z-20">
                    <span className="sr-only">View {project.title}</span>
                  </Link>
                </div>
              </div>

              {/* Border effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-gold/20 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
