import {Metadata} from "next";
import PagesBanner from "@/components/PagesBanner";
import React from "react";
import ImageGalleryWrapper from "@/components/Image-gallery-wrapper";
import {ProjectDetailsResponse} from "@/types/projectDetails";


async function getProjectDetails(slug: string): Promise<ProjectDetailsResponse> {
    const res = await fetch(`${process.env.API_URL}/api/projects/details/${slug}`, { cache: "no-cache" });
    if (!res.ok) throw new Error("Failed to fetch project details");
    return res.json();
}

export async function generateMetadata({params,}: {params: Promise<{ slug: string }>}): Promise<Metadata> {
    const { slug } = await params
    const { project } = await getProjectDetails(slug);

    return {
        title: project.meta_title,
        description: project.meta_description,
        openGraph: {
            title: project.meta_title,
            images: [`${process.env.API_URL}${project.image}`],
            url: project.structured_data?.url,
        },
    };
}

export default async function ProjectDetails({params,}: {params: Promise<{ slug: string }>}) {
    const { slug } = await params
    const {project, gallery} = await getProjectDetails(slug);
    const api_url = process.env.API_URL

    return (
        <>
            <PagesBanner title={project.title} image={api_url+ project.banner_image}/>
            <section className="ttm-row project-single-section clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ttm-pf-single-content-wrapper-innerbox ttm-pf-view-top-image">
                                <div className="ttm-pf-single-content-area">
                                    <h2>Overview</h2>
                                    <div className="row mt-25 mb-30">
                                        {api_url && <ImageGalleryWrapper gallery={gallery} apiUrl={api_url} />}
                                    </div>
                                    <div className="ttm-horizontal_sep width-100 mt-25 mb-25 res-991-mt-15"></div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
