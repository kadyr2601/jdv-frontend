"use client"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import TestimonialsSection from "@/components/testimonials-section"
import StrategySection from "@/components/strategy-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <StrategySection />
    </main>
  )
}
