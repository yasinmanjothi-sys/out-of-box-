import Link from 'next/link'
import { getProducts } from '@/lib/parseProducts'
import './newarrivals.css'

export default function NewArrivals() {
    const categories = getProducts()

    // Pick products from different categories to simulate "new arrivals"
    const arrivals: { name: string; image: string; category: string; subcategory: string }[] = []
    const sources = ['Insulated Tools', 'Consumables', 'Pneumatic (Air Compressor) Tools', 'Gasoline (Petrol) Machinery and Tools']

    for (const cat of categories) {
        if (sources.includes(cat.name)) {
            for (const sub of cat.subcategories) {
                for (const prod of sub.products) {
                    if (prod.images.length > 0 && arrivals.length < 4) {
                        arrivals.push({
                            name: prod.name.replace(/^.*\s-\s/, ''),
                            image: prod.images[0].url,
                            category: prod.category,
                            subcategory: prod.subcategory
                        })
                        break
                    }
                }
                if (arrivals.length >= 4) break
            }
        }
    }

    return (
        <section className="newarrivals-section faded-ruler">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">New Arrivals</h2>
                    <p className="section-subtitle">Recently added to our expanding catalogue</p>
                </div>

                <div className="newarrivals-grid">
                    {arrivals.map((item, idx) => (
                        <Link href="/catalogue" key={idx} className="arrival-card">
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
