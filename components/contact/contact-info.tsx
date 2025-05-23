"use client"

import {useRef} from "react"
import {motion, useInView} from "framer-motion"
import {MapPin, Phone, Mail, Clock, Instagram, Linkedin, MessageCircle} from "lucide-react"
import Link from "next/link"

export default function ContactInfo({lt, ld, ct, cn, et, ea, wht, whd}: {
    lt: string;
    ld: string;
    ct: string;
    cn: string;
    et: string;
    ea: string;
    wht: string;
    whd: string;
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: false, amount: 0.2})

    const contactItems = [
        {
            icon: MapPin,
            title: lt,
            content: (
                <div>
                  {ld}
                </div>
            ),
        },
        {
            icon: Phone,
            title: ct,
            content: <Link href={`tel:${cn}`}>{cn}</Link>,
        },
        {
            icon: Mail,
            title: et,
            content: <Link href={`mailto:${ea}`}>{ea}</Link>,
        },
        {
            icon: Clock,
            title: wht,
            content: (
                <div>
                  {whd}
                </div>
            ),
        },
    ]

    const socialLinks = [
        {
            icon: Instagram,
            label: "Instagram",
            href: "https://www.instagram.com/jdv_dubai/?igsh=Y2pzcndvejB4OXpt#",
        },
        // {
        //     icon: Linkedin,
        //     label: "LinkedIn",
        //     href: "https://linkedin.com/company/joiedevivre",
        // },
        {
            icon: MessageCircle,
            label: "WhatsApp",
            href: "https://wa.me/971554073275",
        },
    ]

    return (
        <section ref={ref} className="py-24 bg-[#030303] relative">
            <div
                className="absolute inset-0 bg-[url('/placeholder-luxury-texture.png')] bg-cover bg-center opacity-[0.03]"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                    transition={{duration: 0.8}}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-light mb-4">
                        How to <span className="text-gold">Reach Us</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We're always available to discuss your project, answer your questions, or schedule a
                        consultation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contactItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                            transition={{duration: 0.8, delay: index * 0.1}}
                            className="bg-[#0a0a0a] p-8 rounded-sm border border-[#222222] hover:border-gold/30 transition-colors duration-500 group"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div
                                    className="w-16 h-16 rounded-full bg-black border border-gold/30 flex items-center justify-center mb-6 group-hover:border-gold/60 transition-colors duration-500">
                                    <item.icon className="h-6 w-6 text-gold"/>
                                </div>
                                <h3 className="text-xl font-light text-gold mb-3">{item.title}</h3>
                                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                                    {item.content}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Social Media Links */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                    transition={{duration: 0.8, delay: 0.5}}
                    className="mt-16 text-center"
                >
                    <h3 className="text-xl font-light text-gold mb-6">Connect With Us</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {socialLinks.map((social, index) => (
                            <Link
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 px-6 py-3 bg-[#0a0a0a] border border-[#222222] hover:border-gold/30 rounded-full transition-all duration-300 group"
                            >
                                <social.icon className="h-5 w-5 text-gold"/>
                                <span className="text-gray-400 group-hover:text-gold transition-colors duration-300">
                  {social.label}
                </span>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
