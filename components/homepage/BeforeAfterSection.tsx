"use client";

import Image from "next/image";
import {useEffect, useRef, useState} from "react";

interface BeforeAfter {
    id: number;
    title: string;
    before_image: string;
    after_image: string;
}

export default function BeforeAfterSection({ data }: { data: BeforeAfter }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const handleRef = useRef<HTMLDivElement>(null);
    const beforeImageRef = useRef<HTMLImageElement>(null);
    const afterImageRef = useRef<HTMLImageElement>(null);
    const [imageHeight, setImageHeight] = useState(687);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 767) {
                setImageHeight(300); // mobile
            } else {
                setImageHeight(687); // desktop
            }
        };

        handleResize(); // set on mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        const handle = handleRef.current;
        const beforeImage = beforeImageRef.current;
        const afterImage = afterImageRef.current;

        if (!container || !handle || !beforeImage || !afterImage) return;

        let isDragging = false;
        let containerWidth = container.offsetWidth;
        let containerHeight = container.offsetHeight;

        const updateClip = (xPosition: number) => {
            // Ensure xPosition stays within container bounds
            const boundedX = Math.max(0, Math.min(xPosition, containerWidth));

            // Update handle position
            handle.style.left = `${boundedX}px`;

            // Update clip for before image: show left side up to xPosition
            beforeImage.style.clip = `rect(0px, ${boundedX}px, ${containerHeight}px, 0px)`;

            // Update clip for after image: show right side from xPosition
            afterImage.style.clip = `rect(0px, ${containerWidth}px, ${containerHeight}px, ${boundedX}px)`;
        };

        const handleMouseDown = (e: MouseEvent) => {
            isDragging = true;
            e.preventDefault(); // Prevent text selection
        };

        const handleMouseUp = () => {
            isDragging = false;
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;

            const rect = container.getBoundingClientRect();
            const xPosition = e.clientX - rect.left; // Mouse position relative to container
            updateClip(xPosition);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!isDragging) return;

            const rect = container.getBoundingClientRect();
            const xPosition = e.touches[0].clientX - rect.left; // Touch position relative to container
            updateClip(xPosition);
        };

        // Initial clip setup (default handle position at 50%)
        updateClip(containerWidth / 2);

        // Event listeners for mouse
        handle.addEventListener("mousedown", handleMouseDown);
        document.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mousemove", handleMouseMove);

        // Event listeners for touch
        handle.addEventListener("touchstart", (e: TouchEvent) => {
            isDragging = true;
            e.preventDefault();
        });
        document.addEventListener("touchend", () => {
            isDragging = false;
        });
        document.addEventListener("touchmove", handleTouchMove);

        // Update container dimensions on resize
        const handleResize = () => {
            containerWidth = container.offsetWidth;
            containerHeight = container.offsetHeight;
            // Maintain proportional handle position on resize
            const currentLeft = parseFloat(handle.style.left) || containerWidth / 2;
            const newLeft = (currentLeft / containerWidth) * containerWidth;
            updateClip(newLeft);
        };
        window.addEventListener("resize", handleResize);

        // Cleanup event listeners
        return () => {
            handle.removeEventListener("mousedown", handleMouseDown);
            document.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mousemove", handleMouseMove);
            handle.removeEventListener("touchstart", (e: TouchEvent) => {
                isDragging = true;
                e.preventDefault();
            });
            document.removeEventListener("touchend", () => {
                isDragging = false;
            });
            document.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className="ttm-row about-section clearfix" style={{overflow: 'hidden'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <div className="title-header">
                                <h3>After Before</h3>
                                <h2 className="title">{data.title}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="ttm-bg ttm-col-bgcolor-yes ttm-bgcolor-darkgrey ttm-right-span spacing-3">
                            <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                            <div className="layer-content"></div>
                        </div>
                    </div>
                </div>
                <div className="mt_535 res-991-mt-10">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ttm_single_image-wrapper ttm-reset-content-center-991 res-991-ml-0 mb_10 res-991-mb-0">
                                <div className="twentytwenty-wrapper twentytwenty-horizontal">
                                    <div className="twentytwenty-container" ref={containerRef} style={{height: imageHeight}}>
                                        <Image
                                            ref={beforeImageRef}
                                            className="img-fluid twentytwenty-before"
                                            src={process.env.API_URL+data.before_image}
                                            alt="after"
                                            width={1560}
                                            height={imageHeight}
                                            style={{ height: imageHeight}}
                                        />
                                        <Image
                                            ref={afterImageRef}
                                            className="img-fluid twentytwenty-after"
                                            src={process.env.API_URL+data.after_image}
                                            alt="before"
                                            width={1560}
                                            height={imageHeight}
                                            style={{ height: imageHeight}}
                                        />
                                        <div className="twentytwenty-overlay">
                                            <div className="twentytwenty-before-label"></div>
                                            <div className="twentytwenty-after-label"></div>
                                        </div>
                                        <div className="twentytwenty-handle" ref={handleRef}>
                                            <span className="twentytwenty-left-arrow"></span>
                                            <span className="twentytwenty-right-arrow"></span>
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
}