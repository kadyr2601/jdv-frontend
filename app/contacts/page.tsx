import contactUsImage from "@/public/contactsBanner.png"
import PagesBanner from "@/components/PagesBanner"
import GoogleMapSection from "@/components/contacts/GoogleMapSection"
import Link from "next/link"
import type { Metadata } from "next"
import ContactForm from "@/components/contacts/Contact-form"
import React from "react";
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
            url: `${API_URL}/contacts`,
        },
    };

    try {
        const res = await fetch(`${process.env.API_URL}/api/others/seo/contacts`, {cache: 'no-cache'});

        if (!res.ok) {
            console.log('API returned error status:', res.status);
            return fallbackMetadata;
        }

        const seo: SEO = await res.json();

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

export default async function Page() {
    return (
        <>
            <PagesBanner title="Contact Us" image={contactUsImage.src} />
            <section className="ttm-row pt-85 res-991-pt-45 pb-0 res-991-pb-0 clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="featured-icon-box icon-align-top-content style7">
                                <div className="featured-inner">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-md ttm-icon_element-style-square">
                                            <i className="flaticon flaticon-call-1"></i>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3>Phone Number</h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>
                                                <Link href="tel:+971554073275">+971 55 407 3275</Link>
                                            </p>
                                            <p>
                                                <Link href="tel:+97144480023">+971 44 480 023</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="featured-icon-box icon-align-top-content style7">
                                <div className="featured-inner">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-md ttm-icon_element-style-square">
                                            <i className="flaticon flaticon-email"></i>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3>Email Address</h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>
                                                <Link href="mailto:hello@jdv.ae">hello@jdv.ae</Link>
                                            </p>
                                            <p>
                                                <Link href="mailto:careers@jdv.ae">careers@jdv.ae</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="featured-icon-box icon-align-top-content style7">
                                <div className="featured-inner">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-md ttm-icon_element-style-square">
                                            <i className="flaticon flaticon-navigation"></i>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3>Visit Us On</h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>1807- Business Central Tower B</p>
                                            <p>Dubai Internet City, Dubai.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="featured-icon-box icon-align-top-content style7">
                                <div className="featured-inner">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-md ttm-icon_element-style-square">
                                            <i className="flaticon flaticon-wall-clock"></i>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3>Visit Between</h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>Mon - Saturday : 9.00 - 6.00</p>
                                            <p>Sunday : Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ttm-row conatact-section bg-layer-equal-height mt_15 clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="col-bg-img-eight ttm-bg ttm-col-bgimage-yes ttm-textcolor-white spacing-11 z-index-2">
                                <div
                                    className="ttm-col-wrapper-bg-layer ttm-bg-layer"
                                    style={{
                                        backgroundImage: `url(/col-bgimage-8.jpg)`,
                                        backgroundPosition: `center center`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                    }}
                                ></div>
                                <div className="layer-content">
                                    <h3 className="mb-5">Chat With An Agent</h3>
                                    <p>Let's chat with our live experts to get answer your questions.</p>
                                    <Link
                                        href="https://api.whatsapp.com/send/?phone=971554073275&text=Hello%2C%20I%20am%20interested%20in%20your%20interior%20design%20services.&app_absent=0"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ttm-btn ttm-btn-size-md ttm-btn-shape-squar ttm-btn-style-border ttm-icon-btn-right ttm-btn-color-skincolor mt-15"
                                    >
                                        Live chat
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8" style={{overflow: 'hidden'}}>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
            <GoogleMapSection />
        </>
    )
}
