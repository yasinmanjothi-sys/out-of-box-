import { useState } from 'react'
import { Product } from '@/lib/parseProducts'
import ProductLightbox from './ProductLightbox'
import './productcard.css'

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)

    const mainImage = product.images.length > 0 ? product.images[0].url : '/placeholder.jpg'
    const displayName = product.name.replace(/^.*\s-\s/, '')
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://outofboxtools.com';

    // Parse description if exists for specs
    const specLines = product.description
        ? product.description.split('\n').filter(line => line.trim() !== '')
        : []
    const specsText = specLines.length > 0 ? `\n\nSpecs:\n- ${specLines.join('\n- ')}` : '';

    const formatPrice = (price?: string) => {
        if (!price) return null;
        if (price.toLowerCase().includes('ksh')) return price;
        const num = Number(price.replace(/,/g, ''));
        if (!isNaN(num)) return `KSh ${num.toLocaleString()}`;
        return `KSh ${price}`;
    }
    const displayPrice = formatPrice(product.price);

    // Create the WhatsApp message payload
    const waMessage = `Hello Out of Box Tools, I am interested in inquiring about the following tool:\n\nName: ${displayName}\nCategory: ${product.category}\nSubcategory: ${product.subcategory}${specsText}\n\nImage: ${origin}${mainImage}`
    const waUrl = `https://wa.me/254110264532?text=${encodeURIComponent(waMessage)}`

    const handleCardClick = () => {
        setIsLightboxOpen(true)
    }

    return (
        <>
            <div className="product-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
                <div className="product-image-container">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={mainImage}
                        alt={product.name}
                        className="product-image"
                        loading="lazy"
                    />
                </div>

                <div className="product-details">
                    <h3 className="product-name">{displayName}</h3>
                    {displayPrice && (
                        <p className="product-price">{displayPrice}</p>
                    )}

                    <div className="product-actions" onClick={e => e.stopPropagation()}>
                        <a
                            href={waUrl}
                            className="btn btn-primary whatsapp-inquire-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Inquire via WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            <ProductLightbox
                product={product}
                isOpen={isLightboxOpen}
                onClose={() => setIsLightboxOpen(false)}
            />
        </>
    )
}
