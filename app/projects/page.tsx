import Image from "next/image";
import Link from "next/link";
import PagesBanner from "@/components/PagesBanner";
import React from "react";
import {Metadata} from "next";
import {SEO} from "@/types/seo";
import {ProjectsPageData} from "@/types/projects";

export async function generateMetadata(): Promise<Metadata> {
    const API_URL = process.env.API_URL;
    let seo: SEO | null = null;
    let projects: ProjectsPageData | null = null;
    const fallback = {
        title: 'JDV - Projects Portfolio',
        description: 'Explore our portfolio of interior design, fit-out, and architecture projects in Dubai.',
        url: `${API_URL}/projects`,
    };

    try {
        // Параллельно запрашиваем SEO данные и все проекты
        const [seoRes, projectsRes] = await Promise.all([
            fetch(`${API_URL}/api/others/seo/projects`, {cache: 'no-cache'}),
            fetch(`${API_URL}/api/projects`, {cache: 'no-cache'})
        ]);

        if (seoRes.ok) seo = await seoRes.json().catch(() => null);
        if (projectsRes.ok) projects = await projectsRes.json().catch(() => []);
    } catch (e) {
        console.error('Projects metadata fetch error:', e);
    }

    // Создаем структурированные данные для страницы проектов
    const collectionPageStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        'name': seo?.meta_title || fallback.title,
        'description': seo?.meta_description || fallback.description,
        'url': seo?.og_url || fallback.url,
        'isPartOf': {
            '@type': 'WebSite',
            'name': 'JDV - Joie De Vivre',
            'url': API_URL
        }
    };

    // Добавляем BreadcrumbList
    const breadcrumbStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': API_URL
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Projects',
                'item': seo?.og_url || fallback.url
            }
        ]
    };

    // Создаем ItemList для всех проектов
    const projectsStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'itemListElement': Array.isArray(projects) ? projects.map((project, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'item': {
                '@type': 'CreativeWork',
                'name': project.title,
                'url': `${API_URL}/projects/${project.slug}`,
                'image': project.card_image ? `${API_URL}${project.card_image}` : undefined
            }
        })) : []
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
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: seo?.og_title || seo?.meta_title || fallback.title,
            description: seo?.og_description || seo?.meta_description || fallback.description,
            images: seo?.og_image ? [`${API_URL}${seo.og_image}`] : [],
        },
        other: {
            'structured-data': [
                JSON.stringify(collectionPageStructuredData),
                JSON.stringify(breadcrumbStructuredData),
                JSON.stringify(projectsStructuredData)
            ]
        }
    };
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
