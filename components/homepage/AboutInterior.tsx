'use client'
import React, {useEffect, useState} from 'react';
import Image from "next/image";


export type AboutInteriorBanner = {
    id: number
    title: string
    description: string
    section: number
}

export type AboutInterior = {
    id: number
    about_interior_banner_set: AboutInteriorBanner[]
    title: string
    content: string
    image: string
}

// Change the props type to match how you're using it
type AboutInteriorSectionProps = {
    data: AboutInterior
}

const AboutInteriorSection = ({ data }: AboutInteriorSectionProps) => {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 767) {
                setMobile(true); // mobile
            } else {
                setMobile(false); // desktop
            }
        };

        handleResize(); // set on mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section style={{overflow: 'hidden'}}
                 className="ttm-row broken-section mt_80 mb-80 res-991-mb-0 res-991-mt-0 bg-layer-equal-height clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="col-bg-img-two ttm-bg ttm-col-bgimage-yes ttm-left-span z-index-2">
                            <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"
                                 style={{
                                     backgroundImage: `url(${process.env.API_URL + data.image})`,
                                     backgroundRepeat: 'no-repeat',
                                     backgroundSize: 'cover',
                                     backgroundPosition: 'center center',
                                 }}
                            ></div>
                            <div className="layer-content"></div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className={mobile ? `ttm-bg ttm-col-bgcolor-yes ttm-bgcolor-darkgrey ttm-right-span` :
                            `ttm-bg ttm-col-bgcolor-yes ttm-bgcolor-darkgrey ttm-right-span spacing-4`
                        }>
                            <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                            <div className="layer-content">
                                <div className="section-title">
                                    <div className="title-header">
                                        <h3>About Interior</h3>
                                        <h2 className="title">{data.title}</h2>
                                    </div>
                                    <div className="title-desc">
                                        <p>{data.content}</p>
                                    </div>
                                </div>
                                <div className="pt-20 res-991-pt-0">
                                    <div className="row ttm-vertical_sep">
                                        {data.about_interior_banner_set.map((banner, index) => (
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
    );
};

export default AboutInteriorSection;