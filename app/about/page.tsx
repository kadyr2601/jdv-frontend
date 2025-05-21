import type { Metadata } from "next"
import AboutHero from "@/components/about/about-hero"
import AboutStory from "@/components/about/about-story"
import AboutFounder from "@/components/about/about-founder"
import AboutTeam from "@/components/about/about-team"
import AboutPhilosophy from "@/components/about/about-philosophy"
import AboutServices from "@/components/about/about-services"
import AboutCta from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: "About Us | Joie De Vivre Luxury Interior Design",
  description: "Learn about Dubai's premier luxury interior design studio and our commitment to excellence.",
}

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      <AboutHero />
      <AboutStory />
      <AboutFounder />
      <AboutTeam />
      <AboutPhilosophy />
      <AboutServices />
      <AboutCta />
    </main>
  )
}
