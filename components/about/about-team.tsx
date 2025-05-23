"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Linkedin, Instagram, Mail } from "lucide-react"
import Link from "next/link"

interface TeamMember {
  id: number
  name: string
  position: string
  image: string
  bio: string
}

export default function AboutTeam({teamMembers, desc}: {teamMembers: TeamMember[],  desc: string}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-32 bg-[#030303] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/placeholder-luxury-texture.png')] bg-cover bg-center opacity-[0.03]"></div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-gold uppercase text-sm tracking-[0.2em] font-light px-6 py-2 border border-gold/20 rounded-full backdrop-blur-sm">
              Meet Our Experts
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Our <span className="text-gold">Team</span>
          </h2>

          <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold/70 to-transparent mx-auto mb-6"></div>

          <p className="text-white/70 max-w-2xl mx-auto">
            {desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setActiveTeamMember(member.id)}
              onMouseLeave={() => setActiveTeamMember(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                {/* Member image */}
                <div className="absolute inset-0">
                  <Image
                    src={process.env.API_URL+member.image}
                    alt={member.name}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      activeTeamMember === member.id ? "scale-110 filter brightness-90" : "scale-100"
                    }`}
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"></div>
                </div>

                {/* Content container */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  {/* Member info */}
                  <div
                    className={`transform transition-all duration-500 ${
                      activeTeamMember === member.id ? "translate-y-[-30px]" : "translate-y-0"
                    }`}
                  >
                    <h3 className="text-2xl font-light text-gold mb-1">{member.name}</h3>
                    <p className="text-white/80 mb-4">{member.position}</p>
                  </div>

                  {/* Bio with animated reveal */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      activeTeamMember === member.id ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-white/70 text-sm mb-4">{member.bio}</p>
                  </div>
                </div>

                {/* Elegant frame */}
                <div className="absolute inset-0 border border-transparent group-hover:border-gold/20 transition-colors duration-500"></div>
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/0 group-hover:border-gold/40 transition-colors duration-500"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/0 group-hover:border-gold/40 transition-colors duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24"
        >
          {[
            {
              title: "Expertise",
              description:
                "Our team brings years of experience and specialized knowledge to every project, ensuring exceptional results.",
            },
            {
              title: "Collaboration",
              description:
                "We believe in the power of teamwork and open communication, both within our team and with our clients.",
            },
            {
              title: "Innovation",
              description:
                "We continuously explore new ideas, materials, and techniques to push the boundaries of design.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-gold/10 p-8 hover:border-gold/30 transition-colors duration-500"
            >
              <h3 className="text-2xl font-light text-gold mb-4">{value.title}</h3>
              <div className="h-px w-12 bg-gold/30 mb-6"></div>
              <p className="text-white/70">{value.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
