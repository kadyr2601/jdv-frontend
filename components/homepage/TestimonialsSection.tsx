"use client"
import { useRef } from "react"
import Image from "next/image"
import Slider from "react-slick"


interface Review {
    id: number;
    stars: number;
    review: string;
    image: string;
    client_fullname: string;
    client_position: string;
}

export default function TestimonialsSection({ data }: { data: Review[] }) {
    const sliderRef = useRef<Slider | null>(null)

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

    return (
        <section className="ttm-row bottom_zero_padding-section clearfix">
            <div className="container">
                {/* row */}
                <div className="row">
                    <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
                        {/* section-title */}
                        <div className="section-title title-style-center_text">
                            <div className="title-header">
                                <h3>What People Say</h3>
                                <h2 className="title">Words Of Our Clients</h2>
                            </div>
                        </div>
                        {/* section-title end */}
                    </div>
                </div>
                {/* row end */}
                {/* row */}
                <div className="row slick_slider">
                    <Slider ref={sliderRef} {...settings} className="slick-initialized slick-slider">
                        {data.map((testimonial, index) => (
                            <div key={index} className="col-lg-12">
                                {/* testimonials */}
                                <div className="testimonials style1">
                                    <div className="testimonials-inner-item">
                                        <div className="testimonial-content">
                                            <div className="ttm-ratting-star">
                                                {[...Array(5)].map((_, i) => (
                                                    <i className="fa fa-star" key={i}></i>
                                                ))}
                                            </div>
                                            <blockquote>{testimonial.review}</blockquote>
                                            <div className="testimonial-avatar">
                                                <div className="testimonial-img">
                                                    <Image
                                                        width={150}
                                                        height={150}
                                                        className="img-fluid"
                                                        src={process.env.API_URL+testimonial.image}
                                                        alt="testimonial-img"
                                                    />
                                                </div>
                                                <div className="testimonial-caption">
                                                    <h3>{testimonial.client_fullname}</h3>
                                                    <label>{testimonial.client_position}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* testimonials end */}
                            </div>
                        ))}
                    </Slider>
                </div>
                {/* row end */}
            </div>
        </section>
    )
}
