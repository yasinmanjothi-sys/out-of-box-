"use client"

import Link from 'next/link'
import { catalogue } from '@/lib/catalogue'
import ProductCard from './ProductCard'
import { useState } from 'react'
import ProductLightbox from './ProductLightbox'
import './bestsellers.css' // Reuse bestsellers grid styling

export default function CurrentOffers() {
    const [selectedProduct, setSelectedProduct] = useState<any>(null)
    
    // Filter tools on offer
    const featured = catalogue.filter(p => p.isOnOffer)

    if (featured.length === 0) return null;

    return (
        <section className="bestsellers-section faded-ruler" style={{ backgroundColor: '#fff5f2' }}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title" style={{ color: '#FF5722' }}>Current Offers</h2>
                    <p className="section-subtitle">Grab these professional tools at unbeatable prices</p>
                </div>

                <div className="bestsellers-grid">
                    {featured.slice(0, 8).map((product) => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                            onOpenProduct={setSelectedProduct}
                        />
                    ))}
                </div>

                <div className="bestsellers-cta">
                    <Link href="/catalogue" className="btn btn-primary" style={{ backgroundColor: '#FF5722', borderColor: '#FF5722' }}>
                        View All Offers
                    </Link>
                </div>
            </div>

            {selectedProduct && (
                <ProductLightbox 
                    product={selectedProduct} 
                    isOpen={!!selectedProduct} 
                    onClose={() => setSelectedProduct(null)} 
                />
            )}
        </section>
    )
}
