'use client'

import Image from 'next/image'

interface BrandLogosGridProps {
    logos: string[]
}

export default function BrandLogosGrid({ logos }: BrandLogosGridProps) {
    if (logos.length === 0) {
        return null
    }

    return (
        <section className="brand-logos-section">
            <div className="container">
                <h2 className="brand-logos-title">Our Authorized Brands</h2>
                <div className="brand-logos-grid">
                    {logos.map((logo, index) => (
                        <div key={index} className="brand-logo-wrapper">
                            <Image
                                src={logo}
                                alt={`Brand logo ${index + 1}`}
                                width={120}
                                height={60}
                                className="brand-logo"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
