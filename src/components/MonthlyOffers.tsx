import Link from 'next/link'
import { catalogue } from '@/lib/catalogue'
import './monthlyoffers.css'

export default function MonthlyOffers() {
    const formatPrice = (price?: string | number) => {
        if (!price || price === '') return 'Inquire for Price';
        const num = typeof price === 'string' ? Number(price.replace(/,/g, '')) : price;
        if (!isNaN(num)) return `KSh ${num.toLocaleString()}`;
        return `KSh ${price}`;
    }

    // Get products from the Monthly Offers category (these have correct prices extracted)
    const offers = catalogue
        .filter(p => p.category === 'Monthly Offers' && p.images && p.images.length > 0)
        .map(product => ({
            id: product.id,
            name: product.name.replace(/^.*\s-\s/, ''),
            image: product.images[0].url,
            category: product.category,
            price: formatPrice(product.price),
            originalPrice: product.originalPrice,
            offerPrice: product.offerPrice
        }))

    if (offers.length === 0) return null

    return (
        <section className="monthlyoffers-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Monthly Offers</h2>
                    <p className="section-subtitle">Limited time special promotions</p>
                </div>

                <div className="monthlyoffers-grid">
                    {offers.map((item, idx) => (
                        <Link href={`/product/${item.id}`} key={idx} className="offer-card">
                            <div className="offer-badge">SPECIAL</div>
                            <div className="offer-img-wrap">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={item.image} alt={item.name} className="offer-img" loading="lazy" />
                            </div>
                            <div className="offer-info">
                                <span className="offer-category">{item.category}</span>
                                <h3 className="offer-name">{item.name}</h3>
                                <div className="offer-footer">
                                    <div className="offer-prices">
                                        <span className="offer-original-price">KSh {(item.originalPrice ?? 0).toLocaleString()}</span>
                                        <span className="offer-price">KSh {(item.offerPrice ?? 0).toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
