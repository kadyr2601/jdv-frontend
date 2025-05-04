import { LuxuryBanner } from "@/components/luxury-banner"
import BeforeAfterSection from "@/components/homepage/BeforeAfterSection";
import FeaturedProjectsSection from "@/components/homepage/FeaturedProjectsSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import AboutSection from "@/components/homepage/AboutSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import Image from "next/image";
import {Metadata} from "next";
import { SEO } from '@/types/seo';
import { HomePageData } from '@/types/home';
import AboutInteriorSection from "@/components/homepage/AboutInterior";


export async function generateMetadata(): Promise<Metadata> {
    const API_URL = process.env.API_URL!

    const fallback = {
        title: "JDV - Joie De Vivre",
        description: "Interior design, fit-out, and architecture services in Dubai.",
        url: API_URL,
    }

    let seo: SEO | null = null

    try {
        const seoRes = await fetch(`${API_URL}/api/others/seo/home`, {
            cache: "no-cache",
        })

        if (seoRes.ok) seo = await seoRes.json().catch(() => null)
    } catch (e) {
        console.log("Metadata fetch error:", e)
    }

    return {
        title: seo?.meta_title || fallback.title,
        description: seo?.meta_description || fallback.description,
        keywords: seo?.meta_keywords?.split(",").map((k) => k.trim()) || [],
        openGraph: {
            title: seo?.og_title || seo?.meta_title || fallback.title,
            description: seo?.og_description || seo?.meta_description || fallback.description,
            images: seo?.og_image ? [`${API_URL}${seo.og_image}`] : [],
            url: seo?.og_url || fallback.url,
        },
    }
}


async function getHomePageData(): Promise<HomePageData> {
    const res = await fetch(`${process.env.API_URL}/api/homepage/`, {cache: 'no-cache'});
    return res.json();
}

// const bannerSlides: BannerSlide[] = [
//     {
//         id: "slide1",
//         type: "image" as const,
//         src: "/slider22.jpg",
//         category: "A TRENDY LUXURY",
//         title: "Innovate You,",
//         subtitle: "Innovate Your Home",
//         description:
//             "Joie De Vivre design consultancy firm that brings sensitivity to the design top hotels, restaurants, offices & homes around the world.",
//         cta: {
//             text: "Read More",
//             url: "/about",
//         },
//         phone: "+971 55 407 3275",
//         alignment: "left" as const,
//     },
//     {
//         id: "slide2",
//         type: "video" as const,
//         src: "/banner1.mp4",
//         category: "Interior Design | Fit-Out | Architecture",
//         title: "Crafting Dreams",
//         subtitle: "We Design Dreams into Reality",
//         alignment: "center" as const,
//     },
//     {
//         id: "slide3",
//         type: "video" as const,
//         src: "/banner2.mp4",
//         category: "Interior Design | Fit-Out | Architecture",
//         title: "Crafting Dreams",
//         subtitle: "Your Home, Our Canvas.",
//         alignment: "center" as const,
//     },
//     {
//         id: "slide4",
//         type: "image" as const,
//         src: "/newslide.jpg",
//         category: "A TRENDY LUXURY",
//         title: "A Natural Aptitude",
//         subtitle: "Towards The Arts",
//         description:
//             "Joie De Vivre design consultancy firm that brings sensitivity to the design top restaurants, hotels, offices & homes around the world. We stand for quality, safety and credibility.",
//         alignment: "split" as const,
//         socialLinks: true,
//     },
// ]

export default async function Home() {

    const data = await getHomePageData();

    return (
        <>
            {
                data.banner && (
                    <LuxuryBanner
                        slides={data.banner.slides}
                        autoplay={data.banner.autoplay}
                        autoplaySpeed={data.banner.autoplaySpeed}
                        showArrows={data.banner.showArrows}
                        showDots={data.banner.showDots}
                    />
                )
            }

            {data.about_section ? (
                <AboutSection data={data.about_section}/>
            ) : (
                <p>No about section data available</p>
            )}

            {data.featured_services ? (
                <ServicesSection data={data.featured_services}/>
            ) : (
                <p>No featured services section data available</p>
            )}

            {data.reviews ? (
                <TestimonialsSection data={data.reviews}/>
            ) : (
                <p>No reviews section data available</p>
            )}

            {data.before_after ? (
                <BeforeAfterSection data={data.before_after}/>
            ) : (
                <p>No Before & After section data available</p>
            )}

            {data.featured_projects ? (
                <FeaturedProjectsSection data={data.featured_projects}/>
            ) : (
                <p>No Featured projects section data available</p>
            )}

            {data.about_interior ? (
                <AboutInteriorSection data={data.about_interior}/>
            ) : (
                <p>No About interior section data available</p>
            )}
        </>
    );
}