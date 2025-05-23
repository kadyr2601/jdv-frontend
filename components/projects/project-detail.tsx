"use client"
import {useState, useRef, useEffect} from "react"
import Image from "next/image"
import Link from "next/link"
import {motion, AnimatePresence} from "framer-motion"
import {ChevronLeft, ChevronRight, X, ArrowLeft} from "lucide-react"
import {ProjectDetails} from "@/lib/PojectsPage"


export default function ProjectDetail({project, gallery}: ProjectDetails) {

    const [modalOpen, setModalOpen] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true)
        }, 500)

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setModalOpen(false)
            }
        }

        if (modalOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [modalOpen])

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!modalOpen) return

            if (e.key === "Escape") {
                setModalOpen(false)
            } else if (e.key === "ArrowRight") {
                setCurrentImageIndex((prev) => (prev + 1) % gallery.length)
            } else if (e.key === "ArrowLeft") {
                setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length)
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [modalOpen, gallery.length])

    // Open modal with specific image
    const openModal = (index: number) => {
        setCurrentImageIndex(index)
        setModalOpen(true)
    }

    // Navigate to next image in modal
    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % gallery.length)
    }

    // Navigate to previous image in modal
    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length)
    }

    return (
        <div className="bg-black text-white min-h-screen">
            {/* Intro animation overlay */}
            <AnimatePresence>
                {!isLoaded && (
                    <motion.div
                        initial={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 1}}
                        className="fixed inset-0 z-50 bg-black flex items-center justify-center"
                    >
                        <motion.div
                            initial={{opacity: 0, scale: 0.9}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.5}}
                            className="text-gold text-2xl font-light"
                        >
                            {project.name}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Project Header */}
            <section className="relative md:py-32 h-[600px] md:h-auto">
                <div className="absolute inset-0 bg-[url('/projectBanner.png')] bg-cover bg-center opacity-[0.4]"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex items-center">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 w-full">
                        <div>
                            <Link
                                href="/projects"
                                className="inline-flex items-center text-white/70 hover:text-gold transition-colors mb-6"
                            >
                                <ArrowLeft className="h-4 w-4 mr-2"/>
                                <span>Back to Projects</span>
                            </Link>

                            <h1 className="text-4xl md:text-6xl font-extralight tracking-tight mb-4">{project.name}</h1>

                            <div className="h-px w-24 bg-gradient-to-r from-gold/70 to-transparent mb-6"></div>

                            <div className="text-white/70">{project.description}</div>
                        </div>

                        <div className="mt-8 md:mt-0 flex flex-col items-start md:items-end space-y-2">
                            <div className="flex items-center">
                                <span className="text-gold text-sm mr-3">Year:</span>
                                <span className="text-white">{project.year}</span>
                            </div>

                            <div className="flex items-center">
                                <span className="text-gold text-sm mr-3">Location:</span>
                                <span className="text-white">{project.location}</span>
                            </div>

                            <div className="flex items-center">
                                <span className="text-gold text-sm mr-3">Category:</span>
                                <span className="text-white">{project.category}</span>
                            </div>

                            <div className="flex items-center">
                                <span className="text-gold text-sm mr-3">Area:</span>
                                <span className="text-white">{project.area}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Gallery Grid */}
            <section className="py-16 md:py-24 bg-black relative">
                <div className="absolute inset-0 bg-[url('/placeholder-pattern.png')] bg-repeat opacity-5"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="text-3xl md:text-4xl font-light mb-12 tracking-tight text-center"
                    >
                        Project <span className="text-gold">Gallery</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {gallery.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: index * 0.05}}
                                viewport={{once: true, margin: "-100px"}}
                                className="relative group cursor-pointer overflow-hidden"
                                onClick={() => openModal(index)}
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={process.env.API_URL + item.gallery}
                                        alt={`${project.name} - Image ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay on hover */}
                                    <div
                                        className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                                        <div
                                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div
                                                className="w-12 h-12 rounded-full bg-gold/80 flex items-center justify-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="text-white"
                                                >
                                                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Elegant frame */}
                                <div className="absolute inset-0 border border-gold/10 pointer-events-none"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Next Project Navigation */}
            <section className="py-16 md:py-24 bg-black relative">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col items-center">
                        <Link
                            href="/projects"
                            className="group relative overflow-hidden px-8 py-3 border border-gold/30 text-gold hover:bg-gold/10 transition-colors rounded-full"
                        >
                            <span className="relative z-10">View All Projects</span>

                            {/* Infinite animation effect */}
                            <motion.div
                                className="absolute inset-0 bg-gold/10 -translate-x-full"
                                animate={{x: ["-100%", "100%"]}}
                                transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "linear",
                                }}
                            />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Image Modal */}
            <AnimatePresence>
                {modalOpen && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.3}}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8"
                    >
                        <div ref={modalRef}
                             className="relative w-full h-full flex flex-col items-center justify-center">
                            {/* Close button */}
                            <button
                                onClick={() => setModalOpen(false)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                                aria-label="Close modal"
                            >
                                <X className="h-5 w-5"/>
                            </button>

                            {/* Image counter */}
                            <div
                                className="absolute top-4 left-4 z-10 bg-black/50 px-3 py-1 rounded-full text-white/80 text-sm">
                                {currentImageIndex + 1} / {gallery.length}
                            </div>

                            {/* Main image */}
                            <div className="relative w-full h-full flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentImageIndex}
                                        initial={{opacity: 0, scale: 0.9}}
                                        animate={{opacity: 1, scale: 1}}
                                        exit={{opacity: 0, scale: 1.1}}
                                        transition={{duration: 0.3}}
                                        className="relative w-full h-full flex items-center justify-center"
                                    >
                                        <Image
                                            src={`${process.env.API_URL}${gallery[currentImageIndex].gallery}`}
                                            alt={`${project.name} - Image ${currentImageIndex + 1}`}
                                            fill
                                            className="object-contain"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Navigation buttons */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="h-6 w-6"/>
                            </button>

                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
                                aria-label="Next image"
                            >
                                <ChevronRight className="h-6 w-6"/>
                            </button>

                            {/* Thumbnail navigation */}
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 px-4">
                                <div className="flex space-x-1 overflow-x-auto py-2 max-w-full scrollbar-hide">
                                    {gallery.map((item, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`relative flex-shrink-0 w-16 h-10 overflow-hidden border-2 transition-all ${
                                                currentImageIndex === index ? "border-gold" : "border-transparent opacity-50 hover:opacity-100"
                                            }`}
                                            aria-label={`Go to image ${index + 1}`}
                                        >
                                            <Image
                                                src={process.env.API_URL + item.gallery}
                                                alt={`Thumbnail ${index + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
