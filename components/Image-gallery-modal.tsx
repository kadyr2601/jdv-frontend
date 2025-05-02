"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { createPortal } from "react-dom"

interface GalleryImage {
    id: string | number
    gallery: string
}

interface ImageGalleryModalProps {
    images: GalleryImage[]
    initialImageIndex?: number
    apiUrl: string
    isOpen: boolean
    onClose: () => void
}

export default function ImageGalleryModal({
                                              images,
                                              initialImageIndex = 0,
                                              apiUrl,
                                              isOpen,
                                              onClose,
                                          }: ImageGalleryModalProps) {
    const [currentIndex, setCurrentIndex] = useState(initialImageIndex)
    const [mounted, setMounted] = useState(false)
    const [headerHeight, setHeaderHeight] = useState(0)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isZoomed, setIsZoomed] = useState(false)
    const [showOptions, setShowOptions] = useState(false)

    useEffect(() => {
        setMounted(true)

        // Get the header height
        const header =
            document.querySelector(".ttm-stickable-header") ||
            document.querySelector(".fixed-header") ||
            document.querySelector("header")

        if (header) {
            const height = header.getBoundingClientRect().height
            setHeaderHeight(height)
        }

        return () => setMounted(false)
    }, [])

    useEffect(() => {
        if (isOpen) {
            // Prevent scrolling when modal is open
            document.body.style.overflow = "hidden"

            // Handle escape key to close modal
            const handleEsc = (e: KeyboardEvent) => {
                if (e.key === "Escape") onClose()
            }

            // Handle arrow keys for navigation
            const handleArrows = (e: KeyboardEvent) => {
                if (e.key === "ArrowLeft") goToPrevious()
                if (e.key === "ArrowRight") goToNext()
            }

            window.addEventListener("keydown", handleEsc)
            window.addEventListener("keydown", handleArrows)

            return () => {
                document.body.style.overflow = ""
                window.removeEventListener("keydown", handleEsc)
                window.removeEventListener("keydown", handleArrows)
            }
        }
    }, [isOpen, onClose])

    // Slideshow functionality
    useEffect(() => {
        let slideshowTimer: NodeJS.Timeout | null = null

        if (isPlaying) {
            slideshowTimer = setInterval(() => {
                goToNext()
            }, 3000) // Change image every 3 seconds
        }

        return () => {
            if (slideshowTimer) clearInterval(slideshowTimer)
        }
    }, [isPlaying, currentIndex])

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }

    const goToImage = (index: number) => {
        setCurrentIndex(index)
    }

    const toggleZoom = () => {
        setIsZoomed(!isZoomed)
    }

    const togglePlay = () => {
        setIsPlaying(!isPlaying)
    }

    const toggleOptions = () => {
        setShowOptions(!showOptions)
    }

    // Don't render anything on the server
    if (!mounted) return null

    // Don't render if modal is closed
    if (!isOpen) return null

    // Use createPortal to render the modal at the document body level
    return createPortal(
        <div
            id="gallery-modal"
            style={{
                position: "fixed",
                top: `${headerHeight}px`, // Start below the header
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.95)",
                zIndex: 999,
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Control buttons */}
            <div
                style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    display: "flex",
                    zIndex: 1000,
                }}
            >
                {/* Zoom button */}
                <div
                    onClick={toggleZoom}
                    style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        border: "none",
                        color: "white",
                        fontSize: "24px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    aria-label="Zoom"
                >
                    {isZoomed ? "−" : "+"}
                </div>

                {/* Play/Slideshow button */}
                <div
                    onClick={togglePlay}
                    style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        border: "none",
                        color: "white",
                        fontSize: "18px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    aria-label="Play slideshow"
                >
                    {isPlaying ? "⏸" : "▶"}
                </div>

                {/* Close button */}
                <div
                    onClick={onClose}
                    style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        border: "none",
                        color: "white",
                        fontSize: "18px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    aria-label="Close gallery"
                >
                    ✕
                </div>
            </div>

            {/* Options menu (conditionally rendered) */}
            {showOptions && (
                <div
                    style={{
                        position: "absolute",
                        top: "70px",
                        right: "20px",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        borderRadius: "5px",
                        padding: "10px",
                        zIndex: 1000,
                    }}
                >
                    <div style={{ color: "white", padding: "5px 10px", cursor: "pointer" }}>Download Image</div>
                    <div style={{ color: "white", padding: "5px 10px", cursor: "pointer" }}>Share Image</div>
                    <div style={{ color: "white", padding: "5px 10px", cursor: "pointer" }}>Image Information</div>
                </div>
            )}

            {/* Main content area */}
            <div
                style={{
                    flex: 1,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {/* Main image */}
                <div
                    style={{
                        maxWidth: "90%",
                        maxHeight: `calc(100vh - ${headerHeight + 150}px)`,
                        position: "relative",
                        transition: "transform 0.3s ease",
                        transform: isZoomed ? "scale(1.5)" : "scale(1)",
                        cursor: isZoomed ? "zoom-out" : "zoom-in",
                    }}
                    onClick={toggleZoom}
                >
                    <Image
                        src={`${apiUrl}${images[currentIndex].gallery}`}
                        alt=""
                        style={{
                            objectFit: "contain",
                            maxWidth: "100%",
                            maxHeight: `calc(100vh - ${headerHeight + 150}px)`,
                        }}
                        width={1200}
                        height={800}
                        priority
                    />
                </div>

                {/* Navigation buttons */}
                <div
                    onClick={goToPrevious}
                    style={{
                        position: "absolute",
                        left: "20px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "50px",
                        height: "50px",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        border: "none",
                        borderRadius: "50%",
                        color: "white",
                        fontSize: "24px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    aria-label="Previous image"
                >
                    &#10094;
                </div>

                <div
                    onClick={goToNext}
                    style={{
                        position: "absolute",
                        right: "20px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "50px",
                        height: "50px",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        border: "none",
                        borderRadius: "50%",
                        color: "white",
                        fontSize: "24px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    aria-label="Next image"
                >
                    &#10095;
                </div>

                {/* Image counter */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        color: "white",
                        padding: "5px 10px",
                        borderRadius: "15px",
                        fontSize: "14px",
                    }}
                >
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            {/* Thumbnails */}
            <div
                style={{
                    height: "100px",
                    backgroundColor: "#000000",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    padding: "10px 0",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        height: "100%",
                        overflowX: "auto",
                        maxWidth: "90%",
                        padding: "0 10px",
                    }}
                >
                    {images.map((image, index) => (
                        <div
                            key={image.id}
                            onClick={() => goToImage(index)}
                            style={{
                                height: "80px",
                                flexShrink: 0,
                                cursor: "pointer",
                                border: index === currentIndex ? "2px solid white" : "2px solid transparent",
                                transition: "border 0.2s ease",
                            }}
                        >
                            <Image
                                src={`${apiUrl}${image.gallery}`}
                                alt=""
                                style={{
                                    height: "100%",
                                    width: "auto",
                                    objectFit: "cover",
                                }}
                                width={120}
                                height={80}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>,
        document.body,
    )
}
