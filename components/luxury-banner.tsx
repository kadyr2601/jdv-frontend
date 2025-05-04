'use client'
import React, {useState, useEffect, useRef, JSX} from "react";
import Link from "next/link";
import {LuxuryBannerProps} from "@/types/home";


export function LuxuryBanner({
                               slides,
                               autoplay = true,
                               autoplaySpeed = 5000,
                               showArrows = true,
                               showDots = false,
                             }: LuxuryBannerProps): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = (index: number): void => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentSlide(index);

    // Reset autoplay timer
    if (autoplay && slideTimerRef.current) {
      clearTimeout(slideTimerRef.current);
      startAutoplayTimer();
    }

    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  const goToNextSlide = (): void => {
    const nextSlide = (currentSlide + 1) % slides.length;
    goToSlide(nextSlide);
  };

  const goToPrevSlide = (): void => {
    const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prevSlide);
  };

  const startAutoplayTimer = (): void => {
    if (autoplay) {
      slideTimerRef.current = setTimeout(() => {
        goToNextSlide();
      }, autoplaySpeed);
    }
  };

  useEffect(() => {
    // Start autoplay
    startAutoplayTimer();

    // Play video if current slide is video
    if (slides[currentSlide].type === "video" && videoRefs.current[currentSlide]) {
      videoRefs.current[currentSlide]?.play();
    }

    return () => {
      // Clear timer on unmount
      if (slideTimerRef.current) {
        clearTimeout(slideTimerRef.current);
      }
    };
  }, [currentSlide, autoplay, autoplaySpeed, slides]);

  return (
      <div className="luxury-banner">
        {/* Slides */}
        {slides.map((slide, index) => (
            <div
                key={slide.id}
                className={`banner-slide ${index === currentSlide ? "active" : ""}`}
            >
              {/* Background Media */}
              {slide.type === "image" ? (
                  <div className="banner-background">
                    <img
                        src={process.env.API_URL+slide.src}
                        alt={slide.title}
                        className="banner-image"
                    />
                    <div className="banner-overlay-i"></div>
                  </div>
              ) : (
                  <div className="banner-background">
                    <video
                        ref={(el) => {
                          videoRefs.current[index] = el;

                          if (index === currentSlide && el) {
                            el.oncanplay = () => {
                              requestAnimationFrame(() => {
                                el.play().catch(() => {});
                              });
                            };
                          }
                        }}
                        src={process.env.API_URL + slide.src}
                        muted
                        loop
                        playsInline
                        preload="none"
                        poster="/videoPlaceholder.jpg"
                        className="banner-video"
                    />
                    <div className="banner-overlay"></div>
                  </div>
              )}

              {/* Content */}
              {slide.alignment === "split" ? (
                  <div className="banner-content">
                    <div className="banner-container">
                      <div className="content-split">
                        <div className="split-left">
                          {slide.category && (
                              <div className="banner-category" style={{ animationDelay: "0.3s" }}>
                                {slide.category}
                              </div>
                          )}

                          {slide.description && (
                              <p className="banner-description" style={{ animationDelay: "0.5s" }}>
                                {slide.description}
                              </p>
                          )}

                          {slide.socialLinks && (
                              <div className="social-links" style={{ animationDelay: "0.7s" }}>
                                <a href="#" className="social-link">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                  >
                                    <path d="M8 12h.01M12 12h.01M16 12h.01M21.08 8.58v6.84a3 3 0 0 1-1.56 2.64l-5.94 3.11a3 3 0 0 1-2.79 0l-5.94-3.11a3 3 0 0 1-1.56-2.64V8.58a3 3 0 0 1 1.56-2.64l5.94-3.11a3 3 0 0 1 2.79 0l5.94 3.11a3 3 0 0 1 1.56 2.64z"></path>
                                  </svg>
                                </a>
                                <a href="#" className="social-link">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                  >
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                  </svg>
                                </a>
                                <a href="#" className="social-link">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                  >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                  </svg>
                                </a>
                              </div>
                          )}
                        </div>

                        <div className="split-divider"></div>

                        <div className="split-right">
                          <h2 className="banner-title" style={{ animationDelay: "0.9s" }}>
                            {slide.title}
                          </h2>

                          {slide.subtitle && (
                              <h3 className="banner-subtitle" style={{ animationDelay: "1.1s" }}>
                                {slide.subtitle}
                              </h3>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
              ) : (
                  <div className="banner-content">
                    <div className={`banner-container content-${slide.alignment || "left"}`}>
                      {slide.category && (
                          <div className="banner-category">
                            {slide.category}
                          </div>
                      )}

                      <h2 className="banner-title">
                        {slide.title}
                      </h2>

                      {slide.subtitle && (
                          <h3 className="banner-subtitle">
                            {slide.subtitle}
                          </h3>
                      )}

                      {slide.description && (
                          <p className="banner-description">
                            {slide.description}
                          </p>
                      )}

                      <div className="banner-actions">
                        {slide.cta && (
                            <Link href={slide.cta.url}  className="banner-cta" >
                              {slide.cta.text}
                            </Link>
                        )}

                        {slide.phone && (
                            <a href={`tel:${slide.phone}`} className="banner-phone">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                              >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                              </svg>
                              Call: {slide.phone}
                            </a>
                        )}

                        {slide.socialLinks && (
                            <div className="social-links">
                              <a href="#" className="social-link">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                              </a>
                              <a href="#" className="social-link">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                </svg>
                              </a>
                              <a href="#" className="social-link">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                  <rect x="2" y="9" width="4" height="12"></rect>
                                  <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                              </a>
                            </div>
                        )}
                      </div>
                    </div>
                  </div>
              )}
            </div>
        ))}

        {/* Navigation Arrows */}
        {showArrows && slides.length > 1 && (
            <>
              <button
                  onClick={goToPrevSlide}
                  className="banner-arrow arrow-prev"
                  aria-label="Previous slide"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                  onClick={goToNextSlide}
                  className="banner-arrow arrow-next"
                  aria-label="Next slide"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </>
        )}

        {/* Dots */}
        {showDots && slides.length > 1 && (
            <div className="banner-dots">
              {slides.map((_, index) => (
                  <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`banner-dot ${index === currentSlide ? "active" : ""}`}
                      aria-label={`Go to slide ${index + 1}`}
                  ></button>
              ))}
            </div>
        )}
      </div>
  );
}