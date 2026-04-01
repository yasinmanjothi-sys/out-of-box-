import Link from 'next/link'
import { useState } from 'react'
import { Tool } from '@/lib/catalogue'
import { trackWhatsAppInquiry } from '@/lib/analytics'
import './productcard.css'

interface ProductCardProps {
    product: Tool;
    onOpenProduct: (product: Tool) => void;
}

export default function ProductCard({ product, onOpenProduct }: ProductCardProps) {
    const mainImage = product.images.length > 0 ? product.images[0].url : '/placeholder.jpg'
    const displayName = product.name.replace(/^.*\s-\s/, '')
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://outofboxtools.com';

    // Parse description if exists for specs
    const specLines = product.description
        ? product.description.split('\n').filter(line => line.trim() !== '')
        : []
    const specsText = specLines.length > 0 ? `\n\nSpecs:\n- ${specLines.join('\n- ')}` : '';

    const formatPrice = (price?: string | number) => {
        if (!price) return null;
        if (typeof price === 'string' && price.toLowerCase().includes('ksh')) return price;
        const num = typeof price === 'string' ? Number(price.replace(/,/g, '')) : price;
        if (!isNaN(num)) return `KSh ${num.toLocaleString()}`;
        return `KSh ${price}`;
    }

    const displayPrice = product.isOnOffer 
        ? formatPrice(product.offerPrice) 
        : formatPrice(product.price);
    
    const originalPriceFormatted = product.isOnOffer ? formatPrice(product.originalPrice || product.price) : null;

    // Create the WhatsApp message payload matching the audit recommendation
    const waMessage = `Hello Out of Box Tools, I'm interested in ${displayName} (SKU: ${product.id}).\n\nCould you please confirm if it's in stock and the price is ${displayPrice || 'as quoted'}?\n\nImage: ${origin}${mainImage}`
    const waUrl = `https://wa.me/254110264532?text=${encodeURIComponent(waMessage)}`

    return (
        <div className="product-card" style={{ position: 'relative' }}>
            {product.isBestseller && (
                <div className="bestseller-ribbon">Bestseller</div>
            )}
            {product.isOnOffer && (
                <div className="offer-badge">Offer</div>
            ) }

            <Link href={`/product/${product.id}`} className="product-image-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={mainImage}
                    alt={`${displayName} – Ref: ${product.id}`}
                    className="product-image"
                    loading="lazy"
                />
            </Link>

            <div className="product-details">
                <Link href={`/product/${product.id}`}>
                    <h3 className="product-name">{displayName}</h3>
                </Link>
                
                <div className="price-container">
                    {product.isOnOffer && originalPriceFormatted && (
                        <span className="original-price">{originalPriceFormatted}</span>
                    )}
                    {displayPrice && (
                        <p className={`product-price ${product.isOnOffer ? 'on-offer' : ''}`}>
                            {displayPrice}
                        </p>
                    )}
                </div>

                <div className="product-actions" onClick={e => e.stopPropagation()}>
                    <a
                        href={waUrl}
                        className="btn btn-primary whatsapp-inquire-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackWhatsAppInquiry(displayName)}
                    >
                        Inquire via WhatsApp
                    </a>
                </div>
            </div>
        </div>
    )
}
