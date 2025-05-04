import Image from "next/image";
import Link from "next/link";
import PagesBanner from "@/components/PagesBanner";
import React from "react";
import {Metadata} from "next";
import {SEO} from "@/types/seo";
import {ProjectsPageData} from "@/types/projects";

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
            url: `${API_URL}/projects`,
        },
    };

    try {
        const res = await fetch(`${API_URL}/api/others/seo/projects`, {cache: 'no-cache'});

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

async function getProjectsData(): Promise<ProjectsPageData> {
    const res = await fetch(`${process.env.API_URL}/api/projects/`, {cache: 'no-cache'});
    return res.json();
}

export default async function Projects() {
    const projectsPage = await getProjectsData();

    return (
        <>
            {
                projectsPage.banner && (
                    <PagesBanner title={projectsPage.banner.title} image={process.env.API_URL + projectsPage.banner.image}/>
                )
            }
            <section className="ttm-row pf-section clearfix container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ttm-tabs ttm-tab-style-02 mb_15">

                                <div className="content-tab">
                                    <div className="row ttm-boxes-spacing-30px isotope-project">
                                        {projectsPage.projects.map((project) => (
                                            <div key={project.id} className="col-lg-4 col-md-6 project_item cat-5">
                                                <div className="featured-imagebox featured-imagebox-portfolio style3">
                                                    <div className="featured-thumbnail">
                                                        <Image
                                                            width={610}
                                                            height={750}
                                                            className="img-fluid"
                                                            src={process.env.API_URL + project.card_image}
                                                            alt="image"
                                                            priority
                                                        />
                                                    </div>
                                                    <div className="featured-content-inner">
                                                        <div className="featured-content">
                                                            <div className="featured-title">
                                                                <h3>
                                                                    <Link
                                                                        href={`/projects/${project.slug}`}>{project.title}</Link>
                                                                </h3>
                                                            </div>
                                                            <div className="featured-desc"></div>
                                                        </div>
                                                        <div className="ttm-footer">
                                                            <Link
                                                                className="ttm-btn btn-inline ttm-btn-size-md ttm-icon-btn-right ttm-btn-color-dark"
                                                                href={`/projects/${project.slug}`}
                                                            >
                                                                Read More<i className="ti ti-plus"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
