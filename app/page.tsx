import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import TestimonialsSection from "@/components/testimonials-section"
import StrategySection from "@/components/strategy-section"
import {getHomePage} from "@/lib/HomePage";
import {Metadata} from "next";


export async function generateMetadata(): Promise<Metadata> {
    const page = await getHomePage();

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

export default async function Home() {
    const page = await getHomePage()
    return (
        <main className="flex min-h-screen flex-col bg-black text-white">
            <HeroSection
                banner_image={process.env.API_URL+page.banner_image}
                banner_description={page.banner_description}
                banner_slogan={page.banner_slogan}
                banner_title={page.banner_title}
                banner_subtitle={page.banner_subtitle}
            />
            <AboutSection/>
            <ServicesSection/>
            <ProjectsSection/>
            <TestimonialsSection/>
            <StrategySection/>
        </main>
    )
}
