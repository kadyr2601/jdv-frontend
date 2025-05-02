"use client"
import { useState, memo, useCallback } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import ImageGalleryModal from "@/components/Image-gallery-modal"

interface GalleryImage {
    id: string | number
    gallery: string
}

interface ImageGalleryWrapperProps {
    gallery: GalleryImage[]
    apiUrl: string
}

// Оптимизированный компонент для отдельного изображения
const GalleryItem = memo(({
                              image,
                              index,
                              apiUrl,
                              openModal
                          }: {
    image: GalleryImage;
    index: number;
    apiUrl: string;
    openModal: (index: number) => void
}) => {
    // Используем IntersectionObserver для отслеживания видимости
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '200px 0px', // Предзагрузка изображений, когда они приближаются к видимой области
    });

    return (
        <div ref={ref} className="col-lg-4 col-md-6 col-sm-12">
            <div className="ttm_single_image-wrapper mt-15 mb-15 res-991-mt-20 res-991-mb-10">
                <button
                    onClick={() => openModal(index)}
                    style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        cursor: "pointer",
                        padding: 0,
                        border: "none",
                        background: "none",
                    }}
                    aria-label="Open gallery"
                >
                    {inView ? (
                        <Image
                            style={{ height: "260px", objectFit: "cover" }}
                            width={580}
                            height={610}
                            className="img-fluid"
                            src={apiUrl + image.gallery || "/placeholder.svg"}
                            alt={`Interior design project image ${index + 1}`}
                            priority={index < 3} // Приоритет только для первых 3 изображений
                            loading={index < 3 ? "eager" : "lazy"}
                            placeholder="blur"
                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1ODAiIGhlaWdodD0iNjEwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmMWYxIi8+PC9zdmc+"
                        />
                    ) : (
                        // Пустой div с такими же размерами для сохранения макета
                        <div style={{ height: "260px", width: "100%", background: "#f1f1f1" }} />
                    )}
                </button>
            </div>
        </div>
    );
});

GalleryItem.displayName = 'GalleryItem';

export default function ImageGalleryWrapper({ gallery, apiUrl }: ImageGalleryWrapperProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)

    // Мемоизируем функцию openModal, чтобы она не создавалась заново при каждом рендере
    const openModal = useCallback((index: number) => {
        setSelectedImageIndex(index)
        setIsModalOpen(true)
    }, [])

    // Мемоизируем функцию closeModal
    const closeModal = useCallback(() => {
        setIsModalOpen(false)
    }, [])

    return (
        <>
            {gallery.map((image, index) => (
                <GalleryItem
                    key={image.id}
                    image={image}
                    index={index}
                    apiUrl={apiUrl}
                    openModal={openModal}
                />
            ))}

            <ImageGalleryModal
                images={gallery}
                initialImageIndex={selectedImageIndex}
                apiUrl={apiUrl}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </>
    )
}