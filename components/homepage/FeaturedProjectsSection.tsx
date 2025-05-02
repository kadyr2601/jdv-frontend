'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

export interface FeaturedProject {
    id: number;
    title: string;
    image: string;
    project: { slug: string };
}

export default function FeaturedProjectsSection({ data }: { data: FeaturedProject[] }) {


    return (
        <section className="mb-80 ttm-row zero_padding-section clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-10 m-auto">
                        <div className="section-title title-style-center_text">
                            <div className="title-header">
                                <h3>Our Best Projects</h3>
                                <h2 className="title">Our Featured Projects</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        autoplay={{
                            delay: 1500,
                        }}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay]}
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
                        {data.map((item, index) => (
                            <SwiperSlide>
                            <div
                                key={index}
                                style={{
                                    boxSizing: 'border-box',
                                    padding: '10px',
                                }}
                            >
                                <div className="featured-imagebox featured-imagebox-portfolio style3">
                                    <div className="featured-thumbnail">
                                        <Image
                                            width={610}
                                            height={750}
                                            className="img-fluid"
                                            src={process.env.API_URL + item.image}
                                            alt={item.title}
                                        />
                                    </div>
                                    <div className="featured-content-inner">
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3>
                                                    <Link href={`/projects/${item.project.slug}`}>
                                                        {item.title}
                                                    </Link>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="ttm-footer">
                                            <Link
                                                className="ttm-btn btn-inline ttm-btn-size-md ttm-icon-btn-right ttm-btn-color-dark"
                                                href={`/projects/${item.project.slug}`}
                                            >
                                                Read More<i className="ti ti-plus"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

