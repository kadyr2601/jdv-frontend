"use client"
import { useState } from "react"
import Image from "next/image"

interface AboutBanner {
    id: number;
    name: string;
    content: string;
    image: string;
    section: number;
}

interface AboutSectionProps {
    data: {
        id: number;
        about_banner_set: AboutBanner[];
        title: string;
        content: string;
        image: string;
    };
}

export default function AboutSection({ data }: AboutSectionProps) {
    const [activeTabIndex, setActiveTabIndex] = useState(0)

    const handleTabClick = (index: number) => {
        setActiveTabIndex(index)
    }

    return (
        <section className="ttm-row welcome-section clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-12">
                        <div className="ttm_single_image-wrapper text-center p-15 border_1 d-inline-block mr_50 res-991-mr-0">
                            <Image
                                width={520}
                                height={590}
                                className="img-fluid"
                                src={`${process.env.API_URL}${data.image}`}
                                alt="single_01"
                                sizes="(max-width: 768px) 100vw, 520px"
                            />
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-12">
                        <div className="pl-70 res-991-pl-0 pt-15 res-991-pt-0 res-991-mt-40 res-991-pb-25">
                            <div className="section-title">
                                <div className="title-heade">
                                    <h3>About Joie De Vivre</h3>
                                    <h2 className="title">{data.title}</h2>
                                </div>
                            </div>
                            <div className="pb-5 res-991-pb-30">
                                <p>{data.content}</p>
                            </div>
                            <div className="ttm-tabs ttm-tab-style-01">
                                <ul className="tabs">
                                    {data.about_banner_set.map((banner, index) => (
                                        <li
                                            key={banner.id}
                                            className={`tab ${activeTabIndex === index ? "active" : ""}`}
                                        >
                                            <div onClick={() => handleTabClick(index)} className="a">
                                                {banner.name}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="content-tab">
                                    {data.about_banner_set.map((banner, index) => (
                                        <div
                                            key={banner.id}
                                            className={`content-inner ${activeTabIndex === index ? "active" : ""}`}
                                        >
                                            <p>
                                                <Image
                                                    width={190}
                                                    height={199}
                                                    className="alignleft img-fluid"
                                                    src={`${process.env.API_URL}${banner.image}`}
                                                    alt={`service-${banner.id}`}
                                                    sizes="(max-width: 768px) 100vw, 190px"
                                                    loading="lazy"
                                                />
                                                {banner.content}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}