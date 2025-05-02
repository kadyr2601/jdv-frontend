'use client'
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


interface ServiceBanner {
    id: number;
    name: string;
    description: string;
    image: string;
    section: number;
    service: { slug: string };
}

interface FeaturedServices {
    id: number;
    services_banner_set: ServiceBanner[];
    title: string;
    image: string;
}

export default function ServicesSection({ data }: { data: FeaturedServices }) {

    return (
        <section className="ttm-row zero_padding-section mb-70 res-991-mb-0 bg-layer-equal-height clearfix"
        style={{overflow: 'hidden'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="ttm-bg ttm-col-bgcolor-yes ttm-left-span spacing-1 ttm-bgcolor-darkgrey z-index-2">
                            <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                            <div className="layer-content">
                                <div className="section-title">
                                    <div className="title-header">
                                        <h3>Services We Do</h3>
                                        <h2 className="title">{data.title}</h2>
                                    </div>
                                </div>
                                <div className="mr_400 res-991-mr-0 mt-40 res-991-mt-20">
                                    <div
                                        className="slick_slider slick-initialized slick-slider"
                                        data-slick='{"slidesToShow": 4, "slidesToScroll": 1, "arrows": false, "autoplay": false, "infinite": true, "responsive": [{"breakpoint": 992, "settings": {"slidesToShow": 2}}, {"breakpoint": 768, "settings": {"slidesToShow": 1}}]}'
                                    >
                                        <div className="slick-list draggable">
                                            <div className="slick-track" style={{ opacity: 1, width: `${data.services_banner_set.length * 293}px`, transform: "translate3d(0px, 0px, 0px)" }}>
                                                <Swiper
                                                    slidesPerView={3}
                                                    pagination={{
                                                        clickable: true,
                                                    }}
                                                    breakpoints={{
                                                        0: {
                                                            slidesPerView: 1,
                                                        },
                                                        768: {
                                                            slidesPerView: 2,
                                                        },
                                                        992: {
                                                            slidesPerView: 3,
                                                        },
                                                    }}
                                                    className="mySwiper"
                                                >
                                                {data.services_banner_set.map((service, index) => (
                                                    <SwiperSlide>
                                                    <div
                                                        key={service.id}
                                                        className={`featured-imagebox featured-imagebox-portfolio style1 slick-slide ${index === 1 ? 'active' : ''} ${index < 4 ? 'slick-active' : ''}`}
                                                        data-slick-index={index}
                                                        aria-hidden={index >= 4 ? 'true' : 'false'}
                                                        style={{ width: "293px" }}
                                                    >
                                                        <div className="featured-thumbnail">
                                                            <Link href={`/services/${service.service.slug}`}>
                                                                <Image
                                                                    src={`${process.env.API_URL}${service.image}`}
                                                                    alt={service.name}
                                                                    width={584}
                                                                    height={760}
                                                                    className="img-fluid"
                                                                    sizes="(max-width: 768px) 100vw, 584px"
                                                                    loading="lazy"
                                                                />
                                                            </Link>
                                                        </div>
                                                        <div className="featured-content">
                                                            <div className="featured-icon">
                                                                <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                                                    {/*<i className={`flaticon ${getServiceIcon(service.service)}`}></i>*/}
                                                                </div>
                                                            </div>
                                                            <div className="featured-title">
                                                                <h3>
                                                                    <Link href={`/services/${service.service.slug}`}>{service.name}</Link>
                                                                </h3>
                                                            </div>
                                                            <div className="featured-desc">
                                                                <p>{service.description}</p>
                                                            </div>
                                                            <div className="ttm-footer">
                                                                <Link
                                                                    className="ttm-btn ttm-btn-size-md ttm-btn-shape-squar ttm-btn-style-border ttm-icon-btn-right ttm-btn-color-skincolor"
                                                                    href={`/services/${service.service.slug}`}
                                                                >
                                                                    Read More
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </SwiperSlide>
                                                ))}
                                                </Swiper>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="col-bg-img-one ttm-bg ttm-col-bgimage-yes ttm-right-span spacing-2">
                            <div
                                className="ttm-col-wrapper-bg-layer ttm-bg-layer"
                                style={{ backgroundImage: `url(${process.env.API_URL}${data.image})` }}
                            ></div>
                            <div className="layer-content"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}