import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Architecture Services | Joie De Vivre",
  description:
    "Exceptional architectural design services that blend aesthetics, functionality, and sustainability to create spaces that inspire and endure.",
}

export default function ArchitecturePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section with Architectural Grid */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg.png"
            alt="Architectural Blueprint"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10"></div>

          {/* Architectural Grid Overlay */}
          <div className="absolute inset-0 z-20 opacity-20">
            <div className="h-full w-full grid grid-cols-12 gap-px">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="border-r border-gold/20 h-full"></div>
              ))}
            </div>
            <div className="absolute inset-0 grid grid-rows-12 gap-px">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="border-b border-gold/20 w-full"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-30">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-start">
              <div className="mb-6 flex items-center">
                <div className="w-12 h-px bg-gold mr-4"></div>
                <span className="text-gold uppercase tracking-widest text-sm">Architecture</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8 leading-tight">
                Crafting Spaces: <br />
                <span className="text-gold">Where Imagination</span> <br />
                Meets Structure
              </h1>

              <div className="w-24 h-px bg-gold/50 mb-8"></div>

              <p className="text-lg md:text-xl font-light text-white/80 max-w-2xl mb-12">
                Architecture is the art and science of designing and constructing buildings, structures, and spaces that
                serve functional, aesthetic, and social purposes.
              </p>

              <div className="flex items-center group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center mr-4 group-hover:bg-gold/10 transition-all duration-300">
                  <ArrowRight size={18} className="text-gold" />
                </div>
                <span className="text-gold uppercase tracking-widest text-sm group-hover:translate-x-2 transition-all duration-300">
                  Explore Our Services
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5 md:pr-12">
              <div className="sticky top-24">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-px bg-gold mr-4"></div>
                  <span className="text-gold uppercase tracking-widest text-xs">Our Approach</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight">
                  Architecture <span className="text-gold">Defined</span> <br />
                  By Excellence
                </h2>

                <div className="w-16 h-px bg-gold/50 mb-8"></div>

                <p className="text-white/80 font-light mb-6">
                  Architecture encompasses a wide range of typologies, including residential, commercial, institutional,
                  and urban design, each requiring careful consideration of form, function, and context.
                </p>

                <p className="text-white/80 font-light">
                  From iconic landmarks to everyday dwellings, architecture shapes the built environment and influences
                  the way we live, work, and interact with our surroundings.
                </p>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="relative">
                <Image
                  src="/id1.png"
                  alt="Architectural Drawing and Model"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-1/2 h-1/2 border border-gold/30 -z-10"></div>
              </div>

              <div className="mt-12 pl-6 border-l border-gold/30">
                <p className="text-white/80 font-light mb-8">
                  Architects blend artistic vision with technical expertise to create innovative solutions that address
                  challenges such as spatial organization, structural integrity, sustainability, and cultural context.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mb-4">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-light text-gold mb-3">Form</h3>
                    <p className="text-white/70 font-light">
                      The visual and spatial composition that defines the aesthetic experience.
                    </p>
                  </div>

                  <div>
                    <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mb-4">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-light text-gold mb-3">Function</h3>
                    <p className="text-white/70 font-light">
                      The practical purpose and usability of architectural spaces.
                    </p>
                  </div>

                  <div>
                    <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mb-4">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-light text-gold mb-3">Context</h3>
                    <p className="text-white/70 font-light">
                      The relationship between architecture and its surrounding environment.
                    </p>
                  </div>

                  <div>
                    <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mb-4">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-light text-gold mb-3">Sustainability</h3>
                    <p className="text-white/70 font-light">
                      The environmental responsibility and long-term viability of designs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-12 bg-black/95 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-px bg-gold mr-4"></div>
                <span className="text-gold uppercase tracking-widest text-xs">Our Services</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light">
                Comprehensive <span className="text-gold">Architectural</span> Services
              </h2>
            </div>

            <div className="mt-6 md:mt-0">
              <div className="flex space-x-4">
                <Link
                  href="/services/interior-design"
                  className="text-white/70 hover:text-gold transition-colors duration-300"
                >
                  Interior Design
                </Link>
                <span className="text-gold/50">|</span>
                <Link href="/services/architecture" className="text-gold border-b border-gold pb-1">
                  Architecture
                </Link>
                <span className="text-gold/50">|</span>
                <Link href="/services/fit-out" className="text-white/70 hover:text-gold transition-colors duration-300">
                  Fit-out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 bg-black relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group">
              <div className="relative overflow-hidden mb-6">
                <div className="aspect-w-4 h-56 aspect-h-3 relative bg-black/80 border border-gold/20 group-hover:border-gold/40 transition-all duration-500">
                  <Image
                    src="/id2.jpg"
                    alt="Architectural Conceptualization and Design"
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-500"></div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs text-gold/80 uppercase tracking-widest">01</span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center">
                    <ChevronRight size={16} className="text-gold" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-light text-gold mb-3">Architectural Conceptualization and Design</h3>
              <p className="text-white/70 font-light mb-4">
                The creative process of developing ideas and translating them into tangible architectural plans,
                considering spatial layout, materials, sustainability, and cultural context.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group">
              <div className="relative overflow-hidden mb-6">
                <div className="h-56 relative aspect-w-4 aspect-h-3 bg-black/80 border border-gold/20 group-hover:border-gold/40 transition-all duration-500">
                  <Image
                    src="/id3.jpg"
                    alt="Building Design and Planning"
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-500"></div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs text-gold/80 uppercase tracking-widest">02</span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center">
                    <ChevronRight size={16} className="text-gold" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-light text-gold mb-3">Building Design and Planning</h3>
              <p className="text-white/70 font-light mb-4">
                The strategic process of envisioning, conceptualizing, and mapping out the creation or renovation of a
                physical structure, considering functionality, aesthetics, and compliance.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group">
              <div className="relative overflow-hidden mb-6">
                <div className="h-56 relative aspect-w-4 aspect-h-3 bg-black/80 border border-gold/20 group-hover:border-gold/40 transition-all duration-500">
                  <Image
                    src="/id4.jpg"
                    alt="Residential Architecture"
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-500"></div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs text-gold/80 uppercase tracking-widest">03</span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center">
                    <ChevronRight size={16} className="text-gold" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-light text-gold mb-3">Residential Architecture</h3>
              <p className="text-white/70 font-light mb-4">
                Design and construction of homes and living spaces tailored to individuals or families, balancing
                functionality, comfort, aesthetics, and sustainability.
              </p>
            </div>

            {/* Service 4 */}
            <div className="group">
              <div className="relative overflow-hidden mb-6">
                <div className="h-56 relative aspect-w-4 aspect-h-3 bg-black/80 border border-gold/20 group-hover:border-gold/40 transition-all duration-500">
                  <Image
                    src="/id5.jpg"
                    alt="Commercial Architecture"
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-500"></div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs text-gold/80 uppercase tracking-widest">04</span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center">
                    <ChevronRight size={16} className="text-gold" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-light text-gold mb-3">Commercial Architecture</h3>
              <p className="text-white/70 font-light mb-4">
                Design and development of structures intended for business, retail, and other commercial purposes,
                including office buildings, retail centers, and mixed-use developments.
              </p>
            </div>

            {/* Service 5 */}
            <div className="group">
              <div className="relative overflow-hidden mb-6">
                <div className="h-56 relative aspect-w-4 aspect-h-3 bg-black/80 border border-gold/20 group-hover:border-gold/40 transition-all duration-500">
                  <Image
                    src="/id6.jpg"
                    alt="Hospitality Architecture"
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-500"></div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs text-gold/80 uppercase tracking-widest">05</span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center">
                    <ChevronRight size={16} className="text-gold" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-light text-gold mb-3">Hospitality Architecture</h3>
              <p className="text-white/70 font-light mb-4">
                Design of spaces dedicated to accommodating travelers and guests, such as hotels, resorts, and
                restaurants, focusing on creating memorable and immersive experiences.
              </p>
            </div>

            {/* Service 6 */}
            <div className="group">
              <div className="relative overflow-hidden mb-6">
                <div className="h-56 relative aspect-w-4 aspect-h-3 bg-black/80 border border-gold/20 group-hover:border-gold/40 transition-all duration-500">
                  <Image
                    src="/id7.jpg"
                    alt="Retail Architecture"
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-500"></div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs text-gold/80 uppercase tracking-widest">06</span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center">
                    <ChevronRight size={16} className="text-gold" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-light text-gold mb-3">Retail Architecture</h3>
              <p className="text-white/70 font-light mb-4">
                Design and planning of spaces specifically tailored for commercial retail purposes, creating
                environments that attract customers and facilitate shopping experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-20 bg-black/95 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <div className="flex items-center mb-6">
                <div className="w-8 h-px bg-gold mr-4"></div>
                <span className="text-gold uppercase tracking-widest text-xs">Featured Project</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight">
                The <span className="text-gold">Harmony</span> <br />
                Residence
              </h2>

              <div className="w-16 h-px bg-gold/50 mb-8"></div>

              <p className="text-white/80 font-light mb-8">
                A stunning example of our architectural expertise, The Harmony Residence seamlessly blends contemporary
                design with natural elements, creating a living space that is both luxurious and sustainable.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-gold text-sm uppercase tracking-wider mb-2">Location</h4>
                  <p className="text-white/70 font-light">Palm Jumeirah, Dubai</p>
                </div>

                <div>
                  <h4 className="text-gold text-sm uppercase tracking-wider mb-2">Area</h4>
                  <p className="text-white/70 font-light">1,200 sq.m</p>
                </div>

                <div>
                  <h4 className="text-gold text-sm uppercase tracking-wider mb-2">Year</h4>
                  <p className="text-white/70 font-light">2023</p>
                </div>

                <div>
                  <h4 className="text-gold text-sm uppercase tracking-wider mb-2">Type</h4>
                  <p className="text-white/70 font-light">Residential</p>
                </div>
              </div>

              <Link href="/projects/harmony-residence" className="inline-flex items-center group">
                <span className="text-gold uppercase tracking-widest text-sm mr-4 group-hover:mr-6 transition-all duration-300">
                  View Project
                </span>
                <ArrowRight size={18} className="text-gold" />
              </Link>
            </div>

            <div className="md:col-span-7">
              <div className="relative">
                <div className="grid grid-cols-12 grid-rows-12 h-[600px]">
                  <div className="col-span-8 row-span-12 relative">
                    <Image
                      src="/int-service.png"
                      alt="The Harmony Residence"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="col-span-4 row-span-6 relative">
                    <Image
                      src="/mainBanner.jpg"
                      alt="The Harmony Residence Interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="col-span-4 row-span-6 relative">
                    <Image
                      src="/Fit-out-services.jpg"
                      alt="The Harmony Residence Detail"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 w-1/3 h-1/3 border border-gold/30 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-px bg-gold mr-4"></div>
                <span className="text-gold uppercase tracking-widest text-xs">Additional Expertise</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light">
                Specialized <span className="text-gold">Architectural</span> Services
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            {/* Additional Service 1 */}
            <div>
              <div className="flex items-start mb-4">
                <span className="text-gold text-4xl font-light mr-4">07</span>
                <div className="w-full h-px bg-gold/30 mt-4"></div>
              </div>
              <h3 className="text-xl font-light text-gold mb-3">Institutional and Educational Architecture</h3>
              <p className="text-white/70 font-light">
                Design and planning of buildings dedicated to public services, education, and research, including
                schools, universities, libraries, and government buildings.
              </p>
            </div>

            {/* Additional Service 2 */}
            <div>
              <div className="flex items-start mb-4">
                <span className="text-gold text-4xl font-light mr-4">08</span>
                <div className="w-full h-px bg-gold/30 mt-4"></div>
              </div>
              <h3 className="text-xl font-light text-gold mb-3">Interior Architecture</h3>
              <p className="text-white/70 font-light">
                The art and science of designing interior spaces that harmonize functionality, aesthetics, and human
                experience, optimizing the use of space.
              </p>
            </div>

            {/* Additional Service 3 */}
            <div>
              <div className="flex items-start mb-4">
                <span className="text-gold text-4xl font-light mr-4">09</span>
                <div className="w-full h-px bg-gold/30 mt-4"></div>
              </div>
              <h3 className="text-xl font-light text-gold mb-3">Landscape Architecture</h3>
              <p className="text-white/70 font-light">
                The art and science of designing outdoor environments that seamlessly blend natural elements with
                human-made structures, such as parks and gardens.
              </p>
            </div>

            {/* Additional Service 4 */}
            <div>
              <div className="flex items-start mb-4">
                <span className="text-gold text-4xl font-light mr-4">10</span>
                <div className="w-full h-px bg-gold/30 mt-4"></div>
              </div>
              <h3 className="text-xl font-light text-gold mb-3">Sustainable and Green Building Design</h3>
              <p className="text-white/70 font-light">
                Creating structures that minimize environmental impact while maximizing resource efficiency and occupant
                comfort through sustainable practices.
              </p>
            </div>

            {/* Additional Service 5 */}
            <div>
              <div className="flex items-start mb-4">
                <span className="text-gold text-4xl font-light mr-4">11</span>
                <div className="w-full h-px bg-gold/30 mt-4"></div>
              </div>
              <h3 className="text-xl font-light text-gold mb-3">Historic Preservation and Restoration</h3>
              <p className="text-white/70 font-light">
                The careful conservation, rehabilitation, and protection of buildings and sites to maintain their
                historical significance for future generations.
              </p>
            </div>

            {/* Additional Service 6 */}
            <div>
              <div className="flex items-start mb-4">
                <span className="text-gold text-4xl font-light mr-4">12</span>
                <div className="w-full h-px bg-gold/30 mt-4"></div>
              </div>
              <h3 className="text-xl font-light text-gold mb-3">Feasibility Studies and Site Analysis</h3>
              <p className="text-white/70 font-light">
                Preliminary steps in planning that assess project viability by examining factors such as market demand,
                financial considerations, and technical feasibility.
              </p>
            </div>

            {/* Additional Service 7 */}
            <div>
              <div className="flex items-start mb-4">
                <span className="text-gold text-4xl font-light mr-4">13</span>
                <div className="w-full h-px bg-gold/30 mt-4"></div>
              </div>
              <h3 className="text-xl font-light text-gold mb-3">Building Information Modeling (BIM)</h3>
              <p className="text-white/70 font-light">
                Digital process creating and managing detailed 3D representations of building projects, including
                physical characteristics and functional aspects.
              </p>
            </div>

            {/* Additional Service 8 */}
            <div>
              <div className="flex items-start mb-4">
                <span className="text-gold text-4xl font-light mr-4">14</span>
                <div className="w-full h-px bg-gold/30 mt-4"></div>
              </div>
              <h3 className="text-xl font-light text-gold mb-3">Construction Documentation</h3>
              <p className="text-white/70 font-light">
                Detailed set of plans, drawings, and written instructions that guide the construction process, providing
                essential information for contractors.
              </p>
            </div>

            {/* Additional Service 9 */}
            <div>
              <div className="flex items-start mb-4">
                <span className="text-gold text-4xl font-light mr-4">15</span>
                <div className="w-full h-px bg-gold/30 mt-4"></div>
              </div>
              <h3 className="text-xl font-light text-gold mb-3">Building Permit Assistance</h3>
              <p className="text-white/70 font-light">
                Obtaining official authorization from local government authorities to proceed with construction,
                ensuring compliance with building codes and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section with Architectural Elements */}
      <section className="py-20 bg-black/95 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-px bg-gold mr-4"></div>
                <span className="text-gold uppercase tracking-widest text-xs">Our Process</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light">
                The <span className="text-gold">Blueprint</span> of Excellence
              </h2>
            </div>
          </div>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/30"></div>

            <div className="space-y-24 relative">
              {/* Process Step 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="md:text-right md:pr-16">
                  <span className="text-gold text-sm uppercase tracking-widest mb-2 block">Step 01</span>
                  <h3 className="text-2xl font-light text-gold mb-4">Initial Consultation</h3>
                  <p className="text-white/70 font-light">
                    We begin with a comprehensive discussion to understand your vision, requirements, and aspirations.
                    This crucial first step establishes the foundation for the entire project.
                  </p>
                </div>

                <div className="hidden md:block"></div>

                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 rounded-full border border-gold flex items-center justify-center bg-black">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Process Step 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="hidden md:block"></div>

                <div className="md:pl-16">
                  <span className="text-gold text-sm uppercase tracking-widest mb-2 block">Step 02</span>
                  <h3 className="text-2xl font-light text-gold mb-4">Concept Development</h3>
                  <p className="text-white/70 font-light">
                    We translate your requirements into preliminary design concepts, exploring various possibilities and
                    approaches to find the perfect architectural solution for your needs.
                  </p>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 rounded-full border border-gold flex items-center justify-center bg-black">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Process Step 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="md:text-right md:pr-16">
                  <span className="text-gold text-sm uppercase tracking-widest mb-2 block">Step 03</span>
                  <h3 className="text-2xl font-light text-gold mb-4">Schematic Design</h3>
                  <p className="text-white/70 font-light">
                    We refine the selected concept into detailed schematic designs, including floor plans, elevations,
                    and 3D visualizations to help you envision the final result.
                  </p>
                </div>

                <div className="hidden md:block"></div>

                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 rounded-full border border-gold flex items-center justify-center bg-black">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Process Step 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="hidden md:block"></div>

                <div className="md:pl-16">
                  <span className="text-gold text-sm uppercase tracking-widest mb-2 block">Step 04</span>
                  <h3 className="text-2xl font-light text-gold mb-4">Design Development</h3>
                  <p className="text-white/70 font-light">
                    We further develop the approved schematic design, specifying materials, finishes, and technical
                    systems while ensuring all aspects align with your vision and requirements.
                  </p>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 rounded-full border border-gold flex items-center justify-center bg-black">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Process Step 5 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="md:text-right md:pr-16">
                  <span className="text-gold text-sm uppercase tracking-widest mb-2 block">Step 05</span>
                  <h3 className="text-2xl font-light text-gold mb-4">Construction Documentation</h3>
                  <p className="text-white/70 font-light">
                    We prepare comprehensive technical drawings and specifications required for approvals, permits, and
                    construction, ensuring every detail is accurately documented.
                  </p>
                </div>

                <div className="hidden md:block"></div>

                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 rounded-full border border-gold flex items-center justify-center bg-black">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Process Step 6 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="hidden md:block"></div>

                <div className="md:pl-16">
                  <span className="text-gold text-sm uppercase tracking-widest mb-2 block">Step 06</span>
                  <h3 className="text-2xl font-light text-gold mb-4">Construction Administration</h3>
                  <p className="text-white/70 font-light">
                    We oversee the construction process, conducting regular site visits to ensure the project is built
                    according to design specifications and maintaining the highest quality standards.
                  </p>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 rounded-full border border-gold flex items-center justify-center bg-black">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-8 h-px bg-gold"></div>
            </div>

            <h2 className="text-3xl md:text-5xl font-light mb-8">
              Ready to Transform Your <br />
              <span className="text-gold">Architectural Vision</span> into Reality?
            </h2>

            <p className="text-white/80 font-light max-w-2xl mx-auto mb-12">
              Contact us today to discuss your architectural project and discover how our expertise can bring your
              vision to life with precision, creativity, and excellence.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-transparent border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 px-10 py-4 text-sm tracking-wider"
            >
              SCHEDULE A CONSULTATION
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
