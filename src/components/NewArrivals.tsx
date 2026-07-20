import Link from 'next/link'
import { catalogue, Tool } from '@/lib/catalogue'
import './newarrivals.css'

export default function NewArrivals() {
    // Original flagship products for New Arrivals
    const arrivalIds = [
        'thkthp21426---total-142-pcs-combination-tool-set',
        'cidli20031---ingco-20v-cordless-impact-drill',
        'tac231415---total-185mm-7-inch-tct-saw-blade-40t',
        'ddc-158---dayliff-1hp-booster-pump'
    ]

    const arrivals = arrivalIds.map(id => {
        const product = catalogue.find(p => p.id === id)
        if (!product) return null
        return {
            id: product.id,
            name: product.name.replace(/^.*\s-\s/, ''),
            image: product.images.length > 0 ? product.images[0].url : '/placeholder.jpg',
            category: product.category,
            subcategory: product.subcategory
        }
    }).filter((p): p is any => p !== null)

    // Fallback in case products are missing from catalogue (e.g. sync issue)
    if (arrivals.length === 0) return null

    return (
        <section className="newarrivals-section faded-ruler">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">New Arrivals</h2>
                    <p className="section-subtitle">Recently added to our expanding catalogue</p>
                </div>

                <div className="newarrivals-grid">
                    {arrivals.map((item, idx) => (
                        <Link href={`/product/${item.id}`} key={idx} className="arrival-card">
                            <div className="arrival-badge">NEW</div>
                            <div className="arrival-img-wrap">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={item.image} alt={item.name} className="arrival-img" loading="lazy" />
                            </div>
                            <div className="arrival-info">
                                <span className="arrival-category">{item.category}</span>
                                <h3 className="arrival-name">{item.name}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
