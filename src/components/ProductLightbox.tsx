import { useState, useEffect } from 'react'
import { Product } from '@/lib/parseProducts'
import { X } from 'lucide-react'
import './lightbox.css'

interface ProductLightboxProps {
    product: Product;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProductLightbox({ product, isOpen, onClose }: ProductLightboxProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    if (!mounted || !isOpen) return null

    const mainImage = product.images.length > 0 ? product.images[0].url : '/placeholder.jpg'
    const displayName = product.name.replace(/^.*\s-\s/, '')
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://outofboxtools.com';

    // Parse description if exists
    const specLines = product.description
        ? product.description.split('\n').filter(line => line.trim() !== '')
        : []
    const specsText = specLines.length > 0 ? `\n\nSpecs:\n- ${specLines.join('\n- ')}` : '';

    // Create the WhatsApp message payload
    const waMessage = `Hello Out of Box Tools, I am interested in inquiring about the following tool:\n\nName: ${displayName}\nCategory: ${product.category}\nSubcategory: ${product.subcategory}${specsText}\n\nImage: ${origin}${mainImage}`
    const waUrl = `whatsapp://send?phone=254110264532&text=${encodeURIComponent(waMessage)}`

    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                <button className="lightbox-close" onClick={onClose} aria-label="Close Lightbox">
                    <X size={24} />
                </button>

                <div className="lightbox-grid">
                    <div className="lightbox-image-col">
                        <div className="lightbox-image-container">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={mainImage}
                                alt={product.name}
                                className="lightbox-image"
                            />
                        </div>
                    </div>

                    <div className="lightbox-info-col">
                        <div className="lightbox-header">
                            <span className="lightbox-category">{product.category} &gt; {product.subcategory}</span>
                            <h2 className="lightbox-title">{displayName}</h2>
                        </div>

                        <div className="lightbox-specs-area">
                            {specLines.length > 0 ? (
                                <ul className="lightbox-specs-list">
                                    {specLines.map((line, idx) => (
                                        <li key={idx} className="lightbox-spec-item">{line}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="lightbox-no-desc">No detailed specifications available for this product.</p>
                            )}
                        </div>

                        <div className="lightbox-footer">
                            <a
                                href={waUrl}
                                className="btn btn-primary lightbox-wa-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Inquire via WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
