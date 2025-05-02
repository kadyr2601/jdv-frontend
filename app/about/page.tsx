import React from 'react';
import PagesBanner from "@/components/PagesBanner";
import Link from "next/link";
import Image from "next/image";
import {Metadata} from "next";
import FaqSection from "@/components/about/FaqSection";
import CircularProgress from "@/components/about/circular-progress";
import {AboutUsPage} from "@/types/about";
import {SEO} from "@/types/seo";


export async function generateMetadata(): Promise<Metadata> {
    const API_URL = process.env.API_URL;

    const fallbackMetadata = {
        title: 'JDV - Joie De Vivre',
        description: 'Learn about our interior design, fit-out, and architecture services in Dubai.',
        keywords: ['interior design', 'architecture', 'Dubai'],
        openGraph: {
            title: 'JDV - Joie De Vivre',
            description: 'Learn about our interior design, fit-out, and architecture services in Dubai.',
            images: [`${API_URL}/media/logo.png`],
            url: `${API_URL}/about`,
        },
    };

    try {
        const res = await fetch(`${API_URL}/api/others/seo/about`, {cache: 'no-cache'});

        // Check if the response is OK
        if (!res.ok) {
            console.error('API returned error status:', res.status);
            return fallbackMetadata;
        }

        const seo: SEO = await res.json();

        // Validate that the required fields exist
        if (!seo || !seo.meta_title) {
            console.error('API returned incomplete SEO data');
            return fallbackMetadata;
        }

        return {
            title: seo.meta_title,
            description: seo.meta_description || fallbackMetadata.description,
            keywords: seo.meta_keywords ? seo.meta_keywords.split(',').map((keyword) => keyword.trim()) : fallbackMetadata.keywords,
            openGraph: {
                title: seo.og_title || seo.meta_title || fallbackMetadata.openGraph.title,
                description: seo.og_description || seo.meta_description || fallbackMetadata.openGraph.description,
                images: seo.og_image ? [`${process.env.API_URL}${seo.og_image}`] : fallbackMetadata.openGraph.images,
                url: seo.og_url || fallbackMetadata.openGraph.url,
            },
        };
    } catch (error) {
        console.error('Error fetching SEO metadata:', error);
        return fallbackMetadata;
    }
}

async function getAboutUsPageData(): Promise<AboutUsPage> {
    const res = await fetch(`${process.env.API_URL}/api/about-us/`, { cache: 'no-cache' });
    return res.json();
}

export default async function Page() {

    const {
        banner, welcome_section,
        founder_section, services_section,
        optional_section, faq_section
    } = await getAboutUsPageData();


    return (
        <>
            {
                banner ? (
                    <PagesBanner title={banner.title} image={process.env.API_URL+banner.image} />
                ) : (
                    <div style={{ marginTop: '50px', textAlign: 'center' }}>
                        Data is not available yet. Please upload data from admin panel
                    </div>
                )
            }
            {
                welcome_section ? (
                    <section className="ttm-row welcome-section clearfix">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-8">
                                    <div className="ttm_single_image-wrapper">
                                        <Image
                                            width={570}
                                            height={484}
                                            className="img-fluid"
                                            src={process.env.API_URL + welcome_section.image}
                                            alt="Interior design showcase"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="pl-30 res-991-pl-0 res-991-mt-40">
                                        <div className="section-title">
                                            <div className="title-heade">
                                                <h2 className="title">{welcome_section.title}</h2>
                                            </div>
                                        </div>
                                        <div className="pb-10 res-991-pb-30">
                                            <p style={{whiteSpace: 'pre-wrap'}}>{welcome_section.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    <div style={{ marginTop: '50px', textAlign: 'center' }}>
                        Data is not available yet. Please upload data from admin panel
                    </div>
                )
            }
            {
                founder_section ? (
                    <section className="ttm-row welcome-section clearfix">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="pl-30 res-991-pl-0 res-991-mt-40">
                                        <div className="pb-10 res-991-pb-30" style={{whiteSpace: 'pre-wrap'}}>
                                            {(() => {
                                                // Разбиваем текст по переносам строк
                                                const lines = founder_section.description.split('\n');

                                                // Определяем, сколько строк будет обычным текстом, а сколько жирным
                                                const regularLines = lines.length > 3 ? lines.slice(0, lines.length - 3) : [];
                                                const boldLines = lines.length > 3 ? lines.slice(lines.length - 3) : lines;

                                                return (
                                                    <>
                                                        {/* Обычный текст (все строки кроме последних 3) */}
                                                        {regularLines.length > 0 && (
                                                            <p>{regularLines.join('\n')}</p>
                                                        )}

                                                        {/* Последние 3 строки как жирный текст */}
                                                        {boldLines.map((line, i) => (
                                                            <p key={i} className="fontweight-bold">
                                                                <b>{line}</b>
                                                            </p>
                                                        ))}
                                                    </>
                                                );
                                            })()}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-8">
                                    <div className="ttm_single_image-wrapper">
                                        <Image
                                            width={570}
                                            height={484}
                                            className="img-fluid"
                                            src={process.env.API_URL+founder_section.image}
                                            alt="CEO Mihaela Isachi"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    <div style={{ marginTop: '50px', textAlign: 'center' }}>
                        Data is not available yet. Please upload data from admin panel
                    </div>
                )
            }
            {
                services_section ? (
                    <section className="ttm-row services-section ttm-bgcolor-darkgrey bg-img2 clearfix" style={{
                        backgroundImage: `url(/row-bgimage-2.png)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                    }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-6 col-sm-6">
                                    <div className="pt-10 text-left">
                                        <div className="section-title">
                                            <div className="title-header">
                                                <h3>Best Services</h3>
                                                <h2 className="title">{services_section.title}</h2>
                                            </div>
                                            <div className="title-desc">
                                                <p>{services_section.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    services_section.services_banner.map((item, i) => (
                                        <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
                                            <div className="featured-icon-box icon-align-top-content style2">
                                                <div className="featured-icon">
                                                    <div
                                                        className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                                                        {i === 0 ? <i className="flaticon flaticon-bed-1"></i>
                                                            :
                                                            i === 1 ? <i className="flaticon flaticon-decorating"></i> :
                                                                <i className="flaticon flaticon-apartment"></i>
                                                        }

                                                    </div>
                                                </div>
                                                <div className="featured-content">
                                                    <div className="featured-title">
                                                        <h3>{item.title}</h3>
                                                    </div>
                                                    <div className="featured-desc">
                                                        <p>{item.description}</p>
                                                    </div>
                                                    <div className="ttm-footer">
                                                        <Link
                                                            href={`/services/${item.services.slug}`}
                                                            className="ttm-btn btn-inline ttm-btn-size-md ttm-icon-btn-right ttm-btn-color-white"
                                                        >
                                                            Read More
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                ) : (
                    <div style={{ marginTop: '50px', textAlign: 'center' }}>
                        Data is not available yet. Please upload data from admin panel
                    </div>
                )
            }
            {
                optional_section ? (
                    <section className="ttm-row faq-section pb-90 clearfix">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="res-991-pb-40">
                                        <div className="section-title mb-10">
                                            <h2 className="title">{optional_section.title}</h2>
                                        </div>
                                        <p>{optional_section.description}</p>
                                        <CircularProgress items={optional_section.banners} />
                                    </div>
                                </div>
                                {faq_section &&
                                    <FaqSection faq_section={faq_section}/>
                                }
                            </div>
                        </div>
                    </section>
                ) : (
                    <div style={{ marginTop: '50px', textAlign: 'center' }}>
                        Data is not available yet. Please upload data from admin panel
                    </div>
                )
            }
        </>
    );
};