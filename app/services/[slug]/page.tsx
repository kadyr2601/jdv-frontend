import Image from "next/image";
import {Metadata} from "next";
import PagesBanner from "@/components/PagesBanner";
import React from "react";
import Link from "next/link";
import {ServiceData, Service} from "@/types/services";


async function getServices(): Promise<Service[]> {
    const res = await fetch(`${process.env.API_URL}/api/services/`, {cache: "no-cache"});
    return res.json();
}

async function getServiceDetails(slug: string): Promise<ServiceData> {
    const res = await fetch(`${process.env.API_URL}/api/services/details/${slug}`, {cache: "no-cache"});
    if (!res.ok) throw new Error("Failed to fetch service details");
    return res.json();
}

export async function generateMetadata({params,}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const {slug} = await params
    const {service} = await getServiceDetails(slug);

    return {
        title: service.name,
        description: service.description,
        openGraph: {
            title: service.name,
            description: service.description,
            images: [`${process.env.API_URL}${service.main_image}`],
        },
    };
}

export default async function Page({params,}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params
    const {service, maintenances} = await getServiceDetails(slug);
    const services = await getServices();

    return (
        <>
            {service && (
                <PagesBanner title={service.title} image={`${process.env.API_URL}${service.image}`}/>
            )}
            <div className="ttm-row sidebar ttm-sidebar-left clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 widget-area sidebar-left">
                            <aside className="widget widget-nav-menu">
                                <h3 className="widget-title">More Services</h3>
                                <ul className="widget-menu">
                                    {services.map((item) => (
                                        <li key={item.id} className={item.slug === slug ? "active" : ""}>
                                            <Link href={`/services/${item.slug}`}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </aside>
                            <aside className="widget contact-widget with-title">
                                <h3 className="widget-title">Contact</h3>
                                <div className="featured-icon-box icon-align-before-content icon-ver_align-top style1">
                                    <div className="featured-icon">
                                        <div
                                            className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-xs">
                                            <i className="flaticon flaticon-call-1"></i>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3>Phone Number</h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>+971 55 407 3275</p>
                                            <p>+971 44 480 023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="featured-icon-box icon-align-before-content icon-ver_align-top style1">
                                    <div className="featured-icon">
                                        <div
                                            className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-xs">
                                            <i className="flaticon flaticon-email"></i>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3>Email Address</h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>hello@jdv.ae</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="featured-icon-box icon-align-before-content icon-ver_align-top style1">
                                    <div className="featured-icon">
                                        <div
                                            className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-xs">
                                            <i className="flaticon flaticon-navigation"></i>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3>Location</h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>
                                                1807- Business Central Tower B<br/>
                                                Dubai Internet City, Dubai.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        <div className="col-lg-8 content-area">
                            <article className="ttm-service-single-content-area">
                                <h2>{service.page_title}</h2>
                                <div className="ttm-service-featured-wrapper ttm-featured-wrapper">
                                    <div className="ttm_single_image-wrapper pt-20 mb-20 res-991-mb-30">
                                        <Image
                                            width={799}
                                            height={350}
                                            className="img-fluid"
                                            src={`${process.env.API_URL}${service.main_image}`}
                                            alt={`${service.name} main image`}
                                        />
                                    </div>
                                </div>
                                <div className="ttm-service-classic-content">
                                    <p style={{whiteSpace: 'pre-wrap'}}>{service.description}</p>
                                    {maintenances.map((maintenance, index) => (
                                        <div key={maintenance.id} className={index % 2 === 0 ? "pt-10" : "pt-25"}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    {index % 2 === 0 ? (
                                                        <div className="text-content">
                                                            <div className="icon-box">
                                                                <i className="fa fa-check-square-o ttm-textcolor-skincolor"></i>
                                                            </div>
                                                            <div className="icon-content">
                                                                <h3>{maintenance.title}</h3>
                                                            </div>
                                                            <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor style2">
                                                                {maintenance.text
                                                                    .split(/\r?\n/)
                                                                    .map((line, i) => line.trim())
                                                                    .filter(line => line.length > 0)
                                                                    .map((line, i) => (
                                                                        <li key={i}>
                                                                            <i className="fa fa-dot-circle-o ttm-textcolor-skincolor"></i>
                                                                            <span className="ttm-list-li-content">{line}</span>
                                                                        </li>
                                                                    ))}
                                                            </ul>
                                                            {/*<ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor style2">*/}
                                                            {/*    {maintenance.services.map((item) => (*/}
                                                            {/*        <li key={item.id}>*/}
                                                            {/*            <i className="fa fa-dot-circle-o ttm-textcolor-skincolor"></i>*/}
                                                            {/*            <span*/}
                                                            {/*                className="ttm-list-li-content">{item.text}</span>*/}
                                                            {/*        </li>*/}
                                                            {/*    ))}*/}
                                                            {/*</ul>*/}
                                                        </div>
                                                    ) : (
                                                        <div className="ttm_single_image-wrapper res-767-pb-30">
                                                            <Image
                                                                width={385}
                                                                height={224}
                                                                className="img-fluid"
                                                                src={`${process.env.API_URL}${maintenance.image}`}
                                                                alt={maintenance.title}
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="col-md-6">
                                                    {index % 2 === 0 ? (
                                                        <div className="ttm_single_image-wrapper res-767-pt-30">
                                                            <Image
                                                                width={385}
                                                                height={224}
                                                                className="img-fluid"
                                                                src={`${process.env.API_URL}${maintenance.image}`}
                                                                alt={maintenance.title}
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div className="text-content">
                                                            <div className="icon-box">
                                                                <i className="fa fa-check-square-o ttm-textcolor-skincolor"></i>
                                                            </div>
                                                            <div className="icon-content">
                                                                <h3>{maintenance.title}</h3>
                                                            </div>
                                                            <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor style2">
                                                                {maintenance.text
                                                                    .split(/\r?\n/)
                                                                    .map((line, i) => line.trim())
                                                                    .filter(line => line.length > 0)
                                                                    .map((line, i) => (
                                                                        <li key={i}>
                                                                            <i className="fa fa-dot-circle-o ttm-textcolor-skincolor"></i>
                                                                            <span className="ttm-list-li-content">{line}</span>
                                                                        </li>
                                                                    ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
