import type {Metadata} from "next"
import Image from "next/image"
import Link from "next/link"
import {ChevronRight} from "lucide-react"
import {getArchitecturePage} from "@/lib/Architecture";

export async function generateMetadata(): Promise<Metadata> {
    const page = await getArchitecturePage();

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

export default async function ArchitecturePage() {
    const page = await getArchitecturePage();

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
                    <div
                        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10"></div>

                    {/* Architectural Grid Overlay */}
                    <div className="absolute inset-0 z-20 opacity-20">
                        <div className="h-full w-full grid grid-cols-12 gap-px">
                            {Array.from({length: 12}).map((_, i) => (
                                <div key={i} className="border-r border-gold/20 h-full"></div>
                            ))}
                        </div>
                        <div className="absolute inset-0 grid grid-rows-12 gap-px">
                            {Array.from({length: 12}).map((_, i) => (
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
                                <span className="text-gold uppercase tracking-widest text-sm">{page.banner_slogan}</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8 leading-tight">
                                {page.banner_title} <br/>
                                <span className="text-gold">{page.banner_title_gold}</span> <br/>
                                {page.banner_subtitle}
                            </h1>

                            <div className="w-24 h-px bg-gold/50 mb-8"></div>

                            <p className="text-lg md:text-xl font-light text-white/80 max-w-2xl mb-12">
                                {page.banner_description}
                            </p>

                            <div className="flex items-center group cursor-pointer">
                                {/*<div*/}
                                {/*    className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center mr-4 group-hover:bg-gold/10 transition-all duration-300">*/}
                                {/*    <ArrowRight size={18} className="text-gold"/>*/}
                                {/*</div>*/}
                                <span
                                    className="text-gold uppercase tracking-widest text-sm group-hover:translate-x-2 transition-all duration-300">
                  Explore Our Services
                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 bg-black relative">
                <div
                    className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                        <div className="md:col-span-5 md:pr-12">
                            <div className="sticky top-24">
                                <div className="flex items-center mb-6">
                                    <div className="w-8 h-px bg-gold mr-4"></div>
                                    <span className="text-gold uppercase tracking-widest text-xs">Our Approach</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight">
                                    {page.our_approach_title}
                                </h2>

                                <div className="w-16 h-px bg-gold/50 mb-8"></div>

                                <p className="text-white/80 font-light mb-6 whitespace-pre-wrap">
                                    {page.our_approach_description}
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-7">
                            <div className="relative">
                                <Image
                                    src={process.env.API_URL+page.our_approach_image}
                                    alt="Architectural Drawing and Model"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto object-cover"
                                />
                                <div
                                    className="absolute -bottom-4 -right-4 w-1/2 h-1/2 border border-gold/30 -z-10"></div>
                            </div>

                            <div className="mt-12 pl-6 border-l border-gold/30">
                                <p className="text-white/80 font-light mb-8">
                                    {page.our_approach_slogan}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {
                                        page.our_approach_stats.map((item, i) => (
                                            <div key={i}>
                                                <div
                                                    className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mb-4">
                                                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                                                </div>
                                                <h3 className="text-xl font-light text-gold mb-3">{item.label}</h3>
                                                <p className="text-white/70 font-light">
                                                    {item.value}
                                                </p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Navigation */}
            <section className="py-12 bg-black/95 relative">
                <div
                    className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

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
                                <Link href="/services/fit-out"
                                      className="text-white/70 hover:text-gold transition-colors duration-300">
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
                        {
                            page.architectural_services.map((item, index) => (
                                <div className="group" key={index}>
                                    <div className="relative overflow-hidden mb-6">
                                        <div
                                            className="aspect-w-4 h-56 aspect-h-3 relative bg-black/80 border border-gold/20 group-hover:border-gold/40 transition-all duration-500">
                                            <Image
                                                src={process.env.API_URL+item.image}
                                                alt="Architectural Conceptualization and Design"
                                                fill
                                                className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                                            />
                                            <div
                                                className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-500"></div>
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <span className="text-xs text-gold/80 uppercase tracking-widest">0{index+1}</span>
                                        </div>
                                        <div
                                            className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            <div
                                                className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center">
                                                <ChevronRight size={16} className="text-gold"/>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-light text-gold mb-3">{item.name}</h3>
                                    <p className="text-white/70 font-light mb-4">
                                        {item.description}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* Featured Project Section */}
            <section className="py-20 bg-black/95 relative">
                <div
                    className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                        <div className="md:col-span-5">
                            <div className="flex items-center mb-6">
                                <div className="w-8 h-px bg-gold mr-4"></div>
                                <span className="text-gold uppercase tracking-widest text-xs">Featured Project</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight">
                                {page.featured_project_name}
                            </h2>

                            <div className="w-16 h-px bg-gold/50 mb-8"></div>

                            <p className="text-white/80 font-light mb-8">
                                {page.featured_project_description}
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div>
                                    <h4 className="text-gold text-sm uppercase tracking-wider mb-2">Location</h4>
                                    <p className="text-white/70 font-light">{page.featured_project_location}</p>
                                </div>

                                <div>
                                    <h4 className="text-gold text-sm uppercase tracking-wider mb-2">Area</h4>
                                    <p className="text-white/70 font-light">{page.featured_project_area}</p>
                                </div>

                                <div>
                                    <h4 className="text-gold text-sm uppercase tracking-wider mb-2">Year</h4>
                                    <p className="text-white/70 font-light">{page.featured_project_year}</p>
                                </div>

                                <div>
                                    <h4 className="text-gold text-sm uppercase tracking-wider mb-2">Type</h4>
                                    <p className="text-white/70 font-light">{page.featured_project_type}</p>
                                </div>
                            </div>

                            {/*<Link href="/projects/harmony-residence" className="inline-flex items-center group">*/}
                {/*<span*/}
                {/*    className="text-gold uppercase tracking-widest text-sm mr-4 group-hover:mr-6 transition-all duration-300">*/}
                {/*  View Project*/}
                {/*</span>*/}
                {/*                <ArrowRight size={18} className="text-gold"/>*/}
                {/*            </Link>*/}
                        </div>

                        <div className="md:col-span-7">
                            <div className="relative">
                                <div className="grid grid-cols-12 grid-rows-12 h-[600px]">
                                    <div className="col-span-8 row-span-12 relative">
                                        <Image
                                            src={process.env.API_URL+page.featured_project_image_big}
                                            alt="The Harmony Residence"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="col-span-4 row-span-6 relative">
                                        <Image
                                            src={process.env.API_URL+page.featured_project_image_small}
                                            alt="The Harmony Residence Interior"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="col-span-4 row-span-6 relative">
                                        <Image
                                            src={process.env.API_URL+page.featured_project_image_small_second}
                                            alt="The Harmony Residence Detail"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                <div
                                    className="absolute -bottom-4 -right-4 w-1/3 h-1/3 border border-gold/30 -z-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Services Section */}
            <section className="py-20 bg-black relative">
                <div
                    className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-px bg-gold mr-4"></div>
                                <span
                                    className="text-gold uppercase tracking-widest text-xs">Additional Expertise</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-light">
                                Specialized <span className="text-gold">Architectural</span> Services
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                        {
                            page.additional_expertises.map((item, index) => (
                                <div key={index}>
                                    <div className="flex items-start mb-4">
                                        <span className="text-gold text-4xl font-light mr-4">0{index+1}</span>
                                        <div className="w-full h-px bg-gold/30 mt-4"></div>
                                    </div>
                                    <h3 className="text-xl font-light text-gold mb-3">{item.name}</h3>
                                    <p className="text-white/70 font-light">
                                        {item.description}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* Process Section with Architectural Elements */}
            <section className="py-20 bg-black/95 relative">
                <div
                    className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

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
                            {page.work_processes.map((process, index) => (
                                <div key={process.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                                    {/* Text Section - Alternates right/left based on index */}
                                    <div className={index % 2 === 0 ? "md:text-right md:pr-16" : "hidden md:block"}>
                                        {index % 2 === 0 && (
                                            <>
                                                <span className="text-gold text-sm uppercase tracking-widest mb-2 block">{process.step}</span>
                                                <h3 className="text-2xl font-light text-gold mb-4">{process.title}</h3>
                                                <p className="text-white/70 font-light">{process.description}</p>
                                            </>
                                        )}
                                    </div>

                                    <div className={index % 2 === 1 ? "md:pl-16" : "hidden md:block"}>
                                        {index % 2 === 1 && (
                                            <>
                                                <span className="text-gold text-sm uppercase tracking-widest mb-2 block">{process.step}</span>
                                                <h3 className="text-2xl font-light text-gold mb-4">{process.title}</h3>
                                                <p className="text-white/70 font-light">{process.description}</p>
                                            </>
                                        )}
                                    </div>

                                    {/* Timeline Node */}
                                    <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 -translate-y-1/2">
                                        <div className="w-8 h-8 rounded-full border border-gold flex items-center justify-center bg-black">
                                            <div className="w-2 h-2 bg-gold rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-black relative">
                <div
                    className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex justify-center mb-6">
                            <div className="w-8 h-px bg-gold"></div>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-light mb-8">
                            Ready to Transform Your <br/>
                            <span className="text-gold">Architectural Vision</span> into Reality?
                        </h2>

                        <p className="text-white/80 font-light max-w-2xl mx-auto mb-12">
                            Contact us today to discuss your architectural project and discover how our expertise can
                            bring your
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
