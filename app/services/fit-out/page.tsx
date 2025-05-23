import type {Metadata} from "next"
import Image from "next/image"
import Link from "next/link"
import {ArrowRight, Check} from "lucide-react"
import {getFitoutPage} from "@/lib/FitOut";


export async function generateMetadata(): Promise<Metadata> {
    const page = await getFitoutPage();

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

export default async function FitOutPage() {
    const page = await getFitoutPage();

    return (
        <main className="bg-black text-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={process.env.API_URL + page.banner_image}
                        alt="Luxury Fit-Out Services"
                        fill
                        className="object-cover opacity-70"
                        priority
                    />
                    <div
                        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10"></div>
                </div>

                <div className="container mx-auto px-6 md:px-12 relative z-20">
                    <div className="max-w-5xl">
                        <div className="border-l-2 border-gold pl-6 mb-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-tight">
                                {page.banner_title} <br/>
                                <span className="text-gold">{page.banner_title_gold}</span> <br/>
                                {page.banner_subtitle}
                            </h1>
                        </div>
                        <p className="text-lg md:text-xl font-extralight max-w-2xl ml-8 text-white/80">
                            {page.banner_description}
                        </p>
                    </div>
                </div>

                <div
                    className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
            </section>

            {/* Services Navigation */}
            <section className="py-12 bg-black relative border-b border-white/5">
                <div className="container mx-auto px-6 md:px-12">
                    <div
                        className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-16 lg:space-x-24">
                        <Link href="/services/interior-design" className="group relative">
                            <div className="flex flex-col items-center">
                                <div className="h-12 w-px bg-white/20 mb-4"></div>
                                <span className="text-white/40 text-sm mb-2">01</span>
                                <h3 className="text-white/80 text-lg font-light group-hover:text-gold transition-colors duration-300">
                                    Interior Design
                                </h3>
                                <div
                                    className="h-0.5 w-0 bg-gold group-hover:w-full transition-all duration-300 mt-2"></div>
                            </div>
                        </Link>

                        <Link href="/services/architecture" className="group relative">
                            <div className="flex flex-col items-center">
                                <div className="h-12 w-px bg-white/20 mb-4"></div>
                                <span className="text-white/40 text-sm mb-2">02</span>
                                <h3 className="text-white/80 text-lg font-light group-hover:text-gold transition-colors duration-300">
                                    Architecture
                                </h3>
                                <div
                                    className="h-0.5 w-0 bg-gold group-hover:w-full transition-all duration-300 mt-2"></div>
                            </div>
                        </Link>

                        <div className="relative">
                            <div className="flex flex-col items-center">
                                <div className="h-12 w-px bg-gold mb-4"></div>
                                <span className="text-gold text-sm mb-2">03</span>
                                <h3 className="text-gold text-lg font-light">Fit-Out</h3>
                                <div className="h-0.5 w-full bg-gold mt-2"></div>
                                <span
                                    className="absolute -bottom-6 text-[10px] text-gold/80 tracking-widest text-nowrap">CURRENTLY VIEWING</span>
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
                                <span className="text-gold">{page.about_service_title}</span>
                            </h2>
                            <p className="whitespace-pre-wrap text-white/80 leading-relaxed mb-8 font-light">
                                {page.about_service_description}
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative h-[600px] w-full overflow-hidden">
                                <Image src={process.env.API_URL + page.about_service_image} alt="Fit-Out Services" fill
                                       className="object-cover"/>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-gold/30 -z-10"></div>
                            <div className="absolute -top-4 -left-4 w-1/2 h-1/2 border border-gold/30 -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Primary Services Grid */}
            <section className="py-20 bg-black/95 relative">
                <div
                    className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
                <div className="container mx-auto px-6 md:px-12">
                    <h2 className="text-3xl md:text-4xl font-light text-center mb-6">
                        Our <span className="text-gold">Fit-Out</span> Expertise
                    </h2>
                    <p className="text-white/70 text-center whitespace-pre-wrap max-w-3xl mx-auto mb-16 font-light">
                        {page.fit_out_expertise_description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            page.fit_out_expertises.map((expertise, index) => (
                                <div className="group relative overflow-hidden" key={index}>
                                    <div
                                        className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500 z-10"></div>
                                    <div className="relative h-[400px] overflow-hidden">
                                        <Image
                                            src={process.env.API_URL + expertise.image}
                                            alt="Office Fit-Outs"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div
                                        className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black to-transparent">
                                        <h3 className="text-2xl font-light mb-3 text-gold">{expertise.title}</h3>
                                        <ul className="space-y-2 text-white/80 font-light max-h-0 overflow-hidden group-hover:max-h-[200px] transition-all duration-500">
                                            {expertise.description.split('\r\n').map((item, idx) => (
                                                <li className="flex items-start" key={idx}>
                                                    <Check size={16} className="text-gold mt-1 mr-2 flex-shrink-0"/>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>

            {/* Transformation Showcase */}
            <section className="py-20 bg-black relative">
                <div
                    className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
                <div className="container mx-auto px-6 md:px-12">
                    <h2 className="text-3xl md:text-4xl font-light text-center mb-6">
                        The <span className="text-gold">Transformation</span> Process
                    </h2>
                    <p className="text-white/70 text-center max-w-3xl mx-auto mb-16 font-light">
                        {page.transformation_process_description}
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {page.transformation_processes.map((item, index) => (
                            <div className="relative group overflow-hidden" key={item.id}>
                                <div
                                    className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500 z-10"
                                ></div>
                                <div className="relative h-[300px] overflow-hidden">
                                    <Image
                                        src={`${process.env.API_URL}${item.image}`}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="absolute top-4 left-4 bg-black/80 px-4 py-2 z-20">
        <span className="text-gold text-sm font-light">
          {index === 0 ? 'BEFORE' : index === 1 ? 'DURING' : 'AFTER'}
        </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {page.transformation_processes.map((process, index) => (
                                <div className="text-center" key={process.id}>
                                    <div
                                        className="w-16 h-16 rounded-full bg-black border border-gold flex items-center justify-center mx-auto mb-6"
                                    >
                                        <span
                                            className="text-gold text-xl">{(index + 1).toString().padStart(2, '0')}</span>
                                    </div>
                                    <h3 className="text-xl font-light mb-3">{process.title}</h3>
                                    <p className="text-white/70 font-light">{process.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialized Services */}
            <section className="py-20 bg-black/95 relative">
                <div
                    className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
                <div className="container mx-auto px-6 md:px-12">
                    <h2 className="text-3xl md:text-4xl font-light text-center mb-6">
                        Specialized <span className="text-gold">Services</span>
                    </h2>
                    <p className="text-white/70 text-center max-w-3xl mx-auto mb-16 font-light">
                        {page.specialized_services_description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {
                            page.specialized_services.map((item, index) => (
                                <div key={index}
                                    className="bg-black border border-gold/20 p-6 hover:border-gold/40 transition-all duration-500 group">
                                    <div className="h-1 w-12 bg-gold mb-6"></div>
                                    <h3 className="text-xl font-light mb-4 text-gold">{item.title}</h3>
                                    <p className="text-white/70 font-light mb-6 group-hover:text-white/90 transition-colors duration-300">
                                        {item.description}
                                    </p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>

            {/* Materials Showcase */}
            <section className="py-20 bg-black relative">
                <div
                    className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
                <div className="container mx-auto px-6 md:px-12">
                    <h2 className="text-3xl md:text-4xl font-light text-center mb-6">
                        <span className="text-gold">{page.more_information_section_title}</span>
                    </h2>
                    <p className="text-white/70 text-center max-w-3xl mx-auto mb-16 font-light">
                        {page.more_information_section_description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {
                            page.more_information_sections.map((item, index) => (
                                <div className="relative group" key={index}>
                                    <div className="relative h-[250px] overflow-hidden">
                                        <Image
                                            src={process.env.API_URL+item.image}
                                            alt="Premium Wood"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div
                                            className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
                                    </div>
                                    <div
                                        className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                                        <h3 className="text-xl font-light text-gold">{item.title}</h3>
                                        <p className="text-white/70 text-sm mt-2">{item.description}</p>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <div
                                            className="w-12 h-12 rounded-full bg-black/70 border border-gold/50 flex items-center justify-center">
                                            <span className="text-gold text-xs">0{index+1}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-black relative">
                <div
                    className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-light mb-6">
                        Ready to <span className="text-gold">Transform</span> Your Space?
                    </h2>
                    <p className="text-white/80 font-light max-w-2xl mx-auto mb-10">
                        Contact us today to discuss your fit-out project and discover how we can bring your vision to
                        life with our
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
