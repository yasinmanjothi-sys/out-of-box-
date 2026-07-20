import Link from 'next/link'
import { catalogue } from '@/lib/catalogue'
import './bestsellers.css'

export default function BestSellers() {
    const formatPrice = (price?: string | number) => {
        if (!price || price === '') return 'Inquire for Price';
        const num = typeof price === 'string' ? Number(price.replace(/,/g, '')) : price;
        if (!isNaN(num)) return `KSh ${num.toLocaleString()}`;
        return `KSh ${price}`;
    }

    // Get products marked as best sellers, or fall back to first 3 products with images
    let bestSellers = catalogue
        .filter(p => p.isBestseller && p.images && p.images.length > 0)
        .map(product => ({
            id: product.id,
            name: product.name.replace(/^.*\s-\s/, ''),
            image: product.images[0].url,
            category: product.category,
            price: formatPrice(product.price)
        }))

    // If no explicitly marked best sellers, fall back to first 3 products with images
    if (bestSellers.length === 0) {
        bestSellers = catalogue
            .filter(p => p.images && p.images.length > 0)
            .slice(0, 3)
            .map(product => ({
                id: product.id,
                name: product.name.replace(/^.*\s-\s/, ''),
                image: product.images[0].url,
                category: product.category,
                price: formatPrice(product.price)
            }))
    }

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
                        <Link href={`/product/${item.id}`} key={idx} className="bestseller-card">
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
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
