'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface OfferPostsCarouselProps {
    images: string[]
}

export default function OfferPostsCarousel({ images }: OfferPostsCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    return (
        <section className="offer-posts-section">
            <div className="container">
                <h2 className="offer-posts-title">Special Offers</h2>
                <div className="offer-carousel">
                    {images.length > 1 && (
                        <button className="carousel-btn carousel-btn-prev" onClick={goToPrevious}>
                            <ChevronLeft size={24} />
                        </button>
                    )}

                    <div className="offer-image-wrapper">
                        <Image
                            src={images[currentIndex]}
                            alt={`Offer ${currentIndex + 1}`}
                            fill
                            className="offer-image"
                            priority
                        />
                    </div>

                    {images.length > 1 && (
                        <button className="carousel-btn carousel-btn-next" onClick={goToNext}>
                            <ChevronRight size={24} />
                        </button>
                    )}
                </div>

                {images.length > 1 && (
                    <div className="carousel-dots">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
