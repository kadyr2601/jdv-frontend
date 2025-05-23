import type {Metadata} from "next"
import AboutHero from "@/components/about/about-hero"
import AboutStory from "@/components/about/about-story"
import AboutFounder from "@/components/about/about-founder"
import AboutTeam from "@/components/about/about-team"
import AboutPhilosophy from "@/components/about/about-philosophy"
import AboutServices from "@/components/about/about-services"
import AboutCta from "@/components/about/about-cta"
import {getAboutPage} from "@/lib/AboutPage";


export async function generateMetadata(): Promise<Metadata> {
    const page = await getAboutPage();

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

export default async function AboutPage() {
    const page = await getAboutPage()

    const service = {
        services_section_title: page.services_section_title,
        services_section_description: page.services_section_description,
        interior_design_service_description: page.interior_design_service_description,
        interior_design_service_image: page.interior_design_service_image,
        fit_out_service_description: page.fit_out_service_description,
        fit_out_service_image: page.fit_out_service_image,
        architecture_service_description: page.architecture_service_description,
        architecture_service_image: page.architecture_service_image,
    }
    return (
        <main className="bg-black text-white">
            <AboutHero
                banner_slogan={page.banner_slogan}
                banner_description={page.banner_description}
                banner_image={page.banner_image}
                banner_title={page.banner_title}
            />
            <AboutStory welcome_section={page.welcome_section} welcome_section_stats={page.welcome_section_stats}/>
            <AboutFounder img={page.founder_image} words={page.founder_words}/>
            <AboutTeam teamMembers={page.team_members} desc={page.our_team_section_description}/>
            <AboutPhilosophy desc={page.our_essence_section_description} tabs={page.our_essence} title={page.our_essence_section_title}/>
            <AboutServices props={service}/>
            <AboutCta/>
        </main>
    )
}
