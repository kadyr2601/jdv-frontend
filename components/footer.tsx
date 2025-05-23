import Link from "next/link"
import Image from "next/image"
import { Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default async function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#222222]">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-8">
          <div className="space-y-4">
              <div className="relative h-14 w-14">
                <Image src="/logo.png" alt="Joie De Vivre" width={128} height={56} className="object-contain" />
              </div>
            <p className="text-gray-400 text-md">
              Dubai's premier luxury interior design, fit out, and architecture studio specializing in high-end
              residential and commercial projects.
            </p>
            {/*<div className="flex space-x-4">*/}
            {/*  <Link href="#" className="text-gray-400 hover:text-gold transition-colors">*/}
            {/*    <Instagram className="h-5 w-5" />*/}
            {/*    <span className="sr-only">Instagram</span>*/}
            {/*  </Link>*/}
            {/*  <Link href="#" className="text-gray-400 hover:text-gold transition-colors">*/}
            {/*    <Twitter className="h-5 w-5" />*/}
            {/*    <span className="sr-only">Twitter</span>*/}
            {/*  </Link>*/}
            {/*  <Link href="#" className="text-gray-400 hover:text-gold transition-colors">*/}
            {/*    <Linkedin className="h-5 w-5" />*/}
            {/*    <span className="sr-only">LinkedIn</span>*/}
            {/*  </Link>*/}
            {/*</div>*/}
          </div>

          <div>
            <h3 className="text-gold font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Home page
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              {/*<li>*/}
              {/*  <Link href="/blog" className="text-gray-400 hover:text-gold transition-colors text-sm">*/}
              {/*    Design Blog*/}
              {/*  </Link>*/}
              {/*</li>*/}
            </ul>
          </div>

          <div>
            <h3 className="text-gold font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/interior-design" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Interior Design services in Dubai
                </Link>
              </li>
              <li>
                <Link href="/services/fit-out" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Fit Out services in Dubai
                </Link>
              </li>
              <li>
                <Link href="/services/architecture" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Architecture services in Dubai
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold font-medium mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-2 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  1807- Business Central Tower B
                  <br />
                  Dubai Internet City
                  <br />
                  Dubai, UAE
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold mr-2" />
                <span className="text-gray-400 text-sm">+971554073275</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold mr-2" />
                <span className="text-gray-400 text-sm">info@jdv.ae</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#222222] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Joie De Vivre. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href={'https://kadyr.dev'} target="_blank"
                  rel="noopener noreferrer" className="text-gold text-sm">Developed by Kadyr.dev</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
