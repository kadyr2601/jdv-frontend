"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {useRouter} from "next/navigation"

interface HeroSectionProps {
    banner_image: string;
    banner_description: string;
    banner_slogan: string;
    banner_title: string;
    banner_subtitle: string;
}

export default function HeroSection({ banner_image, banner_slogan, banner_description, banner_title, banner_subtitle }: HeroSectionProps) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

    const [firstWord, ...restWords] = banner_title.split(" ");
    const restText = restWords.join(" ");

    const [secondWord, ...restWords2] = banner_subtitle.split(" ");
    const restText2 = restWords2.join(" ");

    const router = useRouter()

    const handleProjectClick = () => {
        router.push(`/projects`)
    }
    const handleContactClick = () => {
        router.push(`/contact`)
    }

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src={banner_image}
                    alt="Luxury Interior Design"
                    fill
                    priority
                    className="object-cover brightness-50"
                />
                <div className="absolute inset-0 bg-black/30 z-10" />
            </div>

            <motion.div
                style={{ opacity, scale }}
                className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 md:px-6"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-2 inline-block rounded-full border border-gold/30 bg-black/30 px-3 py-1 text-sm text-gold"
                >
                    {banner_slogan}
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl"
                >

                    <span className="text-gold">{firstWord}</span> {restText}
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl"
                >

                    <span className="text-gold">{secondWord}</span> {restText2}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-[800px] text-lg md:text-xl text-gray-200 mb-8"
                >
                    {banner_description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button onClick={handleProjectClick} className="bg-gold hover:bg-gold/90 text-black px-8 py-6 text-lg">
                        Explore Our Portfolio
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button onClick={handleContactClick} className="border-gold bg-gold/90 px-8 py-6 text-lg hover:bg-gold/10 text-white ">
                        Book a Consultation
                    </Button>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-8 left-0 right-0 z-20 flex justify-center"
            >
                <div className="flex items-center gap-4 px-6 py-3 bg-black/50 backdrop-blur-sm rounded-full">
                    <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                    <p className="text-sm font-medium">Scroll to discover our world of luxury</p>
                </div>
            </motion.div>
        </section>
    )
}
