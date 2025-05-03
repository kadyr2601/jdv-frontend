import { LuxuryBanner } from "@/components/luxury-banner"
import BeforeAfterSection from "@/components/homepage/BeforeAfterSection";
import FeaturedProjectsSection from "@/components/homepage/FeaturedProjectsSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import AboutSection from "@/components/homepage/AboutSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import Image from "next/image";
import {Metadata} from "next";
import { SEO } from '@/types/seo';
import { Service } from '@/types/services';
import { HomePageData } from '@/types/home';


export async function generateMetadata(): Promise<Metadata> {
    const API_URL = process.env.API_URL!;

    const fallback = {
        title: 'JDV - Joie De Vivre',
        description: 'Interior design, fit-out, and architecture services in Dubai.',
        url: API_URL,
        hasPart: [
            { '@type': 'WebPage', name: 'About Us', description: 'Learn about JDV interior design studio in Dubai', url: `${API_URL}/about` },
            { '@type': 'WebPage', name: 'Projects', description: 'View our portfolio of interior design and architecture projects', url: `${API_URL}/projects` },
            { '@type': 'WebPage', name: 'Contact Us', description: 'Get in touch with our interior design team', url: `${API_URL}/contacts` },
        ]
    };

    let seo: SEO | null = null;
    let services: Service[] = [];

    try {
        const [seoRes, servicesRes] = await Promise.all([
            fetch(`${API_URL}/api/others/seo/home`, { cache: 'no-cache', signal: AbortSignal.timeout(5000) }),
            fetch(`${API_URL}/api/services`, { cache: 'no-cache', signal: AbortSignal.timeout(5000) })
        ]);

        if (seoRes.ok) seo = await seoRes.json().catch(() => null);
        if (servicesRes.ok) services = await servicesRes.json().catch(() => []);
    } catch (e) {
        console.error('Metadata fetch error:', e);
    }

    const hasPart = [
        ...fallback.hasPart,
        ...(Array.isArray(services) && services.length > 0
            ? services.map(s => ({
                '@type': 'WebPage',
                name: s.name,
                description: s.description,
                url: `${API_URL}/services/${s.slug}`
            }))
            : [])
    ];

    const websiteStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: seo?.meta_title || fallback.title,
        url: fallback.url,
        hasPart
    };

    const organizationData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: fallback.title,
        url: fallback.url,
        logo: `${API_URL}/media/logo.png`,
        description: fallback.description,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Dubai',
            addressCountry: 'UAE'
        },
        sameAs: [
            'https://www.instagram.com/jdv_dubai?igsh=aWl4cTAxM2RibHFu&utm_source=qr',
            'https://api.whatsapp.com/send/?phone=971554073275&text=Hello%2C%20I%20am%20interested%20in%20your%20interior%20design%20services.&app_absent=0'
        ]
    };

    return {
        title: seo?.meta_title || fallback.title,
        description: seo?.meta_description || fallback.description,
        keywords: seo?.meta_keywords?.split(',').map(k => k.trim()) || [],
        openGraph: {
            title: seo?.og_title || seo?.meta_title || fallback.title,
            description: seo?.og_description || seo?.meta_description || fallback.description,
            images: seo?.og_image ? [`${API_URL}${seo.og_image}`] : [],
            url: seo?.og_url || fallback.url,
        },
        other: {
            'application/ld+json': [
                JSON.stringify(websiteStructuredData),
                JSON.stringify(organizationData)
            ]
        }
    };
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
                <section style={{overflow: 'hidden'}}
                         className="ttm-row broken-section mt_80 mb-80 res-991-mb-0 res-991-mt-0 bg-layer-equal-height clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="col-bg-img-two ttm-bg ttm-col-bgimage-yes ttm-left-span z-index-2">
                                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"
                                         style={{
                                             backgroundImage: `url(${process.env.API_URL + data.about_interior.image})`,
                                             backgroundRepeat: 'no-repeat',
                                             backgroundSize: 'cover',
                                             backgroundPosition: 'center center',
                                         }}
                                    ></div>
                                    <div className="layer-content"></div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div
                                    className="ttm-bg ttm-col-bgcolor-yes ttm-bgcolor-darkgrey ttm-right-span spacing-4">
                                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                                    <div className="layer-content">
                                        <div className="section-title">
                                            <div className="title-header">
                                                <h3>About Interior</h3>
                                                <h2 className="title">{data.about_interior.title}</h2>
                                            </div>
                                            <div className="title-desc">
                                                <p>{data.about_interior.content}</p>
                                            </div>
                                        </div>
                                        <div className="pt-20 res-991-pt-0">
                                            <div className="row ttm-vertical_sep">
                                                {data.about_interior.about_interior_banner_set.map((banner, index) => (
                                                    <div className="col-lg-6" key={banner.id} style={{position: 'relative'}}>
                                                        <div
                                                            className={`featured-icon-box icon-align-top-content style5 ${
                                                                index === 1 ? "pl-10 res-1199-pl-0" : ""
                                                            }`}
                                                        >
                                                            <div className="featured-icon">
                                                                <div
                                                                    className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                                                    {index == 1 ?
                                                                        <i className="flaticon flaticon-staircase"></i> :
                                                                        <i className="flaticon flaticon-apartment"></i>
                                                                    }
                                                                </div>
                                                            </div>
                                                            <div className="featured-content">
                                                                <div className="featured-title">
                                                                    <h3>{banner.title}</h3>
                                                                </div>
                                                                <div className="featured-desc">
                                                                    <p>{banner.description}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="pt-35 res-991-pt-10">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-2 col-sm-12">
                                                    <Image
                                                        className="img-fluid"
                                                        src={`/star1.png`}
                                                        alt="images"
                                                        width={98}
                                                        height={14}
                                                    />
                                                </div>
                                                <div className="col-lg-9 col-md-10 col-sm-12">
                                                    <p className="ml_20 res-767-ml-0 res-767-pt-10 mb-0">
                                                        <span className="ttm-underline-strong">
                                                          <strong>99.9% Customer satisfaction </strong>
                                                        </span>
                                                        based on 750+ reviews and 20,000 Objective Resource
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <p>No About interior section data available</p>
            )}
        </>
    );
}