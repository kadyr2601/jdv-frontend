import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Fit-Out Services | Joie De Vivre",
  description:
    "Transform your space with our premium fit-out services. From concept to completion, we deliver exceptional quality and attention to detail.",
}

export default function FitOutPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg.png"
            alt="Luxury Fit-Out Services"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="max-w-5xl">
            <div className="border-l-2 border-gold pl-6 mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-tight">
                Elevating Interiors: <br />
                <span className="text-gold">Tailored Fit-Outs</span> <br />
                for Every Space
              </h1>
            </div>
            <p className="text-lg md:text-xl font-extralight max-w-2xl ml-8 text-white/80">
              Transforming empty shells into functional, beautiful environments that perfectly align with your vision
              and requirements.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      </section>

      {/* Services Navigation */}
      <section className="py-12 bg-black relative border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-16 lg:space-x-24">
            <Link href="/services/interior-design" className="group relative">
              <div className="flex flex-col items-center">
                <div className="h-12 w-px bg-white/20 mb-4"></div>
                <span className="text-white/40 text-sm mb-2">01</span>
                <h3 className="text-white/80 text-lg font-light group-hover:text-gold transition-colors duration-300">
                  Interior Design
                </h3>
                <div className="h-0.5 w-0 bg-gold group-hover:w-full transition-all duration-300 mt-2"></div>
              </div>
            </Link>

            <Link href="/services/architecture" className="group relative">
              <div className="flex flex-col items-center">
                <div className="h-12 w-px bg-white/20 mb-4"></div>
                <span className="text-white/40 text-sm mb-2">02</span>
                <h3 className="text-white/80 text-lg font-light group-hover:text-gold transition-colors duration-300">
                  Architecture
                </h3>
                <div className="h-0.5 w-0 bg-gold group-hover:w-full transition-all duration-300 mt-2"></div>
              </div>
            </Link>

            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="h-12 w-px bg-gold mb-4"></div>
                <span className="text-gold text-sm mb-2">03</span>
                <h3 className="text-gold text-lg font-light">Fit-Out</h3>
                <div className="h-0.5 w-full bg-gold mt-2"></div>
                <span className="absolute -bottom-6 text-[10px] text-gold/80 tracking-widest text-nowrap">CURRENTLY VIEWING</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-8">
                Comprehensive <span className="text-gold">Fit-Out</span> Services
              </h2>
              <p className="text-white/80 leading-relaxed mb-8 font-light">
                Fit-out services encompass a comprehensive range of tasks and activities aimed at optimizing the
                interior space to meet the client's needs and requirements. This includes the planning, design,
                construction, and installation of various elements such as walls, flooring, ceilings, lighting,
                fixtures, and furnishings.
              </p>
              <p className="text-white/80 leading-relaxed mb-8 font-light">
                Key aspects of fit-out services include space planning, where the layout and arrangement of furniture
                and fixtures are optimized for functionality and flow. Material selection plays a crucial role, with
                choices made based on factors such as durability, aesthetics, and budget.
              </p>
              <p className="text-white/80 leading-relaxed font-light">
                Fit-out services ensure that every aspect of the interior space is carefully considered and executed to
                create a cohesive and harmonious environment that reflects the client's style, brand identity, and
                functional requirements. From concept to completion, fit-out services play a vital role in bringing
                interior design visions to life, transforming spaces into inspiring and functional places to live, work,
                or play.
              </p>
            </div>
            <div className="relative">
              <div className="relative h-[600px] w-full overflow-hidden">
                <Image src="/Fit-out-services.jpg" alt="Fit-Out Services" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-gold/30 -z-10"></div>
              <div className="absolute -top-4 -left-4 w-1/2 h-1/2 border border-gold/30 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Services Grid */}
      <section className="py-20 bg-black/95 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-6">
            Our <span className="text-gold">Fit-Out</span> Expertise
          </h2>
          <p className="text-white/70 text-center max-w-3xl mx-auto mb-16 font-light">
            We specialize in transforming spaces across various sectors, delivering tailored fit-out solutions that
            combine functionality, aesthetics, and innovation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500 z-10"></div>
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="/home-about1.jpg"
                  alt="Office Fit-Outs"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-2xl font-light mb-3 text-gold">Office Fit-Outs</h3>
                <ul className="space-y-2 text-white/80 font-light max-h-0 overflow-hidden group-hover:max-h-[200px] transition-all duration-500">
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Client Consultation</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Space Planning and Design</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Furniture Selection and Installation</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Partitioning and Acoustics</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Lighting Design</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Electrical and Data Infrastructure</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500 z-10"></div>
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="/home-about2.jpg"
                  alt="Retail Store Fit-Outs"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-2xl font-light mb-3 text-gold">Retail Store Fit-Outs</h3>
                <ul className="space-y-2 text-white/80 font-light max-h-0 overflow-hidden group-hover:max-h-[200px] transition-all duration-500">
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Client Consultation</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Store Layout and Design</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Visual Merchandising</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Fixture and Display Selection</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Lighting Design</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Flooring and Finishes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500 z-10"></div>
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="/home-project1.jpg"
                  alt="Restaurant and Cafe Fit-Outs"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-2xl font-light mb-3 text-gold">Restaurant and Cafe Fit-Outs</h3>
                <ul className="space-y-2 text-white/80 font-light max-h-0 overflow-hidden group-hover:max-h-[200px] transition-all duration-500">
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Client Consultation</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Layout and Seating Arrangement</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Kitchen Design and Equipment</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Interior Design and Decor</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Bar and Beverage Service</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Lighting and Ambiance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 4 */}
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500 z-10"></div>
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="/home-project2.jpg"
                  alt="Hospitality Venue Fit-Outs"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-2xl font-light mb-3 text-gold">Hospitality Venue Fit-Outs</h3>
                <ul className="space-y-2 text-white/80 font-light max-h-0 overflow-hidden group-hover:max-h-[200px] transition-all duration-500">
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Client Consultation</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Concept Development</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Spatial Planning and Layout</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Interior Design and Decor</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Food and Beverage Service</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Entertainment and Technology</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 5 */}
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500 z-10"></div>
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="/home-project3.jpg"
                  alt="Residential Fit-Outs"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-2xl font-light mb-3 text-gold">Residential Fit-Outs</h3>
                <ul className="space-y-2 text-white/80 font-light max-h-0 overflow-hidden group-hover:max-h-[200px] transition-all duration-500">
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Client Consultation</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Space Planning and Layout</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Interior Design and Decor</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Kitchen and Bathroom Design</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Lighting Design</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Flooring and Finishes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 6 */}
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500 z-10"></div>
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="/home-project4.jpg"
                  alt="Industrial and Warehouse Fit-Outs"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-2xl font-light mb-3 text-gold">Industrial and Warehouse Fit-Outs</h3>
                <ul className="space-y-2 text-white/80 font-light max-h-0 overflow-hidden group-hover:max-h-[200px] transition-all duration-500">
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Client Consultation</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Space Planning and Layout</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Storage Systems and Racking</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Material Handling Equipment</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Safety and Compliance</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>Environmental Controls</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Showcase */}
      <section className="py-20 bg-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-6">
            The <span className="text-gold">Transformation</span> Process
          </h2>
          <p className="text-white/70 text-center max-w-3xl mx-auto mb-16 font-light">
            Witness the journey from concept to completion as we transform raw spaces into functional, beautiful
            environments.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 max-w-6xl mx-auto">
            <div className="relative group overflow-hidden">
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500 z-10"></div>
              <div className="relative h-[300px] overflow-hidden">
                <Image src="/home-project5.jpg" alt="Before Fit-Out" fill className="object-cover" />
              </div>
              <div className="absolute top-4 left-4 bg-black/80 px-4 py-2 z-20">
                <span className="text-gold text-sm font-light">BEFORE</span>
              </div>
            </div>

            <div className="relative group overflow-hidden">
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500 z-10"></div>
              <div className="relative h-[300px] overflow-hidden">
                <Image src="/home-project6.jpg" alt="During Fit-Out" fill className="object-cover" />
              </div>
              <div className="absolute top-4 left-4 bg-black/80 px-4 py-2 z-20">
                <span className="text-gold text-sm font-light">DURING</span>
              </div>
            </div>

            <div className="relative group overflow-hidden">
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500 z-10"></div>
              <div className="relative h-[300px] overflow-hidden">
                <Image src="/home-project1.jpg" alt="After Fit-Out" fill className="object-cover" />
              </div>
              <div className="absolute top-4 left-4 bg-black/80 px-4 py-2 z-20">
                <span className="text-gold text-sm font-light">AFTER</span>
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-black border border-gold flex items-center justify-center mx-auto mb-6">
                  <span className="text-gold text-xl">01</span>
                </div>
                <h3 className="text-xl font-light mb-3">Consultation & Design</h3>
                <p className="text-white/70 font-light">
                  We begin with a thorough consultation to understand your needs, followed by detailed design plans that
                  bring your vision to life.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-black border border-gold flex items-center justify-center mx-auto mb-6">
                  <span className="text-gold text-xl">02</span>
                </div>
                <h3 className="text-xl font-light mb-3">Construction & Installation</h3>
                <p className="text-white/70 font-light">
                  Our skilled team executes the construction and installation phase with precision, attention to detail,
                  and minimal disruption.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-black border border-gold flex items-center justify-center mx-auto mb-6">
                  <span className="text-gold text-xl">03</span>
                </div>
                <h3 className="text-xl font-light mb-3">Finishing & Handover</h3>
                <p className="text-white/70 font-light">
                  We complete the project with meticulous finishing touches and a comprehensive handover process to
                  ensure your complete satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-black/95 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-6">
            Specialized <span className="text-gold">Services</span>
          </h2>
          <p className="text-white/70 text-center max-w-3xl mx-auto mb-16 font-light">
            Beyond our core fit-out expertise, we offer specialized services to meet your specific requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Specialized Service 1 */}
            <div className="bg-black border border-gold/20 p-6 hover:border-gold/40 transition-all duration-500 group">
              <div className="h-1 w-12 bg-gold mb-6"></div>
              <h3 className="text-xl font-light mb-4 text-gold">Turnkey Fit-Out Solutions</h3>
              <p className="text-white/70 font-light mb-6 group-hover:text-white/90 transition-colors duration-300">
                Turnkey fit-out solutions provide comprehensive and hassle-free services for transforming a space into a
                fully functional and aesthetically pleasing environment.
              </p>
              <div className="flex items-center text-gold/70 group-hover:text-gold transition-colors duration-300">
                <span className="text-sm mr-2">Learn more</span>
                <ArrowRight size={14} />
              </div>
            </div>

            {/* Specialized Service 2 */}
            <div className="bg-black border border-gold/20 p-6 hover:border-gold/40 transition-all duration-500 group">
              <div className="h-1 w-12 bg-gold mb-6"></div>
              <h3 className="text-xl font-light mb-4 text-gold">Interior Refurbishments</h3>
              <p className="text-white/70 font-light mb-6 group-hover:text-white/90 transition-colors duration-300">
                Interior refurbishments involve renovating or updating the interior of a space to improve its
                functionality, aesthetics, and overall appeal.
              </p>
              <div className="flex items-center text-gold/70 group-hover:text-gold transition-colors duration-300">
                <span className="text-sm mr-2">Learn more</span>
                <ArrowRight size={14} />
              </div>
            </div>

            {/* Specialized Service 3 */}
            <div className="bg-black border border-gold/20 p-6 hover:border-gold/40 transition-all duration-500 group">
              <div className="h-1 w-12 bg-gold mb-6"></div>
              <h3 className="text-xl font-light mb-4 text-gold">Customized Fit-Out Packages</h3>
              <p className="text-white/70 font-light mb-6 group-hover:text-white/90 transition-colors duration-300">
                Customized fit-out packages offer tailored solutions for transforming spaces according to specific
                client needs and preferences.
              </p>
              <div className="flex items-center text-gold/70 group-hover:text-gold transition-colors duration-300">
                <span className="text-sm mr-2">Learn more</span>
                <ArrowRight size={14} />
              </div>
            </div>

            {/* Specialized Service 4 */}
            <div className="bg-black border border-gold/20 p-6 hover:border-gold/40 transition-all duration-500 group">
              <div className="h-1 w-12 bg-gold mb-6"></div>
              <h3 className="text-xl font-light mb-4 text-gold">Space Optimization Solutions</h3>
              <p className="text-white/70 font-light mb-6 group-hover:text-white/90 transition-colors duration-300">
                Space optimization solutions involve maximizing the efficiency and functionality of a given space to
                better serve its intended purpose.
              </p>
              <div className="flex items-center text-gold/70 group-hover:text-gold transition-colors duration-300">
                <span className="text-sm mr-2">Learn more</span>
                <ArrowRight size={14} />
              </div>
            </div>

            {/* Specialized Service 5 */}
            <div className="bg-black border border-gold/20 p-6 hover:border-gold/40 transition-all duration-500 group">
              <div className="h-1 w-12 bg-gold mb-6"></div>
              <h3 className="text-xl font-light mb-4 text-gold">Design and Build Services</h3>
              <p className="text-white/70 font-light mb-6 group-hover:text-white/90 transition-colors duration-300">
                Design and build services offer a comprehensive approach to construction projects by combining the
                design and construction phases into a single, streamlined process.
              </p>
              <div className="flex items-center text-gold/70 group-hover:text-gold transition-colors duration-300">
                <span className="text-sm mr-2">Learn more</span>
                <ArrowRight size={14} />
              </div>
            </div>

            {/* Specialized Service 6 */}
            <div className="bg-black border border-gold/20 p-6 hover:border-gold/40 transition-all duration-500 group">
              <div className="h-1 w-12 bg-gold mb-6"></div>
              <h3 className="text-xl font-light mb-4 text-gold">Project Management</h3>
              <p className="text-white/70 font-light mb-6 group-hover:text-white/90 transition-colors duration-300">
                Project management and coordination involve overseeing and organizing all aspects of a project to ensure
                its successful completion within budget, schedule, and quality standards.
              </p>
              <div className="flex items-center text-gold/70 group-hover:text-gold transition-colors duration-300">
                <span className="text-sm mr-2">Learn more</span>
                <ArrowRight size={14} />
              </div>
            </div>

            {/* Specialized Service 7 */}
            <div className="bg-black border border-gold/20 p-6 hover:border-gold/40 transition-all duration-500 group">
              <div className="h-1 w-12 bg-gold mb-6"></div>
              <h3 className="text-xl font-light mb-4 text-gold">Furniture and Fixtures</h3>
              <p className="text-white/70 font-light mb-6 group-hover:text-white/90 transition-colors duration-300">
                Furniture and fixtures installation involves the process of assembling and placing furniture, fittings,
                and equipment within a space to create a functional environment.
              </p>
              <div className="flex items-center text-gold/70 group-hover:text-gold transition-colors duration-300">
                <span className="text-sm mr-2">Learn more</span>
                <ArrowRight size={14} />
              </div>
            </div>

            {/* Specialized Service 8 */}
            <div className="bg-black border border-gold/20 p-6 hover:border-gold/40 transition-all duration-500 group">
              <div className="h-1 w-12 bg-gold mb-6"></div>
              <h3 className="text-xl font-light mb-4 text-gold">Compliance Services</h3>
              <p className="text-white/70 font-light mb-6 group-hover:text-white/90 transition-colors duration-300">
                Compliance with building regulations and standards refers to adhering to legal requirements and industry
                guidelines established by governing authorities.
              </p>
              <div className="flex items-center text-gold/70 group-hover:text-gold transition-colors duration-300">
                <span className="text-sm mr-2">Learn more</span>
                <ArrowRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Showcase */}
      <section className="py-20 bg-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-6">
            Premium <span className="text-gold">Materials</span> & Finishes
          </h2>
          <p className="text-white/70 text-center max-w-3xl mx-auto mb-16 font-light">
            We source only the finest materials and finishes to ensure exceptional quality and durability in all our
            fit-out projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Material 1 */}
            <div className="relative group">
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src="/home-service1.jpg"
                  alt="Premium Wood"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-xl font-light text-gold">Premium Wood</h3>
                <p className="text-white/70 text-sm mt-2">Sustainable hardwoods and veneers</p>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 rounded-full bg-black/70 border border-gold/50 flex items-center justify-center">
                  <span className="text-gold text-xs">01</span>
                </div>
              </div>
            </div>

            {/* Material 2 */}
            <div className="relative group">
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src="/home-service2.jpg"
                  alt="Natural Stone"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-xl font-light text-gold">Natural Stone</h3>
                <p className="text-white/70 text-sm mt-2">Marble, granite, and limestone</p>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 rounded-full bg-black/70 border border-gold/50 flex items-center justify-center">
                  <span className="text-gold text-xs">02</span>
                </div>
              </div>
            </div>

            {/* Material 3 */}
            <div className="relative group">
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src="/home-service3.jpg"
                  alt="Architectural Metals"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-xl font-light text-gold">Architectural Metals</h3>
                <p className="text-white/70 text-sm mt-2">Brass, copper, and stainless steel</p>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 rounded-full bg-black/70 border border-gold/50 flex items-center justify-center">
                  <span className="text-gold text-xs">03</span>
                </div>
              </div>
            </div>

            {/* Material 4 */}
            <div className="relative group">
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src="/home-strategy1.jpg"
                  alt="Specialty Glass"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-xl font-light text-gold">Specialty Glass</h3>
                <p className="text-white/70 text-sm mt-2">Frosted, textured, and smart glass</p>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 rounded-full bg-black/70 border border-gold/50 flex items-center justify-center">
                  <span className="text-gold text-xs">04</span>
                </div>
              </div>
            </div>

            {/* Material 5 */}
            <div className="relative group">
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src="/home-strategy2.jpg"
                  alt="Luxury Textiles"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-xl font-light text-gold">Luxury Textiles</h3>
                <p className="text-white/70 text-sm mt-2">Fine fabrics and upholstery</p>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 rounded-full bg-black/70 border border-gold/50 flex items-center justify-center">
                  <span className="text-gold text-xs">05</span>
                </div>
              </div>
            </div>

            {/* Material 6 */}
            <div className="relative group">
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src="/home-strategy3.png"
                  alt="Lighting Solutions"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-xl font-light text-gold">Lighting Solutions</h3>
                <p className="text-white/70 text-sm mt-2">LED, ambient, and architectural lighting</p>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 rounded-full bg-black/70 border border-gold/50 flex items-center justify-center">
                  <span className="text-gold text-xs">06</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to <span className="text-gold">Transform</span> Your Space?
          </h2>
          <p className="text-white/80 font-light max-w-2xl mx-auto mb-10">
            Contact us today to discuss your fit-out project and discover how we can bring your vision to life with our
            expertise, craftsmanship, and attention to detail.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-transparent border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 px-8 py-3 text-sm tracking-wider"
          >
            CONTACT US
          </Link>
        </div>
      </section>
    </main>
  )
}
