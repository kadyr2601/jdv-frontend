"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Instagram, MessageCircle, ChevronDown } from "lucide-react"

import { useMobile } from "@/hooks/use-mobile"

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "#",
    label: "Services",
    isDropdown: true,
    dropdownItems: [
      { href: "/services/interior-design", label: "Interior Design" },
      { href: "/services/fit-out", label: "Fit-Out" },
      { href: "/services/architecture", label: "Architecture" },
    ],
  },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const socialLinks = [
  {
    href: "https://wa.me/971412345678",
    label: "WhatsApp",
    icon: MessageCircle,
    color: "bg-gold hover:bg-gold/90",
    textColor: "text-black",
  },
  {
    href: "https://instagram.com/joiedevivre",
    label: "Instagram",
    icon: Instagram,
    color: "bg-black border border-gold hover:bg-black/80",
    textColor: "text-gold",
  },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const [hoverDropdown, setHoverDropdown] = useState<number | null>(null)
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDropdownToggle = (index: number) => {
    if (activeDropdown === index) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(index)
    }
  }

  const handleDropdownClose = () => {
    // Set a timer to close the dropdown after a short delay
    closeTimerRef.current = setTimeout(() => {
      setActiveDropdown(null)
      setHoverDropdown(null)
    }, 100)
  }

  const handleMouseEnter = (index: number) => {
    // Clear any pending close timer
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setHoverDropdown(index)
  }

  const handleMouseLeave = () => {
    handleDropdownClose()
  }

  // Determine if dropdown should be visible (either by click or hover)
  const isDropdownVisible = (index: number) => {
    return activeDropdown === index || hoverDropdown === index
  }

  // Cancel any pending close when component unmounts
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current)
      }
    }
  }, [])

  return (
      <>
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled ? "bg-black/90 backdrop-blur-sm py-4" : "bg-transparent py-6"
            }`}
        >
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex items-center justify-between">
              {/* Logo - Updated to be rounded/square */}
              <Link href="/" className="relative z-10">
                <div className="relative h-14 w-14 md:h-16 md:w-16">
                  <Image src="/logo.png" alt="Joie De Vivre" fill className="object-contain" priority />
                </div>
              </Link>

              {/* Desktop Navigation - With dropdown */}
              {!isMobile && (
                  <nav className="hidden md:flex items-center space-x-12">
                    {navLinks.map((link, index) => (
                        <div key={link.href || index} className="relative group">
                          {link.isDropdown ? (
                              <>
                                <button
                                    onClick={() => handleDropdownToggle(index)}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                    className={`flex items-center text-sm tracking-widest font-light transition-colors duration-300 group ${
                                        isDropdownVisible(index) ? "text-gold" : "text-white hover:text-gold"
                                    }`}
                                    aria-expanded={isDropdownVisible(index)}
                                    aria-haspopup="true"
                                >
                                  {link.label}
                                  <ChevronDown
                                      className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                                          isDropdownVisible(index) ? "rotate-180 text-gold" : ""
                                      } group-hover:text-gold`}
                                  />
                                </button>

                                {/* Invisible connection area to prevent dropdown from closing */}
                                <div
                                    className={`absolute left-0 w-full h-4 -bottom-4 ${
                                        isDropdownVisible(index) ? "block" : "hidden"
                                    }`}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                ></div>

                                {/* Redesigned Luxury Dropdown Menu */}
                                <div
                                    className={`mt-3 absolute top-[calc(100%+4px)] left-1/2 transform -translate-x-1/2 w-56 transition-all duration-300 ${
                                        isDropdownVisible(index)
                                            ? "opacity-100 translate-y-0 pointer-events-auto"
                                            : "opacity-0 -translate-y-4 pointer-events-none"
                                    }`}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                  {/* Decorative top arrow */}
                                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 rotate-45 border-l border-t border-gold/30 bg-black"></div>

                                  {/* Main dropdown container */}
                                  <div className="relative overflow-hidden rounded-sm bg-black/95 backdrop-blur-md border border-gold/20 shadow-[0_15px_30px_-5px_rgba(212,175,55,0.2)]">
                                    {/* Gold accent line at top */}
                                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>

                                    {/* Corner decorations */}
                                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold/40"></div>
                                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold/40"></div>
                                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gold/40"></div>
                                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold/40"></div>

                                    {/* Background pattern */}
                                    <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.3)_0,_transparent_70%)]"></div>

                                    {/* Dropdown content */}
                                    <div className="relative py-3 px-2">
                                      {link.dropdownItems?.map((item) => (
                                          <Link
                                              key={item.href}
                                              href={item.href}
                                              className="group/item flex items-center px-5 py-3.5 text-sm text-white/90 hover:text-gold transition-all duration-200 relative"
                                              onClick={() => {
                                                setActiveDropdown(null)
                                                setHoverDropdown(null)
                                                setIsMenuOpen(false)
                                              }}
                                          >
                                            {/* Left gold bar that appears on hover */}
                                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 bg-gold group-hover/item:h-[70%] transition-all duration-300 ease-out"></span>

                                            {/* Label */}
                                            <span className="tracking-wider font-light">{item.label}</span>

                                            {/* Hover indicator line */}
                                            <span className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-gold/50 to-transparent scale-x-0 group-hover/item:scale-x-100 origin-left transition-transform duration-300"></span>
                                          </Link>
                                      ))}
                                    </div>

                                    {/* Gold accent line at bottom */}
                                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
                                  </div>
                                </div>
                              </>
                          ) : (
                              <Link
                                  href={link.href}
                                  className="text-sm tracking-widest font-light text-white hover:text-gold transition-colors duration-300"
                              >
                                {link.label}
                              </Link>
                          )}
                        </div>
                    ))}
                  </nav>
              )}

              {/* Social Links - Matching Site Palette */}
              <div className="flex items-center space-x-3">
                {!isMobile && (
                    <div className="flex items-center space-x-3">
                      {socialLinks.map((link, index) => {
                        const Icon = link.icon
                        return (
                            <Link
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center rounded-full px-3 py-1.5 ${link.color} ${link.textColor} transition-all duration-300 text-sm shadow-md hover:shadow-lg`}
                                aria-label={link.label}
                            >
                              <Icon className="h-4 w-4 mr-1.5" />
                              <span className="font-medium">{link.label}</span>
                            </Link>
                        )
                      })}
                    </div>
                )}

                {/* Mobile Menu Button */}
                {isMobile && (
                    <div className="flex items-center space-x-2">
                      {/* Show only WhatsApp on mobile for space */}
                      <Link
                          href={socialLinks[0].href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center rounded-full px-3 py-1.5 ${socialLinks[0].color} ${socialLinks[0].textColor} transition-all duration-300 text-sm shadow-md hover:shadow-lg`}
                          aria-label={socialLinks[0].label}
                      >
                        <MessageCircle className="h-4 w-4 mr-1.5" />
                        <span className="font-medium">WhatsApp</span>
                      </Link>

                      <button
                          onClick={() => setIsMenuOpen(!isMenuOpen)}
                          className="text-white hover:text-gold transition-colors p-1 ml-2"
                          aria-label="Toggle menu"
                      >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                      </button>
                    </div>
                )}
              </div>
            </div>
          </div>

          {/* Subtle gold line that appears when scrolled */}
          <div
              className={`h-px bg-gold/30 w-full origin-left transition-transform duration-500 ${
                  isScrolled ? "scale-x-100" : "scale-x-0"
              }`}
          />
        </header>

        {/* Mobile Menu - Updated with dropdowns */}
        {isMenuOpen && isMobile && (
            <div className="fixed inset-0 z-40 bg-black/95 pt-24">
              <div className="container mx-auto px-6 h-full flex flex-col">
                <nav className="flex flex-col space-y-8 py-12">
                  {navLinks.map((link, index) => (
                      <div key={link.href || index} className="flex flex-col">
                        {link.isDropdown ? (
                            <>
                              <button
                                  onClick={() => handleDropdownToggle(index)}
                                  className="flex items-center justify-between text-2xl font-extralight tracking-wider text-white hover:text-gold transition-colors"
                              >
                                <span>{link.label}</span>
                                <ChevronDown
                                    className={`ml-2 h-5 w-5 transition-transform duration-300 ${activeDropdown === index ? "rotate-180" : ""}`}
                                />
                              </button>

                              {/* Mobile Dropdown Items - Updated Design */}
                              <div
                                  className={`mt-6 ml-4 space-y-5 transition-all duration-300 ${
                                      activeDropdown === index ? "block" : "hidden"
                                  }`}
                              >
                                {link.dropdownItems?.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="flex items-center text-xl font-extralight text-white/80 hover:text-gold transition-colors"
                                        onClick={() => {
                                          setActiveDropdown(null)
                                          setIsMenuOpen(false)
                                        }}
                                    >
                                      {item.label}
                                    </Link>
                                ))}
                              </div>
                            </>
                        ) : (
                            <Link
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-2xl font-extralight tracking-wider text-white hover:text-gold transition-colors"
                            >
                              {link.label}
                            </Link>
                        )}
                      </div>
                  ))}
                </nav>

                {/* Social links in mobile menu - Matching Site Palette */}
                <div className="mt-auto mb-12 border-t border-gold/10 pt-8">
                  <p className="text-gold/70 text-sm mb-6 font-light">Connect With Us</p>
                  <div className="flex flex-col space-y-4">
                    {socialLinks.map((link, index) => {
                      const Icon = link.icon
                      return (
                          <Link
                              key={index}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center justify-center rounded-full py-3 ${link.color} ${link.textColor} transition-all duration-300 shadow-md hover:shadow-lg`}
                              aria-label={link.label}
                          >
                            <Icon className="h-5 w-5 mr-2" />
                            <span className="font-medium">{link.label}</span>
                          </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
        )}
      </>
  )
}
