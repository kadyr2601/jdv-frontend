import type { Metadata } from "next"
import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import ContactMap from "@/components/contact/contact-map"

export const metadata: Metadata = {
  title: "Contact Us | Joie De Vivre Luxury Interior Design",
  description: "Get in touch with Dubai's premier luxury interior design studio for your next project.",
}

export default function ContactPage() {
  return (
    <main className="bg-black text-white">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </main>
  )
}
