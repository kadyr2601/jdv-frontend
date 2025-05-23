import type {Metadata} from "next"
import Image from "next/image"
import Link from "next/link"
import {ArrowRight} from "lucide-react"
import {getInteriorPage} from "@/lib/InteriorDesign";


export async function generateMetadata(): Promise<Metadata> {
    const page = await getInteriorPage();

    return {
        title: page.meta_title,
        description: page.meta_description,
        keywords: page.meta_keywords,
        openGraph: {
            title: page.og_title,
            description: page.og_description,
            images: [{url: process.env.API_URL + page.og_image}],
        },
    };
}

export default async function InteriorDesignPage() {
    const page = await getInteriorPage();

    return (
        <main className="bg-black text-white">
            {/* Hero Section - Ultra-luxury with 3D-like elements */}
            <section className="relative h-screen overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80"></div>
                </div>

                {/* 3D-like decorative elements */}
                <div className="absolute inset-0 z-10">
                    {/* Floating geometric shapes */}
                    <div className="absolute top-[20%] left-[15%] w-32 h-32 border border-gold/10 rounded-full"></div>
                    <div
                        className="absolute bottom-[30%] right-[10%] w-48 h-48 border border-gold/5 rounded-full"></div>
                    <div className="absolute top-[40%] right-[20%] w-24 h-24 border-2 border-gold/10 rotate-45"></div>
                    <div className="absolute bottom-[20%] left-[25%] w-36 h-36 border border-gold/5 rounded-full"></div>

                    {/* Diagonal accent lines */}
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div
                            className="absolute top-0 left-[10%] w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent transform -rotate-[20deg] origin-top"></div>
                        <div
                            className="absolute top-0 right-[30%] w-px h-full bg-gradient-to-b from-transparent via-gold/15 to-transparent transform rotate-[15deg] origin-top"></div>
                        <div
                            className="absolute top-0 right-[10%] w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent transform rotate-[25deg] origin-top"></div>
                    </div>

                    {/* Gold dust effect */}
                    <div
                        className="absolute inset-0 bg-[url('/placeholder-gold-dust.png')] bg-cover opacity-[0.15]"></div>
                </div>

                {/* Content */}
                <div
                    className="container mx-auto px-4 md:px-6 relative z-20 h-full flex flex-col justify-center items-center">
                    <div className="text-center max-w-5xl">
                        <div className="mb-6 inline-block">
              <span
                  className="text-gold uppercase text-sm tracking-[0.3em] font-light px-8 py-3 border border-gold/30 rounded-full backdrop-blur-sm">
                {page.banner_slogan}
              </span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-extralight mb-8 tracking-tight leading-none">
                            {page.banner_title} <span className="text-gold">{page.banner_title_gold}</span> <br
                            className="hidden md:block"/>
                            <span className="text-4xl md:text-6xl opacity-80">{page.banner_subtitle}</span>
                        </h1>

                        <div
                            className="h-px w-32 bg-gradient-to-r from-transparent via-gold/70 to-transparent mx-auto mb-10"></div>

                        <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto font-light">
                            {page.banner_description}
                        </p>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-12 left-0 right-0 flex justify-center z-20">
                    <div className="flex flex-col items-center">
                        <div className="text-white/50 text-sm mb-2 tracking-widest uppercase text-xs">Discover
                            Excellence
                        </div>
                        <div className="w-px h-16 bg-gradient-to-b from-gold/50 to-transparent"></div>
                    </div>
                </div>
            </section>

            {/* Introduction Section - With luxury 3D-like elements */}
            <section className="py-32 bg-[#030303] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center opacity-[0.05]"></div>

                {/* Floating decorative elements */}
                <div
                    className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-br from-gold/5 to-transparent blur-3xl"></div>
                <div
                    className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-tl from-gold/5 to-transparent blur-3xl"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        {/* Left column - Text content with enhanced typography */}
                        <div className="lg:col-span-5">
                            <div className="inline-flex items-center mb-8">
                                <div className="h-px w-16 bg-gold/50 mr-4"></div>
                                <span
                                    className="text-gold uppercase text-sm tracking-[0.3em] font-light">{page.experience_header}</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-extralight mb-10 tracking-tight leading-tight">
                                <span className="text-gold">{page.experience_title}</span>

                            </h2>

                            <div className="space-y-6 text-gray-300 text-lg">
                                <p className="leading-relaxed whitespace-pre-wrap">
                                    {page.experience_description}
                                </p>
                            </div>

                            {/* Key benefits with enhanced visual treatment */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                                {page.experience_stats.map((item, index) => (
                                    <div key={index} className="relative group">
                                        <div
                                            className="absolute -top-3 -left-3 w-8 h-8 border-t border-l border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div
                                            className="absolute -bottom-3 -right-3 w-8 h-8 border-b border-r border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="text-gold text-sm tracking-widest uppercase mb-2">
                                            ✦ {item.value}
                                        </div>
                                        <div className="text-gray-400 text-lg font-light">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right column - Dramatic image treatment with overlapping elements */}
                        <div className="lg:col-span-7 relative">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={process.env.API_URL+page.experience_image}
                                    alt="Luxury Interior Design"
                                    fill
                                    className="object-cover"
                                />

                                {/* Elegant frame with animated hover effect */}
                                <div
                                    className="absolute inset-0 border border-gold/20 transition-all duration-700 group-hover:border-gold/40"></div>

                                {/* Decorative corners with enhanced visual treatment */}
                                <div
                                    className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-gold/40"></div>
                                <div
                                    className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gold/40"></div>

                                {/* Overlay gradient for depth */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent"></div>
                            </div>

                            {/* Floating element with enhanced visual treatment */}
                            <div
                                className="absolute -bottom-12 -left-12 bg-black/90 backdrop-blur-lg border border-gold/30 p-8 z-10 shadow-2xl">
                                <p className="text-gold text-5xl font-extralight">15+</p>
                                <p className="text-white/80 text-sm tracking-widest uppercase mt-1">Years of
                                    Excellence</p>
                            </div>

                            {/* Second floating element for visual interest */}
                            <div
                                className="absolute -top-8 -right-8 bg-black/80 backdrop-blur-md border border-gold/20 p-6 z-10 shadow-xl">
                                <p className="text-white/90 text-lg font-light italic">
                                    {page.experience_slogan}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Navigation Links */}
            <section className="py-20 bg-black relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/placeholder-pattern-luxury.png')] bg-repeat opacity-5"></div>

                {/* Dynamic background elements */}
                <div
                    className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-gold/30 via-transparent to-gold/30"></div>
                <div
                    className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-gold/30 via-transparent to-gold/30"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div
                        className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-16">
                        {/* Architecture Link */}
                        <Link href="/services/architecture" className="group flex flex-col items-center">
                            <div
                                className="w-px h-12 bg-gradient-to-b from-transparent via-gold/30 to-transparent mb-4"></div>
                            <span className="text-gold/50 uppercase text-xs tracking-[0.2em] font-light mb-2">01</span>
                            <h3 className="text-2xl font-light text-white/70 group-hover:text-gold transition-colors duration-300 mb-2">
                                Architecture
                            </h3>
                            <div className="w-0 group-hover:w-full h-px bg-gold/50 transition-all duration-500"></div>
                        </Link>

                        {/* Interior Design Link (Active) */}
                        <div className="flex flex-col items-center">
                            <div
                                className="w-px h-16 bg-gradient-to-b from-transparent via-gold/80 to-transparent mb-4"></div>
                            <span className="text-gold uppercase text-xs tracking-[0.2em] font-light mb-2">02</span>
                            <h3 className="text-2xl font-light text-gold mb-2">Interior Design</h3>
                            <div className="w-16 h-px bg-gold/80"></div>
                            <div className="mt-2 text-gold/80 text-xs uppercase tracking-wider">Currently Viewing</div>
                        </div>

                        {/* Fit-out Link */}
                        <Link href="/services/fit-out" className="group flex flex-col items-center">
                            <div
                                className="w-px h-12 bg-gradient-to-b from-transparent via-gold/30 to-transparent mb-4"></div>
                            <span className="text-gold/50 uppercase text-xs tracking-[0.2em] font-light mb-2">03</span>
                            <h3 className="text-2xl font-light text-white/70 group-hover:text-gold transition-colors duration-300 mb-2">
                                Fit-out
                            </h3>
                            <div className="w-0 group-hover:w-full h-px bg-gold/50 transition-all duration-500"></div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Section - COMPLETELY REDESIGNED with unique, luxurious cards */}
            <section className="py-32 bg-[#030303] relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-[url('/placeholder-luxury-texture.png')] bg-cover bg-center opacity-[0.05]"></div>

                {/* Dynamic background elements */}
                <div
                    className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-gold/30 via-transparent to-gold/30"></div>
                <div
                    className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-gold/30 via-transparent to-gold/30"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center mb-24">
                        <div className="inline-block mb-6">
                            <span
                                className="text-gold uppercase text-sm tracking-[0.3em] font-light">Our Expertise</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-extralight mb-6 tracking-tight">
                            {page.our_expertise_title}
                        </h2>

                        <div
                            className="h-px w-32 bg-gradient-to-r from-transparent via-gold/70 to-transparent mx-auto mb-10"></div>

                        <p className="text-white/70 max-w-2xl mx-auto text-lg">
                            {page.our_expertise_description}
                        </p>
                    </div>

                    {/* COMPLETELY REDESIGNED Services Display - Unique Hexagonal Grid Layout */}
                    <div className="relative">
                        {/* Central decorative element */}
                        <div
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-gold/10 z-0"></div>
                        <div
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-gold/20 z-0"></div>
                        <div
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-gold/30 z-0"></div>

                        {/* Radial connecting lines */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0">
                            <div
                                className="absolute top-1/2 left-1/2 w-full h-px bg-gold/10 -translate-y-1/2 rotate-0"></div>
                            <div
                                className="absolute top-1/2 left-1/2 w-full h-px bg-gold/10 -translate-y-1/2 rotate-45"></div>
                            <div
                                className="absolute top-1/2 left-1/2 w-full h-px bg-gold/10 -translate-y-1/2 rotate-90"></div>
                            <div
                                className="absolute top-1/2 left-1/2 w-full h-px bg-gold/10 -translate-y-1/2 rotate-[135deg]"></div>
                        </div>

                        {/* Unique service cards arranged in a circular pattern */}
                        <div className="relative z-10 py-20">
                            {page.expertises.map((expertise, index) => (
                                <div key={expertise.id} className="max-w-4xl mx-auto mb-32 group">
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                        {/* Image Section - Alternates left/right based on index */}
                                        <div
                                            className={`md:col-span-7 order-1 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}
                                        >
                                            <div className="relative">
                                                {/* Unique layered image treatment */}
                                                <div className="relative aspect-[16/9] overflow-hidden">
                                                    <Image
                                                        src={process.env.API_URL+expertise.image}
                                                        alt={expertise.name}
                                                        fill
                                                        className="object-cover"
                                                    />

                                                    {/* Unique overlay effect */}
                                                    <div
                                                        className={`absolute inset-0 bg-gradient-to-${
                                                            index % 2 === 0 ? "tr" : "bl"
                                                        } from-black/70 via-black/30 to-transparent`}
                                                    ></div>

                                                    {/* Unique border treatment */}
                                                    <div className="absolute inset-0">
                                                        <div className="absolute top-0 left-0 w-full h-full border border-gold/20"></div>
                                                        <div
                                                            className={`absolute top-4 ${index % 2 === 0 ? "left-4" : "right-4"} w-full h-full border border-gold/10`}
                                                        ></div>
                                                        <div
                                                            className={`absolute top-8 ${index % 2 === 0 ? "left-8 w-16 h-16 border-t border-l" : "right-8 w-16 h-16 border-t border-r"} border-gold/40`}
                                                        ></div>
                                                        <div
                                                            className={`absolute bottom-8 ${index % 2 === 0 ? "right-8 w-16 h-16 border-b border-r" : "left-8 w-16 h-16 border-b border-l"} border-gold/40`}
                                                        ></div>
                                                    </div>

                                                    {/* Floating label */}
                                                    <div
                                                        className={`absolute top-8 ${index % 2 === 0 ? "right-8" : "left-8"} backdrop-blur-md bg-black/40 border border-gold/30 px-6 py-3 transform rotate-[${index % 2 === 0 ? "356deg" : "4deg"}]`}
                                                    >
                                                        <div className="text-gold text-lg font-light">{expertise.slogan}</div>
                                                    </div>
                                                </div>

                                                {/* Decorative element */}
                                                <div
                                                    className={`absolute -bottom-6 ${index % 2 === 0 ? "-right-6" : "-left-6"} w-32 h-32 rounded-full border border-gold/20 z-[-1]`}
                                                ></div>
                                            </div>
                                        </div>

                                        {/* Text Section - Alternates right/left based on index */}
                                        <div
                                            className={`md:col-span-5 order-2 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}
                                        >
                                            <div className="relative">
                                                {/* Service number with unique styling */}
                                                <div className="absolute -top-10 -left-6 text-8xl font-thin text-gold/10 select-none">
                                                    {(index + 1).toString().padStart(2, "0")}
                                                </div>

                                                <h3 className="text-3xl font-light text-gold mb-6 relative">
              <span className="relative">
                {expertise.name}
                  <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-gold/50 to-transparent"></div>
              </span>
                                                </h3>

                                                <ul className="space-y-4">
                                                    {expertise.description.split("\r\n").map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="flex items-start group/item">
                                                            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gold/10 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-gold/20 transition-all duration-300">
                                                                <div className="h-1.5 w-1.5 rounded-full bg-gold"></div>
                                                            </div>
                                                            <span className="text-white/80 group-hover/item:text-white transition-colors duration-300">
                    {feature}
                  </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section - With enhanced visual treatment */}
            <section className="py-32 bg-[#030303] relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-[url('/placeholder-luxury-texture.png')] bg-cover bg-center opacity-[0.05]"></div>

                {/* Diagonal lines with enhanced visual treatment */}
                <div
                    className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent transform -rotate-12 origin-top"></div>
                <div
                    className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold/5 to-transparent transform rotate-12 origin-top"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center mb-24">
                        <div className="inline-block mb-6">
                            <span
                                className="text-gold uppercase text-sm tracking-[0.3em] font-light">Our Methodology</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-extralight mb-6 tracking-tight">
                            {page.our_methodology_title}
                        </h2>

                        <div
                            className="h-px w-32 bg-gradient-to-r from-transparent via-gold/70 to-transparent mx-auto mb-10"></div>

                        <p className="text-white/70 max-w-2xl mx-auto text-lg">
                            {page.our_methodology_description}
                        </p>
                    </div>

                    {/* Process steps with enhanced visual treatment */}
                    <div className="relative">
                        {/* Connecting line with enhanced visual treatment */}
                        <div
                            className="absolute left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-gold/5 via-gold/30 to-gold/5 hidden md:block"></div>

                        <div className="space-y-24">
                            {page.methodologies.map((step, index) => (
                                <div key={index} className="flex flex-col md:flex-row gap-12 items-center group">
                                    {/* Step number with enhanced visual treatment */}
                                    <div className="flex-shrink-0 order-1 md:order-1">
                                        <div
                                            className="w-14 h-14 rounded-full bg-black border border-gold/40 flex items-center justify-center relative z-10 group-hover:border-gold/70 transition-all duration-500">
                                            <span className="text-gold text-xl font-light">0{index+1}</span>
                                        </div>
                                    </div>

                                    {/* Step content with enhanced visual treatment */}
                                    <div className="flex-grow order-3 md:order-2 md:w-1/2">
                                        <h3 className="text-3xl font-light text-gold mb-6">{step.name}</h3>
                                        <p className="text-white/80 text-lg leading-relaxed">{step.description}</p>
                                    </div>

                                    {/* Step image with enhanced visual treatment */}
                                    <div className="flex-shrink-0 order-2 md:order-3 md:w-1/3">
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={process.env.API_URL+step.image || "/placeholder.svg"}
                                                alt={step.name}
                                                fill
                                                className="object-cover transition-all duration-1000 group-hover:scale-105"
                                            />

                                            {/* Border with animated hover effect */}
                                            <div
                                                className="absolute inset-0 border border-gold/20 group-hover:border-gold/40 transition-all duration-700"></div>

                                            {/* Overlay gradient for depth */}
                                            <div
                                                className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - With enhanced visual treatment */}
            <section className="py-32 bg-black relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/placeholder-pattern-luxury.png')] bg-repeat opacity-5"></div>

                {/* Diagonal lines with enhanced visual treatment */}
                <div
                    className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent transform -rotate-12 origin-top"></div>
                <div
                    className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold/5 to-transparent transform rotate-12 origin-top"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-extralight mb-6 tracking-tight">
                            Ready to <span className="text-gold">Transform</span> Your Space?
                        </h2>
                        <p className="text-white/70 max-w-2xl mx-auto text-lg">
                            Let's collaborate to create a space that reflects your unique style and enhances your
                            lifestyle. Contact
                            us today to begin your interior design journey.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-center gap-8">
                            <Link
                                href="/projects"
                                className="group relative overflow-hidden px-10 py-5 bg-transparent border border-gold/30 text-gold text-center"
                            >
                <span className="relative z-10 flex items-center justify-center text-sm uppercase tracking-widest">
                  Explore Our Projects
                  <ArrowRight
                      className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300"/>
                </span>
                                <div
                                    className="absolute inset-0 bg-gold/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                            </Link>

                            <Link
                                href="/contact"
                                className="group relative overflow-hidden px-10 py-5 bg-gold text-black text-center"
                            >
                <span className="relative z-10 flex items-center justify-center text-sm uppercase tracking-widest">
                  Contact Us
                  <ArrowRight
                      className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300"/>
                </span>
                                <div
                                    className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                            </Link>
                        </div>

                        {/* Contact info with enhanced visual treatment */}
                        <div className="mt-20 text-center">
                            <div className="inline-block mb-6 px-10 py-6 border border-gold/10 backdrop-blur-sm">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                    <div>
                                        <div className="text-xs text-white/60 uppercase tracking-widest mb-2">Call Us
                                        </div>
                                        <Link href="tel:+97155407327"
                                              className="text-gold hover:text-gold/80 transition-colors">
                                            +971 55 407 3275
                                        </Link>
                                    </div>
                                    <div>
                                        <div className="text-xs text-white/60 uppercase tracking-widest mb-2">Email Us
                                        </div>
                                        <Link href="mailto:hello@jdv.ae"
                                              className="text-gold hover:text-gold/80 transition-colors">
                                            hello@jdv.ae
                                        </Link>
                                    </div>
                                    <div>
                                        <div className="text-xs text-white/60 uppercase tracking-widest mb-2">Visit Us
                                        </div>
                                        <p className="text-white/80">Dubai Internet City, Dubai</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
