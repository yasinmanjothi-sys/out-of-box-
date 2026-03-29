"use client"

import Link from 'next/link'
import { catalogue } from '@/lib/catalogue'
import ProductCard from './ProductCard'
import { useState } from 'react'
import ProductLightbox from './ProductLightbox'
import './bestsellers.css'

export default function BestSellers() {
    const [selectedProduct, setSelectedProduct] = useState<any>(null)
    
    // Filter bestsellers from catalogue
    let featured = catalogue.filter(p => p.isBestseller)

    // Fallback if no bestsellers are flagged yet
    if (featured.length === 0) {
        const targetCategories = ['Power Tools', 'Hand Tools', 'Measuring Tools', 'Safety Equipment (PPEs)', 'Accessories', 'Tool Sets (Tool Boxes)']
        for (const targetCat of targetCategories) {
            const prod = catalogue.find(p => p.category === targetCat && p.images.length > 0)
            if (prod && featured.length < 6) {
                featured.push(prod)
            }
        }
    }

    return (
        <section className="bestsellers-section faded-ruler">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Best Sellers</h2>
                    <p className="section-subtitle">Our most popular tools trusted by professionals</p>
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
                    <Link href="/catalogue" className="btn btn-primary">View Full Catalogue</Link>
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
