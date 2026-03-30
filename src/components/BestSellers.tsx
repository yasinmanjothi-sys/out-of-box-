import Link from 'next/link'
import { catalogue } from '@/lib/catalogue'
import './bestsellers.css'

export default function BestSellers() {
    // Pick 4 products that have at least one image
    const bestSellers = catalogue
        .filter(p => p.images && p.images.length > 0)
        .slice(0, 4)
        .map(product => ({
            id: product.id,
            name: product.name.replace(/^.*\s-\s/, ''),
            image: product.images[0].url,
            category: product.category,
            price: product.price || 'Inquire for Price'
        }))

    if (bestSellers.length === 0) return null

    return (
        <section className="bestsellers-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Best Sellers</h2>
                    <p className="section-subtitle">Our most popular professional tools and equipment</p>
                </div>

                <div className="bestsellers-grid">
                    {bestSellers.map((item, idx) => (
                        <Link href={`/catalogue?search=${encodeURIComponent(item.name)}`} key={idx} className="bestseller-card">
                            <div className="bestseller-badge">HOT</div>
                            <div className="bestseller-img-wrap">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={item.image} alt={item.name} className="bestseller-img" loading="lazy" />
                            </div>
                            <div className="bestseller-info">
                                <span className="bestseller-category">{item.category}</span>
                                <h3 className="bestseller-name">{item.name}</h3>
                                <div className="bestseller-footer">
                                    <span className="bestseller-price">{item.price}</span>
                                    <span className="view-link">View Details</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
